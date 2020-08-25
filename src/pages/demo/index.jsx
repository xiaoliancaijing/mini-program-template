import Taro, { useEffect, useRef } from "@tarojs/taro";
import { observer } from "@tarojs/mobx";
import store from "../../store/index";
import { useDebounce } from "../../utils/dateFormat.js";
import "./index.less";

function Demo() {
  useEffect(() => {
    console.log("demo开始");
    return () => {
      console.log("demo结束");
    };
  }, []);
  const ref = useRef(null);
  const click = () => {
    console.log("demo");
  };
  return (
    <View>
      <Button onClick={useDebounce(click, 4000, ref)}>Demo</Button>
      <Button>Demo</Button>
    </View>
  );
}

export default observer(Demo);
