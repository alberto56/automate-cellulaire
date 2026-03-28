class Builder extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.setAlive(col, row, false);
      }
    }
    return super.init();
  }
  matrixFits(rows, clickCol, clickRow) {
    let currentCol = clickCol;
    let currentRow = clickRow;

    for (let row of rows) {
      currentCol = clickCol;
      for (let col of row) {
        if (currentCol >= this.model.cols || currentRow >= this.model.rows) {
          return false;
        }
        currentCol++;
      }
      currentRow++;
    }
    return true;
  }
  respondToClick(col, row) {
    const currentState = this.model.get(col, row, 'alive');
    this.setAlive(col, row, !currentState);
  }
  setMatrixAlive(rows, clickCol, clickRow) {
    if (!this.matrixFits(rows, clickCol, clickRow)) {
      alert('Matrix does not fit in the grid at the specified position.');
      return;
    }
    const that = this;

    let currentCol = clickCol;
    let currentRow = clickRow;

    rows.forEach((row) => {
      currentCol = clickCol;
      row.forEach((col) => {
        that.setAlive(currentCol, currentRow, col == 1 ? true : false)
        currentCol++;
      });
      currentRow++;
    });
  }
  setAlive(col, row, alive) {
    this.model.set(col, row, 'alive', alive);
    this.model.set(col, row, 'r', alive ? this.config.alive.r : this.config.dead.r);
    this.model.set(col, row, 'g', alive ? this.config.alive.g : this.config.dead.g);
    this.model.set(col, row, 'b', alive ? this.config.alive.b : this.config.dead.b);
  }
}
