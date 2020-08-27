// ScrollView;
/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-27 19:05:45
 * @LastEditors: 郑晶
 * @Description: 自定义底部导航（目前this.$scope undefined在3.0.5、3.0.7版本存在，加上跳转报错，除非使用微信小程序原生组件）
 */
import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import indexIcon from '@/assets/images/tabs/index.png';
import indexdIcon from '@/assets/images/tabs/indexd.png';
import classifyIcon from '@/assets/images/tabs/classify.png';
import classifydIcon from '@/assets/images/tabs/classifyd.png';
import mineIcon from '@/assets/images/tabs/mine.png';
import minedIcon from '@/assets/images/tabs/mined.png';
import './index.scss';

class customTabBar extends Component {
	state = {
		selected: 0,
		list: [
			{
				pagePath: '/pages/home/index',
				text: '首页',
				iconPath: indexIcon,
				selectedIconPath: indexdIcon,
			},
			{
				pagePath: '/pages/classify/index',
				text: '分类',
				iconPath: classifyIcon,
				selectedIconPath: classifydIcon,
			},
			{
				pagePath: '/pages/mine/index',
				text: '我的',
				iconPath: mineIcon,
				selectedIconPath: minedIcon,
			},
		],
	};

	switchTab = item => {
		const url = item.pagePath;
		console.log(url);
		Taro.switchTab({
			url,
			success: () => {
				console.log('成功了啊');
			},
		});
	};

	componentDidMount() {
		console.log(this, 'ind');
		this.setState({
			selected: 1,
		});
	}

	// 自定义 tabBar的页面
	render() {
		let { list } = this.state;
		return (
			<View className="tab-bar">
				{list.map((e, i) => {
					return (
						<View className="tab-item" onClick={() => this.switchTab(e)} key={i}>
							<Image src={e.iconPath} />
							<Text>{e.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}
export default customTabBar;
