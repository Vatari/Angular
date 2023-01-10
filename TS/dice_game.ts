interface Player {
  name: string;
  score: number;
}

class Game {
  players: Player[];

  constructor() {
    this.players = [
      { name: "player1", score: 0 },
      { name: "player2", score: 0 },
    ];
  }

  play() {
    while (!this.gameOver()) {
      this.players.forEach((player) => {
        player.score += this.rollDice();
      });
    }
    console.log(
      `The winner is ${this.getWinner().name} with a score of ${
        this.getWinner().score
      }`
    );
  }

  private gameOver(): boolean {
    return this.players.some((player) => player.score >= 20);
  }

  private rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  private getWinner(): Player {
    return this.players.reduce((prev, current) =>
      prev.score > current.score ? prev : current
    );
  }
}

let game = new Game();
game.play();
