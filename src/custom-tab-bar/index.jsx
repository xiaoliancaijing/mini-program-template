/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-31 16:29:40
 * @LastEditors: 郑晶
 * @Description: 自定义底部导航,此文件名称、位置一律不能改！
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
import { observer } from 'mobx-react';
import usersStore from '../store/users';
import './index.scss';

class customTabBar extends Component {
	state = {
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

	switchTab = (item, i) => {
		const url = item.pagePath;
		Taro.switchTab({
			url,
			success: () => {
				//使用mobx监听位置
				usersStore.tabIndexChange(i);
			},
		});
	};
	// 自定义 tabBar的页面
	render() {
		let { list } = this.state;
		return (
			<View className="tab-bar">
				{list.map((e, i) => {
					return (
						<View className="tab-item" onClick={() => this.switchTab(e, i)} key={i}>
							<Image
								src={
									i == usersStore.users.tabIndex ? e.selectedIconPath : e.iconPath
								}
							/>
							<Text className={i == usersStore.users.tabIndex && 'selText'}>
								{e.text}
							</Text>
						</View>
					);
				})}
			</View>
		);
	}
}
export default observer(customTabBar);
