import * as fs from 'fs';

class FileFn {
    /**
     * @description 异步的读取文件内容
     */
    read = (path: string, encoding?: BufferEncoding)=> {
        return new Promise((res, rej) => {
            fs.readFile(path, { encoding: encoding || 'utf8' }, (err, buffer) => {
                if (err) {
                    console.error('读取本地缓存文件错误', err)
                    rej(err)
                } else {
                    res(buffer)
                }
            })
        })
    }
}

export default new FileFn()