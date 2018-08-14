/** handles key presses by player */
export default class KeyMapper {
  /** @param {[string, Function][]} mappings */
  constructor(mappings = []) {
  /** @type {Map<string, Function>} map */
    this.map = new Map(mappings);
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
