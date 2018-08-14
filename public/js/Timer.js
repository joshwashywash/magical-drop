/**
 * modeled after https://github.com/meth-meth-method/game-timer
 * @example
 * const Timer = new Timer(() => (console.log('Hello World!')));
 * timer.start();
 */
export default class Timer {
  /**
   * @param {function(number): void} update callback for game updates
   * @param {Number} dt resolution of game simulation
   */
  constructor(update, dt = 1 / 60) {
    this._frame = 0;
    let accumulated = 0;
    let last = 0;
    /**
     * waits until time to update
     * @param {number} time since script has been initiated
     */
    this._update = (time) => {
      accumulated += (time - last) / 1000;
      while (accumulated > dt) {
        update(dt);
        accumulated -= dt;
      }
      last = time;
      this.start();
    };
  }
  /**
   * ties frame request to class and begins periodic updates
   */
  start() {
    this._frame = requestAnimationFrame(this._update);
  }
  /**
   * cancels current update callback
   */
  stop() {
    cancelAnimationFrame(this._frame);
  }
}
