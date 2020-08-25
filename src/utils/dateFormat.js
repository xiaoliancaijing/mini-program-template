import { useRef, useCallback, useEffect } from "@tarojs/taro";
export const dateFormat = (parDate, fmt) => {
  var o = {
    "Y+": parDate.getFullYear(), //年份
    "M+": parDate.getMonth() + 1, //月份
    "d+": parDate.getDate(), //日
    "h+": parDate.getHours() % 12 == 0 ? 12 : parDate.getHours() % 12, //小时
    "H+": parDate.getHours(), //小时
    "m+": parDate.getMinutes(), //分
    "s+": parDate.getSeconds(), //秒
    "q+": Math.floor((parDate.getMonth() + 3) / 3), //季度
    S: parDate.getMilliseconds() //毫秒
  };
  var week = {
    "0": "/u65e5",
    "1": "/u4e00",
    "2": "/u4e8c",
    "3": "/u4e09",
    "4": "/u56db",
    "5": "/u4e94",
    "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (parDate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "/u661f/u671f"
          : "/u5468"
        : "") + week[parDate.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

//列表时间
export const dateFilter = data => {
  if ((new Date() - new Date(data)) / 3600 / 1000 > 24) {
    return dateFormat(new Date(data), "yyyy-MM-dd");
  } else {
    if ((new Date() - new Date(data)) / 3600 / 1000 > 1) {
      return parseInt((new Date() - new Date(data)) / 3600 / 1000) + "小时前";
    } else {
      return (
        parseInt(((new Date() - new Date(data)) / 3600 / 1000) * 60) + "分钟前"
      );
    }
  }
};

//比较函数
/**
 * @param  p  string  json数据中对象的key
 */
export const compare = p => (m, n) => n[p] - m[p]; //降序

/**
 * 获取距离指定时间还有多少天
 * @param {String | Number | Date} dateTime 日期时间
 * @example
 * ```javascript
 *     getDistanceSpecifiedTime('2019/02/02 02:02:00');
 *     getDistanceSpecifiedTime(1549036800000);
 *     getDistanceSpecifiedTime(new Date("2019/2/2 00:00:00"));
 * ```
 */
export const getDistanceSpecifiedTime = dateTime => {
  // 指定日期和时间
  var EndTime = new Date(dateTime);
  // 当前系统时间
  var NowTime = new Date();
  var t = EndTime.getTime() - NowTime.getTime();
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  var m = Math.floor((t / 1000 / 60) % 60);
  var s = Math.floor((t / 1000) % 60);
  return {
    d: d,
    h: h,
    m: m,
    s: s
  };
};
/**
 * @name:
 * @description: 初始化时间戳为日
 * @param {type}
 * @return:
 */
export const setHoursTime = time => {
  if (time) {
    return new Date(time).setHours(0, 0, 0);
  }
};
/**
 * @name:fn：方法，delay：时间（秒）
 * @description: 节流函数
 */
export const useThrottle = (fn, delay) => {
  const ref = useRef({ fn, timer: null });
  useEffect(
    function() {
      ref.current.fn = fn;
    },
    [fn]
  );
  function f(...args) {
    if (!ref.current.timer) {
      ref.current.timer = setTimeout(() => {
        delete ref.current.timer;
      }, delay);
      ref.current.fn.call(this, ...args);
    }
  }
  return f;
};
/**
 * @name: fn：方法，delay：时间(秒)，ref：useRef(null)（便于在不同场景清除定时器）
 * @description: 防抖函数
 */
export const useDebounce = (fn, delay, ref) => {
  ref.current = {
    fn,
    timer: null
  };
  useEffect(() => {
    // 更新引用
    ref.current.fn = fn;
    return () => {
      //卸载清除定时器
      if (ref.current.timer) clearTimeout(ref.current.timer);
    };
  }, [fn]);
  function f(...args) {
    if (ref.current.timer) {
      clearTimeout(ref.current.timer);
    }
    ref.current.timer = setTimeout(() => {
      // this 指向
      ref.current.fn.call(this, ...args);
    }, delay);
  }
  return f;
};
