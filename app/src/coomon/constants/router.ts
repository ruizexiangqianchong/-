import TSRouter from './interface';

/**
 * 路径集合
 */
const PATH_MAP = {
    root: '/',
    resume: '/resume',
};

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
};

/**
 * 用于在首页渲染导航按钮
 */
export const ROUTER_ROOT_ARRAY: TSRouter.Item[] = [
    {
        url: 'https://github.com/PDKSophia/visResumeMook',
        key: 'intro',
        text: '介绍',
    },
    {
        url: PATH_MAP.resume,
        key: ROUTER_KEY.resume,
        text: '简历',
    },
    {
        url: 'https://github.com/PDKSophia/visResumeMook',
        key: 'code',
        text: '源码',
    },
];

export default PATH_MAP;
