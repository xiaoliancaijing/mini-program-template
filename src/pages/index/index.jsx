/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-27 18:12:47
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';

function Index(props) {
	let [h, setH] = useState(0);
	useEffect(() => {
		setH(
			Taro.getSystemInfoSync().safeArea.height * 2 -
				Taro.getSystemInfoSync().statusBarHeight * 2
		);
		console.log(Taro.getSystemInfoSync());
	}, []);
	return <View className="index">大哥</View>;
}

export default Index;
