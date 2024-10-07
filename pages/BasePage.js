import GlobalVariables from "../utils/GlobalVariables";
import StringReader from "../utils/StringReader";
import Logger from "../logger/Logger";
import Utilities from "../utils/Utilities";
import MobileElement from "../element/MobileElement";

/**
 * BasePage class is used to get the locale and platform of the user and to get the locale strings for the page
 *
 * @class BasePage
 * @typedef {BasePage}
 */
class BasePage {
  /**
   * Creates an instance of BasePage.
   *
   * @constructor
   */
  constructor() {
    this.logger = new Logger(`BasePage.js`);
    this.locale = GlobalVariables.getLocale();
    this.platform = GlobalVariables.getPlatform();
    this.localeStrings = new StringReader();
  }
  /**
   * To get locale strings object
   *
   * @returns {*}
   */
  getLocaleStrings() {
    return this.localeStrings;
  }

  /**
   * To get the platform of the testing app
   *
   * @returns {*}
   */
  getPlatform() {
    return this.platform;
  }

  /**
   * To get locale of the testing app
   *
   * @returns {*}
   */
  getLocale() {
    return this.locale;
  }

  /**
   * Get the MobileElement of the provided locator
   *
   * @param {String} locatorName locator name to retrieve object
   * @param {String} methodName method name which calling this function
   * @param {LocatorReader} locatorReader locator reader class object
   * @returns @see {MobileElement} MobileElement or null
   */
  getMobileElement(locatorName, methodName, locatorReader) {
    let selector;
    try {
      this.logger.info(`Getting ${locatorName}`, `${methodName}`);
      selector = locatorReader.getLocator(locatorName);
      return Utilities.isUndefined(selector) ? null : new MobileElement(selector);
    } catch (error) {
      this.logger.error(`Error occurred while getting ${methodName} for selector: ${selector} \nError: ${error}`, `${methodName}`);
    }
  }
}
export default BasePage;
