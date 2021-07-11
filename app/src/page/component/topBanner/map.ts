import winter from '@src/img/index/winter.jpg';
import summer from '@src/img/index/summer.jpg';
import autumn from '@src/img/index/autumn.jpg';
import springtime from '@src/img/index/springtime.jpg';

const quarterMap = new Map([
  [4, winter],
  [2, summer],
  [3, autumn],
  [1, springtime],
]);

export const weekMap = new Map([
  [0, '星期日，美好新一周！'],
  [1, '星期一，一周新开始！'],
  [2, '星期二，努力工作中！'],
  [3, '星期三，苦练基本功！'],
  [4, '星期四，每日前进1公里！'],
  [5, '星期五，快乐星期五！'],
  [6, '星期五，快乐开始！'],
]);

export default quarterMap;
