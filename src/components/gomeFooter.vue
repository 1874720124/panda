<template>
  <ul class="gome-footer-ul">
    <router-link
     tag="li"
    v-for="nav in navs"
    :key="nav.name"
    :to="nav.path"
    class="footer-item"
   >
      <i class="footer-item-icon gome-icon" v-html="nav.meta.icon"></i>
      <span class="footer-item-text">{{nav.meta.title}}</span>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = routes.filter(nav => nav.meta.istabbar === true)
    // console.log(this.navs)
  }
}
</script>

<style lang="scss" scoped>
  .gome-footer-ul{
    display: flex;
    justify-content: space-around;
    height: 60px;
  }
  .footer-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    &-icon{
      height: 36px;
      font-size: 26px;
      line-height: 36px;
    }
    &-text{
      flex: 1;
      font-size: 14px;
      line-height: 24px;
    }
  }
.router-link-exact-active ,
.router-link-active{
  color:green;
}
</style>
