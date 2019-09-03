<template>
  <div class="gome-header">
    <mt-header title="国美商城">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="goback">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  </div>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style>
</style>
