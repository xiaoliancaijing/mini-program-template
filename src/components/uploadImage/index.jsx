/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-28 15:03:34
 * @LastEditors: 郑晶
 * @Description: 上传图片组件
 * @params:files: [],multiple: false(当count不等于1时自动多张),count: 5(总张数),length: 4(一行多少个),
 */
import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtImagePicker } from 'taro-ui';
import { GUID } from '@/utils/guid';
import { getOSSToken } from '@/apis/common';
import { upLoad, qiniuDownload } from '../../servers/baseUrl';
import './index.scss';

function UploadImage(props) {
	//不变的length
	let length = props.length;
	//不变的multiple
	let multiple = props.multiple || false;
	//不变的count
	let counts = props.count || 9;
	//最多几张
	const [count, setCount] = useState(9);
	//文件列表
	const [files, setFiles] = useState([]);
	useEffect(() => {
		let { files } = props;
		setFiles(files || []);
		setCount(counts);
	}, []);
	//图片改变
	let onChange = async (files, status) => {
		if (status === 'remove') {
			//暂时解决点击穿透问题
			setTimeout(() => {
				setFiles(files);
				setCount(counts - files.length);
			}, 300);
			return;
		}
		var file = files.pop().file;
		let promise = await getOSSToken(); // 函数自行实现,保证返回一个promise来就可以
		// 生成文件唯一编码值
		let guid = new GUID();
		// 固定文件类型 jpg
		let fileKey = `${guid.newGUID()}.jpg`;
		// 这里不做文件压缩，上传原图，只是在 显示的时候做文件压缩
		Taro.uploadFile({
			url: upLoad, //仅为示例，非真实的接口地址
			filePath: file.path,
			name: 'file',
			formData: {
				token: promise.data.uptoken,
				key: fileKey,
			},
			success(res) {
				const data = res.data ? JSON.parse(res.data) : '';
				let newsimg = files.concat([{ url: qiniuDownload + '/' + data.key }]);
				setFiles(newsimg);
				setCount(counts - newsimg.length);
			},
			fail(err) {
				console.log('&&&&', err);
			},
		});
	};
	//点击图片
	let onImageClick = url => {
		let fls = JSON.parse(JSON.stringify(files));
		Taro.previewImage({
			urls: fls.map(e => e.url),
			current: url.url,
		});
	};
	//选择失败
	let onFail = e => {
		console.log(e, '失败');
	};
	return (
		<View className="uploadImage">
			<Text>
				上传{count}
				{multiple ? '有' : '没有'}
			</Text>
			<AtImagePicker
				count={count}
				length={length}
				files={files}
				multiple={multiple}
				showAddBtn={files.length < counts}
				sizeType={['compressed']}
				onChange={(files, status) => onChange(files, status)}
				onFail={e => onFail(e)}
				onImageClick={(i, url) => onImageClick(url)}
			/>
		</View>
	);
}

export default UploadImage;
