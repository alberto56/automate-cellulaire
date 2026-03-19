class Multilayer extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.seed(col, row);
      }
    }
    setTimeout(() => this.tick(), this.config.speed);
    return super.init();
  }

  seed(col, row) {
    const that = this;
    this.config.seeds.forEach(seed => {
      if (Math.random() < seed.probability) {
        seed.attributes.forEach(attr => {
          that.set(col, row, attr.name, attr.value);
        });
      }
    });
    this.color(col, row);
  }

  set(col, row, attr, value) {
    this.model.set(col, row, attr, value);
    this.color(col, row);
  }

  color(col, row) {
    if (this.model.get(col, row, 'worker')) {
      this.model.set(col, row, 'r', 255);
      this.model.set(col, row, 'g', 0);
      this.model.set(col, row, 'b', 0);
    }
    else if (this.model.get(col, row, 'opportunist')) {
      this.model.set(col, row, 'r', 0);
      this.model.set(col, row, 'g', 0);
      this.model.set(col, row, 'b', 255);
    }
    else if (this.model.get(col, row, 'food')) {
      this.model.set(col, row, 'r', 0);
      this.model.set(col, row, 'g', 255);
      this.model.set(col, row, 'b', 0);
    }
    else {
      this.model.set(col, row, 'r', 255);
      this.model.set(col, row, 'g', 255);
      this.model.set(col, row, 'b', 255);
    }
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
