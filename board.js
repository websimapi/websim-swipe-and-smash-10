setupBoard() {
    this.boardElement.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.boardElement.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
}

/* ...existing code... */
        candiesToRemove.forEach(candy => candy.remove());
        
        await this.dropCandies();
        await this.fillBoard();
        
        await this.processMatches(false, null);
    }
}

