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
