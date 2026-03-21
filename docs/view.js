class View {
  constructor(model, config) {
    this.config = config;
    this.canvasId = this.config.canvas;
    this.canvasWidth = this.config.width;
    this.canvasHeight = this.config.height;
    this.canvas = document.getElementById(this.canvasId);
    this.canvas.height = this.canvasHeight;
    this.canvas.width = this.canvasWidth;
    if (!this.canvas) {
      const canvasIdJson = JSON.stringify(canvasId);
      throw new Error(`No canvas with id ${canvasIdJson} found`);
    }
    this.model = model;
    this.model.subscribe(this);
    this.data = [];
  }
  calcPixelWidth() {
    const ret = this.canvasWidth / this.model.cols;
    return ret;
  }
  calcPixelHeight() {
    const ret = this.canvasHeight / this.model.rows;
    return ret;
  }
  coordsToCell(x, y) {
    const col = Math.floor(x / this.calcPixelWidth());
    const row = Math.floor(y / this.calcPixelHeight());
    return { col, row };
  }
  newCell(parent, cellWidth, cellHeight) {
    return new Cell(parent, cellWidth, cellHeight);
  }
  init() {
    this.model.subscribe(this);
    for (let col = 0; col < this.model.cols; col++) {
      const rowData = [];
      for (let row = 0; row < this.model.rows; row++) {
        rowData.push(this.newCell(
          this,
          col,
          row,
        ));
      }
      this.data.push(rowData);
    }
    return this;
  }
  update(col, row, property, value) {
    this.data[col][row].changeColor(this.cellColor(col, row));
  }
  cellColor(col, row) {
    return new Color(
      this.model.get(col, row, 'r', 0),
      this.model.get(col, row, 'g', 0),
      this.model.get(col, row, 'b', 0),
    );
  }
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  toRgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

class Cell {
  constructor(parent, col, row) {
    this.parent = parent;
    this.col = col;
    this.row = row;
    this.ctx = this.parent.canvas.getContext("2d");
    this.setColor(this.parent.cellColor(this.col, this.row));
    this.fillShape(
      this.calcLeft(),
      this.calcTop(),
      this.parent.calcPixelWidth(),
      this.parent.calcPixelHeight(),
    );
  }

  fillShape(left, top, width, height) {
    this.ctx.fillRect(left, top, width, height);
  }

  setColor(color) {
    this.color = color;
    this.ctx.fillStyle = this.color.toRgb();
  }

  changeColor(color) {
    this.setColor(color);
    this.fillShape(
      this.calcLeft(),
      this.calcTop(),
      this.parent.calcPixelWidth(),
      this.parent.calcPixelHeight(),
    );
  }

  calcLeft() {
    const ret = this.col * this.parent.calcPixelWidth();
    return ret;
  }
  calcTop() {
    const ret = this.row * this.parent.calcPixelHeight();
    return ret;
  }

}
