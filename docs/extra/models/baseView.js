class BaseView {
  constructor(canvasId, cellWidth, cellHeight) {
    this.canvas = document.getElementById(canvasId);
    this.cells = [];
    this.pixelHeight = this.canvas.height;
    this.pixelWidth = this.canvas.width;
    this.cellHeight = cellHeight;
    this.cellWidth = cellWidth;
    this.build();
  }
  build() {
    for (let cellHeight = 0; cellHeight < this.cellHeight; cellHeight++) {
      for (let cellWidth = 0; cellWidth < this.cellWidth; cellWidth++) {
        const cell = this.newCell(
          this,
          cellWidth,
          cellHeight,
        )
        this.cells.push(cell);
      }
    }
  }
  randomColor() {
    return new Color(
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    );
  }
  newCell(parent, cellWidth, cellHeight) {
    return new Cell(parent, cellWidth, cellHeight);
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
  constructor(parent, cellWidth, cellHeight) {
    this.parent = parent;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.ctx = this.parent.canvas.getContext("2d");
    this.setColor(this.parent.randomColor());
    this.fillShape(
      this.calcLeft(),
      this.calcTop(),
      this.calcPixelWidth(),
      this.calcPixelHeight(),
    );
  }

  setColor(color) {
    this.color = color;
    this.ctx.fillStyle = this.color.toRgb();
  }

  fillShape(left, top, width, height) {
    this.ctx.fillRect(left, top, width, height);
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
    const ret = this.parent.pixelWidth / this.parent.cellWidth;
    return ret;
  }
  calcPixelHeight() {
    const ret = this.parent.pixelHeight / this.parent.cellHeight;
    return ret;
  }
  calcLeft() {
    const ret = this.cellWidth * this.calcPixelWidth();
    return ret;
  }
  calcTop() {
    const ret = this.cellHeight * this.calcPixelHeight();
    return ret;
  }

}
