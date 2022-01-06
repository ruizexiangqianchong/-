import { ipcRenderer } from 'electron';

/**
 * @description 获取文件的相对路径
 */
const getFilePath = () => {
    return new Promise((res: (val: string) => void, rej: (val: Error) => void) => {
        /**
         * 向主进程发送这个case
         */
        ipcRenderer.send('get-root-path', '');
        /**
         * 获取主进程的回调
         */
        ipcRenderer.on('reply-root-path', (evt, arg: string) => {
            if (arg) {
                res(arg);
            } else {
                rej(new Error('获取项目路径错误'));
            }
        });
    });
};

export default getFilePath;