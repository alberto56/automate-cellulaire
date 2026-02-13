class View {
  constructor(canvasWidth, canvasHeight, canvasId, model) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.canvasId = canvasId;
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      throw new Error(`No canvas with id ${canvasId} found`);
    }
    this.model = model;
    this.model.subscribe(this);
    this.data = [];
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
      this.calcPixelWidth(),
      this.calcPixelHeight(),
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
      this.calcPixelWidth(),
      this.calcPixelHeight(),
    );
  }

  calcPixelWidth() {
    const ret = this.parent.canvasWidth / this.parent.model.cols;
    return ret;
  }
  calcPixelHeight() {
    const ret = this.parent.canvasHeight / this.parent.model.rows;
    return ret;
  }
  calcLeft() {
    const ret = this.col * this.calcPixelWidth();
    return ret;
  }
  calcTop() {
    const ret = this.row * this.calcPixelHeight();
    return ret;
  }

}
