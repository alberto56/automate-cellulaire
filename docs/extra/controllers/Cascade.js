
class Cascade extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.moveSoon(col, row);
      }
    }
    return super.init();
  }
  moveSoon(col, row) {
    const that = this;
    setTimeout(() => {
      that.move(col, row);
      that.moveSoon(col, row);
    }, 1000);
  }
  move(col, row) {
    const intensity = this.model.get(col, row, 'moving', 0 );

    if (intensity > 0.1) {
      this.setMoving(col, row, intensity * 0.9);
      const south = this.model.getNeighbours(col, row).south;
      if (south) {
        this.setMoving(south.col, south.row, intensity * 0.9);
      }
    }
    else {
      if (Math.random() < 0.5) {
        this.setMoving(col, row, 1);
      }
    }
  }

  setMoving(col, row, intensity) {
    this.model.set(col, row, 'moving', intensity);
    this.model.set(col, row, 'r', 255 * intensity);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
  }
}
