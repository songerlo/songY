
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">防抖和节流</router-link> |
      <router-link to="/about">call,apply</router-link> |
      <router-link to="/canvas1">canvas1</router-link> |
      <router-link to="/canvas2">canvas2</router-link> |
      <router-link to="/canvas3">canvas3</router-link> |
      <router-link to="/canvasGame">canvasGame</router-link> |
      <router-link to="/com">com</router-link> |
      <router-link to="/canvasChoose">canvasChoose</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
