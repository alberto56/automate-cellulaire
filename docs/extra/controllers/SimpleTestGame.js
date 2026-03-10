class SimpleTestGame extends Controller {
  init() {
    const that = this;
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        this.dead(col, row);
      }
    }
    const intervalId = setInterval(() => {
      that.react();
    }, 100);
    return super.init();
  }
  dead(col, row) {
    this.model.set(col, row, 'alive', false);
    this.model.set(col, row, 'fortress', false);
    this.model.set(col, row, 'outpost', false);
    this.model.set(col, row, 'direction', false);
    this.model.set(col, row, 'r', 255);
    this.model.set(col, row, 'g', 255);
    this.model.set(col, row, 'b', 255);
  }
  alive(col, row) {
    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
  }
  fortress(col, row) {
    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'fortress', true);
    this.model.set(col, row, 'r', 255);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
  }
  outpost(col, row, direction) {
    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'outpost', true);
    this.model.set(col, row, 'direction', direction);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 255);
    this.model.set(col, row, 'b', 0);
  }
  randomNeighbourId() {
    const ids = ['north', 'south', 'east', 'west', 'northEast', 'northWest', 'southEast', 'southWest'];
    return ids[Math.floor(Math.random() * ids.length)];
  }
  makeRandomNeighboursAlive(col, row, count) {
    const neighbours = this.model.getNeighbours(col, row);
    const keys = Object.keys(neighbours);
    for (let i = 0; i < count; i++) {
      const neighbourId = this.randomNeighbourId();
      const neighbour = neighbours[neighbourId];
      if (neighbour) {
        this.alive(neighbour.col, neighbour.row);
      }
    }
  }
  react() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        const neighbours = this.model.getNeighbours(col, row);
        // Rule 1. If a cell is surrouneded by exactly one alive cell, it dies.
        if (this.model.get(col, row, 'alive', false)) {
          if (this.countAlive(neighbours) === 1) {
            this.model.set(col, row, 'diesoon', true);
          }
        }
        // Rule 2. If a cell is surrouneded by exactly two alive cell, it dies.
        // but the it makes another random adjacent cell alive.
        if (this.model.get(col, row, 'alive', false)) {
          if (this.countAlive(neighbours) === 2) {
            this.model.set(col, row, 'diesoon', true);
            this.makeRandomNeighboursAlive(col, row, 1);
          }
        }
        // Rule 3. If a cell is surrouneded by exactly zero alive cell,
        // it stays alive and makes 3 random adjacent cells alive.
        if (this.model.get(col, row, 'alive', false)) {
          if (this.countAlive(neighbours) === 0) {
            this.makeRandomNeighboursAlive(col, row, 3);
          }
        }
        // Rule 4. Dead cells have a change of become alive.
        if (this.model.get(col, row, 'alive', false) === false) {
          if (Math.random() < 0.02) {
            this.model.set(col, row, 'livesoon', true);
          }
        }
        // Rule 5. If a cell has more than 6 neighbours it becomes
        // a fortress.
        if (this.model.get(col, row, 'alive', false)) {
          if (this.countAlive(neighbours) >= 6) {
            this.model.set(col, row, 'becomefortresssoon', true);
          }
        }
        // Rule 6. Fortress cells make their North, South, East and West
        // neighbours outposts.
        if (this.model.get(col, row, 'fortress', false)) {
          this.model.set(neighbours.east.col, neighbours.east.row, 'becomeoutposteast', true);
          this.model.set(neighbours.west.col, neighbours.west.row, 'becomeoutpostwest', true);
          this.model.set(neighbours.north.col, neighbours.north.row, 'becomeoutpostnorth', true);
          this.model.set(neighbours.south.col, neighbours.south.row, 'becomeoutpostsouth', true);
        }
        // Rule 7. Outposts want to continue is the same direction.
        if (this.model.get(col, row, 'outpost', false)) {
          if (this.model.get(col, row, 'direction') === 'east') {
            this.model.set(neighbours.east.col, neighbours.east.row, 'becomeoutposteast', true);
          }
          if (this.model.get(col, row, 'direction') === 'west') {
            this.model.set(neighbours.west.col, neighbours.west.row, 'becomeoutpostwest', true);
          }
          if (this.model.get(col, row, 'direction') === 'north') {
            this.model.set(neighbours.north.col, neighbours.north.row, 'becomeoutpostnorth', true);
          }
          if (this.model.get(col, row, 'direction') === 'south') {
            this.model.set(neighbours.south.col, neighbours.south.row, 'becomeoutpostsouth', true);
          }
        }
      }
    }
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (this.model.get(col, row, 'livesoon', false)) {
          this.alive(col, row);
        }
        if (this.model.get(col, row, 'becomefortresssoon', false)) {
          this.fortress(col, row);
        }
        if (this.model.get(col, row, 'becomeoutposteast', false)) {
          this.outpost(col, row, 'east');
        }
        if (this.model.get(col, row, 'becomeoutpostwest', false)) {
          this.outpost(col, row, 'west');
        }
        if (this.model.get(col, row, 'becomeoutpostnorth', false)) {
          this.outpost(col, row, 'north');
        }
        if (this.model.get(col, row, 'becomeoutpostsouth', false)) {
          this.outpost(col, row, 'south');
        }
        if (this.model.get(col, row, 'diesoon', false)) {
          this.model.set(col, row, 'diesoon', false);
          this.dead(col, row);
        }
      }
    }
  }
  countAlive(neighbours) {
    let count = 0;
    for (const key in neighbours) {
      const neighbour = neighbours[key];
      if (this.model.get(neighbour.col, neighbour.row, 'alive', false)) {
        count++;
      }
    }
    return count;
  }
}
