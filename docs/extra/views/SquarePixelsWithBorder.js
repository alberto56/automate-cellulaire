class SquarePixelsWithBorder extends View {
  newCell(parent, cellWidth, cellHeight) {
    return new CellWithBorder(parent, cellWidth, cellHeight);
  }
}

class CellWithBorder extends Cell {
  fillShape(left, top, width, height) {
    this.ctx.fillRect(left, top, width, height);
    this.ctx.strokeRect(left, top, width, height);
  }
}
