/*
 * @Author: 郑晶
 * @Date: 2020-08-26 12:50:21
 * @LastEditTime: 2020-08-26 18:37:25
 * @LastEditors: 郑晶
 * @Description: 首页
 */
import React from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";

function Index() {
  return (
    <View>
      <Text>大哥</Text>
      <AtButton type="primary">按钮文案</AtButton>
    </View>
  );
}

export default Index;
