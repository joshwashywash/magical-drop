/** handles key presses by player; singleton */
class KeyMapper {
  /**
   * initialize empty map<keycodes, functions>
   */
  constructor() {
  /** @type {Map<string, Function>} map */
    this.map = new Map();
  }
  /** @typedef {typeof import('./entities/Juggler.js').default} Juggler */
  /**
   * adds juggler's keymaps to this.map
   * @param {Juggler} juggler
   */
  follow(juggler) {
    this.map
      .set('ArrowLeft', () => juggler.move(-juggler.width))
      .set('ArrowRight', () => juggler.move(juggler.width));
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

export default new KeyMapper();
