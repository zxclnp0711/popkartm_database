<template>
  <div class="header">
    <van-nav-bar :title="`跑跑手游数据库 | ${titleText}`"
                 @click-right="onClickRight">
      <div slot="right"
           @click="showPopup">
        <van-icon size="20px"
                  name="apps-o" />
      </div>
    </van-nav-bar>
    <div style="position:relative;bottom:0">
      <van-popup v-model="show"
                 position="bottom"
                 style="height:254px;">
        <van-nav-bar title="菜单"
                     right-text="关闭"
                     @click-right="showPopup"
                     style="position:absolute;top:-46px;height:46px;width:100%;">
        </van-nav-bar>
        <div style="height:254px;width:100%;overflow-y: scroll;">
          <van-collapse v-model="activeName"
                        accordion>
            <div class="menu-box"
                 @click="changeTitle('新闻', '/news')">
              新闻
            </div>
            <div class="menu-box"
                 @click="changeTitle('地图', '/map')">
              地图
            </div>
            <van-collapse-item title="历史"
                               name="1">
              <div class="menu-box"
                   @click="changeTitle('大事件', '/bigevent')">
                大事件
              </div>
              <div class="menu-box"
                   @click="changeTitle('车辆年表', '/vehiclechronology')">
                车辆年表
              </div>
            </van-collapse-item>
            <van-collapse-item title="游戏道具"
                               name="2">
              <div class="menu-box"
                   @click="changeTitle('车辆', '/vehicle')">
                车辆
              </div>
              <div class="menu-box"
                   @click="changeTitle('人物', '/role')">
                人物
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show: false,
      activeName: '',
      titleText: '新闻'
    }
  },
  created () {
    this.determineTitle()
  },
  methods: {
    determineTitle () {
      let value = this.$route.path
      console.log(value)
      // console.log(this.titleText)
      switch (value) {
        case '/news':
          this.titleText = '新闻'
          break
        case '/map':
          this.titleText = '地图'
          break
        case '/bigevent':
          this.titleText = '大事件'
          break
        case '/vehiclechronology':
          this.titleText = '车辆年表'
          break
        case '/vehicle':
          this.titleText = '车辆'
          break
        case '/role':
          this.titleText = '人物'
          break
        case '/vehicledetail':
          this.titleText = '车辆详情'
          break
      }
    },
    onClickRight () { },
    showPopup () {
      this.show = !this.show
    },
    changeTitle (value, path) {
      this.titleText = value
      this.show = !this.show
      this.activeName = ''
      if (path !== this.$route.path) this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.header /deep/ .van-nav-bar__title {
  font-size: 14px !important;
}

.header /deep/ .van-collapse-item__content {
  padding: 0 16px;
  color: #323233;
}
.header /deep/ .van-popup {
  overflow-y: unset;
}
.menu-box {
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  padding: 10px 16px;
  border-bottom: 1px solid #eee;
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
}
</style>
