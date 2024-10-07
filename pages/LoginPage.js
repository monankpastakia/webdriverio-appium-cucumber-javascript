import Logger from "../logger/Logger";
import BasePage from "./BasePage";
import LocatorReader from "../utils/LocatorReader";
import Utilities from "../utils/Utilities";
import { config } from "../wdio.conf";

/**
 * LoginPage class is used to define the locators and method of the login page
 * It extends BasePage class to get the locale and platform of the user and get the locale strings for the page
 *
 * @class LoginPage
 * @typedef {LoginPage}
 * @extends {BasePage}
 */
class LoginPage extends BasePage {
  /**
   * Creates an instance of LoginPage.
   *
   * @constructor
   */
  constructor() {
    super();
    this.logger = new Logger(`LoginPage.js`);
    this.locatorReader = new LocatorReader(`loginPage`, this.getPlatform());
  }

  /**
   * Get logo element
   *
   * @returns {MobileElement}
   */
  #getLogo() {
    return this.getMobileElement(`logo`, `getLogo`, this.locatorReader);
  }
  /**
   * Get username element
   *
   * @returns {MobileElement}
   */
  #getUsername() {
    return this.getMobileElement(`username`, `getUsername`, this.locatorReader);
  }
  /**
   * Get password element
   *
   * @returns {MobileElement}
   */
  #getPassword() {
    return this.getMobileElement(`password`, `getPassword`, this.locatorReader);
  }
  /**
   * Get login button element
   *
   * @returns {MobileElement}
   */
  #getLoginButton() {
    return this.getMobileElement(`loginButton`, `getLoginButton`, this.locatorReader);
  }

  /**
   * Check if login page is opened
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @returns @see {boolean} true if opened, otherwise false
   */
  async isOpened(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`Checking if login page is opened`, `isOpened`);
      return (await this.#getLogo().waitForDisplayed(timeout)) && (await this.#getUsername().waitForDisplayed(timeout)) && (await this.#getPassword().waitForDisplayed(timeout)) && (await this.#getLoginButton().waitForDisplayed(timeout));
    } catch (error) {
      this.logger.error(`Error occurred while checking if login page is opened \nError: ${error}`, `isOpened`);
      return false;
    }
  }

  /**
   * Enter/Type username in the username element
   *
   * @async
   * @param {String} username username to type
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async enterUsername(username, timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`Entering username: ${username}`, `enterUsername`);
      if (Utilities.isUndefined(username) || Utilities.isEmpty(username)) {
        this.logger.error(`Username is empty or undefined`, `enterUsername`);
        return;
      }
      await this.#getUsername().setValue(username, timeout, pause);
    } catch (error) {
      this.logger.error(`Error occurred while entering username: ${username} \nError: ${error}`, `enterUsername`);
    }
  }
  /**
   * Enter/Type password in the password element
   *
   * @async
   * @param {String} password username to type
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async enterPassword(password, timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`Entering password: ${password}`, `enterPassword`);
      if (Utilities.isUndefined(password) || Utilities.isEmpty(password)) {
        this.logger.error(`Password is empty or undefined`, `enterPassword`);
        return;
      }
      await this.#getPassword().setValue(password, timeout, pause);
    } catch (error) {
      this.logger.error(`Error occurred while entering password: ${password} \nError: ${error}`, `enterPassword`);
    }
  }
  /**
   * Click Login button
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async clickLoginButton(timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`Clicking login button`, `clickLoginButton`);
      await this.#getLoginButton().click(timeout, pause);
    } catch (error) {
      this.logger.error(`Error occurred while clicking login button \nError: ${error}`, `click`);
    }
  }

  /**
   * Enter username, and password to respective element, and click login button to perform login
   *
   * @async
   * @param {String} username username to type
   * @param {String} password username to type
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for object
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async login(username, password, timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`Logging in with username: ${username} and password: ${password}`, `login`);
      await this.enterUsername(username, timeout, pause);
      await this.enterPassword(password, timeout, pause);
      await this.clickLoginButton(timeout, pause);
    } catch (error) {
      this.logger.error(`Error occurred while logging in with username: ${username} and password: ${password} \nError: ${error}`, `login`);
    }
  }
}
export default LoginPage;
