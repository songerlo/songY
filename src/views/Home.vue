<template>
  <div class="home">
    <div @click="chang">改变</div>
    <HelloWorld msg="Vue.js"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/debounce.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: 'sss'
    }
  },
  methods: {
    chang () {
      this.name = this.name === 'songduoduo' ? 'wangyuming' : 'songduoduo'
    }
  },
  provide () {
    return {
      theme: this
    }
  },
  beforeMount () {
    console.log(this.$plug)
  }
}
</script>
