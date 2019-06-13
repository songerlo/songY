<template>
    <div>
        <canvas></canvas>
        <input type="file" @change="uploadImg" multiple/>
        <div id="img-box" class="img-o">
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      s: ''
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
