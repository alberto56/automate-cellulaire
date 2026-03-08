class GameOfLife extends Controller {
  init() {
    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        if (Math.random() < 0.05) {
          this.alive(col, row);
        } else {
          this.dead(col, row);
        }
      }
    }
    // Lancer la boucle principale
    setTimeout(() => this.tick(), 1000);
    return super.init();
  }

  dead(col, row) {
    this.model.set(col, row, 'alive', false);
    this.model.set(col, row, 'r', 255);
    this.model.set(col, row, 'g', 255);
    this.model.set(col, row, 'b', 255);
  }

  alive(col, row) {
    this.model.set(col, row, 'alive', true);
    this.model.set(col, row, 'r', 0);
    this.model.set(col, row, 'g', 0);
    this.model.set(col, row, 'b', 0);
  }

  tick() {
    // Étape 1 : calculer le prochain état de TOUTES les cellules
    const changes = [];

    for (let col = 0; col < this.model.cols; col++) {
      for (let row = 0; row < this.model.rows; row++) {
        const alive = this.model.get(col, row, 'alive', false);
        const neighbours = this.model.getNeighbours(col, row);
        const aliveCount = Object.values(neighbours)
          .filter(n => n.alive === true).length;

        if (alive && (aliveCount < 2 || aliveCount > 3)) {
          changes.push({ col, row, nextAlive: false });
        } else if (!alive && aliveCount === 3) {
          changes.push({ col, row, nextAlive: true });
        }
      }
    }

    // Étape 2 : appliquer tous les changements d'un coup
    changes.forEach(({ col, row, nextAlive }) => {
      nextAlive ? this.alive(col, row) : this.dead(col, row);
    });

    // Étape 3 : recommencer au prochain tour
    setTimeout(() => this.tick(), 1000);
  }
}
