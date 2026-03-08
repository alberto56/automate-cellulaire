class GameOfLife3 extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < 0.3) {
          this.setAlive(col, row, true);
        } else {
          this.setAlive(col, row, false);
        }
      }
    }
    setTimeout(() => this.tick(), 1000);
    return super.init();
  }

  setAlive(col, row, alive) {
    this.model.set(col, row, 'alive', alive);
    this.model.set(col, row, 'r', alive ? 0 : 255);
    this.model.set(col, row, 'g', alive ? 0 : 255);
    this.model.set(col, row, 'b', alive ? 0 : 255);
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

    setTimeout(() => this.tick(), 300);
  }
}
