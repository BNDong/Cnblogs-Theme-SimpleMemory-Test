/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 公共处理
 */
import baseTemp from '../../template/base.html';

export default function main(_) {
    console.log(_.__config);
    console.log(_.__status);
    // 设置基础模版
    (() => {
        let baseHtml = baseTemp;

        $('#blog-news').prepend(baseHtml);

        console.log(_);
    })();

}