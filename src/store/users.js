/*
 * @Author: 郑晶
 * @Date: 2020-08-31 15:46:58
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-31 15:50:24
 * @Descripttion:
 */
import { observable } from 'mobx';

const usersStore = observable({
	users: {
		token: '',
	},
	updateToken(e) {
		this.users.token = e;
	},
});

export default usersStore;
