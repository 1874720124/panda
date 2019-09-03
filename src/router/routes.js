
// import Home from '@/views/Home'
// 异步组件
import gomeFooter from '@/components/gomeFooter'
const Home = () => import('@/views/Home')
const Category = () => import('@/views/Category')
const Optimization = () => import('@/views/Optimization')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const List = () => import('@/views/List')
const Detail = () => import('@/views/Detail')
const Login = () => import('@/views/Login')
export default [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: gomeFooter
    },
    meta: {
      istabbar: true,
      title: '首页',
      icon: '&#xe61b;'
    }
  },
  {
    path: '/category',
    components: {
      default: Category,
      footer: gomeFooter
    },
    name: 'category',
    meta: {
      istabbar: true,
      title: '分类',
      icon: '&#xe619;'
    },
    children: [
      {
        path: ':cateId',
        name: 'cateList',
        component: List
      }
    ]
  },
  {
    path: '/optimization',
    components: {
      default: Optimization,
      footer: gomeFooter
    },
    name: 'optimization',
    meta: {
      istabbar: true,
      title: '优选',
      icon: '&#xe615;'
    }
  },
  {
    path: '/cart',
    components: {
      default: Cart,
      footer: gomeFooter
    },
    name: 'cart',
    meta: {
      istabbar: true,
      title: '购物车',
      icon: '&#xe605;',
      isAuthRequired: true
    }
  },
  {
    path: '/mine',
    components: {
      default: Mine,
      footer: gomeFooter
    },
    name: 'mine',
    meta: {
      istabbar: true,
      title: '我的',
      icon: '&#xe61a;'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: Detail,
      footer: gomeFooter
    },
    meta: {}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {}
  }
]
