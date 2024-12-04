import { isInterface } from 'utilities/src/platform'

/**
 * List of supported languages in app, represented by ISO 639 language code.
 * If you add a new locale here, be sure to add polyfills for it in intl.js,
 * resource strings in i18n.ts, and supported localizations in the Uniswap Xcode project.
 */
export enum Language {
  Afrikaans = 'af',
  Arabic = 'ar',
  Catalan = 'ca-ES',
  ChineseSimplified = 'zh', // Defaulting overarching Chinese language code to Simplified
  ChineseTraditional = 'zh-Hant',
  Czech = 'cs',
  Danish = 'da',
  Dutch = 'nl',
  English = 'en',
  Finnish = 'fi',
  French = 'fr',
  Greek = 'el',
  Hebrew = 'he',
  Hindi = 'hi',
  Hungarian = 'hu',
  Indonesian = 'id',
  Italian = 'it',
  Japanese = 'ja',
  Korean = 'ko',
  Malay = 'ms',
  Norwegian = 'no',
  Polish = 'pl',
  Portuguese = 'pt',
  Romanian = 'ro',
  Russian = 'ru',
  Serbian = 'sr',
  SpanishSpain = 'es',
  SpanishLatam = 'es-419',
  SpanishUnitedStates = 'es-US',
  Swahili = 'sw',
  Swedish = 'sv',
  Turkish = 'tr',
  Ukrainian = 'uk',
  Urdu = 'ur',
  Vietnamese = 'vi',
}

export const WALLET_SUPPORTED_LANGUAGES: Language[] = [
  Language.English,
  Language.ChineseSimplified,
  Language.ChineseTraditional,
  Language.French,
  Language.Japanese,
  Language.Portuguese,
  Language.SpanishSpain,
  Language.SpanishLatam,
  Language.SpanishUnitedStates,
]

// Web's supported Languages
// order as they appear in the language dropdown
export const WEB_SUPPORTED_LANGUAGES: Language[] = [
  Language.English,
  Language.Afrikaans,
  Language.Arabic,
  Language.Catalan,
  Language.ChineseSimplified,
  Language.ChineseTraditional,
  Language.Danish,
  Language.Dutch,
  Language.Finnish,
  Language.French,
  Language.Greek,
  Language.Hebrew,
  Language.Hindi,
  Language.Hungarian,
  Language.Indonesian,
  Language.Italian,
  Language.Japanese,
  Language.Korean,
  Language.Malay,
  Language.Polish,
  Language.Portuguese,
  Language.Russian,
  Language.Serbian,
  Language.SpanishSpain,
  Language.SpanishLatam,
  Language.SpanishUnitedStates,
  Language.Swahili,
  Language.Swedish,
  Language.Turkish,
  Language.Ukrainian,
  Language.Urdu,
  Language.Vietnamese,
]

export const PLATFORM_SUPPORTED_LANGUAGES = isInterface ? WEB_SUPPORTED_LANGUAGES : WALLET_SUPPORTED_LANGUAGES

/**
 * External mapping to be used with system locale strings trying to resolve to specific language
 * Included different Spanish variations availabled on Android/iOS as of 11/17/23
 */
export const mapDeviceLanguageToLanguage: Record<string, Language> = {
  'es-AR': Language.SpanishLatam,
  'es-BO': Language.SpanishLatam,
  'es-BZ': Language.SpanishLatam,
  'es-BR': Language.SpanishLatam,
  'es-CL': Language.SpanishLatam,
  'es-CO': Language.SpanishLatam,
  'es-CR': Language.SpanishLatam,
  'es-CU': Language.SpanishLatam,
  'es-DO': Language.SpanishLatam,
  'es-EC': Language.SpanishLatam,
  'es-SV': Language.SpanishLatam,
  'es-GT': Language.SpanishLatam,
  'es-GQ': Language.SpanishLatam, // Equatorial Guinea is an African country but format is closer to LATAM
  'es-HN': Language.SpanishLatam,
  'es-MX': Language.SpanishLatam,
  'es-NI': Language.SpanishLatam,
  'es-PA': Language.SpanishLatam,
  'es-PY': Language.SpanishLatam,
  'es-PE': Language.SpanishLatam,
  'es-PR': Language.SpanishUnitedStates,
  'es-UY': Language.SpanishLatam,
  'es-VE': Language.SpanishLatam,
}

/**
 * List of supported locales in app, comprised of two letter language code (ISO 639) combined with two letter country code (ISO 3166).
 * Matches to locale codes for languages provided by Crowdin
 */
export enum Locale {
  Afrikaans = 'af-ZA',
  ArabicSaudi = 'ar-SA',
  Catalan = 'ca-ES',
  ChineseSimplified = 'zh-Hans',
  ChineseTraditional = 'zh-Hant',
  CzechCzechia = 'cs-CZ',
  DanishDenmark = 'da-DK',
  DutchNetherlands = 'nl-NL',
  EnglishUnitedStates = 'en-US',
  FinnishFinland = 'fi-FI',
  FrenchFrance = 'fr-FR',
  GreekGreece = 'el-GR',
  HebrewIsrael = 'he-IL',
  HindiIndia = 'hi-IN',
  HungarianHungarian = 'hu-HU',
  IndonesianIndonesia = 'id-ID',
  ItalianItaly = 'it-IT',
  JapaneseJapan = 'ja-JP',
  KoreanKorea = 'ko-KR',
  MalayMalaysia = 'ms-MY',
  NorwegianNorway = 'no-NO',
  PolishPoland = 'pl-PL',
  PortugueseBrazil = 'pt-BR',
  PortuguesePortugal = 'pt-PT',
  RomanianRomania = 'ro-RO',
  RussianRussia = 'ru-RU',
  Serbian = 'sr-SP',
  SpanishSpain = 'es-ES',
  SpanishLatam = 'es-419',
  SpanishUnitedStates = 'es-US',
  SwahiliTanzania = 'sw-TZ',
  SwedishSweden = 'sv-SE',
  TurkishTurkey = 'tr-TR',
  UkrainianUkraine = 'uk-UA',
  UrduPakistan = 'ur-PK',
  VietnameseVietnam = 'vi-VN',
}

