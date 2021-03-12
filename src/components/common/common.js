/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 公共处理
 */
import baseTemp from '../../template/base.html';
import navTemp from '../../template/sidebarNav.html';

export default function main(_) {

    // 设置基础模版
    (() => {
        $('#blog-news').prepend(baseTemp);
    })();

    // 设置侧边栏导航
    (() => {
        let navHtml = _.__tools.tempReplacement(navTemp, 'user', _.__status.user);

        $('#m-nav-list').append(navHtml);
    })();
}