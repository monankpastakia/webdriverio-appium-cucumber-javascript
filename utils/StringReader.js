import { readdirSync } from "fs";
import { resolve, join, extname } from "path";
import CustomException from "./CustomException";

/**
 * StringReader class read all JS Strings file to retrieve different page strings
 *
 * @class StringReader
 * @typedef {StringReader}
 */
class StringReader {
  /**
   * Creates an instance of StringReader.
   * It initializes a Map to store locale strings
   * It iterates over each JS file in the directory.
   *
   * @constructor
   */
  constructor() {
    this.strings = new Map();
    const dirPath = resolve(__dirname, "../strings");
    const files = readdirSync(dirPath);

    for (const file of files) {
      if (extname(file) === ".js") {
        import(join(dirPath, file)).then((localeData) => {
          for (const { locale, strings } of localeData.default) {
            this.strings.set(locale, strings);
          }
        });
      }
    }
  }

  /**
   * To get the strings for specified page for given locale.
   *
   * @param {*} locale locale value
   * @param {*} page page name
   * @returns {String} all the strings of the page
   */
  getPageStrings(locale, page) {
    const localeData = this.strings.get(locale);
    if (!localeData) {
      throw new CustomException(`No strings found for Locale ${locale}`);
    }
    const pageData = localeData.find((p) => p.page === page);
    if (!pageData) {
      throw new CustomException(`No strings found for Page ${page} and Locale ${locale}`);
    }
    return pageData.strings;
  }
}
export default StringReader;
