/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-31 15:51:23
 * @LastEditors: 郑晶
 * @Description: home
 */
import React from 'react';
import { View, ScrollView } from '@tarojs/components';
import { observer } from 'mobx-react';
import './index.scss';
function Home() {
	return (
		<View className="home">
			<View className="head">大哥</View>
			<ScrollView className="box" scrollY scrollAnchoring enhanced fastDeceleration>
				<View className="box1">box1</View>
				<View className="box2">box2</View>
				<View className="box3">box3</View>
			</ScrollView>
		</View>
	);
}

export default observer(Home);
