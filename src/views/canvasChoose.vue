<template>
    <div class="om" ref="om">
        <canvas id="canvas"></canvas>
        <canvas id="canvas1"></canvas>
        <div class="mm">
            <div class="xp" @click="km(1)" :class="[index === 1 ? 'active':'']">1</div>
            <div class="xp" @click="km(2)" :class="[index === 2 ? 'active':'']">2</div>
            <div class="xp" @click="km(3)" :class="[index === 3 ? 'active':'']">3</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      type: 1,
      index: 1
    }
  },
  methods: {
    km (sm) {
      this.type = sm
      this.index = sm
    }
  },
  mounted () {
    // can();
    console.log(this.type)
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
    let that = this
    canvas.addEventListener('mousedown', function () {
      flag = true
      sx = n = event.clientX - c.left * (canvas.width / c.width)
      sy = m = event.clientY - c.top * (canvas.height / c.height)
    })
    canvas.addEventListener('mouseup', function () {
      flag = false
      ctx.clearRect(0, 0, w, h)
      sx1 = x = event.clientX - c.left * (canvas.width / c.width)
      sy1 = y = event.clientY - c.top * (canvas.height / c.height)
      if (that.type === 1) {
        ctx2.beginPath()
        ctx2.moveTo(sx, sy)
        ctx2.lineTo(sx1, sy1)
        ctx2.stroke()
      }
      if (that.type === 2) {
        ctx2.strokeRect(sx, sy, x - n, y - m)
      }
      sx = sy = sx1 = sy1 = 0
    })
    canvas.addEventListener('mousemove', function () {
      x = event.clientX - c.left * (canvas.width / c.width)
      y = event.clientY - c.top * (canvas.height / c.height)
      ctx.strokeStyle = 'skyblue'
      if (flag) {
        if (that.type === 2) {
          ctx.clearRect(0, 0, w, h)
          ctx.strokeRect(sx, sy, x - n, y - m)
        }
        if (that.type === 1) {
          ctx.beginPath()
          ctx.moveTo(n, m)
          ctx.lineTo(x, y)
          ctx.lineWidth = 3
          n = x
          m = y
          ctx.stroke()
        }
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
.mm {
    position: absolute;
    z-index: 1;
    left: 100px;
    top: 100px;
}
.xp {
    background: #000;
    color: #fff;
    line-height: 50px;
    text-align: center;
    width: 50px;
    cursor: pointer;
    float: left;
    margin: 5px;
    border-radius: 50%;
}
canvas {
    /* border: solid 1px #333; */
}
.active {
    background: skyblue;
}
</style>
