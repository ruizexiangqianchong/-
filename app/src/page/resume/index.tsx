import React from 'react';
import { ReduceStore } from '@renderer/store/interface';

interface Iprops {
  store: ReduceStore;
  setTitle: () => void;
}

const Resume = (props: Iprops) => {
  console.log(props, '外部数据');
  const { setTitle } = props;
  const clickHandle = () => {
    setTitle();
  };
  return (
    <div>
      <div>{props.store.globalStroe.title}</div>
      <div>我是简历啊</div>
      <div onClick={clickHandle}>点击改变简历</div>
    </div>
  );
};

export default Resume;
