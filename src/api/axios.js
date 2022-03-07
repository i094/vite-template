import axios from 'axios'

let http = axios.create({
  // headers: {'Content-Type': 'application/json'},
  // baseURL: 'http://view.xpce.net/',
  baseURL: './',
  timeout: 60000
})


// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
http.interceptors.request.use(config => {
  if (config.method === 'post' || config.method === 'put') {
    // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
    config.data = JSON.stringify(config.data)
  }
  // 添加token
  let token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
  token && (config.headers['Token'] = token)

//   if (token) {
//     axios.get('/api/v1/auth/system/check/'+token, {
//        baseURL: 'http://192.168.3.98:8300', //正式环境注释掉
//       //baseURL: 'http://view.xpce.net/',
//     }).then(res => {
//       if (res.flag === false) {
//         let url = window.location.host;
//         if (url == 'data.xpce.net') {
//           this.loadJs(
//             "http://pv.sohu.com/cityjson?ie=utf-8",
//             (data) => {
//               this.$http.get('/api/v1/auth/system/umale/only/getToken', {
//                 innerIp: '19.106.228.179',
//                 // outerIp: '218.16.63.113',
//                 outerIp: returnCitySN["cip"]
//               }).then((res) => {
//                 if (!res.data) return false
//                 token = res.data.token;
//                 token && (config.headers['Token'] = token)

//                 localStorage.setItem('user', JSON.stringify(res.data))
//               },() => {});
//             }, "CurrentIP");
//         } else {
//           let userInfo = localStorage.getItem('getInfo')
//           ? JSON.parse(localStorage.getItem('getInfo')).user 
//           : null;
//           axios.get('/api/v1/auth/system/RenewalToken/'+userInfo.userId, {
//              baseURL: 'http://192.168.3.98:8300',  //正式环境注释掉
//             //baseURL: 'http://view.xpce.net/',
//           }).then( res => {
//             if (res.flag) {
//               token = res.data.token;
//               token && (config.headers['Token'] = token)
//               localStorage.setItem('user', JSON.stringify(res.data))
//             }
//           })
//         }
        
//       }
//     })
//   }
  return config
}, error => {
  // 请求错误处理
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  let { data } = response
  return data
}, error => {
  let info = {}
  let {
    status,
    statusText,
    data
  } = error.response
  if (!error.response) {
    info = {
      code: 5000,
      msg: 'Network Error'
    }
  } else {
    // 此处整理错误信息格式
    info = {
      code: status,
      data: data,
      msg: statusText
    }
  }
  return Promise.reject(info)
})

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return http
}