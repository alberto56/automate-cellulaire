class Butterflies extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < this.config.start) {
          this.alive(col, row);
        }
        else {
          this.dead(col, row);
        }
      }
    }
    return super.init();
  }
  respondToClick(col, row) {
    this.alive(col, row);
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
    const dir = this.randomDirection();
    this.model.set(col, row, 'direction', dir);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
    this.reactSoon(col, row);
  }
  randomDirection() {
    const directions = ['northEast', 'southEast', 'southWest', 'northWest'];
    const index = Math.floor(Math.random() * directions.length);
    return directions[index];
  }
  reactSoon(col, row) {
    const that = this;
    setTimeout(() => {
      that.react(col, row);
    }, this.config.speed);
  }
  react(col, row) {
    const alive = this.model.get(col, row, 'alive', false);

    if (alive) {
      const neighbours = this.model.getNeighbours(col, row);
      const direction = this.model.get(col, row, 'direction', 'southEast');
      this.alive(neighbours[direction].col, neighbours[direction].row);
      this.dead(col, row);
    }

    // Implement other rules here...
  }
}
