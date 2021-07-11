import React, { useEffect, useState } from 'react';
import quarterMap, { weekMap } from './map';
import dayjs from 'dayjs';
import './style.scss';

const quarterOfYear = require('dayjs/plugin/quarterOfYear');

/**
 * 进入首页的展示图
 * @return {Promise<JSX.Element>}
 */
const Banner = () => {
  const [Position, setPosition] = useState('');
  dayjs.extend(quarterOfYear);
  const setTitle = () => {
    window.addEventListener('scroll', () => {
      const scrolly = window.scrollY;
      if (scrolly !== 0) {
        setPosition(`calc(50% + ${scrolly}px) calc(50% + ${scrolly}px)`);
      } else {
        setPosition('');
      }
    });
  };
  useEffect(() => {
    setTitle();
  }, []);
  return (
    <div className="banner">
      <div className="banner-week-tips">{weekMap.get(dayjs().day() || 0)}</div>
      <div
        className="banner-bg"
        style={{
          backgroundImage: `url(${quarterMap.get(
              (dayjs().subtract(2, 'M') as any).quarter() || 1,
          )})`,
          backgroundPosition: Position,
        }}
      >
        <span>SUN</span>
      </div>
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default Banner;
