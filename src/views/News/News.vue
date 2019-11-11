<template>
  <div>
    新闻
    <div class="title-box">
      官方新闻
      <a href="https://wepop.qq.com/list.shtml?type=news">更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      let { data: res } = await this.$axios.get('/api/news.json')
      console.log(res)
      this.newsList = res.data.news
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>
