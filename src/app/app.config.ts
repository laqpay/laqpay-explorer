/**
 * General configuration file.
 */


/**
 * Names to identify the coins and hours in case it is not possible to obtain the values
 * from the node.
 */
export const CoinIdentifiers = {
  fullName: 'LaQ Pay',
  coinName: 'LAQ',
  HoursName: 'LAQH',
  HoursNameSingular: 'LAQH',
};

/**
 * Configuration for the QR codes.
 */
export const QrConfig = {
  /**
   * Prefix that will be added to the addresses in the QR codes, to identify what coin the address
   * is for. Corresponds to the BIP-21 specification.
   */
  prefix: 'laqpay:',
};

/**
 * Configuration for the generic header. Read the customization docs for more info.
 */
export const HeaderConfig = {
  // Set to true for using the generic header, instead of the Laqpay one.
  useGenericHeader: false,
  genericHeaderUrl: 'https://explorer.laqpay.com/',
};

/**
 * Configuration for the generic footer. Read the customization docs for more info.
 */
export const FooterConfig = {
  // Set to true for using the generic footer, instead of the Laqpay one.
  useGenericFooter: false,
  contactLinks: [
    {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-github"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-telegram"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-twitter"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-youtube"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-discord"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-instagram"></i>',
    } , {
      url: 'https://www.laqpay.com/',
      content: '<i class="fab fa-reddit"></i>',
    }
  ],
};

/**
 * Laguage configuration.
 */
export const languageConfig = {
  /**
   * List of available languages. See the documentation in the assets/i18n folder and the
   * LanguageData class (inside the LanguageService file) for more information.
   */
  languages: [{
      code: 'en',
      name: 'English',
      iconName: 'en.png'
    },
    {
      code: 'es',
      name: 'Español',
      iconName: 'es.png'
    },
    {
      code: 'zh',
      name: '中文',
      iconName: 'zh.png'
    }
  ],
  /**
   * Code of the default language.
   */
  defaultLanguage: 'en'
};
