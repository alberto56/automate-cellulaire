
class MakeMeGrey extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.changeColorSoon(col, row);
      }
    }
    return super.init();
  }
  changeColorSoon(col, row) {
    const that = this;
    setTimeout(() => {
      that.changeColor(col, row);
      that.changeColorSoon(col, row);
    }, Math.random() * 1000);
  }
  changeColor(col, row) {
    const that = this;
    ['r', 'g', 'b'].forEach((color) => {
      const value = this.model.get(col, row, color, 0);
      if (value > 128) {
        that.model.set(col, row, color, Math.max(value - 10, 128));
      } else {
        that.model.set(col, row, color, Math.min(value + 10, 128));
      }
    });
  }
}
