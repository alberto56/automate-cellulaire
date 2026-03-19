class GameOfLife5 extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.initCell(col, row);
      }
    }
    setTimeout(() => this.tick(), this.config.speed);
    return super.init();
  }

  initCell(col, row) {
    this.config.initialProbability.forEach(prob => {
      if (Math.random() < prob) {
        this.setCell(col, row, prob.state);
      } else {
        this.setAlive(col, row, false);
      }
    });
  }

  respondToClick(col, row) {
    this.setMatrixAlive(this.convertStringsToNum([
      "*",
    ]), col, row);
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

  setMatrixAlive(rows, clickCol, clickRow) {
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
    const that = this;
    const changes = [];

    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        const alive = this.model.get(col, row, 'alive', false);
        const neighbours = this.model.getNeighbours(col, row);
        const aliveCount = Object.values(neighbours)
          .filter(n => n.alive === true).length;

        this.config.rules.forEach(rule => {
          that.applyRule(rule, col, row, aliveCount, alive, changes);
        });
      }
    }

    changes.forEach(({ col, row, nextAlive }) => {
      this.setAlive(col, row, nextAlive);
    });

    setTimeout(() => this.tick(), this.config.speed);
  }

  applyRule(rule, col, row, aliveCount, alive, changes) {
    if (rule.previouslyAlive != alive) {
      return;
    }
    if (rule.aliveNeighbours.compare == 'lessthan') {
      if (aliveCount < rule.aliveNeighbours.count) {
        changes.push({ col, row, nextAlive: rule.nextAlive });
      }
    }
    if (rule.aliveNeighbours.compare == 'morethan') {
      if (aliveCount > rule.aliveNeighbours.count) {
        changes.push({ col, row, nextAlive: rule.nextAlive });
      }
    }
    if (rule.aliveNeighbours.compare == 'equals') {
      if (aliveCount == rule.aliveNeighbours.count) {
        changes.push({ col, row, nextAlive: rule.nextAlive });
      }
    }
    return changes;
  }

}
