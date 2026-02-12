
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
    }, Math.random() * 4000);
  }
  changeColor() {
    const color = this.cell.color;
    if (color.r > 128) {
      color.r -= 10;
    } else {
      color.r += 10;
    }
    if (color.g > 128) {
      color.g -= 10;
    } else {
      color.g += 10;
    }
    if (color.b > 128) {
      color.b -= 10;
    } else {
      color.b += 10;
    }
    this.cell.changeColor(color);
  }
}
