<template>
  <div class="list-wrap">
    <ListItem
    v-for="product in products"
    :key="product.id"
    :image="product.image"
    :title="product.title"
    :price="product.price"
    :id="product.id"></ListItem>
    <mt-button type="primary" size="large" v-if="isEnd">没有更多...</mt-button>
    <mt-button type="primary" size="large" v-else @click="getdata">加载更多...</mt-button>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  components: {
    ListItem
  },
  data () {
    return {
      cateId: '',
      products: [],
      // cateProducts: []
      nextIndex: '',
      isEnd: ''
    }
  },
  created () {
    this.cateId = this.$route.params.cateId
    // console.log(this.cateId)
    this.getdata()
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    this.cateId = to.params.cateId
    this.getdata()
    next()
  },
  methods: {
    getdata () {
      this.$http.getProducts(this.cateId, this.nextIndex).then(resp => {
        // this.cateProducts = resp.data.categories
        this.products = this.products.concat(resp.data.items.list)
        // console.log(resp)
        // console.log(this.products)
        this.isEnd = resp.data.items.isEnd
        this.nextIndex = resp.data.items.nextIndex
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-wrap{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
