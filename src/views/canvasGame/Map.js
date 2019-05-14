import BG from '../../assets/bg.png'
// console.log(BG);
class Map {
  constructor () {
  }
  init (options) {
    this.canvas = options.canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = options.width
    this.height = options.height
  }
  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  render () {
    // var fillImg = new Image()
    // fillImg.src = BG
    // fillImg.onload = () =>{
    //   this.clear()
    //   var bg = this.ctx.createPattern(fillImg, 'repeat')
    //   this.ctx.fillStyle = bg
    //   this.ctx.fillRect(0, 0, this.width, this.height)
    // } 背景图片

    this.clear()
    this.ctx.beginPath()
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.closePath()
  }
}
export default new Map()
