class Knife {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = 20
    this.h = 50
    this.vx = -1.5
    this.vy = 0
    this.ax = 0
    this.ay = 0
    this.img = new Image()
    this.img.src = 'assets/images/flat knife .png'
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h,
    )
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy
  }

  fall() {
    setInterval(() => {
      this.vx = 0
      this.vy = 2

    }, Math.floor(Math.random() * 1000000))
  }

  isVisible() {
    return (
      this.y < this.ctx.canvas.height &&
      this.y > 0 - (this.ctx.canvas.height)
    )
  }
}