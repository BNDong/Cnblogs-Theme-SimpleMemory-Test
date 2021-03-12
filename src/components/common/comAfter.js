/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 后置公共处理
 */
import loading from "../loading/loading";

export default function main(_) {

    /**
     * 关闭 loading
     */
    (() => {
        let loadingObj = loading(_);
        loadingObj.stop();
    })();
}