/**
 * A model.
 *
 * In each model, we have a grid of cells. Each cells can have arbitrary
 * properties, and can interact with its neighbors.
 *
 * Run (new Model(10, 10)).selfTest() for a simple test.
 */
class Model {
  constructor(cols, rows) {
    if (!cols || !rows) {
      throw new Error("Model constructor requires cols and rows, try new Model(10, 10)");
    }
    this.cols = cols;
    this.views = [];
    this.rows = rows;
    this.data = [];
    for (let col = 0; col < cols; col++) {
      const rowData = [];
      for (let row = 0; row < rows; row++) {
        rowData.push({
          col: col,
          row: row,
        });
      }
      this.data.push(rowData);
    }
  }
  init() {
    return this;
  }
  subscribe(view) {
    this.views.push(view);
  }
  selfTest() {
    this.set(1, 1, 'color', 'red');
    this.assert(1, 1, 'color', 'red');
    this.set(-1, -1, 'color', 'red');
    // Out of bounds returns null
    this.assert(-1, -1, 'color', null);
    this.set(1, 2, 'prop1', 1);
    this.set(1, 2, 'prop2', 2);
    this.assert(1, 2, 'prop1', 1);
    this.assert(1, 2, 'prop2', 2);
    this.assertAll(1, 2, {
      col: 1,
      row: 2,
      prop1: 1,
      prop2: 2,
    });
    this.assertNeighbours(1, 2, {
      north: { col: 1, row: 1, color: 'red' },
      east: { col: 2, row: 2 },
      west: { col: 0, row: 2 },
      south: { col: 1, row: 3 },
      northEast: { col: 2, row: 1 },
      northWest: { col: 0, row: 1 },
      southEast: { col: 2, row: 3 },
      southWest: { col: 0, row: 3 },
    });
    this.assertNeighbours(0, 0, {
      north: {},
      east: { col: 1, row: 0 },
      west: {},
      south: { col: 0, row: 1 },
      northEast: {},
      northWest: {},
      southEast: { col: 1, row: 1, color: 'red' },
      southWest: {},
    });
    this.assertNeighbours(1000, 1000, {
      north: {},
      east: {},
      west: {},
      south: {},
      northEast: {},
      northWest: {},
      southEast: {},
      southWest: {},
    });
    console.log("All tests passed!");
  }
  set(col, row, property, value) {
    if (this.colRowIsOutOfBounds(col, row)) {
      return;
    }
    this.data[col][row][property] = value;
  }
  get(col, row, property, defaultIfOutOfBounds = null) {
    if (this.colRowIsOutOfBounds(col, row)) {
      return defaultIfOutOfBounds;
    }
    return this.data[col][row][property];
  }
  getAll(col, row) {
    if (this.colRowIsOutOfBounds(col, row)) {
      return {};
    }
    return this.data[col][row];
  }
  colRowIsOutOfBounds(col, row) {
    return col < 0 || col >= this.cols || row < 0 || row >= this.rows;
  }
  assertAll(col, row, expectedValue) {
    const actualValue = JSON.stringify(this.getAll(col, row));
    expectedValue = JSON.stringify(expectedValue);
    if (actualValue !== expectedValue) {
      throw new Error(`Expected ${expectedValue} but got ${actualValue}`);
    }
    console.log(`Assertion passed: (${col}, ${row}) is ${expectedValue}`);
  }
  assert(col, row, property, expectedValue) {
    const actualValue = this.get(col, row, property);
    if (actualValue !== expectedValue) {
      throw new Error(`Expected ${expectedValue} but got ${actualValue}`);
    }
    console.log(`Assertion passed: ${property} at (${col}, ${row}) is ${expectedValue}`);
  }
  assertNeighbours(col, row, expectedNeighbours) {
    const actualNeighbours = this.getNeighbours(col, row);
    const expectedNeighboursStr = JSON.stringify(expectedNeighbours);
    const actualNeighboursStr = JSON.stringify(actualNeighbours);
    if (actualNeighboursStr !== expectedNeighboursStr) {
      console.error(actualNeighbours);
      console.error(expectedNeighbours);
      throw new Error(`Expected neighbors ${expectedNeighboursStr} but got ${actualNeighboursStr}`);
    }
    console.log(`Assertion passed: neighbors of (${col}, ${row}) are ${expectedNeighboursStr}`);
  }
  getNeighbours(col, row) {
    return {
      north: this.getAll(col, row - 1),
      east: this.getAll(col + 1, row),
      west: this.getAll(col - 1, row),
      south: this.getAll(col, row + 1),
      northEast: this.getAll(col + 1, row - 1),
      northWest: this.getAll(col - 1, row - 1),
      southEast: this.getAll(col + 1, row + 1),
      southWest: this.getAll(col - 1, row + 1),
    }
  }

}
