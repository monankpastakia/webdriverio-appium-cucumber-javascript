import Logger from "../logger/Logger";
import LoginPage from "../pages/LoginPage";
import BasePage from "../pages/BasePage";
import { Given } from "@wdio/cucumber-framework";

/**
 * BaseTest class to initialize the POM page objects, and contains all common test steps of feature files
 *
 * @class BaseTest
 * @typedef {BaseTest}
 */
class BaseTest {
  /**
   * Creates an instance of BaseTest.
   *
   * @constructor
   */
  constructor() {
    this.logger = new Logger(`BaseTest`);
    this.initPages();
  }

  /** Initialize all POM page objects */
  initPages() {
    this.loginPage = new LoginPage();
    this.basePage = new BasePage();
  }

  /** Common steps for feature files */
  defineBaseSteps() {
    Given(/^The app is launched$/, async () => {
      await this.#launchApp();
    });
  }

  /**
   * Launch the app
   *
   * @async
   */
  async #launchApp() {
    this.logger.info(`The app is launched`);
  }
}
export default BaseTest;
