<template>
  <div class="list-wrap">
    <ListItem></ListItem>
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
      cateId: ''
    }
  },
  created () {
    this.cateId = this.$route.params.cateId
    this.getdata()
  },
  beforeRouterUpdate (to,from,next) {
    console.log(to.params)
    this.cateId = to.params.cateId
    this.getdata()
    next()
  },
  methods: {
    getdata () {
      this.$http.getProducts(this.cateId).then(resp => {
        console.log(resp)
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
