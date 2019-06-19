<template>
    <div>
        <h1>twoColorBalls</h1>
        <h2>{{historyList.num}}条数据</h2>
        <h3>{{ addArr.length }}个数</h3>
        <el-button @click="add">添加50条数据</el-button>
        <div style="margin-top: 30px;">
            <div v-for="(i, d) in Object.keys(appearNum)" :key="d" class="text" @click='active'>
                <div>出现过的：{{ i | mon}}</div>
                <div>次数：{{ appearNum[i] | mon}}</div>
                <div>机率：{{ appearNum[i] | probability}}</div>
            </div>
        </div>
        <canvas id="canvas"></canvas>
        <!-- <div class="original">{{ addArr }}</div> -->
    </div>
</template>

<script>
function dra (arr) {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')
  can.width = 800
  can.height = 400
  var spa = 10
  var ratio = 20
  var diff = 10
  spa = can.width / arr.length
  ratio = can.height / 18
  ctx.font = '14px Georgia'
  //   ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (var i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.moveTo(spa * i, converNum(arr[i], ratio))
    ctx.lineTo(spa * (i + 1), converNum(arr[i + 1], ratio))
    ctx.stroke()
    ctx.beginPath()
    ctx.fillStyle = '#999'
    if (arr[i] < arr[i + 1]) {
      diff = -diff
    } else {
      diff = Math.abs(diff)
    }
    ctx.fillText(arr[i], spa * i - Math.abs(diff), converNum(arr[i], ratio) - diff)
    ctx.arc(spa * i, converNum(arr[i], ratio), 3, 0, 2 * Math.PI)
    ctx.fill()
  }
}
function converNum (num, a) {
  return 400 - (+num) * a
}
const key = '1e8ff909b13eda6ad2a18518bcbc584c'
export default {
  filters: {
    mon (i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    probability (num) {
      return (num / 50 * 100).toFixed(2) + '%'
    }
  },
  data () {
    return {
      list: [],
      historyList: {
        num: 0,
        list: []
      },
      page: 1
    }
  },
  methods: {
    add () {
      this.page = this.page + 1
      this.getLottery()
    },
    active (e) {
      e.currentTarget.className += ' active'
    },
    getlist () {
      this.$m.get('/lottery/types', { params: {
        key: key
      } }).then(resp => {
        if (resp.status === 200) {
          return resp.data
        }
      }).then(data => {
        localStorage.setItem('list', JSON.stringify(data.result))
        this.list = JSON.parse(localStorage.getItem('list'))
      })
    },
    getLottery (st = 'ssq') {
      this.$m.get('/lottery/history', { params: {
        key: key,
        lottery_id: st,
        page_size: 50,
        page: this.page
      } })
        .then(resp => {
          if (resp.status === 200) {
            return resp.data
          }
        })
        .then(data => {
          this.historyList.list = this.historyList.list.concat(data.result.lotteryResList)
          this.historyList.num = this.historyList.list.length
          localStorage.setItem('historyList', JSON.stringify(this.historyList.list))
          localStorage.setItem('num', this.historyList.list.length)
        })
    }
  },
  computed: {
    addArr () {
      var arr = []
      this.historyList.list.map(item => {
        arr.push(...item.lottery_res.split(','))
      })
      arr = arr.map(i => +i).sort((a, b) => a - b)
      //   arr.sort((a, b) => a - b)
      return arr
    },
    appearNum () {
      var obj = {}
      this.addArr.map(item => {
        if (!obj[item]) {
          obj[item] = 1
        } else {
          obj[item] += 1
        }
      })
      return obj
    }
  },
  beforeMount () {
    // if (JSON.parse(localStorage.getItem('list')).length === 0) {
    //   this.getlist()
    // } else {
    //   this.list = JSON.parse(localStorage.getItem('list'))
    // }

    if (JSON.parse(localStorage.getItem('historyList')) === null) {
      this.getLottery()
    } else {
      this.historyList.list = JSON.parse(localStorage.getItem('historyList'))
      this.historyList.num = this.historyList.list.length
    }
    // this.getLottery()
  },
  mounted () {
    var arr = []
    if (this.historyList.list.length > 0) {
      this.historyList.list.map(item => {
        arr.push(item.lottery_res.slice(-2))
      })
      dra(arr)
    }
  }
}
</script>

<style>
.original {
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
}
.text {
    width: 460px;
    margin: 0px auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #ddd solid;
    line-height: 30px;
}
.active {
    background: green;
    color: #fff;
    padding: 10px;
}
#canvas {
    border: solid 1px #ddd;
    margin: 60px 0;
}
</style>
