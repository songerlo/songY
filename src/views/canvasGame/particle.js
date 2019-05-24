import map from './Map'

var ran = Math.random

export default class Particle {
  constructor (option) {
    this.x = option.x
    this.y = option.y
    this.size = option.size || 2
    this.color = option.color || '#fff'
    this.vx = -2 + 4 * ran()
    this.vy = -2 + 4 * ran()
    this.destory = false
    this.width = this.size + ran() * 2
    this.height = this.size + ran() * 2
    this.speed = 0.04
  }
  update () {
    this.x += this.vx
    this.y += this.vy
    this.width -= this.speed
    this.height -= this.speed

    if (this.width < 0) {
      this.destory = true
    }
  }

  render () {
    map.ctx.fillStyle = this.color
    map.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
