<template>
    <div class="om" ref="om">
        <canvas
            id="canvas"
        ></canvas>
        <canvas
            id="canvas1"
        ></canvas>
        <!-- <div class="xp">xxx</div> -->
    </div>
</template>

<script>
// function can () {
//   var can = document.getElementById('canvas')
//   var ctx = can.getContext('2d')
//   can.width = 600
//   can.height = 600
//   //   lin(ctx, 40, can)
//   lin(ctx, can)
// }
// function lin (ctx, can) {
//   ctx.strokeStyle = 'red'
//   for (let i = 1; i < can.height / 40; i++) {
//     ctx.moveTo(0 - 0.5, 40 * i - 0.5)
//     ctx.lineTo(can.height - 0.5, 40 * i - 0.5)
//   }
//   ctx.lineWidth = 1
//   ctx.stroke()
// }
// can()
export default {
  mounted () {
    // can();
    let canvas = document.getElementById('canvas1')
    let ctx = canvas.getContext('2d')
    let can2 = document.getElementById('canvas')
    let ctx2 = can2.getContext('2d')
    let w = this.$refs.om.clientWidth
    let h = this.$refs.om.clientHeight
    can2.width = canvas.width = w
    can2.height = canvas.height = h
    var flag = false
    let { n, m } = { n: 0, m: 0 }
    let c = canvas.getBoundingClientRect()
    let x = 0
    let y = 0
    let sx = 0; let sy = 0; let sx1 = 0; let sy1 = 0
    let type = 2
    canvas.addEventListener('mousedown', function () {
      flag = true
      n = event.clientX - c.left * (canvas.width / c.width)
      m = event.clientY - c.top * (canvas.height / c.height)
      sx = n
      sy = m
    })
    canvas.addEventListener('mouseup', function () {
      flag = false
      ctx.clearRect(0, 0, w, h)
      sx1 = x = event.clientX - c.left * (canvas.width / c.width)
      sy1 = y = event.clientY - c.top * (canvas.height / c.height)
    //   ctx2.beginPath()
    //   ctx2.moveTo(sx, sy)
    //   ctx2.lineTo(sx1, sy1)
    //   ctx2.stroke()
    })
    canvas.addEventListener('mousemove', function () {
      if (flag) {
        var random = (Math.random() * 100)
        if (type === 2) {
          ctx2.clearRect(n, m, 100, 100)
          ctx2.strokeRect(n, m, 100, 100)
        }
        x = event.clientX - c.left * (canvas.width / c.width)
        y = event.clientY - c.top * (canvas.height / c.height)
        ctx.strokeStyle = 'skyblue'
        ctx.beginPath()
        ctx.moveTo(n, m)
        ctx.lineTo(x, y)
        ctx.lineWidth = 3
        n = x
        m = y
        ctx.stroke()
      }
    })
  }
}
</script>

<style>
.om {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
}
.om canvas {
    position: absolute;
    top: 0;
    left: 0;
}
.xp {
    background: #000;
    color: #fff;
    line-height: 50px;
    text-align: center;
    width: 120px;
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 100px;
    cursor: pointer;
    border-radius: 10px;
}
canvas {
    /* border: solid 1px #333; */
}
</style>
