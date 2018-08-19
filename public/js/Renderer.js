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
   * draws all sprites to the context at their positions
   * @param {CanvasRenderingContext2D} context to render all sprites to
   */
  draw(context) {
    this.entities.forEach((entity) => {
      const {rect} = this.sheet.sprites[entity.sprite];
      if (rect) {
        context.drawImage(
          this.sheet.image,
          ...Object.values(rect),
          ...Object.values(entity.pos),
          rect.w,
          rect.h
        );
      }
    });
  }
}
