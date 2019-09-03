import {
  ADD_TO_CAR,
  DECREAMENT_BY_ID,
  INCREAMENT,
  TOGGLE_CKECKED,
  ALL_CHECK_CHANGE,
  LOGIN
} from './mutationTypes'
export default {
  [ ADD_TO_CAR ] (state, { id, title, price, originPrice, image }) {
    // console.log(state, id, title, price, originPrice, image)
    const isAdded = state.cart.some((product) => {
      return id === product.id
    })
    // console.log(isAdded)
    // 添加过了，id找到它将它的num++
    if (isAdded) {
      state.cart.map((product) => {
        if (product.id === id) {
          product.num++
        }
        return product
      })
    } else {
      state.cart.push({
        id,
        title,
        price,
        originPrice,
        image,
        ischecked: true,
        num: 1
      })
    }
    console.log(state)
  },
  [ DECREAMENT_BY_ID ] (state, { id }) {
    // console.log(state, id)
    state.cart = state.cart.map((product) => {
      if (product.id === id) {
        product.num--
        if (product.num < 1) product.num = 1
      }
      return product
    })
  },
  [ INCREAMENT ] (state, { id }) {
    // console.log(state, id)
    state.cart = state.cart.map((product) => {
      if (product.id === id) {
        product.num++
        if (product.num > 100) product.num = 100
      }
      return product
    })
  },
  [TOGGLE_CKECKED] (state, { id }) {
    state.cart.map((product) => {
      if (product.id === id) {
        product.ischecked = !product.ischecked
      }
      return product
    })
  },
  // 全选
  [ALL_CHECK_CHANGE] (state, e) {
    console.log(state, e.target.checked)
    state.cart.map((product) => {
      product.ischecked = e.target.checked
      return product
    })
  },
  [LOGIN] (state, userinfo = {}) {
    state.userinfo = userinfo
    // console.log(state.isLogin)
  }
}
