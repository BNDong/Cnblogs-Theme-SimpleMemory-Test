/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 主页处理
 */
export default function main(_) {

    /**
     * 前置公共处理
     */
    import(/* webpackChunkName: "comBefore" */ '../components/common/comBefore').then(module => {
        const main = module.default;
        main(_);
    });



    /**
     * 后置公共处理
     */
    import(/* webpackChunkName: "comAfter" */ '../components/common/comAfter').then(module => {
        const main = module.default;
        main(_);
    });
}