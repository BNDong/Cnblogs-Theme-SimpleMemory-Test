/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 工具处理类
 */

export default function main() {
    return {

        /**
         * 模版替换
         * @param temp
         * @param par
         * @param str
         * @returns {*}
         */
        tempReplacement: (temp, par, str) => {
            let re = new RegExp('{{' + par + '}}',"g");
            return temp.replace(re, str);
        },

        /**
         * 加载CSS文件
         */
        dynamicLoadingCss: (path) => {
            if (!path || path.length === 0) { throw new Error('argument "path" is required !'); }
            let head = document.getElementsByTagName('head')[0], link = document.createElement('link');
            link.href = path; link.rel = 'stylesheet'; link.type = 'text/css'; head.appendChild(link);
        },
    };
}