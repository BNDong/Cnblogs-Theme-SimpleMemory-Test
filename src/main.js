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
import tools from './utils/tools';

$(document).ready(function(){

    // 初始化
    _.__config = config();
    _.__status = status();
    _.__tools  = tools();

    if (_.__config.info.name === '') _.__config.info.name = _.__status.user;

    // 开启渲染
    import(/* webpackChunkName: "page-[request]" */ `./page/${_.__status.pageType}`).then(module => {
        const page = module.default;
        page(_);
    });

})