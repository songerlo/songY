<template>
    <div>
        <canvas id="canvas" width="600" height="600"></canvas>
    </div>
</template>

<script>
function can () {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')
  can.width = 600
  can.height = 600
  //   lin(ctx, 40, can)
  lin(ctx, can)
}
function lin (ctx, can) {
  ctx.strokeStyle = 'red'
  for (let i = 1; i < can.height / 40; i++) {
    ctx.moveTo(0 - 0.5, 40 * i - 0.5)
    ctx.lineTo(can.height - 0.5, 40 * i - 0.5)
  }
  ctx.lineWidth = 1
  ctx.stroke()
}
// can()
export default {
  mounted () {
    // can();
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    var flag = false
    let { n, m } = { n: 0, m: 0 }
    let c = canvas.getBoundingClientRect()
    canvas.addEventListener('mousedown', function () {
      flag = true
      n = event.clientX - c.left * (canvas.width / c.width)
      m = event.clientY - c.top * (canvas.height / c.height)
    })
    canvas.addEventListener('mouseup', function () {
      flag = false
    })
    canvas.addEventListener('mousemove', function () {
      if (flag) {
        let x = event.clientX - c.left * (canvas.width / c.width)
        let y = event.clientY - c.top * (canvas.height / c.height)
        ctx.strokeStyle = 'skyblue'
        ctx.beginPath()
        ctx.moveTo(n, m)
        ctx.lineTo(x, y)
        n = x
        m = y
        ctx.stroke()
      }
    })
  }
}
</script>

<style>
canvas {
    border: solid 1px #333;
}
</style>
