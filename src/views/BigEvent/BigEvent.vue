<template>
  <div>
    <div class="select">
      <div class="fixed">
        <van-cell-group>
          <van-field
            v-model="name"
            placeholder="请输入事件"
            @input="handleName"
          />
        </van-cell-group>
      </div>
      <div
        :class="['time-box', index % 2 == 0 ? 'odd-box' : '']"
        v-for="(item, index) in this.timeListData"
        :key="index"
      >
        <div style="color:#888;width:20%;">{{ item.time }}</div>
        <div
          class="legend"
          style="width:80%;text-align:right;overflow: hidden;white-space: nowrap;text-overflow: ellipsis"
        >
          {{ item.event }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      container: null,
      name: null,
      timeListData: [],
      oldTimeListData: []
    }
  },
  created () {
    this.getTimeData()
  },
  methods: {
    handleName () {
      if (this.name === '') {
        this.name = null
      }
      let arr = this.oldTimeListData
      if (this.name === null) {
        this.timeListData = this.oldTimeListData
      }
      if (this.name !== null) {
        this.timeListData = arr.filter(item => {
          return item.event.indexOf(this.name) !== -1
        })
      }
    },
    async getTimeData () {
      let { data: res } = await this.$axios.get('/mock/events.json')
      this.timeListData = res.data.events
      this.timeListData.sort(function (a, b) {
        return a.time < b.time ? 1 : -1
      })
      this.oldTimeListData = this.timeListData
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  padding-top: 46px;
}
.fixed {
  width: 100%;
  position: fixed;
  top: 46px;
}

.odd-box {
  background-color: #eee;
}

.select /deep/ .van-field__control {
  border: 1px solid #ccc !important;
  border-radius: 5px;
  padding-left: 10px;
  height: 26px;
  line-height: 26px;
  background-color: #eee;
}
.time-box {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  height: 35px;
  font-size: 12px;
  line-height: 35px;
}

.legend {
  color: rgb(221, 118, 7) !important;
}
.epic {
  color: rgb(147, 57, 230) !important;
}
.rare {
  color: rgb(42, 115, 208) !important;
}
.common {
  color: rgb(124, 145, 158) !important;
}
</style>
