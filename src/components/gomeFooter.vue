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
    <span class="cart-num">{{calcAllnum|noMoreThan10}}</span>
  </ul>
</template>

<script>
import routes from '@/router/routes'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = routes.filter(nav => nav.meta.istabbar === true)
    // console.log(this.navs)
  },
  computed: {
    ...mapGetters(['calcAllnum'])
  },
  // 局部filters
  filters: {
    noMoreThan10 (value) {
      value = value > 10 ? '10+' : value
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
  .gome-footer-ul{
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 60px;
    .cart-num{
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      right:95px;
      bottom: 46px;
      background: #999;
      border-radius: 51%;
      color: red;
    }
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
