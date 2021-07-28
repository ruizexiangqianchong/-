declare namespace TSRouter {
  export interface Item {
    /**
     * @description 路由的跳转链接
     */
    url: string;
    /**
     * @description 路由的标识
     */
    key: string;
    /**
     * @description 文本名称
     */
    text: string;
  }
}

export default TSRouter;
