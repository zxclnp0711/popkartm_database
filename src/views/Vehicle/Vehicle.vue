<template>
  <div>
    <div class="select">
      <div class="fixed">
        <van-cell-group>
          <van-field v-model="selectParmas.name"
                     placeholder="请输入车辆名" />
        </van-cell-group>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="筛选"
                             name="1">
            <van-row>
              <van-col span="4">
                <van-tag plain
                         type="primary">类型</van-tag>
              </van-col>
              <van-col span="20">
                <van-col span="6"
                         v-for="(item, index) in this.typeList"
                         :key="index">
                  <van-button type="info"
                              size="mini"
                              :disabled="typeSelect == index ? true : false"
                              :data-index="index"
                              @click="handleTypeDisable($event)">{{ item }}</van-button>
                </van-col>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="4">
                <van-tag plain
                         type="primary">级别</van-tag>
              </van-col>
              <van-col span="20">
                <van-col span="6"
                         v-for="(item, index) in this.levelList"
                         :key="index">
                  <van-button type="info"
                              size="mini"
                              :disabled="levelSelect == index ? true : false"
                              :data-index="index"
                              @click="handleLevelDisable($event)">{{ item }}</van-button>
                </van-col>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
      </div>

      <div class="vehicles">
        <div class="vehicle-box"
             v-for="(item, index) in this.vehicleList"
             :key="index"
             @click.prevent="handleDetail(item.name)">
          <div class="vehicle-img">
            <img :src="item.imgUrl" />
          </div>
          <div class="vehicle-describe">
            <div class="describe legend"
                 v-if="item.level == '传说'">
              {{ item.level }}/{{ item.type }}
            </div>
            <div class="describe epic"
                 v-else-if="item.level == '史诗'">
              {{ item.level }}/{{ item.type }}
            </div>
            <div class="describe rare"
                 v-else-if="item.level == '稀有'">
              {{ item.level }}/{{ item.type }}
            </div>
            <div class="describe common"
                 v-else-if="item.level == '普通'">
              {{ item.level }}/{{ item.type }}
            </div>
            <div class="describe">{{ item.quantitative }}</div>
            <div class="describe">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <van-loading size="40px"
                 v-show="isLoading"
                 vertical
                 class="loading"
                 color="#fff"></van-loading>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isLoading: true,
      activeNames: ['1'],
      typeList: [],
      levelList: [],
      vehicleList: [],
      vehicleDetail: [],
      oldVehicleList: [],
      typeSelect: 0,
      levelSelect: 0,
      selectParmas: {
        level: null,
        type: null,
        name: null
      }
    }
  },
  watch: {
    activeNames: function () {
      console.log(this.activeNames)
      if (this.activeNames.length > 0) {
        document.querySelector('.select').className = 'select'
      } else {
        setTimeout(() => {
          document.querySelector('.select').className = 'select select1'
        }, 400)
      }
    }
  },
  created () {
    this.getVehicles()
  },
  methods: {
    async getVehicles () {
      this.isLoading = true
      let { data: res } = await this.$axios.get('/mock/vehicles.json')
      this.typeList = res.data.type
      this.levelList = res.data.level
      this.vehicleList = res.data.vehicles
      this.oldVehicleList = this.vehicleList
      this.isLoading = false
    },
    handleTypeDisable (e) {
      if (e.target.dataset.index === '0') {
        this.selectParmas.type = null
      } else {
        this.selectParmas.type = e.target.innerText
      }
      this.typeSelect = e.target.dataset.index
      this.filterVehicle(this.selectParmas)
    },
    handleLevelDisable (e) {
      if (e.target.dataset.index === '0') {
        this.selectParmas.level = null
      } else {
        this.selectParmas.level = e.target.innerText
      }
      this.levelSelect = e.target.dataset.index
      this.filterVehicle(this.selectParmas)
    },
    handleName () {
      if (this.selectParmas.name === '') {
        this.selectParmas.name = null
      }
      this.filterVehicle(this.selectParmas)
    },
    filterVehicle (obj) {
      let arr = this.oldVehicleList
      if (obj.name === null) {
        this.vehicleList = this.oldVehicleList
      }
      if (obj.name !== null) {
        this.vehicleList = arr.filter(item => {
          return item.name.indexOf(obj.name) !== -1
        })
        arr = this.vehicleList
      }
      if (obj.level) {
        this.vehicleList = arr.filter(item => {
          return item.level === obj.level
        })
        arr = this.vehicleList
      }
      if (obj.type) {
        this.vehicleList = arr.filter(item => {
          return item.type === obj.type
        })
        arr = this.vehicleList
      }
    },
    handleDetail (name) {
      let arr = this.oldVehicleList
      this.vehicleDetail = arr.filter(item => {
        return item.name === name
      })
      this.vehicleDetail = this.vehicleDetail[0]
      this.$router.push({
        name: 'vehicledetail',
        params: {
          data: this.vehicleDetail
        }
      })
    },
    handleChange () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.select1 {
  padding-top: 90px !important;
}

.select {
  padding-top: 213px;
}
.fixed {
  width: 100%;
  position: fixed;
  top: 46px;
}

.select /deep/ .van-field__control {
  border: 1px solid #ccc !important;
  border-radius: 5px;
  padding-left: 10px;
  height: 26px;
  line-height: 26px;
  background-color: #eee;
}
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.3);
  span {
    margin-top: 200px;
    z-index: 9999999;
    color: #fff;
  }
}

.van-row /deep/ .van-col {
  margin-bottom: 5px;
}
.legend {
  background-color: rgb(221, 118, 7) !important;
  color: #fff;
}
.epic {
  background-color: rgb(147, 57, 230) !important;
  color: #fff;
}
.rare {
  background-color: rgb(42, 115, 208) !important;
  color: #fff;
}
.common {
  background-color: rgb(124, 145, 158) !important;
  color: #fff;
}
.vehicles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
  .vehicle-box {
    width: 32%;
    height: 220px;
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
    background-color: #999;
    margin-bottom: 5px;
    .vehicle-img {
      width: 100%;
      height: 140px;
      border-radius: 15px;
      overflow: hidden;
    }
    .vehicle-describe {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
      height: 80px;
      padding: 5px;
      .describe {
        width: 100%;
        font-size: 14px;
        text-align: center;
        height: 18px;
        line-height: 18px;
        border-radius: 15px;
        background-color: #fff;
      }
    }
  }
}
</style>
