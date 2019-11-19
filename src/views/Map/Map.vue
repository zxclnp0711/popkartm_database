<template>
  <div>
    <div class="select">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="筛选"
                           name="1">
          <van-row>
            <van-col span="4">
              <van-tag plain
                       type="primary">主题</van-tag>
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
                       type="primary">星级</van-tag>
            </van-col>
            <van-col span="20">
              <van-col span="6"
                       v-for="(item, index) in this.starsList"
                       :key="index">
                <van-button type="info"
                            size="mini"
                            :disabled="starsSelect == index ? true : false"
                            :data-index="index"
                            @click="handleStarsDisable($event)">{{ item }}</van-button>
              </van-col>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="4">
              <van-tag plain
                       type="primary">驾照</van-tag>
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
      <div class="map-container">
        <div class="map-box"
             v-for="(item, index) in this.mapList"
             :key="index">
          <img :src="item.imgUrl" />
          <p>{{ item.name }}</p>
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
      starsList: [],
      levelList: [],
      mapList: [],
      oldMapList: [],
      typeSelect: 0,
      starsSelect: 0,
      levelSelect: 0,
      selectParmas: {
        type: null,
        stars: null,
        level: null
      }
    }
  },
  created () {
    this.getMaps()
  },
  methods: {
    async getMaps () {
      this.isLoading = true
      let { data: res } = await this.$axios.get('/mock/maps.json')
      console.log(res)
      this.typeList = res.data.type
      this.starsList = res.data.stars
      this.levelList = res.data.level
      this.mapList = res.data.maps
      // for (var k in this.mapList) {
      //   this.mapList[k].imgUrl = require(this.mapList[k].imgUrl)
      // }
      this.oldMapList = this.mapList
      this.isLoading = false
    },
    handleTypeDisable (e) {
      if (e.target.dataset.index === '0') {
        this.selectParmas.type = null
      } else {
        this.selectParmas.type = e.target.innerText
      }
      this.typeSelect = e.target.dataset.index
      this.filterMap(this.selectParmas)
    },
    handleStarsDisable (e) {
      if (e.target.dataset.index === '0') {
        this.selectParmas.stars = null
      } else {
        this.selectParmas.stars = e.target.innerText
      }
      this.starsSelect = e.target.dataset.index
      this.filterMap(this.selectParmas)
    },
    handleLevelDisable (e) {
      if (e.target.dataset.index === '0') {
        this.selectParmas.level = null
      } else {
        this.selectParmas.level = e.target.innerText
      }
      this.levelSelect = e.target.dataset.index
      this.filterMap(this.selectParmas)
    },
    filterMap (obj) {
      this.isLoading = true
      if (obj.type || obj.stars || obj.level) {
        let arr = this.oldMapList
        if (obj.type) {
          this.mapList = arr.filter(item => {
            return item.type === obj.type
          })
          arr = this.mapList
        }
        if (obj.stars) {
          this.mapList = arr.filter(item => {
            return item.stars.toString() === obj.stars.toString()
          })
          arr = this.mapList
        }
        if (obj.level) {
          this.mapList = arr.filter(item => {
            return item.level === obj.level
          })
          arr = this.mapList
        }
        this.isLoading = false
      } else {
        this.mapList = this.oldMapList
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
.map-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.map-box {
  position: relative;
  width: 49%;
  height: 100px;
  background-color: #000;
  margin-bottom: 10px;
  p {
    position: absolute;
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 14px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
