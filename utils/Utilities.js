import Logger from "../logger/Logger";
const logger = new Logger("Utilities.js");

/**
 * Utilities class to have some utils functions to use in framework
 *
 * @class Utilities
 * @typedef {Utilities}
 */
class Utilities {
  /**
   * Pause the execution to slow down
   *
   * @static
   * @async
   * @param {Constant.PAUSE} duration time to pause
   */
  static async pause(duration) {
    logger.info(`Pause execution for ${duration}ms`, `pause`);
    await browser.pause(duration);
  }

  /**
   * Check if element/object is null or undefined
   *
   * @static
   * @param {*} element element or object
   * @returns {boolean} true if null or undefined, otherwise false
   */
  static isUndefined(element) {
    if (element === null || element === undefined) {
      logger.error(`element is undefined`, `isUndefined`);
      return true;
    } else {
      logger.debug(`element is not undefined`, `isUndefined`);
      return false;
    }
  }

  /**
   * Check if element/object is empty
   *
   * @static
   * @param {*} element element or object
   * @returns {boolean} true if empty, otherwise false
   */
  static isEmpty(element) {
    if (element === "") {
      logger.error(`element is empty`, `isEmpty`);
      return true;
    } else {
      logger.debug(`element is not empty`, `isEmpty`);
      return false;
    }
  }

  /**
   * Check if actual contains expected
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if contains, otherwise false
   */
  static isContain(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isContain`);
    if (actual.toLowerCase().includes(expected.toLowerCase())) {
      logger.info(`Validation Passed: Actual: ${actual} contains Expected: ${expected}`, `isContain`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} does NOT contain Expected: ${expected}`, `isContain`);
      return false;
    }
  }

  /**
   * Check if actual does not contains expected
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if not contains, otherwise false
   */
  static isNotContain(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isNotContain`);
    if (!actual.toLowerCase().includes(expected.toLowerCase())) {
      logger.info(`Validation Passed: Actual: ${actual} does NOT contain Expected: ${expected}`, `isNotContain`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} contains Expected: ${expected}`, `isNotContain`);
      return false;
    }
  }

  /**
   * Check if actual & expected are equal
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if both are equal, otherwise false
   */
  static isEqual(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isEqual`);
    if (actual.toLowerCase() === expected.toLowerCase()) {
      logger.info(`Validation Passed: Actual: ${actual} is equal to Expected: ${expected}`, `isEqual`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} is NOT equal to Expected: ${expected}`, `isEqual`);
      return false;
    }
  }
  /**
   * Check if actual & expected are not equal
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if both are not equal, otherwise false
   */
  static isNotEqual(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isNotEqual`);
    if (actual.toLowerCase() !== expected.toLowerCase()) {
      logger.info(`Validation Passed: Actual: ${actual} is NOT equal to Expected: ${expected}`, `isNotEqual`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} is equal to Expected: ${expected}`, `isNotEqual`);
      return false;
    }
  }
  /**
   * Check if expected matches in actual using regex
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if matches, otherwise false
   */
  static isEqualUsingRegex(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isEqualUsingRegex`);
    if (actual.match(expected)) {
      logger.info(`Validation Passed: Actual: ${actual} matches to Expected: ${expected}`, `isEqualUsingRegex`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} does NOT match to Expected: ${expected}`, `isEqualUsingRegex`);
      return false;
    }
  }
  /**
   * Check if expected not matches in actual using regex
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if not matches, otherwise false
   */
  static isValueNotEqualUsingRegex(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isValueNotEqualUsingRegex`);
    if (!actual.match(expected)) {
      logger.info(`Validation Passed: Actual: ${actual} does NOT match to Expected: ${expected}`, `isValueNotEqualUsingRegex`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} matches to Expected: ${expected}`, `isValueNotEqualUsingRegex`);
      return false;
    }
  }
  /**
   * Check if expected matches in actual using regex ignore case
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if matches, otherwise false
   */
  static isEqualUsingRegexIgnoreCase(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isEqualUsingRegexIgnoreCase`);
    if (actual.match(new RegExp(expected, "i"))) {
      logger.info(`Validation Passed: Actual: ${actual} matches to Expected: ${expected}`, `isEqualUsingRegexIgnoreCase`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} does NOT match to Expected: ${expected}`, `isEqualUsingRegexIgnoreCase`);
      return false;
    }
  }
  /**
   * Check if expected not matches in actual using regex ignore case
   *
   * @static
   * @param {*} actual actual
   * @param {*} expected expected
   * @returns {boolean} true if not matches, otherwise false
   */
  static isValueNotEqualUsingRegexIgnoreCase(actual, expected) {
    logger.info(`Validate Values: actual: ${actual} - expected: ${expected}`, `isValueNotEqualUsingRegexIgnoreCase`);
    if (!actual.match(new RegExp(expected, "i"))) {
      logger.info(`Validation Passed: Actual: ${actual} does NOT match to Expected: ${expected}`, `isValueNotEqualUsingRegexIgnoreCase`);
      return true;
    } else {
      logger.error(`Validation Failed: Actual: ${actual} matches to Expected: ${expected}`, `isValueNotEqualUsingRegexIgnoreCase`);
      return false;
    }
  }
}
export default Utilities;
