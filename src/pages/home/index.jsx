/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-27 19:04:39
 * @LastEditors: 郑晶
 * @Description: home
 */
import React, { useEffect } from 'react';
import { View, ScrollView } from '@tarojs/components';
import './index.scss';
function Home() {
	useEffect(() => {}, []);
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

export default Home;
