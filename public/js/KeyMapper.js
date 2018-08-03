/**
 * handles key presses by player
 */
export default class KeyMapper {
  /**
   * @constructs KeyMapper
   */
  constructor() {
    /**
     * @prop {Map<String, Function>} map key-strings to callback functions
     */
    this.map = new Map();
  }
  /**
   * sets up keymapper to listen for events on the given window
   * @param {Window} window to listen on
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
