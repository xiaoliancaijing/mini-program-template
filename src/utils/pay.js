/*
 * @Author: wei.chen
 * @Date: 2020-07-07 09:55:03
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-28 16:18:01
 * @Descripttion: orderId：订单ID；prepayId：获取微信订单支付参数
 */

import Taro from '@tarojs/taro';
import { GUID } from './guid.js';
import { APPID } from '../servers/baseUrl';
import md5 from 'js-md5';
export const pay = (orderId, prepayId) => {
	let guid = new GUID().newGUID() + '';
	let time = parseInt(+new Date() / 1000) + '';
	const _paySign = `appId=${APPID}&nonceStr=${guid}&package=prepay_id=${prepayId}&signType=MD5&timeStamp=${time}&key=821baf3e584ff6332be26ffd60192c23`;
	let paySign = md5(_paySign);
	Taro.requestPayment({
		nonceStr: guid,
		package: `prepay_id=${prepayId}`,
		paySign,
		signType: 'MD5',
		timeStamp: time,
		success: () => {
			//支付成功
		},
		fail: () => {
			// 支付失败
		},
	});
};
