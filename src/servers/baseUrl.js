/*
 * @Author: your name
 * @Date: 2020-06-17 16:47:16
 * @LastEditTime: 2020-07-13 11:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mini_xiangdeduo/src/servers/baseUrl.js
 */

let BASE_URL = "";
let server_H5 = "";
let qiniuDownload = "";
let upLoad = "";
let APPID = "";
let downLoadImg = "";

// console.log("当前运行环境 ：", process.env.NODE_ENV);
// wx6cf1472237f6d5a6 是生产appid
// wx3c040d8bd3eee238  是测试环境

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://api.test.xiang360.com";
  qiniuDownload = "http://cdn.test.xiang360.com";
  upLoad = "https://up-z2.qiniup.com";
  APPID = "wx3c040d8bd3eee238"; //测试环境
  // APPID = "wx6cf1472237f6d5a6"; // 正式
} else if (process.env.NODE_ENV === "beta") {
  // 测试环境
  BASE_URL = "http://api.test.xiang360.com";
  qiniuDownload = "http://cdn.test.xiang360.com";
  upLoad = "https://up-z2.qiniup.com";
  // APPID = "wx3c040d8bd3eee238"; //测试环境
  APPID = "wx6cf1472237f6d5a6"; // 正式
} else if (process.env.NODE_ENV === "production") {
  // 生产环境
  BASE_URL = "https://api.xiang360.com";
  qiniuDownload = "https://cdn.xiang360.com";
  upLoad = "https://up-z2.qiniup.com";
  APPID = "wx6cf1472237f6d5a6";
}

const getBaseUrl = url => {
  return BASE_URL;
};

export { getBaseUrl, server_H5, qiniuDownload, upLoad, APPID };
