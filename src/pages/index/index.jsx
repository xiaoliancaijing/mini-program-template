/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-28 17:28:25
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import Authentication from '@/components/authentication';

import './index.scss';

function Index() {
	return (
		<View className="index">
			<Text>首页</Text>
			<View className="box">
				<View className="box1">
					<Text>客服</Text>
				</View>
				<Authentication style={{ width: '60%', height: '100%' }}>
					<View className="box2">
						<Text>登录</Text>
					</View>
				</Authentication>
			</View>
		</View>
	);
}

export default Index;
