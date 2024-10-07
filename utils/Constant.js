/**
 * Constant class to store or maintain all the variables to use within framework
 *
 * @class Constant
 * @typedef {Constant}
 */
class Constant {
  /**
   * Log level constant
   *
   * @static
   * @type {*}
   */
  static CUSTOM_LOG_LEVEL = Object.freeze({
    INFO: "info",
    DEBUG: "debug",
    WARN: "warn",
    ERROR: "error",
  });

  /**
   * Timeout for object or page to wait for
   * time is in Miliseconds
   *
   * @static
   * @type {*}
   */
  static TIMEOUT = Object.freeze({
    ONE_SECOND: 1000,
    TWO_SECONDS: 2000,
    THREE_SECONDS: 3000,
    FOUR_SECONDS: 4000,
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    FIFTEEN_SECONDS: 15000,
    TWENTY_SECONDS: 20000,
    THIRTY_SECONDS: 30000,
  });

  /**
   * Pause the execution for specific time
   * time is in Miliseconds
   *
   * @static
   * @type {*}
   */
  static PAUSE = Object.freeze({
    ONE_MILISECOND: 100,
    TWO_MILISECONDS: 200,
    THREE_MILISECONDS: 300,
    FOUR_MILISECONDS: 400,
    HALF_SECOND: 500,
    ONE_SECOND: 1000,
    TWO_SECONDS: 2000,
    THREE_SECONDS: 3000,
    FOUR_SECONDS: 4000,
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    FIFTEEN_SECONDS: 15000,
    TWENTY_SECONDS: 20000,
    THIRTY_SECONDS: 30000,
  });

  /**
   * Element attribute for object
   *
   * @static
   * @type {*}
   */
  static ELEMENT_ATTRIBUTE = Object.freeze({
    ENABLED: "enabled",
    VALUE: "value",
    VISIBLE: "visible",
    NAME: "name",
    LABEL: "label",
  });

  /**
   * Locator type for object
   *
   * @static
   * @type {*}
   */
  static LOCATOR_TYPE = Object.freeze({
    CLASS_CHAIN: "class_chain",
    XPATH: "xpath",
    ACCESSIBILITY_ID: "accessibility_id",
    PREDICATE_STRING: "predicate_string",
  });

  /**
   * Swipe direction
   *
   * @static
   * @type {*}
   */
  static DIRECTION = Object.freeze({
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
  });
}
export default Constant;
