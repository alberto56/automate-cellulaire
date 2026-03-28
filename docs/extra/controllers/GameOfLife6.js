class GameOfLife6 extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < this.config?.initialAliveProbability) {
          this.setAlive(col, row, true);
        } else {
          this.setAlive(col, row, false);
        }
      }
    }
    setTimeout(() => this.tick(), this.config.speed);
    return super.init();
  }

  respondToClick(col, row, clickController) {
    this.setMatrixAlive(this.convertStringsToNum(clickController.variant.pattern), col, row);
  }

  convertStringsToNum(strings) {
    let ret = [];
    strings.forEach(row => {
      let rowItems = [];
      row.split('').forEach(letter => {
        rowItems.push(letter == "*" ? 1 : 0);
      });
      ret.push(rowItems);
    });
    return ret;
  }

  setFromCGV1(col, row, cgv1) {
    this.setMatrixAlive(
      (new Encodings()).fromCGV1(cgv1).toArrayOfArrays(),
      col,
      row,
    )
  }

  setMatrixAlive(rows, clickCol, clickRow) {
    console.log(rows);
    const that = this;

    let currentCol = clickCol;
    let currentRow = clickRow;

    rows.forEach((row) => {
      currentCol = clickCol;
      row.forEach((col) => {
        that.setAlive(currentCol, currentRow, col ? true : false)
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

  tick() {
    const changes = [];

    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        const alive = this.model.get(col, row, 'alive', false);
        const neighbours = this.model.getNeighbours(col, row);
        const aliveCount = Object.values(neighbours)
          .filter(n => n.alive === true).length;

        if (alive && (aliveCount < 2 || aliveCount > 3)) {
          changes.push({ col, row, nextAlive: false });
        } else if (!alive && aliveCount === 3) {
          changes.push({ col, row, nextAlive: true });
        }
      }
    }

    changes.forEach(({ col, row, nextAlive }) => {
      this.setAlive(col, row, nextAlive);
    });

    setTimeout(() => this.tick(), this.config.speed);
  }
}
