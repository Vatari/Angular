class SnakeGame {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private snake: Snake;
    private food: Food;
    private direction: Direction;
    private speed: number;
    private running: boolean;
  
    constructor(canvasId: string) {
      this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.snake = new Snake(this.ctx);
      this.food = new Food(this.ctx, this.snake);
      this.direction = Direction.Right;
      this.speed = 100;
      this.running = false;
    }
  
    start() {
      this.running = true;
      this.mainLoop();
    }
  
    stop() {
      this.running = false;
    }
  
    private mainLoop() {
      if (!this.running) {
        return;
      }
  
      this.update();
      this.draw();
  
      setTimeout(() => this.mainLoop(), this.speed);
    }
  
    private update() {
      this.snake.update(this.direction);
  
      if (this.snake.collidesWithFood(this.food)) {
        this.snake.eat();
        this.food.randomize();
      }
    }
  
    private draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.food.draw();
      this.snake.draw();
    }
  }
  
  class Snake {
    // Implementation details omitted
  }
  
  class Food {
    // Implementation details omitted
  }
  
  enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  