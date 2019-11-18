<template>
  <div>
    <div class="return-box">
      <swiper :options="swiperOption"
              class="swiper-container">
        <swiper-slide v-for="(item, index) in this.vehicleData.detailImgUrl"
                      :key="index"><img :src="item"
               alt="" /></swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
      <div class="return-button"
           @click="handleReturn">
        &lt;
      </div>
    </div>
    <div class="details-container">
      <div class="details-name">
        <h2>{{ vehicleData.name }}</h2>
        <div class="type legend"
             v-if="this.vehicleData.level == '传说'">
          传说
        </div>
        <div class="type epic"
             v-else-if="this.vehicleData.level == '史诗'">
          史诗
        </div>
        <div class="type rare"
             v-else-if="this.vehicleData.level == '稀有'">
          稀有
        </div>
        <div class="type common"
             v-else>普通</div>
      </div>
      <hr />
      <div class="details-acquisition">
        <div class="details-name">
          <h2>获得途径</h2>
        </div>
        <div style="height:50px;line-height:50px;text-align:center;font-size:14px;">
          {{ vehicleData.acquisition }}
        </div>
      </div>
      <hr />
      <div class="details-skill">
        <div class="details-name">
          <h2>技能信息</h2>
        </div>
        <div v-if="this.vehicleData.skill.length === 0"
             style="height:50px;line-height:50px;text-align:center;font-size:14px;">
          无技能信息
        </div>
        <div v-else
             style="width:100%">
          <img :src="vehicleData.skill"
               alt="" />
        </div>
      </div>
      <hr />
      <div class="details-progress">
        <div class="details-name">
          <h2>详细数据</h2>
        </div>
        <van-row>
          <van-col span="4"
                   style="line-height:28px;text-align:right;">
            <van-tag plain
                     type="primary">漂移</van-tag>
          </van-col>
          <van-col span="20">
            <div class="progress">
              <van-progress :percentage="this.vehicleData.performance[0] / 10"
                            stroke-width="8"
                            :pivot-text="this.vehicleData.performance[0] + ''" />
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="4"
                   style="line-height:28px;text-align:right;">
            <van-tag plain
                     type="primary">加速度</van-tag>
          </van-col>
          <van-col span="20">
            <div class="progress">
              <van-progress :percentage="this.vehicleData.performance[1] / 10"
                            stroke-width="8"
                            :pivot-text="this.vehicleData.performance[1]" />
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="4"
                   style="line-height:28px;text-align:right;">
            <van-tag plain
                     type="primary">弯道</van-tag>
          </van-col>
          <van-col span="20">
            <div class="progress">
              <van-progress :percentage="this.vehicleData.performance[2] / 10"
                            stroke-width="8"
                            :pivot-text="this.vehicleData.performance[2]" />
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="4"
                   style="line-height:28px;text-align:right;">
            <van-tag plain
                     type="primary">加速时间</van-tag>
          </van-col>
          <van-col span="20">
            <div class="progress">
              <van-progress :percentage="this.vehicleData.performance[3] / 10"
                            stroke-width="8"
                            :pivot-text="this.vehicleData.performance[3]" />
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="4"
                   style="line-height:28px;text-align:right;">
            <van-tag plain
                     type="primary">集气速度</van-tag>
          </van-col>
          <van-col span="20">
            <div class="progress">
              <van-progress :percentage="this.vehicleData.performance[4] / 10"
                            stroke-width="8"
                            :pivot-text="this.vehicleData.performance[4]" />
            </div>
          </van-col>
        </van-row>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: '',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        speed: 1000
      },
      vehicleData: {}
    }
  },
  created () {
    this.vehicleData = this.$route.params.data
    console.log(this.vehicleData.skill.length)
  },
  methods: {
    handleReturn () {
      this.$router.push('/vehicle')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.return-box {
  position: relative;
  .return-button {
    color: #ccc;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    font-size: 20px;
    width: 30px;
    height: 30px;
    line-height: 26px;
    text-align: center;
    border: 2px solid #ccc;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff !important;
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.6666667%;
    background: #ccc;
    .swiper-item {
      width: 100%;
      .swiper-img {
        width: 100%;
      }
    }
  }
}
.details-container {
  padding: 5px;
}
.details-progress {
  .progress {
    margin: 10px 0;
    padding: 0 5px;
  }
}
.details-name {
  padding: 0 10px;
  display: flex;
  margin-bottom: 10px;
  h2 {
    margin: 0;
  }
  .type {
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    margin: 0px 11px;
    padding: 5px 10px;
    border-radius: 10px;
  }
}
.legend {
  background: linear-gradient(to right, rgb(217, 111, 8), rgb(247, 166, 7));
}
.epic {
  background: linear-gradient(to right, rgb(143, 54, 229), rgb(143, 54, 229));
}
.rare {
  background: linear-gradient(to right, rgb(43, 112, 207), rgb(16, 173, 234));
}
.common {
  background: linear-gradient(to right, rgb(122, 144, 156), rgb(149, 168, 188));
}
</style>
