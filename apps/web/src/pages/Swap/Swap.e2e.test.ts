import { expect, test } from 'playwright/fixtures'
import { TEST_WALLET_ADDRESS } from 'playwright/fixtures/anvil'
import { USDC_MAINNET } from 'uniswap/src/constants/tokens'
import { assume0xAddress } from 'utils/wagmi'
import { parseEther } from 'viem'

// 100 * 10^6
const ONE_HUNDRED_USDC = 100_000_000n

test('should load balances', async ({ page, anvil }) => {
  await page.goto('/swap')
  const ethBalance = await anvil.getBalance({
    address: TEST_WALLET_ADDRESS,
  })
  await expect(ethBalance).toBe(parseEther('10000'))
  await expect(page.getByText('10,000.00 ETH')).toBeVisible()
})

test('should load erc20 balances', async ({ page, anvil }) => {
  await page.goto(`/swap?outputCurrency=${USDC_MAINNET.address}`)
  await anvil.setErc20Balance(assume0xAddress(USDC_MAINNET.address), ONE_HUNDRED_USDC)

  const usdcBalance = await anvil.getErc20Balance(assume0xAddress(USDC_MAINNET.address))

  await expect(usdcBalance).toBe(ONE_HUNDRED_USDC)
  await expect(page.getByText('100.00 USDC')).toBeVisible()
})

test('should swap ETH to USDC', async ({ page, anvil }) => {
  await page.route('https://trading-api-labs.interface.gateway.uniswap.org/v1/swap', async (route) => {
    const request = route.request()
    const postData = request.postDataJSON()

    // Modify the request to set simulateTransaction to false
    // because we can't actually simulate the transaction or it will fail
    const modifiedData = {
      ...postData,
      simulateTransaction: false,
    }

    await route.continue({
      postData: JSON.stringify(modifiedData),
    })
  })

  await page.goto('/swap')

  await page.act({
    action: 'Click on "Select token"',
  })
  await page.act({
    action: 'Click on "USDC"',
  })
  await page.act({
    action: 'Enter "0.1" ETH',
  })
  await page.act({
    action: 'Review the Swap',
  })
  await page.act({
    action: 'Confirm the Swap',
  })

  await anvil.mine({
    blocks: 1,
  })

  const ethBalance = await anvil.getBalance({
    address: TEST_WALLET_ADDRESS,
  })

  expect(ethBalance).toBeLessThan(parseEther('9999.90'))
})
