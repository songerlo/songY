<template>
  <div>
    <canvas id="canvasG"></canvas>
  </div>
</template>

<script>
import map from './Map.js'
import Enemy from './Enemy.js'
import Particle from './particle.js'

export default {
  data () {
    return {
      enemys: [],
      self: {},
      a: [],
      x: 0,
      y: 0
    }
  },
  mounted () {
    const canvas = document.getElementById('canvasG')
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height
    map.init({ canvas, width, height })
    const createEnemy = (num) => {
      // enemys = [];
      for (let i = 0; i < num; i++) {
        const x = Math.random() * map.width + map.width
        const y = Math.random() * map.height
        this.enemys.push(new Enemy(x, y))
      }
    }
    createEnemy(200)

    this.animated()

    window.addEventListener('mousemove', (e) => {
      e.preventDefault()
      // let moveX =
      var x, y, color
      x = this.x = e.clientX
      y = this.y = e.clientY
      color = 'red'
    })
  },
  methods: {
    animated () {
      map.render()
      map.ctx.fillStyle = 'red'
      map.ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI)
      map.ctx.fill()
      for (let i = 0; i < this.enemys.length; i++) {
        this.enemys[i].render()
        this.enemys[i].update()
        const dix = this.x - this.enemys[i].x
        const diy = this.y - this.enemys[i].y
        if (Math.hypot(dix, diy) <= 100 + 4) {
          this.enemys.splice(i, 1)
          this.enemys.push(new Enemy({ x: Math.random() * map.width + map.width, y: Math.random() * map.height }))
          for (var i = 0; i < 20; i++) {
            this.a.push(new Particle({ x: this.x, y: this.y }))
          }
        }
      }
      for (let i = 0; i < this.a.length; i++) {
        if (this.a[i].destory == true) {
          this.a.splice(i, 1)
        } else {
          this.a[i].render()
          this.a[i].update()
        }
      }
      // player.render()
      // player.updata()
      requestAnimationFrame(this.animated)
    }
  }
}
</script>

<style>
#canvasG {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
