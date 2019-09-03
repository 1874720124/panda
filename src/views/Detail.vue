<template>
 <div class="qd-detail">
    <div class="qd-detail-banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item
        v-for="img in detailmesg.photo"
        :key="img.id">
        <img :src="img.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="qd-detail-section">
      <p class="qd-detail-section-title">
        <mt-badge type="success" size="small">112</mt-badge>
        {{detailmesg.title}}
      </p>
      <p class="qd-detail-section-action">
        <span>
          <span class="qd-detail-section-action-price">￥{{detailmesg.price}}</span>
          <span class="qd-detail-section-action-originprice">原价：￥
            <span>{{detailmesg.tbOriginPrice}}</span>
          </span>
        </span>
        <span class="qd-detail-section-action-salenum">月销量：120</span>
      </p>
      <button @click="addToCar({
        id:detailmesg.id,
        title:detailmesg.title,
        price:detailmesg.price,
        originPrice:detailmesg.tbOriginPrice,
        image:detailmesg.photo[0].url
      })">加入购物车</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      detailmesg: []
    }
  },
  created () {
    // console.log(this.$route.query.id)
    const id = this.$route.query.id
    this.$http.getDetail(id).then((resp) => {
      this.detailmesg = resp.data.detail
      // console.log(this.detailmesg)
    })
  },
  methods: {
    ...mapMutations([ 'addToCar' ])
  }
}
</script>

<style lang="scss">
$activeColor: #26a2ff;
.qd-detail {
  width: 100%;
  height: 75%;
  &-banner {
    width: 100%;
    height: 100%;
    &-wrap {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
  &-section {
    line-height: 30px;
    &-title {
      font-size: 12px;
      span {
        line-height: 20px;
      }
    }
    &-action {
      display: flex;
      justify-content: space-between;
      &-price {
        color: #e00;
        font-size: 14px;
      }
      &-originprice {
        font-size: 12px;
        color: #999;
        margin-left: 8px;
        span {
          text-decoration: line-through;
        }
      }
      &-salenum {
        font-size: 12px;
      }
    }
    &-btn {
      font-size: 12px;
      border: none;
      background-color:  $activeColor;
      color: #fff;
      line-height: 30px;
      height: 30px;
      border-radius: 3px;
      width: 100%;
    }
  }
}
</style>
