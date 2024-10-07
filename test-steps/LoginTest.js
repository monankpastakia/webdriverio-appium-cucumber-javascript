import Logger from "../logger/Logger";
import BaseTest from "./BaseTest";
import { Then, When } from "@wdio/cucumber-framework";
import Expect from "../utils/Expect";

/**
 * LoginTest class to define all the login page related test steps
 * It extends the BaseTest class to use the POM page objects, and common steps if needed
 *
 * @class LoginTest
 * @typedef {LoginTest}
 * @extends {BaseTest}
 */
class LoginTest extends BaseTest {
  /**
   * Creates an instance of LoginTest.
   *
   * @constructor
   */
  constructor() {
    super();
    this.logger = new Logger(`LoginTest.js`);
  }

  /** Login page test steps */
  defineLoginSteps() {
    Then(/^Verify user is on the login page$/, async () => {
      await this.#verifyLoginPage();
    });
    When(/^User logs in with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
      await this.#login(username, password);
    });
  }

  /**
   * Verify login page
   *
   * @async
   */
  async #verifyLoginPage() {
    try {
      this.logger.info(`Verify user is on the login page`, `verifyLoginPage`);
      const isOpened = await this.loginPage.isOpened();
      await Expect.verifyValuesEqual(isOpened, true);
    } catch (error) {
      this.logger.error(`Error occurred while verifying Login Page. \nError: ${error}`, `verifyLoginPage`);
    }
  }

  /**
   * Perform login
   *
   * @async
   * @param {String} username username to enter
   * @param {String} password password to enter
   */
  async #login(username, password) {
    try {
      this.logger.info(`User logs in with username ${username} and password ${password}`, `login`);
      await this.loginPage.login(username, password);
    } catch (error) {
      this.logger.error(`Error occurred while logging in. \nError: ${error}`, `login`);
    }
  }
}
export default LoginTest;
