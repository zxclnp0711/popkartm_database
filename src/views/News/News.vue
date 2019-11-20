<template>
  <div>
    <div class="title-box">
      官方新闻
      <a href="https://wepop.qq.com/list.shtml?type=news">更多</a>
    </div>
    <div style="width:100%;padding:5px 10px;">
      <div v-for="(item,index) in this.newsList"
           :key="index"
           style="width:100%;margin-bottom:10px;border:1px solid #ccc;padding:5px;border-radius:10px"
           :class="index%2==0?'odd-box':'even-box'">
        <a :href="item.url"
           style="display:block">
          <div style="font-size:15px;width:100%;display:flex;justify-content:space-between">
            <div style="width:88%;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;">{{item.title}}</div>
            <div>{{item.date}}</div>
          </div>
          <div style="font-size:12px;height:70px;width:100%;padding:5px 0;color:#aaa;text-indent:2em;line-height:16px;"
               class="ellipsis">{{item.abstract}}</div>
        </a>
      </div>
      <div class="loading">
        <van-button type="info"
                    plain
                    hairline
                    :loading="loading"
                    size="normal"
                    loading-text="加载中..."
                    @click="handleLoading">加载更多...</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      newsList: [],
      loading: false,
      page: 1,
      pageSize: 10,
      dataLength: 0
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      let { data: res } = await this.$axios.get('/mock/news.json')
      this.dataLength = res.data.news.length
      let arr = []
      for (var i = 0; i < res.data.news.length; i += 10) {
        arr.push(res.data.news.slice(i, i + 10))
      }
      this.newsList.push(...arr[this.page - 1])
    },
    handleLoading () {
      if (this.newsList.length === this.dataLength) {
        this.$toast('无更多新闻')
      } else {
        this.loading = true
        this.page++
        this.getNews()
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  // border: 1px solid #ccc;
  text-align: center;
  margin-bottom: 10px;
}
.odd-box {
  background-color: #eee;
}
.even-box {
  background-color: #fff;
}
.title-box {
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding: 0 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  a {
    float: right;
    font-size: 14px;
    color: #556aae;
  }
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
