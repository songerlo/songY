<template>
    <div>
        <canvas id="canvas"></canvas>
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
    ctx.moveTo(0, 40 * i)
    ctx.lineTo(can.height, 40 * i)
  }

  ctx.lineWidth = 1
  ctx.stroke()
}
// can()
export default {
  mounted () {
    can()
  }
}
</script>

<style>
    canvas {
        border: solid 1px #333;
    }
</style>
