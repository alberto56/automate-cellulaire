
class Algo {
  constructor(visual) {
    this.visual = visual;
    this.controllers = [];
    this.start();
  }
  start() {
    const that = this;
    this.visual.cells.forEach((cell) => {
      this.controllers.push(new Controller(cell));
    });
  }
}

class Controller {
  constructor(cell) {
    this.cell = cell;
    const that = this;
    this.changeColorSoon();
  }
  changeColorSoon() {
    const that = this;
    setTimeout(() => {
      that.changeColor();
      that.changeColorSoon();
    }, Math.random() * 1000);
  }
  changeColor() {
    const color = this.cell.color;
    if (color.r > 128) {
      color.r = Math.max(color.r - 10, 128);
    } else {
      color.r = Math.min(color.r + 10, 128);
    }
    if (color.g > 128) {
      color.g = Math.max(color.g - 10, 128);
    } else {
      color.g = Math.min(color.g + 10, 128);
    }
    if (color.b > 128) {
      color.b = Math.max(color.b - 10, 128);
    } else {
      color.b = Math.min(color.b + 10, 128);
    }
    this.cell.changeColor(color);
  }
}
