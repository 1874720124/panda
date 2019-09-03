<template>
  <div class="gm-login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <p>*密码为6-16位数字字母下划线减号的组合</p>
    <mt-button type="primary" size="large" @click="doLogin({ username, password})">登录</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      password: '',
      username: ''
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions(['login']),
    doLogin () {
      let pattern = /^[\w_-]{6,16}$/
      let isRightPwd = pattern.test(this.password)
      if (isRightPwd) {
        this.login({
          username: this.username,
          password: this.password
        })
      } else {
        Toast('密码不符合规范，请重新输入')
      }
    }
  },
  watch: {
    isLogin (value) {
      // 说明是从未登录变为已登录
      if (value === true) {
        // console.log(123)
        let instance = Toast('登录成功')
        setTimeout(() => {
          instance.close()
          // console.log(this.$route.params)
          let from = this.$route.params.from
          if (from) {
            // 说明经过了导航守卫跳过来的
            this.$router.push(from)
          } else {
            this.$router.back()
          }
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .gm-login{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
