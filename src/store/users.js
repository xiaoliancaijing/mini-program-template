/*
 * @Author: 郑晶
 * @Date: 2020-08-31 15:46:58
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-31 16:18:09
 * @Descripttion:
 */
import { observable } from 'mobx';

const usersStore = observable({
	users: {
		token: '',
		tabIndex: 0,
	},
	//自定义tab改变
	tabIndexChange(i) {
		this.users.tabIndex = i;
	},
	//改变token
	updateToken(e) {
		this.users.token = e;
	},
});

export default usersStore;
