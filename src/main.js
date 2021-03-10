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

$(document).ready(function(){
    _.__config = config();

    console.log(_.__config);
})