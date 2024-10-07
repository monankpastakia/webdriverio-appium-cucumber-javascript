/**
 * CustomException class to handle exception error which extends Error class
 * This class prints the exception with more details and proper format
 *
 * @class CustomException
 * @typedef {CustomException}
 * @extends {Error}
 */
class CustomException extends Error {
  /**
   * Creates an instance of CustomException.
   *
   * @constructor
   * @param {*} message
   * @param {*} details
   */
  constructor(message, details) {
    super(message);
    this.name = "CustomException";
    this.details = details;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomException);
    } else {
      this.stack = new Error(message).stack;
    }
  }

  /**
   * Build the formatted string to print exception details
   *
   * @returns {string}
   */
  toString() {
    return `${this.name}: ${this.message}\nDetails: ${JSON.stringify(this.details, null, 2)}\nStack: ${this.stack}`;
  }
}
export default CustomException;
