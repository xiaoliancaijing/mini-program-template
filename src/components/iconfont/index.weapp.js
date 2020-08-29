/*
 * @Author: 郑晶
 * @Date: 2020-08-29 16:42:02
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-29 17:03:21
 * @Descripttion:
 */
/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';

const IconFont = props => {
	const { name, size, color } = props;

	return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
	size: 18,
};

export default IconFont;
