import {canvas, context} from './canvas.js';

/**
 * Responsible for rendering sprites to context.
 * Only pairs with one sprite sheet.
 */
export default class Renderer {
  /** @typedef {import('./sheet.js').sheet} sheet */
  /** @param {sheet} sheet */
  constructor(sheet) {
    this.sheet = sheet;
    /** @type {import('./Entity.js').default[]} */
    this.entities = [];
  }
  /**
   * simply clears the context
   */
  clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  /**
   * draws all sprites to the context at their positions
   * @param {CanvasRenderingContext2D} context to render all sprites to
   */
  render() {
    this.entities.forEach((entity) => {
      const {rect} = this.sheet.sprites[entity.sprite];
      if (rect) {
        context.drawImage(
          this.sheet.image,
          rect.x, // source x
          rect.y, // source y
          rect.w, // source width
          rect.h, // source height
          entity.x, // dest x
          entity.y, // dest y
          rect.w, // dest width
          rect.h // dest height
        );
      }
    });
  }
}
