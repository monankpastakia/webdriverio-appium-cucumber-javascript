import Logger from "../logger/Logger";
const logger = new Logger("Expect.js");
import { expect as expectChai } from "chai";
import { expect as expectWDIO } from "@wdio/globals";

/**
 * Expect class to perform validation on the object, value or properties
 *
 * @class Expect
 * @typedef {Expect}
 */
class Expect {
  /**
   * Validate two values are equal
   *
   * @static
   * @async
   * @param {*} actual actual value
   * @param {*} expected expected value
   */
  static async verifyValuesEqual(actual, expected) {
    logger.info(`Verifying values are equal: ${actual} and ${expected}`, `verifyValuesEqual`);
    await expectChai(actual).to.equal(expected);
  }

  /**
   * Validate two values are not equal
   *
   * @static
   * @async
   * @param {*} actual actual value
   * @param {*} expected expected value
   */
  static async verifyValuesNotEqual(actual, expected) {
    logger.info(`Verifying values are not equal: ${actual} and ${expected}`, `verifyValuesNotEqual`);
    await expectChai(actual).to.not.equal(expected);
  }

  /**
   * Validate element is displayed
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementDisplayed(element) {
    logger.info(`Verifying element is displayed: ${element}`, `verifyElementDisplayed`);
    await expectWDIO(element).toBeDisplayed();
  }

  /**
   * Validate element is not displayed
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementNotDisplayed(element) {
    logger.info(`Verifying element is not displayed: ${element}`, `verifyElementNotDisplayed`);
    await expectWDIO(element).toBeNotDisplayed();
  }

  /**
   * Validate element is enabled
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementEnabled(element) {
    logger.info(`Verifying element is enabled: ${element}`, `verifyElementEnabled`);
    await expectWDIO(element).toBeEnabled();
  }

  /**
   * Validate element is not enabled
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementNotEnabled(element) {
    logger.info(`Verifying element is not enabled: ${element}`, `verifyElementNotEnabled`);
    await expectWDIO(element).toBeNotEnabled();
  }

  /**
   * Validate element is exist
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementExist(element) {
    logger.info(`Verifying element is exist: ${element}`, `verifyElementExist`);
    await expectWDIO(element).toExist();
  }

  /**
   * Validate element not exist
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementNotExist(element) {
    logger.info(`Verifying element is not exist: ${element}`, `verifyElementNotExist`);
    await expectWDIO(element).toNotExist();
  }

  /**
   * Validate element has attribute with value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {Constant.ELEMENT_ATTRIBUTET} attributeName attribute name
   * @param {*} attributeValue attribute value
   */
  static async verifyElementHaveAttribute(element, attributeName, attributeValue) {
    logger.info(`Verify element has attribute: ${attributeName} with a specific value: ${attributeValue}`, `verifyElementHaveAttribute`);
    await expectWDIO(element).toHaveAttribute(attributeName, attributeValue);
  }

  /**
   * Validate element has no attribute with value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {Constant.ELEMENT_ATTRIBUTET} attributeName attribute name
   * @param {*} attributeValue attribute value
   */
  static async verifyElementNotHaveAttribute(element, attributeName, attributeValue) {
    logger.info(
      `Verify element does not have attribute: ${attributeName} with a specific value:
        ${attributeValue}`,
      `verifyElementNotHaveAttribute`);
    await expectWDIO(element).not.toHaveAttribute(attributeName, attributeValue);
  }

  /**
   * Validate element has property with value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {*} propertyName property name
   * @param {*} propertyValue property value
   */
  static async verifyElementHaveProperty(element, propertyName, propertyValue) {
    logger.info(`Verify element has property: ${propertyName} with a specific value: ${propertyValue}`, `verifyElementHaveProperty`);
    await expectWDIO(element).toHaveProperty(propertyName, propertyValue);
  }

