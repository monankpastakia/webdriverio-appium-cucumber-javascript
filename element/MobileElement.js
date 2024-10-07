import Logger from "../logger/Logger";
import Constant from "../utils/Constant";
import Utilities from "../utils/Utilities";
import { config } from "../wdio.conf";
import Swipe from "./Swipe";

/**
 * MobileElement class to handle mobile elements objects and their actions
 *
 * @class MobileElement
 * @typedef {MobileElement}
 */
class MobileElement {
  /**
   * Creates an instance of MobileElement.
   *
   * @constructor
   * @param {WebdriverIO.selector} selector
   */
  constructor(selector) {
    this.selector = selector;
    this.logger = new Logger(`MobileElement.js`);
  }

  /**
   * Get the Mobile Element based on the selecotr provided
   * if element is not found, then return null, otherwise return element
   *
   * @async
   * @returns @see {WebdriverIO.Element}
   */
  async getElement() {
    try {
      this.logger.info(`getElement for selector: ${this.selector}`, `getElement`);
      const element = await $(this.selector);
      return Utilities.isUndefined(element) ? null : element;
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getElement`);
      return null;
    }
  }

  /**
   * Get the Mobile Elements based on the selecotr provided
   * if element is not found, then return null, otherwise return elements array
   *
   * @async
   * @returns @see {WebdriverIO.ElementArray}
   */
  async getElements() {
    try {
      this.logger.info(`getElements for selector: ${this.selector}`, `getElements`);
      const element = await $$(this.selector);
      return Utilities.isUndefined(element) ? null : element;
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getElements`);
      return null;
    }
  }

  /**
   * Wait until element is present on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be present
   * @returns @see {boolean} true if element is present else false
   */
  async waitUntilElement(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitUntil for selector: ${this.selector}`, `waitUntilElement`);
      await browser.waitUntil(
        async () => {
          const element = await $(this.selector);
          return Utilities.isUndefined(element) ? false : true;
        },
        {
          timeout: timeout,
          timeoutMsg: `Element with selector ${this.selector} not found within ${timeout}ms`,
        },
      );
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitUntilElement`);
      return false;
    }
  }

  /**
   * Wait until element is present on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be present
   * @returns @see {boolean} true if element is present else false
   */
  async waitUntilElements(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitUntil for selector: ${this.selector}`, `waitUntilElements`);
      await browser.waitUntil(
        async () => {
          const element = await $$(this.selector);
          return Utilities.isUndefined(element) ? false : true;
        },
        {
          timeout: timeout,
          timeoutMsg: `Element with selector ${this.selector} not found within ${timeout}ms`,
        },
      );
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitUntilElements`);
      return false;
    }
  }

  /**
   * Wait until element is exist on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be exist
   * @returns @see {boolean} true if element is exist else false
   */
  async waitForExist(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForExist for selector: ${this.selector}`, `waitForExist`);
      const element = await this.getElement();
      if (!element) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForExist`);
        return false;
      }
      if (timeout) {
        return await element.waitForExist({ timeout: timeout });
      } else {
        return await element.waitForExist();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForExist`);
      return false;
    }
  }

  /**
   * Wait until element is displayed on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be displayed
   * @returns @see {boolean} true if element is displayed else false
   */
  async waitForDisplayed(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForDisplayed for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForDisplayed`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForDisplayed`);
        return false;
      }
      if (timeout) {
        return await element.waitForDisplayed({ timeout: timeout });
      } else {
        return await element.waitForDisplayed();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForDisplayed`);
      return false;
    }
  }

  /**
   * Wait until element is enabled on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be enabled
   * @returns @see {boolean} true if element is enabled else false
   */
  async waitForEnabled(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForEnabled for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForEnabled`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForEnabled`);
        return false;
      }
      if (timeout) {
        return await element.waitForEnabled({ timeout: timeout });
      } else {
        return await element.waitForEnabled();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForEnabled`);
      return false;
    }
  }

  /**
   * Wait until element is clickable on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be clickable
   * @returns @see {boolean} true if element is clickable else false
   */
  async waitForClickable(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForClickable for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForClickable`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForClickable`);
        return false;
      }
      if (timeout) {
        return await element.waitForClickable({ timeout: timeout });
      } else {
        return await element.waitForClickable();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForClickable`);
      return false;
    }
  }

  /**
   * Wait until element is not exist on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be not exist
   * @returns @see {boolean} true if element is not exist else false
   */
  async waitForNotExist(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForNotExist for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForNotExist`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForNotExist`);
        return true;
      }
      if (timeout) {
        return await element.waitForExist({ timeout: timeout, reverse: true });
      } else {
        return await element.waitForExist({ reverse: true });
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForNotExist`);
      return true;
    }
  }

  /**
   * Wait until element is not displayed on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be not displayed
   * @returns @see {boolean} true if element is not displayed else false
   */
  async waitForNotDisplayed(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForNotDisplayed for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForNotDisplayed`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForNotDisplayed`);
        return true;
      }
      if (timeout) {
        return await element.waitForDisplayed({ timeout: timeout, reverse: true });
      } else {
        return await element.waitForDisplayed({ reverse: true });
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForNotDisplayed`);
      return true;
    }
  }

  /**
   * Wait until element is not enabled on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be not enabled
   * @returns @see {boolean} true if element is not enabled else false
   */
  async waitForNotEnabled(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForEnabled for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForNotEnabled`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForNotEnabled`);
        return true;
      }
      if (timeout) {
        return await element.waitForEnabled({ timeout: timeout, reverse: true });
      } else {
        return await element.waitForEnabled({ reverse: true });
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForNotEnabled`);
      return true;
    }
  }

  /**
   * Wait until element is not clickable on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element to be not clickable
   * @returns @see {boolean} true if element is not clikable else false
   */
  async waitForNotClickable(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`waitForNotClickable for selector: ${this.selector} and timeout: ${timeout}ms`, `waitForNotClickable`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `waitForNotClickable`);
        return true;
      }
      if (timeout) {
        return await element.waitForClickable({ timeout: timeout, reverse: true });
      } else {
        return await element.waitForClickable({ reverse: true });
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `waitForNotClickable`);
      return true;
    }
  }

  /**
   * Check if element is enabled on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {boolean} true if element is enabled else false
   */
  async isEnabled(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`isEnabled for selector: ${this.selector} and timeout: ${timeout}ms`, `isEnabled`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `isEnabled`);
        return false;
      }
      if (timeout && (await element.waitForDisplayed({ timeout: timeout }))) {
        return await element.isEnabled();
      }
      if (await element.waitForDisplayed()) {
        return await element.isEnabled();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `isEnabled`);
      return false;
    }
  }

  /**
   * Check if element is displayed on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {boolean} true if element is displayed else false
   */
  async isDisplayed(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`isDisplayed for selector: ${this.selector} and timeout: ${timeout}ms`, `isDisplayed`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `isDisplayed`);
        return false;
      }
      if (timeout && (await element.waitForDisplayed({ timeout: timeout }))) {
        return await element.isDisplayed();
      }
      if (await element.waitForDisplayed()) {
        return await element.isDisplayed();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `isDisplayed`);
      return false;
    }
  }

  /**
   * Check if element is exist on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {boolean} true if element is exist else false
   */
  async isExisting(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`isExisting for selector: ${this.selector} and timeout: ${timeout}ms`, `isExisting`);
      const element = await this.getElement();
      if (element === null) {
        this.logger.error(`Element with selector ${this.selector} is undefined/null`, `isExisting`);
        return false;
      }
      if (timeout && (await element.waitForExist({ timeout: timeout }))) {
        return await element.isExisting();
      }
      if (await element.waitForDisplayed()) {
        return await element.isExisting();
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `isExisting`);
      return false;
    }
  }

  /**
   * Check if element is displayed whitin view port on the page
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {boolean} true if element is displayed else false
   */
  async isDisplayedInViewport(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`isDisplayedInViewport for selector: ${this.selector} and timeout: ${timeout}ms`, `isDisplayedInViewport`);
      if (await this.isExisting(timeout)) {
        const element = await this.getElement();
        return await element.isDisplayedInViewport();
      } else {
        this.logger.error(`Element with selector ${this.selector} is not existing`, `isDisplayedInViewport`);
        return false;
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `isDisplayedInViewport`);
      return false;
    }
  }

  /**
   * Click on the element
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @param {Constant.PAUSE} [pause=config.pause] time to pause execution after
   */
  async click(timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`click for selector: ${this.selector} and timeout: ${timeout}ms and pause: ${pause}ms`, `click`);
      if (await this.isEnabled(timeout)) {
        const element = await this.getElement();
        await element.click();
        if (pause) {
          await Utilities.pause(pause);
        }
      } else {
        this.logger.error(`Element with selector ${this.selector} is not enabled`, `click`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `click`);
    }
  }

  /**
   * Type the text in the element
   *
   * @async
   * @param {*} text text to type in the element
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async setValue(text, timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`setValue for selector: ${this.selector} and timeout: ${timeout}ms and pause: ${pause}ms`, `setValue`);
      if (await this.isDisplayed(timeout)) {
        const element = await this.getElement();
        await element.setValue(text);
        if (pause) {
          await Utilities.pause(pause);
        }
      } else {
        this.logger.error(`Element with selector ${this.selector} is not displayed`, `setValue`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `setValue`);
    }
  }

  /**
   * Clear the text from the element
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @param {Constant.PAUSE} [pause=config.pause] time to pause after
   */
  async clear(timeout = config.waitforTimeout, pause = config.pause) {
    try {
      this.logger.info(`clear for selector: ${this.selector} and timeout: ${timeout}ms and pause: ${pause}ms`, `clear`);
      if (await this.isDisplayed(timeout)) {
        const element = await this.getElement();
        await element.clearValue();
        if (pause) {
          await Utilities.pause(pause);
        }
      } else {
        this.logger.error(`Element with selector ${this.selector} is not displayed`, `clear`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `clear`);
    }
  }

  /**
   * Get text from the element
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {String} string or null value
   */
  async getText(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`getText for selector: ${this.selector} and timeout: ${timeout}ms`, `getText`);
      if (await this.isDisplayed(timeout)) {
        const element = await this.getElement();
        await element.getText();
      } else {
        this.logger.error(`Element with selector ${this.selector} is not displayed`, `getText`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getText`);
    }
    return null;
  }

  /**
   * Get the provided attribute's value from the element
   *
   * @async
   * @param {String} attributeName attribute name
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {String} string or null value
   */
  async getAttribute(attributeName, timeout = config.waitforTimeout) {
    try {
      this.logger.info(`getAttribute for selector: ${this.selector} and attribute: ${attributeName} and timeout: ${timeout}ms`, `getAttribute`);
      if (await this.isDisplayed(timeout)) {
        const element = await this.getElement();
        await element.getAttribute(attributeName);
      } else {
        this.logger.error(`Element with selector ${this.selector} is not displayed`, `getAttribute`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getAttribute`);
    }
    return null;
  }

  /**
   * Get the location of the element
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {WebdriverIO.Element.location}
   */
  async getLocation(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`getLocation for selector: ${this.selector} and timeout: ${timeout}ms`, `getLocation`);
      if (await this.isExisting(timeout)) {
        const element = await this.getElement();
        await element.getLocation();
      } else {
        this.logger.error(`Element with selector ${this.selector} is not existing`, `getLocation`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getLocation`);
    }
    return null;
  }

  /**
   * Get the size of the element
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   * @returns @see {WebdriverIO.Element.size}
   */
  async getSize(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`getSize for selector: ${this.selector} and timeout: ${timeout}ms`, `getSize`);
      if (await this.isExisting(timeout)) {
        const element = await this.getElement();
        await element.getSize();
      } else {
        this.logger.error(`Element with selector ${this.selector} is not existing`, `getSize`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getSize`);
    }
    return null;
  }

  /**
   * Scroll the page to make element visible within view
   *
   * @async
   * @param {Constant.TIMEOUT} [timeout=config.waitforTimeout] time to wait for element
   */
  async scrollIntoView(timeout = config.waitforTimeout) {
    try {
      this.logger.info(`scrollIntoView for selector: ${this.selector} and timeout: ${timeout}ms`, `scrollIntoView`);
      if (await this.isExisting(timeout)) {
        const element = await this.getElement();
        await element.scrollIntoView({ block: "center", inline: "center" });
      } else {
        this.logger.error(`Element with selector ${this.selector} is not existing`, `scrollIntoView`);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `scrollIntoView`);
    }
  }
  /**
   * Scroll until the element is displayed in the view port
   *
   * @async
   * @param {WebdriverIO.Element} container container or parent element in which need to swipe
   * @param {Constant.DIRECTION} direction direction for the swipe
   * @param {number} [maxScroll=10] max number of time to scroll
   */
  async scrollUntilDisplayed(container, direction, maxScroll = 10) {
    try {
      this.logger.info(`scrollUntilDisplayed for selector: ${this.selector}`, `scrollUntilDisplayed`);
      let scrolls = 0;
      if (Utilities.isUndefined(container)) {
        while (!(await this.isDisplayedInViewport()) && scrolls < maxScroll) {
          await Swipe.swipe(direction, 1, Constant.TIMEOUT.ONE_SECOND, Constant.PAUSE.ONE_MILISECOND);
          scrolls++;
        }
      } else {
        while (!(await this.isDisplayedInViewport()) && scrolls < maxScroll) {
          await Swipe.swipeWithinElement(container, direction, 1, Constant.TIMEOUT.ONE_SECOND, Constant.PAUSE.ONE_MILISECOND);
          scrolls++;
        }
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `scrollUntilDisplayed`);
    }
  }
}
export default MobileElement;
