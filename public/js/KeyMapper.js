/** handles key presses by player */
export default class KeyMapper {
  /** @param {Window} window */
  constructor(window) {
  /** @type {Map<string, Function>} map */
    this.map = new Map();
    this.listenOn(window);
  }
  /** @typedef {import('./factory.js').entity} entity */

  /**
   * registers entity's mappings in the KeyMapper's map
   * @param {entity} entity to follow
   */
  follow(entity) {
    entity.mappings.forEach((mapping) => this.map.set(...mapping));
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
