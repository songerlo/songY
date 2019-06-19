class Created {
  constructor (width, height, bgc, radius) {
    this.width = width
    this.height = height
    this.background = bgc
    this.radius = radius
    this.top = this.random(1, window.innerHeight)
    this.left = this.random(1, window.innerWidth)
    this.div = document.createElement('div')
  }
  init () {
    var div = this.div
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    div.style.background = this.random(2)
    div.style.borderRadius = this.radius
    div.style.position = 'absolute'
    div.style.top = this.top + 'px'
    div.style.left = this.left + 'px'
    document.body.appendChild(div)
  }
  random (type, w) {
    if (type === 1) {
      return Math.random() * w
    }
    if (type === 2) {
      return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')'
    }
  }
}
export default Created
