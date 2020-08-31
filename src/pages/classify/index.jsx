import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { observer } from 'mobx-react';

import './index.scss';
class Classify extends Component {
	render() {
		return (
			<View className="classify">
				<Text>分类</Text>
			</View>
		);
	}
}

export default observer(Classify);
