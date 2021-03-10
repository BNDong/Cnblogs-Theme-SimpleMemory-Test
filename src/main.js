/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 主程序文件
 */

import _ from 'lodash';
// import './style/main.css';
import config from './components/config/config';

import test1 from './components/test/test1';

$(document).ready(function(){
    _.__config = config();

    console.log(_.__config);
    test1();

    if (Math.random() > 0.5) {
        import(/* webpackChunkName: "test" */ './components/test/test').then(module => {
            const test = module.default;

            test();
        });
    }
})