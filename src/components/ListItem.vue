<template>
  <router-link
  class="gome-list-item"
  tag="div"
  :to="{path:'/detail', query:{id}}">
    <div class="gome-list-item-img">
      <img :src="image" alt="">
    </div>
    <div class="gome-list-item-info">
      <p class="gome-list-item-info-title">
          {{title}}</p>
      <p class="gome-list-item-info-other">
        <span class="gome-list-item-info-price">￥{{price|tofixed2}}</span>
        <span class="gome-list-item-info-people">180人已买</span>
      </p>
       <button class="list-item-addcarBtn">加入购物车</button>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['image', 'title', 'price', 'id']
}
</script>

<style lang="scss" scoped>
.gome-list-item{
  width: 40%;
  height: 160px;
  background: #dedfee;
  margin: 5px;
  &-img{
    width: 100%;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &-info{
     font-size: 12px;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-title{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    }
    &-other{
      display: flex;
      justify-content: space-between;
    }
    .list-item-addcarBtn{
      width: 100%;
      height: 40px;
      background: green;
      color:#eeeeee;
      border-radius: 3px;
    }
  }
}
</style>
