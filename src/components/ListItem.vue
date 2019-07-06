<template>
  <div class="gome-list-item">
    <div class="gome-list-item-img">
      <img src="//img.alicdn.com/bao/uploaded/i1/3786032144/O1CN01PDVLho1RhzgWcghTS_!!3786032144.jpg" alt="">
    </div>
    <div class="gome-list-item-info">
      <p class="gome-list-item-info-title">
          秋季男休闲裤子潮流宽松情侣小脚九分哈伦裤男士9分运动束脚长裤</p>
      <p class="gome-list-item-info-other">
        <span class="gome-list-item-info-price">￥128.00</span>
        <span class="gome-list-item-info-people">180人已买</span>
      </p>
       <button class="list-item-addcarBtn">加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {

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
