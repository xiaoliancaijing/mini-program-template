/*
 * @Author: wei.chen
 * @Date: 2020-06-18 15:53:04
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-25 12:54:53
 * @Descripttion:
 */
/* * Descripttion:'', Author: chenwei  * Date: 2019-11-23 12:33:04  * Last Modified by:   chenwei  * Last Modified time: 2019-11-23 12:33:04  */

import HTTPREQUEST from "../net/http";
// 获取 banner
export const getAd = () => {
  return HTTPREQUEST.get("/banner/insert");
};
