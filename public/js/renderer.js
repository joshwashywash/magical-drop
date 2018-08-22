import {canvas, context} from './canvas.js';

const createRenderer = (sheet) => {
  return {
    sheet,
    entities: [],
    clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
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
    },
  };
};

export {createRenderer};
