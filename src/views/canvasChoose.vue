<template>
    <div class="om" ref="om">
        <canvas id="canvas"></canvas>
        <canvas id="canvas1"></canvas>
        <div class="slider" @click="slide">slide</div>
        <div class="mm" v-show="isOpen" ref="m">
            <div class="xp" @click="clear">clear</div>
            <div class="xp" @click="km(1)" :class="[index === 1 ? 'active':'']">line</div>
            <div class="xp" @click="km(2)" :class="[index === 2 ? 'active':'']">square</div>
            <div class="xp" @click="km(3)" :class="[index === 3 ? 'active':'']">custom</div>
            <div class="xp" @click="km(4)" :class="[index === 4 ? 'active':'']">round</div>
            <div class="xp" @click="km(5)" :class="[index === 5 ? 'active':'']">clearJuBu</div>
        </div>
        <div @click="getApi()" class="axios">axios</div>
        <img :src="url"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      type: 1,
      index: 1,
      isOpen: true,
      url: ''
    }
  },
  methods: {
    getApi () {
      this.$m.get('/qrcode/api', { params: {
        key: '934b96f0fba8ca31fd5aa4365eee4345',
        text: 'songer',
        bgColor: 'ffffff',
        type: 1
      } }).then(res => {
        if (res.status === 200 && res.data.reason === 'success') {
          return res.data.result
        }
      }).then(res => {
        console.log(res)
        this.url = 'data:image/png;base64,' + res.base64_image
      }).catch(err => {
        console.log(err + 'sssss')
      })
    },
    km (sm) {
      this.type = sm
      this.index = sm
    },
    clear () {
      let can2 = document.getElementById('canvas')
      let ctx2 = can2.getContext('2d')
      let w = this.$refs.om.clientWidth
      let h = this.$refs.om.clientHeight
      ctx2.clearRect(0, 0, w, h)
    },
    slide () {
      var div = this.$refs.m.children
      this.isOpen = !this.isOpen
      for (var i = 0; i < div.length; i++) {
        div[i].style.transform = `translateX(${i * -60}px)`;
        (function (i) {
          setTimeout(() => {
            console.log(i)
            div[i].style.transform = `translateX(0px)`
            div[i].style.transition = `all .2s linear`
          }, 200)
        })(i)
        // }
      }
      // this.isOpen = !this.isOpen
    }
  },
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
    let that = this
    let date = 0
    canvas.onmousedown = function () {
      date = new Date()
      flag = true
      sx = n = event.clientX - c.left * (canvas.width / c.width)
      sy = m = event.clientY - c.top * (canvas.height / c.height)
    }
    canvas.onmousemove = function () {
      x = event.clientX - c.left * (canvas.width / c.width)
      y = event.clientY - c.top * (canvas.height / c.height)
      ctx.strokeStyle = 'skyblue'
      if (that.type === 5) {
        ctx.clearRect(0, 0, w, h)
        ctx.beginPath()
        ctx.arc(x, y, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
      }
      if (flag) {
        if (that.type === 2) {
          ctx.clearRect(0, 0, w, h)
          ctx.strokeRect(sx, sy, x - n, y - m)
        }
        if (that.type === 4) {
          ctx.clearRect(0, 0, w, h)
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(x, y, Math.abs(((x + y) - (n + m)) / 2), 0, Math.PI * 2)
          ctx.stroke()
          ctx.closePath()
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
        if (that.type === 3) {
          ctx2.beginPath()
          ctx2.moveTo(n, m)
          ctx2.lineTo(x, y)
          ctx2.lineWidth = 1
          n = x
          m = y
          ctx2.stroke()
        }
        if (that.type === 5) {
          console.log(x, y)
          ctx2.clearRect(x - 50, y - 50, 50, 50)
        }
      }
    }
    canvas.onmouseup = function () {
      date = new Date().getTime() - date.getTime()
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
      if (that.type === 4) {
        ctx2.beginPath()
        ctx2.arc(x, y, Math.abs(((x + y) - (n + m)) / 2), 0, Math.PI * 2)
        ctx2.stroke()
        ctx2.closePath()
      }
      sx = sy = sx1 = sy1 = 0
    }
    let touch
    canvas.addEventListener('touchstart', function (e) {
      e.preventDefault()
      flag = true
      touch = e.touches[0]
      sx = n = touch.pageX
      sy = m = touch.pageY
    })
    canvas.addEventListener('touchmove', function (e) {
      e.preventDefault()
      touch = e.touches[0]
      x = touch.pageX
      y = touch.pageY
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
        if (that.type === 3) {
          ctx2.beginPath()
          ctx2.moveTo(n, m)
          ctx2.lineTo(x, y)
          ctx2.lineWidth = 1
          n = x
          m = y
          ctx2.stroke()
        }
      }
    })
    canvas.addEventListener('touchend', function (e) {
      e.preventDefault()
      flag = false
      ctx.clearRect(0, 0, w, h)
      sx1 = x
      sy1 = y
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
.slider {
    background: #000;
    color: #fff;
    line-height: 50px;
    text-align: center;
    width: 50px;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
}
.axios {
    position: fixed;
    z-index: 2;
    background: #f60;
    color: #fff;
    text-align: center;
    width: 120px;
    line-height: 40px;
    top: 200px;
}
</style>
