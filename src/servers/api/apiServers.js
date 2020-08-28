/*
 * @Author: wei.chen
 * @Date: 2020-06-18 15:53:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-15 11:11:27
 * @Descripttion:
 */
/* * Descripttion:'', Author: chenwei  * Date: 2019-11-23 12:33:04  * Last Modified by:   chenwei  * Last Modified time: 2019-11-23 12:33:04  */

import HTTPREQUEST from "../net/http";

// 获取 商品详情
export const getGoodsDetails = id => {
  return HTTPREQUEST.get(`/item/${id}`);
};

// 获取 banner
export const getAd = () => {
  return HTTPREQUEST.get("/banner/insert");
};

// // 登录
export const login = postData => {
  return HTTPREQUEST.post("/users/login", postData);
};
// export const getResultData_servers = (postData) => {
//   return HTTPREQUEST.post('/api/white-screen/search', postData)
// }

// 获取首页banner
export const getIndexAd = () => {
  return HTTPREQUEST.get("/banner/index");
};

// 获取一级类目
export const getIndexCar = () => {
  return HTTPREQUEST.get("/cat");
};

// 获取二级类目
export const getIndexCarTwo = id => {
  console.log("$$$$$", id);
  return HTTPREQUEST.get(`/cat/${id}`);
};

// 获取二级类目下商品
export const getGoodsList = (id, parentid, pageNum) => {
  return HTTPREQUEST.get(
    `/cat/${id}/${parentid}/item?pageIndex=${pageNum || 1}`
  );
};

// 限时抢购
export const getLimitPromotions = () => {
  return HTTPREQUEST.get("/limitPromotions");
};

// 默认收货地址
export const getDefaultAddress = () => {
  return HTTPREQUEST.get("/user/address/default");
};

// 新增收货地址
export const addAddress = postData => {
  return HTTPREQUEST.post("/user/address", postData);
};
// 删除收货地址
export const deleteAddres = id => {
  return HTTPREQUEST.delete(`/user/address/${id}`);
};
// 分页查询所有收货地址
export const getAllAddress = params => {
  return HTTPREQUEST.get("/user/address", params);
};

//设为默认收货地址
export const putDefaultAddress = id => {
  return HTTPREQUEST.put(`/user/address/${id}/default`);
};
//修改收货地址
export const updateAddress = ({ id, userAddress }) => {
  return HTTPREQUEST.put(`/user/address/${id}`, userAddress);
};
// 商品推荐
export const getCdeemmnors = (data, pageSize) => {
  return HTTPREQUEST.get(`/recommends?type=${data}&pageSize=${pageSize | 30}`);
};

//确认订单
export const confirmOrder = params => {
  return HTTPREQUEST.get("/orders/confirm", params);
};

//创建订单
export const addOrder = params => {
  return HTTPREQUEST.post("/orders", params);
};
//取消订单
export const cancelOrder = id => {
  return HTTPREQUEST.put(`/orders/${id}/cancel`);
};
//支付
export const payOrder = id => {
  return HTTPREQUEST.get(`/pay/payParam/order/${id}`);
};
//我的订单
export const mypayOrderList = params => {
  return HTTPREQUEST.get(`/users/${6}/order`, params);
};
//
//确认收货
export const confirmGoods = id => {
  return HTTPREQUEST.put(`/orders/${id}/done`);
};
//延长收货时间
export const delayTime = id => {
  return HTTPREQUEST.put(`/orders/${id}/delay`);
};
//详情页支持服务
export const getAfterService = id => {
  return HTTPREQUEST.get(`/item/${id}/afterService`);
};

//一级类目下所有商品
export const getAllGoods = id => {
  return HTTPREQUEST.get(`/cat/${id}/item/all`);
};
// //订单详情
export const getOrderDetails = (id, orderId) => {
  return HTTPREQUEST.get(`/users/${id}/order/${orderId}`);
};
// 搜索商品
export const getSearch = (keyword, getSearch) => {
  return HTTPREQUEST.get(`/item/search?keyword=${keyword}&sort=${getSearch}`);
};

// 评论某个订单下面的某个商品 comment
export const toComment = (id, itemId, params) => {
  return HTTPREQUEST.post(`/orders/${id}/item/${itemId}/comment`, params);
};

// 查看某个订单下面的商品详情
export const getGoodsDetail = (id, itemSkuId) => {
  return HTTPREQUEST.get(`/orders/${id}/item/${itemSkuId}`);
};

//查看某个订单下的评价
export const getOrderComment = (id, itemId) => {
  return HTTPREQUEST.get(`/orders/${id}/item/${itemId}/comment`);
};
// 搜索商品-限时抢购
export const getSearchXs = keyword => {
  return HTTPREQUEST.get(`/item/search/limitPromotion?keyword=${keyword}`);
};
//获取售后原因
export const getReason = () => {
  return HTTPREQUEST.get(`/orders/afterService/reason`);
};
//提交售后单
export const sendAfterService = params => {
  return HTTPREQUEST.post(`/orders/afterService`, params);
};
// 查询我的售后单列表
export const getAfterServiceList = pageIndex => {
  return HTTPREQUEST.get(`/orders/afterService`, pageIndex);
};
//售后详情（全家桶）
export const getAfterServiceDetailsAll = id => {
  return HTTPREQUEST.get(`/orders/afterService/${id}`);
};
// 取消售后单
export const cancelAfterService = id => {
  return HTTPREQUEST.put(`/orders/afterService/${id}/cancel`);
};
// 退换货-提交物流信息
export const sendLogistics = (id, params) => {
  return HTTPREQUEST.post(`/orders/afterService/${id}/logistics`, params);
};
// 足迹
export const getWacthLog = params => {
  return HTTPREQUEST.get(`/users/${params.id}/watchLog?`, params);
};
// 意见反馈
export const setAbcdeefk = params => {
  return HTTPREQUEST.post(`/feedback`, params);
};
// 用户-优惠卷列表
export const getCoupon = (id, couponStatus) => {
  return HTTPREQUEST.get(
    `/users/${id}/coupon?couponStatus=${couponStatus}&pageIndex=1&pageSize=100`
  );
};

// 查看评论列表
export const getCommentList = id => {
  return HTTPREQUEST.get(`/item/${id}/comment`);
};

// 查看评论列表 的基本信息
export const getCommentInfo = id => {
  return HTTPREQUEST.get(`/item/${id}/comment/info`);
};

// 跑马灯
export const getAeemqru = id => {
  return HTTPREQUEST.get(`/item/marquee`);
};

// 我的系统消息
export const messagesemssty = id => {
  return HTTPREQUEST.get(`/messages/system?pageSize=100`);
};
// 我的通知售后消息
export const messageafter = id => {
  return HTTPREQUEST.get(`/messages/after?pageSize=100`);
};
// 限时抢购时间表
export const limitPromotionstabs = id => {
  return HTTPREQUEST.get(`/limitPromotions/tabs`);
};

// 限时抢购商品
export const limitPromotionsList = id => {
  return HTTPREQUEST.get(`/limitPromotions/${id}/items`);
};

// 分享记录

export const aeghlors = (id, params) => {
  return HTTPREQUEST.post(`/users/${id}/shareLog`, params);
};
