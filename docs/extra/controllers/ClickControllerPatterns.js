class ClickControllerPatterns extends Controller {
  init() {
    const that = this;
    const canvas = document.getElementById('myCanvas');

    this.initToolbox();

    canvas.addEventListener('click', function(event) {
      const mousePos = that.getMousePosition(canvas, event);
      // You can now use these coordinates for collision detection or drawing
      that.views.forEach(view => {
        const cellCoords = view.coordsToCell(mousePos.x, mousePos.y);
        that.initiateClick(cellCoords.col, cellCoords.row);
      });
    }, false);
    return this;
  }
  initToolbox() {
    const that = this;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      JSON.parse(this.responseText).patterns.forEach(pattern => {
        if (pattern.variants) {
          let i = 0;
          pattern.variants.forEach(variant => {
            const button = document.createElement('button');
            button.innerText = pattern.name + ' - variant ' + ++i;
            button.addEventListener('click', function() {
              that.pattern = pattern;
              that.variant = variant;
            });
            console.log(variant);
            document.getElementById(that.config.id).appendChild(button);
          });
        }
      });
    }
    xhttp.open("GET", "api/v1/patterns.json", true);
    xhttp.send();
  }
  initiateClick(col, row) {
    console.log(this.controllers);
    this.controllers.forEach(controller => {
      if (typeof controller !== 'undefined') {
        controller.respondToClick(col, row, this);
      }
    });
  }
  getMousePosition(canvas, event) {
      // Get the position and size of the canvas relative to the viewport
      const rect = canvas.getBoundingClientRect();

      // Calculate the X and Y coordinates relative to the canvas
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      return { x, y };
  }

}
