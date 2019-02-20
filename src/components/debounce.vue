<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" id="inp">
  </div>
</template>

<script>
// console.log(m.say());
// 防抖 和节流 
// 参考地址： https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    debounce(fn) {
      let timer = null
      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        }, 500);
      }
    },
    say() {
      console.log('1');
    },
    throttle(fn) {
      let canRun = true;
      return function (){
        if(!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this, arguments)
          canRun = true
        }, 1000);
      }
    },
    sayM(e) {
      console.log(e);
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
  },
  mounted() {
    var inp = document.getElementById('inp')
    inp.addEventListener('input', this.debounce(this.say))
    window.addEventListener('resize', this.throttle(this.sayM))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
