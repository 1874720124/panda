import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = axios.create()
ajax.interceptors.request.use((config) => {
  // Do something before request is sent
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

// Add a response interceptor
ajax.interceptors.response.use((resp) => {
  // Do something with response data
  Indicator.close()
  // console.log(resp)
  if (resp.status === 200) {
    return resp.data
  } else {
    return resp
  }
})
export const getbanner = () => ajax.get('/api/tab/1')
export const gettabs = () => ajax.get('/api/tabs')
export const getProducts = id => ajax.get(`/api/tab/${id}`)
// 根据分类id请求当前分类的商品列表
export const getProductList = (id, nextIndex) => ajax.get(`/api/tab/${id}?start=${nextIndex}`)
// 请求商品详情数据
export const getDetail = (id) => ajax.get('/api/detail', { params: { id } })
// 请求登录接口
export const postLogin = ({ username, password }) => ajax.post('http://rap2api.taobao.org/app/mock/223317/user/login', { username, password })
