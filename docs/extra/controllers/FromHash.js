class FromHash extends Controller {
  init() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      try {
        const matrix = new Encodings().fromCGV1(hash).toArrayOfArrays();
        this.controllers.forEach(controller => {
          if (controller instanceof Builder) {
            controller.setMatrixAliveCenter(matrix, 0, 0);
          }
        });
        console.log('Decoded encoding from hash:', matrix);
      } catch (e) {
        console.error('Failed to decode encoding from hash:', e);
      }
    }
  }
}
