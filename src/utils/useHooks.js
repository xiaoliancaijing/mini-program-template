/*
 * @Author: 郑晶
 * @Date: 2020-08-26 15:56:15
 * @LastEditors: 郑晶
 * @LastEditTime: 2020-08-26 16:16:07
 * @Descripttion:节流和防抖 hook
 */
import { useRef, useEffect } from "react";
/**
 * @name:fn：方法，delay：时间（秒）
 * @description: 节流
 * @param {Function,num}
 * @return {Function}
 */
export const useThrottle = (fn, delay) => {
  const ref = useRef({ fn, timer: null });
  useEffect(() => {
    ref.current.fn = fn;
    return () => {
      if (ref.current.timer) clearTimeout(ref.current.timer);
    };
  }, [fn]);
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
 * @description: 防抖
 * @param {Function,num,ref}
 * @return {Function}
 */
export const useDebounce = (fn, delay, ref) => {
  ref.current = {
    fn,
    timer: null,
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
