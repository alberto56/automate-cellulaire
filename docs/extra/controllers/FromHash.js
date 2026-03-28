class FromHash extends Controller {
  init() {
    const that = this;
    const canvas = document.getElementById('myCanvas'); // Replace with your canvas ID
  // Ensure you have a 2D context if you plan to draw
  // const ctx = canvas.getContext('2d');

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
