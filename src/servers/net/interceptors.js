import Taro from "@tarojs/taro";
import { pageToLogin } from "../utils";
import { HTTP_STATUS } from "../config";

const customInterceptor = chain => {
  const requestParams = chain.requestParams;

  return chain
    .proceed(requestParams)
    .then(res => {
      // console.log(res);
      // 只要请求成功，不管返回什么状态码，都走这个回调
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return Promise.reject("请求资源不存在");
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return Promise.reject("服务端出现了问题");
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        Taro.setStorageSync("Authorization", "");
        pageToLogin();
        // TODO 根据自身业务修改
        return Promise.reject("没有权限访问");
      } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
        Taro.setStorageSync("Authorization", "");
        pageToLogin();
        return Promise.reject("需要鉴权");
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data;
      } else if (res.statusCode === HTTP_STATUS.TOKEN_EXPIRED) {
        Taro.removeStorageSync("Authorization");
        pageToLogin();
        return Promise.reject("TOKEN已过期");
      }
    })
    .catch(error => {
      console.log(error);
      return Promise.reject("请求异常");
    });
};

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
console.log(Taro.interceptors);
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor];

export default interceptors;
