export default {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  userinfo: JSON.parse(localStorage.getItem('userinfo')) || {}
}
