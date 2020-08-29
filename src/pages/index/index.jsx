/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-29 17:29:19
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import IconFont from '@/components/iconfont';
import './index.scss';

function Index() {
	return (
		<View className="index">
			<View className="box">
				<Text>首页</Text>
				<IconFont className="icon" size={100} name="xingzhuang1" />
				<Text>大哥</Text>
			</View>
		</View>
	);
}

export default Index;
