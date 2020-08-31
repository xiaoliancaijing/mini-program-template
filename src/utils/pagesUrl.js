/*
 * @Author: 郑晶
 * @Date: 2020-08-31 16:46:02
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-31 16:46:50
 * @Descripttion:页面跳转功能集合
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
