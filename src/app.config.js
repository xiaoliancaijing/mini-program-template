/*
 * @Author: 郑晶
 * @Date: 2020-08-26 19:29:50
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-28 10:42:49
 * @Descripttion:
 */
export default {
	pages: ['pages/index/index', 'pages/home/index', 'pages/classify/index', 'pages/mine/index'],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
	tabBar: {
		// 使用custom-tab-bar
		custom: false,
		color: '#8a8a8a',
		selectedColor: '#1296db',
		backgroundColor: '#fff',
		borderStyle: 'black',
		// 这些配置无法省略 同时需要注意pagePath和图片路径的配置
		// 如果这里图片路径没有配置或配置出错的话，图片icon不会显示
		list: [
			{
				pagePath: 'pages/home/index',
				text: '首页',
				iconPath: './assets/images/tabs/index.png',
				selectedIconPath: './assets/images/tabs/indexd.png',
			},
			{
				pagePath: 'pages/classify/index',
				text: '分类',
				iconPath: './assets/images/tabs/classify.png',
				selectedIconPath: './assets/images/tabs/classifyd.png',
			},
			{
				pagePath: 'pages/mine/index',
				text: '我的',
				iconPath: './assets/images/tabs/mine.png',
				selectedIconPath: './assets/images/tabs/mined.png',
			},
		],
	},
};
