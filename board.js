setupBoard() {
    this.boardElement.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.boardElement.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

