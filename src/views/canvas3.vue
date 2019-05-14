<template>
  <div>
    <div class="tan"></div>
    <canvas id="canvas3"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    let canvas3 = document.getElementById('canvas3')
    let ctx = canvas3.getContext('2d')
    let windowW = window.innerWidth
    let windowH = window.innerHeight
    canvas3.width = windowW
    canvas3.height = windowH

    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.quadraticCurveTo(150, 200, 300, 300)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.moveTo(150, 100)
    ctx.bezierCurveTo(0, 125, 300, 275, 150, 400)
    ctx.stroke()

    function drawScreen () {
      ctx.fillStyle = 'black'
      ctx.fillRect(10, 10, 200, 200)
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, 0, 50, 50)
      ctx.clip()
      ctx.beginPath()
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 5
      ctx.arc(100, 100, 100, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
      ctx.beginPath()
      ctx.rect(0, 0, 500, 500)
      ctx.clip()
      ctx.beginPath()
      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 5
      ctx.arc(100, 100, 50, 0, Math.PI * 2)
      ctx.stroke()
      ctx.closePath()
      // ctx.fill()
    }
    drawScreen()
    drawScreen1()
    function drawScreen1 () {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      var x = 100; var y = 100
      var width = 50; var height = 50
      var an = 45 * Math.PI / 180
      ctx.save()
      ctx.translate(x + 0.5 * width, y + 0.5 * height) // 改变旋转圆点 圆心坐标是 0，0
      ctx.rotate(an)
      ctx.fillStyle = 'red'
      ctx.fillRect(-0.5 * width, -0.5 * height, 50, 50) // 改变后原点的起始点就是 宽度* -0.5，高度*-0.5
      ctx.restore()
      ctx.fillStyle = 'blue'
      ctx.scale(2, 2) // 缩小放大同理 同上
      ctx.fillRect(100, 100, 50, 50)
    }
  }
}
</script>

<style lang='scss'>
#canvas3 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
}
.tan {
  width: 20px;
  height: 20px;
  transform: scaleY(0.75);
  background: #d0d0d0;
  position: relative;
  left: 500px;
  border-radius: 50%;
  opacity: 0.7;

  &:after {
    content: '';
    width: 80%;
    height: 80%;
    background: #c3c3c3;
    position: absolute;
    left: 10%;
    top: 10%;
    border-radius: 50%;
  }
}

</style>
