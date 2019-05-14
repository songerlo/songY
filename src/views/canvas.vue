<template>
    <div>
        <canvas id='canvas'></canvas>
    </div>
</template>

<script>

export default {
  data () {
    return {
      circleArray: []
    }
  },
  mounted () {
    var circleArray = []
    var canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var ctx = canvas.getContext('2d')
    var maxRadius = 40
    var colorArray = [
      '#58D68D',
      '#E67F22',
      '#3598DB',
      '#E84C3D',
      '#9A59B5',
      '#27AE61',
      '#D25400',
      '#BEC3C7',
      '#297FB8'
    ]
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    })
    var mouse = {
      x: 0,
      y: 0
    }
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.x
      mouse.y = e.y
    })
    function init () {
      circleArray = []
      for (var i = 0; i < 800; i++) {
        var x = Math.random() * window.innerWidth
        var y = Math.random() * window.innerHeight
        var dx = (Math.random() - 0.5) * 2
        var dy = (Math.random() - 0.5) * 2
        var radius = Math.random() * 3 + 1
        circleArray.push(new Circle(x, y, dx, dy, radius))
      }
    }
    function Circle (x, y, dx, dy, radius) {
      this.x = x
      this.y = y
      this.dx = dx
      this.dy = dy
      this.radius = radius
      this.minRadius = radius
      this.bg = colorArray[Math.floor(Math.random() * colorArray.length)]

      this.draw = function () {
        ctx.beginPath()
        // ctx.stroeStyle = "#000"  //边框线
        ctx.fillStyle = this.bg
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        // ctx.stroke()
        ctx.fill()
      }
      this.updata = function () {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dx
        }
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < maxRadius) {
            this.radius += 1
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
      }
    }
    init()
    function animate () {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      requestAnimationFrame(animate)
      // console.log(circleArray);
      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].updata()
      }
    }
    animate()
  }
}
</script>

<style>
 #canvas {
     position: fixed;
     top: 0;
     left: 0;
     z-index: -99;
 }
</style>
