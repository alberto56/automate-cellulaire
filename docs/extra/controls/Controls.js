class Controls {
  constructor(id) {
    this.container = document.getElementById(id);
    this.buttons = [];
  }
  addButton(label, onClick) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', onClick);
    this.container.appendChild(button);
    this.buttons.push(button);
  }
}
