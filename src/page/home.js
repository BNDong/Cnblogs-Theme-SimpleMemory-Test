/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 主页处理
 */

import comBefore from '../components/common/comBefore';
import comAfter from '../components/common/comAfter';

export default function main(_) {

    /**
     * 前置公共处理
     */
    (() => {
        comBefore(_);
    })();



    /**
     * 后置公共处理
     */
    (() => {
        comAfter(_);
    })();
}