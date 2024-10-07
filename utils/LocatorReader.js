import { readdirSync, readFileSync } from "fs";
import { resolve, join, extname } from "path";
import CustomException from "./CustomException";
import Logger from "../logger/Logger";
import Utilities from "./Utilities";
import Constant from "./Constant";

/**
 * LocatorReader class to read JSON files which contains android and iOS locators for POM class objects
 *
 * @class LocatorReader
 * @typedef {LocatorReader}
 */
class LocatorReader {
  /**
   * Creates an instance of LocatorReader.
   *
   * @constructor
   * @param {*} page
   * @param {*} platform
   */
  constructor(page, platform) {
    this.page = page;
    this.platform = platform;
    this.locators = this.loadLocators();
    this.logger = new Logger("LocatorReader.js");
  }

  /**
   * Read locators from JSON files, and retrieve the platform specid & page related locators
   * If locato not exists in the JSON file, then it throws @see CustomException
   *
   * @returns {*} locators JSON object
   */
  loadLocators() {
    const dirPath = resolve(__dirname, "../locators");
    const files = readdirSync(dirPath);
    let locators;
    for (const file of files) {
      if (extname(file) === ".json") {
        const filePath = join(dirPath, file);
        const fileLocators = JSON.parse(readFileSync(filePath, "utf-8"));
        if (fileLocators[this.page] && fileLocators[this.page][this.platform]) {
          locators = fileLocators[this.page][this.platform];
          break;
        }
      }
    }

    if (Utilities.isUndefined(locators)) {
      throw new CustomException(`Locators for page ${this.page} or platform ${this.platform} not found in the JSON files`, { page: this.page, platform: this.platform });
    }
    return locators;
  }

  /**
   * It retrieves the locator for given element or locator name from locator object which returned by @see loadLocators
   * If locator not exists in the locator object, then it throws @see CustomException
   * It checks if locator exists, then it contains value or not
   *
   * @param {*} elementName element or locator name
   * @returns {String} @see constructSelector function return value
   */
  getLocator(elementName) {
    const locator = this.locators[elementName];
    if (Utilities.isUndefined(locator)) {
      throw new CustomException(`Locator for element ${elementName} not found in the JSON file for page ${this.page} or platform ${this.platform}`, { elementName: elementName, page: this.page, platform: this.platform });
    }
    if (Utilities.isUndefined(locator.value) || Utilities.isEmpty(locator.value)) {
      this.logger.warn(`Locator valie for element ${elementName} is empty or missing value in the JSON file for page ${this.page} or platform ${this.platform}. Returning null.`);
      return null;
    }
    return this.constructSelector(locator);
  }

  /**
   * Construct the locator value in valid format to use them to retrieve MobileElement object
   *
   * @param {*} locator locator value
   * @param {*} appendValue to replace %text% in locator value
   * @returns {String} formatted value which can directly use to find object
   */
  constructSelector(locator, appendValue) {
    if (locator.value.includes("%text%")) {
      if (Utilities.isUndefined(appendValue) && Utilities.isEmpty(appendValue)) {
        throw new CustomException(`appendValue cannot be empty or null when locator.value contains %text%`);
      }
      locator.value = locator.value.replace("%text%", appendValue);
    }
    const locatorType = Object.keys(Constant.LOCATOR_TYPE).find((key) => Constant.LOCATOR_TYPE[key] === locator.type);

    if (!locatorType) {
      throw new CustomException(`Invalid locator type ${locator.type} for element ${locator.name}. Expected one of ${Object.values(Constant.LOCATOR_TYPE).join(", ")}`);
    }

    switch (locatorType.toLowerCase()) {
      case Constant.LOCATOR_TYPE.XPATH:
        return locator.value;
      case Constant.LOCATOR_TYPE.ACCESSIBILITY_ID:
        return `~${locator.value}`;
      case Constant.LOCATOR_TYPE.CLASS_CHAIN:
        return `-ios class chain:${locator.value}`;
      case Constant.LOCATOR_TYPE.PREDICATE_STRING:
        return `-ios predicate string:${locator.value}`;
      default:
        throw new CustomException(`Unsupported locator type ${locator.type} for element ${locator.name}`);
    }
  }
}
export default LocatorReader;
