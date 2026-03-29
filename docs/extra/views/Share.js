class Share {
  constructor(model, config) {
    this.config = config;
    this.model = model;
  }
  init() {
    this.model.subscribe(this);
  }
  coordsToCell(x, y) {
    return { col, row };
  }
  update(col, row, property, value) {
    this.recalc();
  }
  recalc() {
    const arr = this.model.toArray((cell) => cell.alive, '1', '0');
    const encoding = new Encodings().fromArrayOfArrays(arr, '0').trim().toCGV1();
    const url = `${window.location.origin}${window.location.pathname}#${encoding}`;
    this.config.urlElem.textContent = url;
  }
}
