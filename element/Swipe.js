import Constant from "../utils/Constant";
import CustomException from "../utils/CustomException";

/**
 * Swipe class to handle the screen swipe
 *
 * @class Swipe
 * @typedef {Swipe}
 */
class Swipe {
  /**
   * Swipe on the screen in specified direction
   *
   * @static
   * @async
   * @param {Constant.DIRECTION} direction direction for the swipe
   * @param {number} [repeat=1] number of time to repeat swipe
   * @param {Constant.TIMEOUT} [duration=Constant.TIMEOUT.ONE_SECOND] time for the swipe to hold
   * @param {Constant.PAUSE} [pause=Constant.PAUSE.ONE_MILISECOND] time to pause after swipe
   */
  static async swipe(direction, repeat = 1, duration = Constant.TIMEOUT.ONE_SECOND, pause = Constant.PAUSE.ONE_MILISECOND) {
    for (let i = 0; i < repeat; i++) {
      const { width, height } = await browser.getWindowSize();
      const startX = width / 2;
      const startY = height / 2;

      let endX = startX;
      let endY = startY;

      const directionConst = Constant.DIRECTION[direction];
      if (!directionConst) {
        throw new CustomException(`Invalid direction: ${duration}. Expected one of ${Object.values(Constant.DIRECTION).join(", ")}`);
      }
      switch (directionConst) {
        case Constant.DIRECTION.UP:
          endY = (startY - height) / 2;
          break;
        case Constant.DIRECTION.DOWN:
          endY = (startY + height) / 2;
          break;
        case Constant.DIRECTION.LEFT:
          endX = (startX - width) / 2;
          break;
        case Constant.DIRECTION.RIGHT:
          endX = (startX + width) / 2;
          break;
        default:
          throw new CustomException(`Invalid direction: ${directionConst}`);
      }

      await browser.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMovie", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: pause },
            { type: "pointerMovie", duration, origin: "pointer", x: endX, y: endY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
      await browser.releaseActions();
    }
  }

  /**
   * Swipe on the screen in specified direction within element/container
   *
   * @static
   * @async
   * @param {WebdriverIO.Element} element element/container
   * @param {Constant.DIRECTION} direction direction for the swipe
   * @param {number} [repeat=1] number of time to repeat swipe
   * @param {Constant.TIMEOUT} [duration=Constant.TIMEOUT.ONE_SECOND] time for the swipe to hold
   * @param {Constant.PAUSE} [pause=Constant.PAUSE.ONE_MILISECOND] time to pause after swipe
   */
  static async swipeWithinElement(element, direction, repeat = 1, duration = Constant.TIMEOUT.ONE_SECOND, pause = Constant.PAUSE.ONE_MILISECOND) {
    for (let i = 0; i < repeat; i++) {
      const { width, height } = await element.getSize();
      const { x, y } = await element.getLocation();

      const startX = (x + width) / 2;
      const startY = (y + height) / 2;

      let endX = startX;
      let endY = startY;

      const directionConst = Constant.DIRECTION[direction];
      if (!directionConst) {
        throw new CustomException(`Invalid direction: ${duration}. Expected one of ${Object.values(Constant.DIRECTION).join(", ")}`);
      }
      switch (directionConst) {
        case Constant.DIRECTION.UP:
          endY = (startY - height) / 2;
          break;
        case Constant.DIRECTION.DOWN:
          endY = (startY + height) / 2;
          break;
        case Constant.DIRECTION.LEFT:
          endX = (startX - width) / 2;
          break;
        case Constant.DIRECTION.RIGHT:
          endX = (startX + width) / 2;
          break;
        default:
          throw new CustomException(`Invalid direction: ${directionConst}`);
      }

      await browser.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMovie", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: pause },
            { type: "pointerMovie", duration, origin: "pointer", x: endX, y: endY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
      await browser.releaseActions();
    }
  }
}
export default Swipe;
