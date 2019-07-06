<template>
  <div class="gome-category">
    <ul class="gome-category-aside">
      <router-link
      tag="li"
      :to="{name:'cateList',params:{cateId:tab.id}}"
      v-for = "tab in tabs"
      :key = "tab.id"
      class="gome-category-aside-item">{{tab.name}}</router-link>
    </ul>
    <div class="gome-category-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.$http.gettabs().then(resp => {
      this.tabs = resp.data.list.slice(1)
      console.log(this.tabs)
      console.log(this.$route)
      const {cateId = this.tabs[0].id} = this.$route.params
      this.$router.push(`category/${cateId}`)
    })
  }
}
</script>
<style lang="scss" scoped>
  .gome-category{
    width:100%;
    height:100%;
    display:flex;
    &-aside{
      display:flex;
      flex-direction: column;
      justify-content:space-around;
      width:80px;
      height:100%;
      background:#eeeeee;
      overflow: auto;
    &-item{
      color:#3e3e3e;
      padding-left:8px;
      border-left: 2px solid #eeeeee;
      height: 26px;
      line-height: 26px;
      font-size: 14px;
    }
    }
    &-content{
      flex:1;
      overflow-x: hidden;
    }
  }
 .router-link-exact-active,
 .router-link-active{
   color:green;
   border-left: 2px solid green;
 }
</style>
