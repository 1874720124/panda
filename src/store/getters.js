export default {
  calcAllnum (state) {
    return state.cart.reduce((allnum, product) => {
      allnum += product.num
      return allnum
    }, 0)
  },
  AllCheckedNum (state) {
    // console.log(state.cart.ischecked)
    return state.cart.reduce((checkednum, product) => {
      if (product.ischecked === true) {
        checkednum += product.num
      }
      return checkednum
    }, 0)
  },
  AllMoney (state) {
    return state.cart.reduce((totalMoney, product) => {
      if (product.ischecked === true) {
        totalMoney += product.num * product.price
      }
      return totalMoney
    }, 0)
  },
  isAllChecked (state) {
    return state.cart.every((product) => {
      return product.ischecked === true
    })
  },
  isLogin (state) {
    return !!state.userinfo.token
  }
}
