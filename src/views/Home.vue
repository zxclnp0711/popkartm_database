<template>
  <div class="home"
       style="margin-top: 46px;">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {

    }
  },
  created () {
    console.log(this.$route.path)
  },
  components: {
    Header
  }
}
</script>
