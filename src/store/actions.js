import {
  postLogin
} from '@/request'
export default {
  login (context, { username, password }) {
    postLogin({ username, password }).then(resp => {
      console.log(resp)
      // context.commit('login')
      if (resp.code === 200) {
        const { id, displayName, token } = resp.body.userinfo
        context.commit('login', {
          id,
          displayName,
          token
        })
      }
    })
  }
}
