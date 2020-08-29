import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { Provider } from 'mobx-react';

import './index.scss';

function Authentication(props) {
	const [status, setStatus] = useState(null);
	useEffect(() => {
		let token = Taro.getStorageSync('token');
		if (token) {
			//有token的情况验证 session_key 是否过期
			Taro.checkSession({
				success: function () {
					//session_key 未过期，并且在本生命周期一直有效
					setStatus(true);
				},
				fail: function () {
					setStatus(false);
				},
			});
			return;
		}
		setStatus(false);
	}, [props]);
	const getPhoneNumbers = e => {
		let { encryptedData, iv } = e.detail;
		Taro.login({
			success: function (res) {
				if (res.code) {
					let params = {
						encryptedData,
						iv,
						code: res.code,
					};
					//登录...
					console.log(params);
				} else {
					console.log('登录失败！' + res.errMsg);
				}
			},
		});
	};
	console.log(props);
	return (
		<Button
			className="btn"
			open-type={status ? '' : 'getPhoneNumber'}
			onGetphonenumber={getPhoneNumbers}
			style={props.style}
		>
			<Provider>{props.children}</Provider>
		</Button>
	);
}

export default Authentication;
