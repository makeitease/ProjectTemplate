import axios from 'axios'
axios.defaults.withCredentials; //允许axios发送cookis信息
axios.create({
  timeout: 1000 //请求延时时间
})
//添加请求拦截器 (在发送请求之前做某事)
axios.interceptors.request.use(function (config) {
  /*
  添加权限验证,为每一个请求的header中添加token
  根据token存储的位置不同添加不同判断和处理
   */
  if (sessionStorage.token) { //
    config.headers['Authorization'] = sessionStorage.token;
  }
  return config; //只有return config后，才能成功发送请求
}, function (error) {
  //请求错误时的处理
  return Promise.reject(error);
});
//添加响应拦截器 (后端返回信息后的处理)
axios.interceptors.response.use(function (response) {
  // 接收到响应数据后的处理
  let res = response.data;
  /*
   判断权限相关的接口返回状态是否正确
   */
  if (response.status == "401" || response.status == "40101") {
    console.log(response.data.message) //输出错误信息(大部分原因:token失效)
    return Promise.reject('error'); //方法抛出异常
  }
  //以下是通过后端的返回码去判断接口的调用的状态
  if (res.response.returncode == "") {
    console.log("用户无权限")
    return Promise.reject('error');
  }
  if (response.status !== '200') {
    console.log("接口调用异常")
    return Promise.reject('error');
  } else {
    return response;
  }

}, function (error) {
  // 响应错误时的处理
  return Promise.reject(error);
});
/*
  封装post请求 并抛出该方法
  *url接口请求的地址
  *postType 发送数据时的数据处理(是否有结构化的固定对象)
  *data  发送的数据
 */
export function post(url, postType, data) {
  let newData = "";
  if (postType == 1) {
    newData = {
      "request": {
        "headers": {
          "App_Sub_ID": "1000000102TK",
          "App_Token": "a197d0adfb8e48aab136bdb689b08ffa",
          "Api_ID": "cre.cresys.OA.organization",
          "Api_Version": "1.0",
          "Time_Stamp": "2017-04-20 10:20:23:234",
          "Sign_Method": "MD5",
          "Sign": "1",
          "Format": "json",
          "Partner_ID": "10000000",
          "Sys_ID": "10000001",
          "App_Pub_ID": "1000000101YU",
          "Transaction_UUID": "1"
        },
        "body": data
      }
    }
  } else {
    newData = data
  }
  return new Promise((resolve, reject) => {
    axios.post(url, newData).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
/*
  封装get方法 并抛出该方法
  *url 接口请求地址
  *data 发送的数据
 */
export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
