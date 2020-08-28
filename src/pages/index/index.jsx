/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-28 15:00:52
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import UploadImage from '@/components/uploadImage';

import './index.scss';

function Index() {
	let filesObj = {
		files: [],
		multiple: false,
		count: 5,
		length: 4,
	};
	return (
		<View className="index">
			<Text>首页</Text>
			<UploadImage {...filesObj} />
		</View>
	);
}

export default Index;
