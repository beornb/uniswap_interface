import { SwapFlow, SwapFlowProps } from 'uniswap/src/features/transactions/swap/SwapFlow'
import { SwapFormContextProvider } from 'uniswap/src/features/transactions/swap/contexts/SwapFormContext'
import { ProtocolPreference } from 'uniswap/src/features/transactions/swap/settings/configs/ProtocolPreference'
import { Slippage } from 'uniswap/src/features/transactions/swap/settings/configs/Slippage'
import { SwapSettingsContextProvider } from 'uniswap/src/features/transactions/swap/settings/contexts/SwapSettingsContext'
import { useSwapCallback } from 'wallet/src/features/transactions/swap/hooks/useSwapCallback'
import { useWrapCallback } from 'wallet/src/features/transactions/swap/hooks/useWrapCallback'
import { SwapProtection } from 'wallet/src/features/transactions/swap/settings/SwapProtection'

type WalletSwapFlowProps = Omit<SwapFlowProps, 'settings' | 'swapCallback' | 'wrapCallback'> & {
  onSubmitSwap?: () => Promise<void>
}

export function WalletSwapFlow({ onSubmitSwap, ...props }: WalletSwapFlowProps): JSX.Element {
  const swapCallback = useSwapCallback()
  const wrapCallback = useWrapCallback()

  return (
    <SwapSettingsContextProvider>
      <SwapFormContextProvider
        prefilledState={props.prefilledState}
        hideSettings={props.hideHeader}
        hideFooter={props.hideFooter}
      >
        <SwapFlow
          {...props}
          settings={[Slippage, SwapProtection, ProtocolPreference]}
          swapCallback={swapCallback}
          wrapCallback={wrapCallback}
          onSubmitSwap={onSubmitSwap}
        />
      </SwapFormContextProvider>
    </SwapSettingsContextProvider>
  )
}
