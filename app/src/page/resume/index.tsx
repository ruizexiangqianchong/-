import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReduceStore } from '@renderer/store/interface';
import FileFn from '@src/utils/file';
import getFilePath from '@src/utils/getAppPath';

interface Iprops {
  store: ReduceStore;
  setTitle: () => void;
}

const Resume = (props: Iprops) => {
  const history = useHistory();
  const { setTitle } = props;
  const clickHandle = () => {
    setTitle();
  };
  const readFile = async () => {
    const path = await getFilePath();
    const result = await FileFn.read(`${path}/app/src/page/resume/index.tsx`)
    console.log(result, '点击数据', path)
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <div>
      <div>{props.store.globalStroe.title}</div>
      <div onClick={goBack}>我是简历啊</div>
      <div onClick={clickHandle}>点击改变简历</div>
      <div onClick={readFile}>读取文件信息</div>
    </div>
  );
};

export default Resume;
