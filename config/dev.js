/*
 * @Author: 郑晶
 * @Date: 2020-08-26 19:29:50
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-28 15:26:47
 * @Descripttion:
 */
module.exports = {
	env: {
		NODE_ENV: '"development"',
	},
	defineConstants: {},
	mini: {},
	h5: {
		esnextModules: ['taro-ui'],
	},
	// 小程序端专用配置
	weapp: {
		module: {
			postcss: {
				autoprefixer: {
					enable: true,
				},
				// 小程序端样式引用本地资源内联配置
				url: {
					enable: true,
					config: {
						limit: 10240, // 文件大小限制
					},
				},
			},
		},
	},
};
