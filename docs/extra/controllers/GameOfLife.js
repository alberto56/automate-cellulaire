class GameOfLife extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < 0.05) {
          this.alive(col, row);
        }
        else {
          this.dead(col, row);
        }
      }
    }
    return super.init();
  }
  dead(col, row) {
    this.model.set(col, row, 'alive', false);
    this.model.set(col, row, 'r', 255);
    this.model.set(col, row, 'g', 255);
    this.model.set(col, row, 'b', 255);
  }
  alive(col, row) {
    if (this.model.get(col, row, 'alive', false)) {
      return;
    }

    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
    this.reactSoon(col, row);
  }
  reactSoon(col, row) {
    const that = this;
    setTimeout(() => {
      that.react(col, row);
    }, 1000);
  }
  
  
  react(col, row) {
  const alive = this.model.get(col, row, 'alive', false);
  const neighbours = this.model.getNeighbours(col, row);

  // Étape 1 : compter les voisins vivants
  const aliveCount = Object.values(neighbours)
    .filter(n => n.alive === true)
    .length;

  // Étape 2 : appliquer les règles
  if (alive) {
    if (aliveCount === 2 || aliveCount === 3) {
      // Survit — on ne fait rien
    } else {
      this.dead(col, row);  // Meurt d'isolement ou surpopulation
    }
  } else {
    if (aliveCount === 3) {
      this.alive(col, row);  // Naît
    }
  }
}