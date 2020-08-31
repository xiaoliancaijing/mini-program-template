import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import usersStore from './store/users';
//在更新父子组件的顺序方面存在一些极端情况。尝试将其添加到文件中。清除mobx警告
import 'mobx-react-lite/batchingForReactDom';
import './app.scss';

const store = {
	usersStore,
};

class App extends Component {
	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// this.props.children 就是要渲染的页面
	render() {
		return <Provider store={store}>{this.props.children}</Provider>;
	}
}

export default App;
