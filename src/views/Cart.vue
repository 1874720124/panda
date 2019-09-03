<template>
  <div class="carcon">
    <CarItem
    v-for="product in cart"
    :key="product.id"
    :id="product.id"
    :title="product.title"
    :price="product.price"
    :originPrice="product.originPrice"
    :image="product.image"
    :num="product.num"
    :ischecked="product.ischecked"></CarItem>
     <p>全选： <input type="checkbox" class="allcheckbox" @click="allCheckChange" :checked="isAllChecked"></p>
    <p>共有<span>{{calcAllnum|tofixed2}}</span>件商品</p>
    <p>已选<span>{{AllCheckedNum|tofixed2}}</span>件商品</p>
    <p>共计：<span>{{AllMoney|tofixed2}}</span>元</p>
  </div>
</template>

<script>
import CarItem from '@/components/CarItem'
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  components: {
    CarItem
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['calcAllnum', 'AllCheckedNum', 'AllMoney', 'isAllChecked'])
  },
  methods: {
    ...mapMutations(['allCheckChange'])
  }
}
</script>

<style>
.allcheckbox{
  width: 19px;
  height: 19px;
}
</style>
