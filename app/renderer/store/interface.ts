import { GlobalType } from './global';

interface BaseActive {
    /**
     * @description type类型
     */
  type: string;
}

export interface ReduceStore{
    globalStroe: GlobalType
}

export default BaseActive;
