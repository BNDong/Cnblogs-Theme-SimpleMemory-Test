/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 公共处理
 */
import baseTemp from '../../template/base.html';
import navTemp from '../../template/sidebarNav.html';
import loading from '../loading/loading';

export default function main(_) {

    /**
     * 设置基础模版
     */
    (() => {
        $('#blog-news').prepend(baseTemp);
    })();

    /**
     * 设置侧边栏导航
     */
    (() => {
        let navHtml = _.__tools.tempReplacement(navTemp, 'user', _.__status.user);

        // 设置自定义导航
        let navList = _.__config.sidebar.navList;
        if (navList.length > 0) {
            $.each(navList, function (i) {
                let iconClass = navList[i].length > 2 ? navList[i][2] : "icon-qianzishenhe";
                navHtml += '<li><a href="'+(navList[i][1])+'" target="_blank"><i class="iconfont '+iconClass+'"></i>'+(navList[i][0])+'</a></li>';
            });
        }

        $('#m-nav-list').append(navHtml);
    })();

    /**
     * 开启 loading
     */
    (() => {
        let loadingObj = loading(_);
        loadingObj.start();

        setTimeout(function () {
            loadingObj.stop();
        }, 10000);
    })();

}