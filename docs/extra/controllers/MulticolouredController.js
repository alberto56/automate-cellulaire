class MulticolouredController extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.model.set(col, row, 'r', Math.floor(Math.random() * 256));
        this.model.set(col, row, 'g', Math.floor(Math.random() * 256));
        this.model.set(col, row, 'b', Math.floor(Math.random() * 256));
      }
    }
    return super.init();
  }
}
