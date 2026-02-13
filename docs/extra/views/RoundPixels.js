class RoundPixels extends View {
  newCell(parent, cellWidth, cellHeight) {
    return new RoundCell(parent, cellWidth, cellHeight);
  }
}

class RoundCell extends Cell {
  fillShape(left, top, width, height) {
    this.ctx.beginPath();
    // C'est copilot qui a trouvé ce qui suit!
    this.ctx.ellipse(
      left + width / 2,
      top + height / 2,
      width / 2,
      height / 2,
      0,
      0,
      2 * Math.PI,
    );
    this.ctx.fill();
  }
}
