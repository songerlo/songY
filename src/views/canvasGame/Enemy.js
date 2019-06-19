import map from './Map.js'
class Enemy {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.hited = false
    this.width = Math.random() * 3
    this.speed = Math.random() * 3
  }
  update () {
    this.x -= this.speed
    this.y += this.speed
    if (this.x < -10) {
      this.x = map.width + 10 + Math.random() * 30
    }
    if (this.y > map.height + 10) {
      this.y = -10 + Math.random() * 30
    }
  }
  render () {
    map.ctx.beginPath()
    map.ctx.fillStyle = 'white'
    map.ctx.arc(this.x, this.y, 4, 0, Math.PI * 2)
    map.ctx.fill()
  }
}

export default Enemy
// export {
//   Enemy,
//   F1
// }
