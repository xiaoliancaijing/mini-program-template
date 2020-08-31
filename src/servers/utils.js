/*
 * @Author: 郑晶
 * @Date: 2020-06-18 15:53:04
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-31 12:00:44
 * @Descripttion:
 */
import Taro from '@tarojs/taro';
/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
	let pages = Taro.getCurrentPages();
	let currentPage = pages[pages.length - 1];
	let url = currentPage.route;
	return url;
};

/**
 * @description 跳转登录页
 */
export const pageToLogin = () => {
	let path = getCurrentPageUrl();
	if (!path.includes('login')) {
		Taro.navigateTo({
			url: '/pages/login/login',
		});
	}
};
