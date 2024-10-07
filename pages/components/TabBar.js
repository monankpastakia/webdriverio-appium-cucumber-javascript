import { config } from "../../wdio.conf";
import Logger from "../../logger/Logger";
import LocatorReader from "../../utils/LocatorReader";
import BaseComponent from "./BaseComponent";

/**
 * TabBar class is used to define the locators and methods of the tab bar which contains the application menu
 * It extends BaseComponent class to get the locale and platform of the user and get the locale strings for the page
 *
 * @class TabBar
 * @typedef {TabBar}
 * @extends {BaseComponent}
 */
class TabBar extends BaseComponent {
  /**
   * Creates an instance of TabBar.
   *
   * @constructor
   */
  constructor() {
    super();
    this.logger = new Logger(`TabBar.js`);
    this.locatorReader = new LocatorReader(`tabBar`, this.getPlatform());
  }

  /**
   * To get Container object
   *
   * @returns {MobileElement}
   */
  #getContainer() {
    return this.getMobileElement(`container`, `getContainer`, this.locatorReader);
  }

  /**
   * Check if Tab Bar is displayed
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @returns @see {boolean} true if displayed, otherwise false
   */
  async isDisplayed(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`Checking if tab bar is displayed`, `isDisplayed`);
      return await this.#getContainer().waitForDisplayed(timeout);
    } catch (error) {
      this.logger.error(`Error occurred while checking if tab bar is displayed \nError: ${error}`, `isDisplayed`);
      return false;
    }
  }
}
export default TabBar;
