import React from 'react';
import Banner from './component/topBanner';

const Root = (props) => {
    console.log(props,'数据')
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Root;
