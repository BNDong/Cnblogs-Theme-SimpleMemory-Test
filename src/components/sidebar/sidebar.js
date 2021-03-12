/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
import '../../style/menu_bubble.css';
import navTemp from '../../template/sidebarNav.html';
import main4 from './lib/main4';

export default function main(_) {

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
     * 设置侧边栏
     */
    (() => {
        main4();
    })();
}