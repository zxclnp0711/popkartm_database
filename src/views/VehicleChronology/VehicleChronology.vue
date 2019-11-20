<template>
  <div>
    <div class="select">
      <van-cell-group>
        <van-field v-model="name"
                   placeholder="请输入车辆名"
                   @input="handleName" />
      </van-cell-group>
      <div :class="['time-box',index%2==0?'odd-box':'']"
           v-for="(item,index) in this.timeListData"
           :key="index">
        <div style="color:#888;">{{item.time}}</div>
        <div class="legend"
             v-if="item.level == '传说'">{{item.name}}</div>
        <div class="epic"
             v-else-if="item.level == '史诗'">{{item.name}}</div>
        <div class="rare"
             v-else-if="item.level == '稀有'">{{item.name}}</div>
        <div class="common"
             v-else-if="item.level == '普通'">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
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
          return item.name.indexOf(this.name) !== -1
        })
      }
    },
    async getTimeData () {
      let { data: res } = await this.$axios.get('/mock/vehicles.json')
      this.timeListData = res.data.vehicles
      this.timeListData.sort(function (a, b) {
        return a.time < b.time ? 1 : -1
      })
      this.oldTimeListData = this.timeListData
    }
  }
}
</script>

<style lang="less" scoped>
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
  // background-color: rgb(221, 118, 7) !important;
  color: rgb(221, 118, 7) !important;
}
.epic {
  // background-color: rgb(147, 57, 230) !important;
  color: rgb(147, 57, 230) !important;
}
.rare {
  // background-color: rgb(42, 115, 208) !important;
  color: rgb(42, 115, 208) !important;
}
.common {
  // background-color: rgb(124, 145, 158) !important;
  color: rgb(124, 145, 158) !important;
}
</style>
