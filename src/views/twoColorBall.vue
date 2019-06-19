<template>
    <div>
        <h1>twoColorBalls</h1>
        <h2>{{historyList.num}}</h2>
        <!-- <h3>{{ addArr.length }}</h3> -->
        <div>
            <div v-for="(i, d) in Object.keys(appearNum)" :key="d" class="text" @click='active'>
                <div>出现过的：{{ i | mon}}</div>
                <div>次数：{{ appearNum[i] | mon}}</div>
                <div>机率：{{ appearNum[i] | probability}}</div>
            </div>
        </div>
        <div class="original">{{ addArr }}</div>
    </div>
</template>

<script>
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
          this.historyList.list.concat(data.result.lotteryResList)
          localStorage.setItem('historyList', JSON.stringify(data.result.lotteryResList))
          localStorage.setItem('num', data.result.pageSize)
          this.historyList.list = JSON.parse(localStorage.getItem('historyList'))
          this.historyList.num = localStorage.getItem('num')
        //   if (this.page === 1) {
        //     this.page = 2
        //     this.getLottery()
        //   }
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
    if (JSON.parse(localStorage.getItem('list')).length === 0) {
      this.getlist()
    } else {
      this.list = JSON.parse(localStorage.getItem('list'))
    }

    if (JSON.parse(localStorage.getItem('historyList')).length === 0) {
      this.getLottery()
    } else {
      this.historyList.list = JSON.parse(localStorage.getItem('historyList'))
      this.historyList.num = localStorage.getItem('num')
    }
    // this.getLottery()
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
</style>
