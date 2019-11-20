<template>
  <div class="home"
       style="margin-top: 46px;">
    <Header style="z-index:999999;"></Header>
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
  },
  components: {
    Header
  }
}
</script>
