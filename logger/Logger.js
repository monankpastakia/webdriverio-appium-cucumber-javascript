import winston from "winston";
const { format } = winston;
const { combine, timestamp, printf, colorize } = format;
import dailyRotateFile from "winston-daily-rotate-file";
import GlobalVariables from "../utils/GlobalVariables";
import Constant from "../utils/Constant";

/**
 * Custom format to print logs in specified format
 *
 * @type {*}
 */
const customFormat = printf(({ level, message, timestamp, metadata }) => {
  const { className, methodName } = metadata;
  return `[${timestamp} - ${className} : ${methodName}] - [${level}]: ${message}`;
});

/**
 * Logger class to print the logs to console and file
 *
 * @class Logger
 * @typedef {Logger}
 */
class Logger {
  /**
   * Creates an instance of Logger.
   *
   * @constructor
   * @param {*} className class for which logger needs to be initialized
   */
  constructor(className) {
    this.className = className;
    this.logger = winston.createLogger({
      level: "debug",
      format: combine(
        timestamp({
          format: "YYYY-MM-DD HH:mm:ss:SSS A",
        }),
        customFormat,
      ),
      transports: [
        new dailyRotateFile({
          filename: "logs/test-execution-logs-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          prepend: true,
        }),
        new winston.transports.Console({
          format: combine(colorize(), customFormat),
        }),
      ],
    });
  }

  /**
   * Prints the logs to console and file
   *
   * @param {*} level log level
   * @param {*} message message or log to print
   * @param {*} methodName method name to print
   */
  #log(level, message, methodName) {
    this.logger.log({
      level,
      message,
      metadata: {
        className: this.className,
        methodName,
      },
    });
  }

  /**
   * Info level log
   *
   * @param {*} message message or log to print
   * @param {*} methodName method name to print
   */
  info(message, methodName) {
    this.#log(Constant.CUSTOM_LOG_LEVEL.INFO, message, methodName);
  }

  /**
   * Warn level log
   *
   * @param {*} message message or log to print
   * @param {*} methodName method name to print
   */
  warn(message, methodName) {
    this.#log(Constant.CUSTOM_LOG_LEVEL.WARN, message, methodName);
  }

  /**
   * Error level log
   *
   * @param {*} message message or log to print
   * @param {*} methodName method name to print
   */
  error(message, methodName) {
    this.#log(Constant.CUSTOM_LOG_LEVEL.ERROR, message, methodName);
  }

  /**
   * Debug level log
   *
   * @param {*} message message or log to print
   * @param {*} methodName method name to print
   */
  debug(message, methodName) {
    if (GlobalVariables.getCustomLogLevel() === "debug") {
      this.#log(Constant.CUSTOM_LOG_LEVEL.DEBUG, message, methodName);
    }
  }
}
export default Logger;