  /**
   * Validate element has no property with value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {*} propertyName property name
   * @param {*} propertyValue property value
   */
  static async verifyElementNotHaveProperty(element, propertyName, propertyValue) {
    logger.info(`Verify element does not have property: ${propertyName} with a specific value: ${propertyValue}`, `verifyElementNotHaveProperty`);
    await expectWDIO(element).not.toHaveProperty(propertyName, propertyValue);
  }

  /**
   * Validate element have value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {*} value value
   */
  static async verifyElementHaveValue(element, value) {
    logger.info(`Verify element has value: ${value}`, `verifyElementHaveValue`);
    await expectWDIO(element).toHaveValue(value);
  }

  /**
   * Validate element not have value
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {*} value value
   */
  static async verifyElementNotHaveValue(element, value) {
    logger.info(`Verify element does not have value: ${value}`, `verifyElementNotHaveValue`);
    await expectWDIO(element).not.toHaveValue(value);
  }

  /**
   * Validate element has text
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {String} text text
   */
  static async verifyElementHaveText(element, text) {
    logger.info(`Verify element has text: ${text}`, `verifyElementHaveText`);
    await expectWDIO(element).toHaveText(text);
  }

  /**
   * Validate element has text
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {String} text text
   */
  static async verifyElementNotHaveText(element, text) {
    logger.info(`Verify element does not have text: ${text}`, `verifyElementNotHaveText`);
    await expectWDIO(element).not.toHaveText(text);
  }

  /**
   * Validate element has value with ignore case
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {*} value value
   * @param {boolean} ignoreCase true or false
   */
  static async verifyElementHaveValueWithIgnoreCase(element, value, ignoreCase) {
    logger.info(`Verify element has value: ${value} with ignore case: ${ignoreCase}`, `verifyElementHaveValueWithIgnoreCase`);
    await expectWDIO(element).toHaveValue(value, { ignoreCase: ignoreCase });
  }

  /**
   * Validate element has text with ignore case
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {String} text text
   * @param {boolean} ignoreCase true or false
   */
  static async verifyElementHaveTextWithIgnoreCase(element, text, ignoreCase) {
    logger.info(`Verify element has text: ${text} with ignore case: ${ignoreCase}`, `verifyElementHaveTextWithIgnoreCase`);
    await expectWDIO(element).toHaveText(text, { ignoreCase: ignoreCase });
  }

  /**
   * Validate element is clickable
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementClickable(element) {
    logger.info(`Verify element is clickable`, `verifyElementClickable`);
    await expectWDIO(element).toBeClickable();
  }
  /**
   * Validate element is not clickable
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementNotClickable(element) {
    logger.info(`Verify element is not clickable`, `verifyElementNotClickable`);
    await expectWDIO(element).not.toBeClickable();
  }
  /**
   * Validate element is checked
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementChecked(element) {
    logger.info(`Verify element is checked`, `verifyElementChecked`);
    await expectWDIO(element).toBeChecked();
  }
  /**
   * Validate element is not checked
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementNotChecked(element) {
    logger.info(`Verify element is not checked`, `verifyElementNotChecked`);
    await expectWDIO(element).not.toBeChecked();
  }
  /**
   * Validate element has text containing
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {string} text text to search for
   */
  static async verifyElementHaveTextContaining(element, text) {
    logger.info(`Verify element having text: ${text}`, `verifyElementHaveTextContaining`);
    await expectWDIO(element).toHaveText(expectWDIO.stringContaining(text));
  }
  /**
   * Validate element has text not containing
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   * @param {string} text text to search for
   */
  static async verifyElementHaveTextNotContaining(element, text) {
    logger.info(`Verify element does not have text: ${text}`, `verifyElementHaveTextNotContaining`);
    await expectWDIO(element).not.toHaveText(expectWDIO.stringContaining(text));
  }
  /**
   * Validate element is displayed in viewport
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element object
   */
  static async verifyElementDisplayedInViewport(element) {
    logger.info(`Verify element is displayed in viewport`, `verifyElementDisplayedInViewport`);
    await expectWDIO(element).toBeDisplayedInViewport();
  }
}
export default Expect;
