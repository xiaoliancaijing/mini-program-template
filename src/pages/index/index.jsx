import Taro, { useEffect, useRef } from "@tarojs/taro";
import { observer } from "@tarojs/mobx";
import store from "../../store/index";
import { useDebounce, useThrottle } from "../../utils/dateFormat.js";
import "./index.less";

function Index() {
  useEffect(() => {
    console.log("index开始");
    return () => {
      console.log("index结束");
    };
  }, []);
  const ref = useRef(null);
  const click = () => {
    console.log("index");
  };
  return (
    <View>
      <Text>{state}</Text>
      <Button onClick={useDebounce(click, 4000, ref)}>Index</Button>
      <Button
        onClick={() => {
          if (ref.current.timer) {
            console.log("清除了");
            clearTimeout(ref.current.timer);
          }
          Taro.navigateTo({ url: "/pages/demo/index" });
        }}
      >
        跳转
      </Button>
    </View>
  );
}

export default observer(Index);
