/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-28 16:07:00
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';

import './index.scss';

function Index() {
	return (
		<View className="index">
			<Text>首页</Text>
			<Text class="iconfont">&#xe69d;</Text>
		</View>
	);
}

export default Index;
