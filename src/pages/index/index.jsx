/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-31 15:51:51
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React from 'react';
import { View } from '@tarojs/components';
import IconFont from '@/components/iconfont';
import { observer } from 'mobx-react';

import './index.scss';

function Index() {
	return (
		<View className="index">
			<View className="box">
				<IconFont className="icon" size={100} name="xingzhuang1" />
			</View>
		</View>
	);
}

export default observer(Index);
