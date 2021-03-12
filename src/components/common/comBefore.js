/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 前置公共处理
 */
import baseTemp from '../../template/base.html';
import loading from "../loading/loading";
import sidebar from "../sidebar/sidebar";

export default function main(_) {
    let loadingObj = loading(_);

    /**
     * 开启 loading
     */
    (() => {
        loadingObj.start();
    })();

    /**
     * 设置基础模版
     */
    (() => {
        $('#blog-news').prepend(baseTemp);
    })();

    /**
     * 侧边栏
     */
    (() => {
        sidebar(_);
    })();

    /**
     * 添加扩展字体图标库
     */
    (() => {
        if (_.__config.fontIconExtend !== '') _.__tools.dynamicLoadingCss(_.__config.fontIconExtend);
    })();

    /**
     * 事件
     */
    (() => {

    })();

    /**
     * 关闭 loading
     */
    (() => {
        loadingObj.stop();
    })();
}