<template>
    <div>call,apply</div>
</template>

<script>
function  A (a, b) {
  this.a = a,
  this.b = b,
  this.say = function (m,n) {
    return this.a+this.b+ m+n
  }
}
var m = new A(1,2)
var obj = {
  a: 2,
  b: 3
}
console.log(m.say.call(obj,1,1))

//Math.max 提供一个都好分割的多个数字
var max = Math.max(1,2,3,4,5,6)
console.log(max);
var arr = [2,3,4,5,6,7]
var arrMax = Math.max.apply(null,arr)
console.log(arrMax); 
export default {

}
</script>

<style>

</style>
