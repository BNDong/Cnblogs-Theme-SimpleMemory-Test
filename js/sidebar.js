var sidebarHtml = '<!-- menu html -->' +
    '<div class="container">' +
    '    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">' +
    '        <nav class="menu">' +
    '            <!-- 个人简介 -->' +
    '            <div class="introduce-box">' +
    '                <div class="introduce-head">' +
    '                    <div class="introduce-via" id="menuBlogAvatar"></div>' +
    '                </div>' +
    '                <div id="introduce"></div>' +
    '            </div>' +
    '            <!-- 导航 -->' +
    '            <div class="nav-title"></div>' +
    '            <div class="icon-list">' +
    '                <ul>' +
    '                    <li><a href="https://www.cnblogs.com/bndong/" target="_self">首页</a></li>' +
    '                    <li><a href="https://msg.cnblogs.com/send/BNDong" target="_blank">联系</a></li>' +
    '                    <li><a href="https://www.cnblogs.com/bndong/rss" target="_blank">订阅</a></li>' +
    '                    <li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>' +
    '                    <li><a href="https://github.com/BNDong" target="_blank">GitHub</a></li>' +
    '                    <li><a href="https://www.cnblogs.com/" target="_blank">CNBlogs</a></li>' +
    '                </ul>' +
    '            </div>' +
    '            <!-- 最新随笔 -->' +
    '            <div class="m-list-title"><span>最新随笔</span></div>' +
    '            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>' +
    '            <!-- 我的标签 -->' +
    '            <div class="m-list-title"><span>我的标签</span></div>' +
    '            <div class="m-icon-list" id="sb-toptags"></div>' +
    '            <!-- 随笔分类 -->' +
    '            <div class="m-list-title"><span>随笔分类</span></div>' +
    '            <div class="m-icon-list" id="sb-classify"></div>' +
    '            <!-- 随笔档案 -->' +
    '            <div class="m-list-title"><span>随笔档案</span></div>' +
    '            <div class="m-icon-list" id="sb-record"></div>' +
    '            <!-- 阅读排行 -->' +
    '            <div class="m-list-title"><span>阅读排行</span></div>' +
    '            <div class="m-icon-list" id="sb-topview"></div>' +
    '            <!-- 推荐排行 -->' +
    '            <div class="m-list-title"><span>推荐排行</span></div>' +
    '            <div class="m-icon-list" id="sb-topDiggPosts"></div>' +
    '            <!-- 自定义列表 -->' +
    '            <span id="menuCustomList"></span>' +
    '        </nav>' +
    '        <button class="close-button" id="close-button">Close Menu</button>' +
    '        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
    '            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
    '                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
    '            </svg>' +
    '        </div>' +
    '    </div>' +
    '    <button class="menu-button" id="open-button">MENU</button>' +
    '    <div class="content-wrap" id="content-wrap"></div><!-- /content-wrap -->' +
    '</div>' +
    '<!-- menu html end -->' +
    '<!-- banner html -->' +
    '<div class="main-header">' +
    '    <canvas id="notHomeTopCanvas" style=" position: absolute;margin: auto;width: 100%;height: 100%;top: 0;bottom: 0;left: 0;right: 0;"></canvas>' +
    '    <div class="vertical">' +
    '        <div class="main-header-content inner">' +
    '            <link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">' +
    '            <h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>' +
    '            <h2 class="page-description" id="hitokoto"></h2>' +
    '            <h3 class="page-author" id="hitokotoAuthor"></h3>' +
    '        </div>' +
    '    </div>' +
    '    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">' +
    '        <span class="hidden">Scroll Down</span>' +
    '        <i class="scroll-down-icon iconfont icon-fanhui"></i>' +
    '    </a>' +
    '</div>' +
    '<!-- banner html end -->';

$('#blog-news').prepend(sidebarHtml);

// start cache
$.ajaxSetup({cache: true});

// load loadingJs
$.getScript(getJsDelivrUrl('loading.js'), function () {

    // Loading start
    pageLoading.initRebound();
    pageLoading.initSpinner();
    pageLoading.spinner.init(pageLoading.spring, true);

    $.getScript(getJsDelivrUrl('jquery.mCustomScrollbar.min.js'), function () {
        $.getScript(getJsDelivrUrl('require.min.js'), function () {
            $.getScript(getJsDelivrUrl('config.js'), function () {
                var staticResource = [
                    'optiscroll', 'ToProgress', 'rotate',
                    'snapSvg', 'classie', 'main4', 'tools'];
                require(staticResource, function() {
                    require(['base'], function() {
                        (new Base).init();
                    });
                });
            });
        });
    });
});

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    return 'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/' + (file ? file : '');
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix  = null,fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length -1)], ['js', 'css']) != -1)
    {suffix    = fileArr.pop(); directory = suffix;}
    file.search('.min') == -1 && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? (directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}