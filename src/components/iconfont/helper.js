/*
 * @Author: 郑晶
 * @Date: 2020-08-29 16:42:02
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-29 17:18:26
 * @Descripttion:
 */
const useIconFont = () => {
	return {
		iconfont: `../../components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
	};
};

// es modules is unavaiable.
module.exports.useIconFont = useIconFont;
