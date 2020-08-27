/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:41:12
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-27 13:00:50
 * @Descripttion:
 */
const path = require('path');
const config = {
	//项目距名称
	projectName: 'demo',
	// 项目创建日期
	date: '2020-8-26',
	// 设计稿尺寸
	designWidth: 750,
	// 设计稿尺寸换算规则
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2,
	},
	// 项目源码目录
	sourceRoot: 'src',
	// 项目产出目录
	outputRoot: 'dist',
	// 编译插件配置
	plugins: [],
	// 全局变量设置
	defineConstants: {},
	// 文件 copy 配置
	copy: {
		patterns: [],
		options: {},
	},
	// 框架，react，nerv，vue, vue3 等
	framework: 'react',
	// 小程序端专用配置
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {},
			},
			// 小程序端样式引用本地资源内联配置
			url: {
				enable: true,
				config: {
					limit: 1024, // 设定转换尺寸上限
				},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]',
				},
			},
		},
	},
	//配置相对路径
	alias: {
		'@/components': path.resolve(__dirname, '..', 'src/components'),
		'@/utils': path.resolve(__dirname, '..', 'src/utils'),
		'@/apis': path.resolve(__dirname, '..', 'src/servers/api'),
		'@/store': path.resolve(__dirname, '..', 'src/store'),
		'@/assets': path.resolve(__dirname, '..', 'src/assets'),
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'static',
		postcss: {
			autoprefixer: {
				enable: true,
				config: {},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]',
				},
			},
		},
		esnextModules: ['taro-ui'],
	},
};

module.exports = function (merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'));
	}
	return merge({}, config, require('./prod'));
};
