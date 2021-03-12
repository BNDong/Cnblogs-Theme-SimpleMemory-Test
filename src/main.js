/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 主程序文件
 */

import _ from 'lodash';
import config from './components/config/config';
import status from './components/status/status';

$(document).ready(function(){
    _.__config = config();
    _.__status = status(_);

    // 开启渲染
    import(/* webpackChunkName: "page-[request]" */ `./page/${_.__status.pageType}`).then(module => {
        const page = module.default;
        page(_);
    });

})