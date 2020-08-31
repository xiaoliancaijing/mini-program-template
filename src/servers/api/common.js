/*
 * @Author: 郑晶
 * @Date: 2020-07-06 16:28:22
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-31 11:59:41
 * @Descripttion:
 */
/* * Descripttion:公共的方法, Author: chenwei  * Date: 2019-11-23 12:56:44  * Last Modified by:   chenwei  * Last Modified time: 2019-11-23 12:56:44  */
/**
 * 获取微信登录凭证
 */
import HTTPREQUEST from '../net/http';
export const wxLogin = async () => {
	try {
		const res = await Taro.login();
		return res.code;
	} catch (error) {
		console.log('微信获取临时凭着失败');
	}
};
//上传图片组件获取token
export const getOSSToken = async data => {
	return HTTPREQUEST.get(`/mini/qiniu/token`);
};
