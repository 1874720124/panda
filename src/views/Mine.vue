<template>
  <div>
    <p v-if="isLogin">欢迎来到{{userinfo.displayName}}的个人中心</p>
    <p v-else><router-link
    to="/login">去登录吧</router-link></p>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapState(['userinfo']),
    ...mapGetters(['isLogin'])
  }
}
</script>

<style>

</style>
