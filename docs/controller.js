class Controller {
  constructor(model, views, controllers, config) {
    this.model = model;
    this.views = views;
    this.controllers = controllers;
    this.config = config;
  }
  init() {
    return this;
  }
  respondToClick(col, row) {
  }
}
