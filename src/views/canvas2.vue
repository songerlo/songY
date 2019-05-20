<template>
    <div>
        <div>猜字母</div>
        <canvas id="canvas2"></canvas>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  beforeMount () {
  },
  mounted () {
    var guesses = 0 // 次数
    // var msg = '前面的或者后面的'
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var today = new Date()
    var letterToGuess = '' // 秘密字母
    var higherOrLower = '' // 提示
    var lettersGuessed // 猜过的字母
    var gameOver = false
    var letterIndex = Math.floor(Math.random() * letters.length)
    var guessIndex = 0
    function initGame () {
      letterToGuess = letters[letterIndex]
      guesses = 0
      lettersGuessed = []
      gameOver = false
      window.addEventListener('keydown', evenKey, true)
      // drawScreen();
    }
    function evenKey (e) {
      if (!gameOver) {
        var letterPressed = String.fromCharCode(e.keyCode)
        letterPressed = letterPressed.toLowerCase()
        guesses++
        lettersGuessed.push(letterPressed)
        if (letterPressed === letterToGuess) {
          gameOver = true
        } else {
          letterIndex = letters.indexOf(letterToGuess)
          guessIndex = letters.indexOf(letterPressed)
          if (guessIndex < 0) {
            higherOrLower = '这个不是'
          } else if (guessIndex > letterIndex) {
            higherOrLower = '前面的'
          } else {
            higherOrLower = '后面的'
          }
        }
        drawScreen()
      }
    }
    function drawScreen () {
      var canvas = document.getElementById('canvas2')
      canvas.width = 500
      canvas.height = 500
      var ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffaa'
      ctx.fillRect(0, 0, 500, 300)
      ctx.strokeStyle = '#333'
      ctx.strokeRect(5, 5, 490, 290)
      ctx.textBaseline = 'top'
      ctx.fillText(today, 150, 10)
      ctx.fillStyle = '#ff0000'
      ctx.font = '14px Sans-Serif'
      // ctx.fillText(msg, 125,30)
      ctx.fillStyle = '#109910'
      ctx.font = '16px Sans-Serif'
      ctx.fillText('猜测次数：' + guesses, 115, 50)
      ctx.fillText('前或者后：' + higherOrLower, 115, 125)
      ctx.fillText('猜过的：' + lettersGuessed.toString(), 10, 260)
      if (gameOver) {
        ctx.fillStyle = '#ff0000'
        ctx.font = '40px Sans-Serif'
        ctx.fillText('win', 240, 180)
      }
    }
    initGame()
  },
  components: {},
  methods: {
  },
  computed: {},
  watch: {}
}
</script>

<style>
</style>
