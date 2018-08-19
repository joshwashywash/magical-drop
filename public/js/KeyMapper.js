/** handles key presses by player */
export default class Keymapper {
  /**
   * initialize an empty map for key presses to functions
   */
  constructor() {
  /** @type {Map<string, Function>} map */
    this.map = new Map();
  }
  /**
   * sets up keymapper to listen for events on the given window
   * @param {Window} window to attach listener on
   */
  listenOn(window) {
    window.document.addEventListener('keydown', (event) => {
      const key = event.code;
      if (this.map.has(key)) {
        this.map.get(key)();
      }
    });
  }
}
