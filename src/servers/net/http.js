/*
 * @Author: 郑晶
 * @Date: 2020-06-18 15:53:04
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-28 12:04:18
 * @Descripttion:
 */
import Taro from '@tarojs/taro';
import { getBaseUrl } from '../baseUrl';
import interceptors from './interceptors';

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

class httpRequest {
	baseOptions(params, method = 'GET') {
		let { url, data } = params;
		const BASE_URL = getBaseUrl(url);
		let contentType = 'application/json';
		contentType = params.contentType || contentType;
		const option = {
			url: BASE_URL + url,
			data: data,
			method: method,
			header: {
				'content-type': contentType,
				Authorization:
					'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi5Lqr5b6X5aSa55So5oi3MDA3MSIsImV4cCI6MTg5ODU4NzQxNCwidXNlcklkIjozLCJpYXQiOjE1OTg1ODc0MTQsImp0aSI6InRva2VuSWQifQ.bbZihOuHPlHTD4yWM-Ede6xYT9oNiOnJRyYfK51hpXg',
				Platform: 'MINI',
			},
		};
		return Taro.request(option);
	}

	get(url, data = '') {
		let option = { url, data };
		return this.baseOptions(option);
	}

	post(url, data, contentType) {
		let params = { url, data, contentType };
		return this.baseOptions(params, 'POST');
	}

	put(url, data = '') {
		let option = { url, data };
		return this.baseOptions(option, 'PUT');
	}

	delete(url, data = '') {
		let option = { url, data };
		return this.baseOptions(option, 'DELETE');
	}
}

export default new httpRequest();
