import React, { useEffect, useState } from 'react';
import { AuditOutlined, SmileOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import quarterMap, { weekMap } from './map';
import './style.scss';

const quarterOfYear = require('dayjs/plugin/quarterOfYear');

/**
 * 进入首页的展示图
 * @return {Promise<JSX.Element>}
 */
const Banner = () => {
  const [Position, setPosition] = useState('');
  dayjs.extend(quarterOfYear);
  /**
   * 标题滑动样式，但是效果不怎么好
   */
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
    // setTitle();
  }, []);
  return (
    <div className="top-banner">
      <div className="top-banner-week-tips">
        {weekMap.get(dayjs().day() || 0)}
      </div>
      <div
        className="top-banner-bg"
        style={{
          backgroundImage: `url(${quarterMap.get(
            (dayjs().subtract(8, 'M') as any).quarter() || 1
          )})`,
          backgroundPosition: Position,
        }}
      >
        {/* <span>SUN</span> */}
      </div>
      <div className="top-banner-content">
        <AuditOutlined className="top-banner-content-icon" />
        <div className="top-banner-content-tips">
          一个模板简历制作平台, 让你的简历更加出众 ~
        </div>
        <div className="top-banner-content-note">
          <SmileOutlined className="top-banner-content-note-icon" />
          <span className="top-banner-content-note-text">
            由孙瑞泽制作，仅供学习使用
          </span>
        </div>
      </div>
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default Banner;