export const DEFAULT_LOCALE: Locale = Locale.EnglishUnitedStates

/**
 * Internal app mapping between language and locale enums
 * This is needed because we not support all locales and default languages to specific locales
 */
export const mapLanguageToLocale: Record<Language, Locale> = {
  [Language.Afrikaans]: Locale.Afrikaans,
  [Language.Arabic]: Locale.ArabicSaudi,
  [Language.Catalan]: Locale.Catalan,
  [Language.ChineseSimplified]: Locale.ChineseSimplified,
  [Language.ChineseTraditional]: Locale.ChineseTraditional,
  [Language.Czech]: Locale.CzechCzechia,
  [Language.Danish]: Locale.DanishDenmark,
  [Language.Dutch]: Locale.DutchNetherlands,
  [Language.English]: Locale.EnglishUnitedStates,
  [Language.Finnish]: Locale.FinnishFinland,
  [Language.French]: Locale.FrenchFrance,
  [Language.Greek]: Locale.GreekGreece,
  [Language.Hebrew]: Locale.HebrewIsrael,
  [Language.Hindi]: Locale.HindiIndia,
  [Language.Hungarian]: Locale.HungarianHungarian,
  [Language.Indonesian]: Locale.IndonesianIndonesia,
  [Language.Italian]: Locale.ItalianItaly,
  [Language.Japanese]: Locale.JapaneseJapan,
  [Language.Korean]: Locale.KoreanKorea,
  [Language.Malay]: Locale.MalayMalaysia,
  [Language.Norwegian]: Locale.NorwegianNorway,
  [Language.Polish]: Locale.PolishPoland,
  [Language.Portuguese]: Locale.PortuguesePortugal,
  [Language.Romanian]: Locale.RomanianRomania,
  [Language.Russian]: Locale.RussianRussia,
  [Language.SpanishSpain]: Locale.SpanishSpain,
  [Language.SpanishLatam]: Locale.SpanishLatam,
  [Language.SpanishUnitedStates]: Locale.SpanishUnitedStates,
  [Language.Serbian]: Locale.Serbian,
  [Language.Swahili]: Locale.SwahiliTanzania,
  [Language.Swedish]: Locale.SwedishSweden,
  [Language.Turkish]: Locale.TurkishTurkey,
  [Language.Ukrainian]: Locale.UkrainianUkraine,
  [Language.Urdu]: Locale.UrduPakistan,
  [Language.Vietnamese]: Locale.VietnameseVietnam,
}

/**
 * Internal app mapping between language and locale enums
 * This is needed because we not support all locales and default languages to specific locales
 */
export const mapLocaleToLanguage: Record<Locale, Language> = {
  [Locale.Afrikaans]: Language.Afrikaans,
  [Locale.ArabicSaudi]: Language.Arabic,
  [Locale.Catalan]: Language.Catalan,
  [Locale.ChineseSimplified]: Language.ChineseSimplified,
  [Locale.ChineseTraditional]: Language.ChineseTraditional,
  [Locale.CzechCzechia]: Language.Czech,
  [Locale.DanishDenmark]: Language.Danish,
  [Locale.DutchNetherlands]: Language.Dutch,
  [Locale.EnglishUnitedStates]: Language.English,
  [Locale.FinnishFinland]: Language.Finnish,
  [Locale.FrenchFrance]: Language.French,
  [Locale.GreekGreece]: Language.Greek,
  [Locale.HebrewIsrael]: Language.Hebrew,
  [Locale.HindiIndia]: Language.Hindi,
  [Locale.HungarianHungarian]: Language.Hungarian,
  [Locale.IndonesianIndonesia]: Language.Indonesian,
  [Locale.ItalianItaly]: Language.Italian,
  [Locale.JapaneseJapan]: Language.Japanese,
  [Locale.KoreanKorea]: Language.Korean,
  [Locale.MalayMalaysia]: Language.Malay,
  [Locale.NorwegianNorway]: Language.Norwegian,
  [Locale.PolishPoland]: Language.Polish,
  [Locale.PortugueseBrazil]: Language.Portuguese,
  [Locale.PortuguesePortugal]: Language.Portuguese,
  [Locale.RomanianRomania]: Language.Romanian,
  [Locale.RussianRussia]: Language.Russian,
  [Locale.Serbian]: Language.Serbian,
  [Locale.SpanishSpain]: Language.SpanishSpain,
  [Locale.SpanishLatam]: Language.SpanishLatam,
  [Locale.SpanishUnitedStates]: Language.SpanishUnitedStates,
  [Locale.SwahiliTanzania]: Language.Swahili,
  [Locale.SwedishSweden]: Language.Swedish,
  [Locale.TurkishTurkey]: Language.Turkish,
  [Locale.UkrainianUkraine]: Language.Ukrainian,
  [Locale.UrduPakistan]: Language.Urdu,
  [Locale.VietnameseVietnam]: Language.Vietnamese,
}
