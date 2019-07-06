<template>
  <div class="gome-home">
    <div class="swiper-container">
    <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class = "swiper-slide" 
          v-for = "banner in banners"
          :key="banner.id">
            <img :src = "banner.imageUrl" :alt = "banner.id">
          </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
 import Swiper from 'swiper'; 
//  引入swiper的样式
 import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.$http.getbanner().then(resp => {
      // console.log(resp.data,resp.data.banners)
      this.banners = resp.data.banners
        this.$nextTick().then(()=> {
          new Swiper ('.swiper-container',{
            // Optional parameters
            loop: true,
            autoplay: true,
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            clickable: 'true'
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.gome-home {
  .swiper-container {
    width: 100%;
    height: 0;
    padding-top: 400 / 1080 * 100%;
    position: relative;
  }
  .swiper-wrapper {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
