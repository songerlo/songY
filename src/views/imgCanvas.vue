<template>
    <div>
        <canvas></canvas>
        <input type="file" @change="uploadImg" multiple/>
        <div id="img-box" class="img-o">
        </div>
    </div>
</template>

<script>
import Create from './class/class1.js'
export default {
  data () {
    return {
      s: ''
    }
  },
  mounted () {
    // var a = new Create(100, 100, '#333', '50%')
    for (let i = 0; i < 100; i++) {
      var a = new Create(Math.random() * 50, Math.random() * 50, '#333', '0%')
      a.init()
    //   requestAnimationFrame(a.render)
    }
  },
  methods: {
    uploadImg (e) {
      var imgBox = document.getElementById('img-box')
      var imgs = e.target.files
      for (let i = 0; i < imgs.length; i++) {
        var reader = new FileReader()
        reader.onload = (e) => {
          var img = document.createElement('img')
          img.src = e.target.result
          img.width = 200
          imgBox.appendChild(img)
        }
        reader.readAsDataURL(imgs[i])
      }
    }
  }
}
</script>
<style lang='scss' scoped>
body {
    width: 100%;
    overflow: hidden;
}
.img-o {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    img {
        width: 200px;
        float: left;
    }
}
</style>
