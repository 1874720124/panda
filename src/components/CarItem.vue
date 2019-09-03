<template>
  <div class="qd-cart-item">
    <div class="qd-cart-item-check">
      <label>
        <input
          type="checkbox"
          :checked="ischecked"
          @click="toggleChecked({ id })"
        >
        <span></span>
        </label>
    </div>
    <div class="qd-cart-item-img">
      <img :src="image" alt="">
    </div>
    <div class="qd-cart-item-content">
      <p class="qd-cart-item-content__title">{{title}} </p>
      <div class="qd-cart-item-content-action">
        <span class="qd-cart-item-content-action__price">{{price}}</span>
        <span class="qd-cart-item-content-action-counter">
          <span @click="decreament({id})">-</span>
          <span>{{num}}</span>
          <span @click="increament({id})">+</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  props: {
    id: {
      required: true,
      type: Number
    },
    price: {
      required: true,
      type: Number
    },
    originPrice: {
      required: true,
      type: Number
    },
    num: {
      required: true,
      type: Number
    },
    title: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    },
    ischecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapMutations(['decreament', 'increament', 'toggleChecked'])
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #26a2ff;
.qd-cart-item {
  display: flex;
  margin-top: 10px;
  &-check {
    width: 40px;
    text-align: center;
    input {
      display: none;
      &:checked + span {
        border-color: $activeColor;
        background: $activeColor;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 12px;
          height: 8px;
          border: 2px solid #fff;
          border-width: 0 0 2px 2px;
          transform: rotate(-45deg);
        }
      }
    }
    span {
      display: inline-block;
      margin-top: 20px;
      width: 16px;
      height: 16px;
      border: 2px solid #666;
    }
  }
  &-img {
    width: 80px;
    img {
      width: 100%;
    }
  }
  &-content {
    display: flex;
    margin: 0 8px;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    &__title {
      font-size: 12px;
      line-height: 20px;
    }
    &-action {
      display: flex;
      justify-content: space-between;
      &__price {
        color: #e00;
        font-size: 14px;
      }
      &-counter {
        height: 20px;
        border: 1px solid #999;
        border-radius: 3px;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          &:nth-child(2) {
            border: 1px solid #999;
            border-width: 0 1px;
            width: auto;
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>
