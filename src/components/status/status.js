/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

export default function main(_) {
    let status = {};

    // 提取url信息
    status.url = window.location.href;
    let tmp = status.url.split("/");
    status.user = tmp[3];
    status.articleId = '';

    // 判断当前页面类型
    if (!$('#topics').length) {
        status.pageType = 'home'; // 当前页面为主页
    } else {
        if ($('#bookListFlg').length) {
            status.pageType = 'book'; // 当前页面为书单页
        } else if ($('#linkListFlg').length) {
            status.pageType = 'links'; // 当前页面为友链页
        } else {
            status.pageType = 'article'; // 当前页面为文章页
        }

        // 提取文章id
        let endVal = (tmp[tmp.length - 1]).split(".");
        status.articleId = endVal[0];
    }

    return status;
}