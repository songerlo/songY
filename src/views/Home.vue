<template>
  <div class="home">
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
  }
}
</script>
