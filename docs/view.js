class View {
  init(model) {
    this.model = model;
    this.model.subscribe(this);
    return this;
  }
}
