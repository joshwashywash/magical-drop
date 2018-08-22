const createKeyMapper = () => {
  return {
    map: new Map(),
    follow(juggler) {
      this.map
        .set('ArrowLeft', () => juggler.move(-juggler.sprite.width))
        .set('ArrowRight', () => juggler.move(juggler.sprite.width));
    },
    listenOn(window) {
      window.document.addEventListener('keydown', (event) => {
        const key = event.code;
        if (this.map.has(key)) {
          this.map.get(key)();
        }
      });
    },
  };
};

export {createKeyMapper};
