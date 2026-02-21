class GameOfLife extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < 0.05) {
          this.alive(col, row);
        }
        else {
          this.dead(col, row);
        }
      }
    }
    return super.init();
  }
  dead(col, row) {
    this.model.set(col, row, 'alive', false);
    this.model.set(col, row, 'r', 255);
    this.model.set(col, row, 'g', 255);
    this.model.set(col, row, 'b', 255);
  }
  alive(col, row) {
    if (this.model.get(col, row, 'alive', false)) {
      return;
    }

    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
    this.reactSoon(col, row);
  }
  reactSoon(col, row) {
    const that = this;
    setTimeout(() => {
      that.react(col, row);
    }, 1000);
  }
  react(col, row) {
    const alive = this.model.get(col, row, 'alive', false);

    if (alive) {
      const neighbours = this.model.getNeighbours(col, row);
      this.alive(neighbours.southEast.col, neighbours.southEast.row);
      this.dead(col, row);
    }
  }
}
