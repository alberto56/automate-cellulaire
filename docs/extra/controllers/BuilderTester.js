class BuilderTester extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.setAlive(col, row, false);
      }
    }
    const that = this;
    this.config.controls.addButton('Test', () => {
      that.clearAndTest();
    });
    return super.init();
  }
  setAlive(col, row, alive) {
    this.model.set(col, row, 'alive', alive);
    this.model.set(col, row, 'r', alive ? this.config.alive.r : this.config.dead.r);
    this.model.set(col, row, 'g', alive ? this.config.alive.g : this.config.dead.g);
    this.model.set(col, row, 'b', alive ? this.config.alive.b : this.config.dead.b);
  }
  clearAndTest() {
    this.model.copyFromModel(this.config.model);
  }
}
