var sidebarHtml =
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
    '<div id="loading"></div>'  +
    '<div id="bottomProgressBar"></div>' +
    '<div id="rightMenu"></div>';

$('#blog-news').prepend(sidebarHtml);

/**
 * 博客全局配置，请仔细配置！！
 */
window.cnblogsConfigDefault = {

    // ---- GitHub文件源配置 ----
    GhUserName: 'BNDong', // GitHub用户名(不是昵称)，注意大小写
    GhRepositories: 'Cnblogs-Theme-SimpleMemory-Test', // GitHub主题仓库名称
    GhVersions : '', // GitHub提交版本哈希值，根据版本加载代码，我有时候会提交代码进行调试，大家最好加载我仓库代码此处的版本 https://github.com/BNDong/Cnblogs-Theme-SimpleMemory/commits/master

    // ---- 基础信息配置 ----
    blogUser      : "未配置", // 博主名称，文章后缀和主页图片上都会使用此名称
    blogAvatar    : "", // 用户头像URL
    blogStartDate : "2019-01-01", // 入园时间，年-月-日，入园时间查看方法：鼠标停留园龄时间上，会显示入园时间

    // ---- 菜单配置 ----
    menuCustomList: {},

    // ---- 网站配置 ----
    webpageTitleOnblur        : "(oﾟvﾟ)ノ Hi", // 当前页失去焦点，页面title显示文字
    webpageTitleOnblurTimeOut : 500, // 当前页失去焦点，页面title变化，延时时间，单位毫秒
    webpageTitleFocus         : "(*´∇｀*) 欢迎回来！", // 当前页获取焦点，页面title显示文字，显示后延时恢复原title
    webpageTitleFocusTimeOut  : 1000, // 当前页获取焦点，页面title变化，延时时间，单位毫秒
    webpageIcon : "", // 网站图标

    // ---- 进度条配置 ----
    progressBar: {
        id      : 'top-progress-bar',
        color   : '#77b6ff',
        height  : '2px',
        duration: 0.2
    },

    // ---- Loading配置 ----
    loading: {
        rebound: {
            tension: 16,
            friction: 5
        },
        spinner: {
            id: 'spinner',
            radius: 90,
            sides: 3,
            depth: 4,
            colors: {
                background: '#f0f0f0',
                stroke: '#272633',
                base: null,
                child: '#272633'
            },
            alwaysForward: true, // When false the spring will reverse normally.
            restAt: 0.5,         // A number from 0.1 to 0.9 || null for full rotation
            renderBase: false
        }
    },

    // ---- 页面动效配置 ----
    homeTopAnimationRendered: true, // true || false ,是否渲染主页头图动效
    homeTopAnimation: { // 主页头图动效设置
        radius: 15,
        density: 0.2,
        color: 'rgba(255,255,255, .2)', // 颜色设置，“random” 为随机颜色
        clearOffset: 0.3
    },

    essayTopAnimationRendered: true, // true || false ,是否渲染随笔页头图动效
    essayTopAnimation: { // 随笔页头图动效设置
        triW : 14,
        triH : 20,
        neighbours : ["side", "top", "bottom"],
        speedTrailAppear : .1,
        speedTrailDisappear : .1,
        speedTriOpen : 1,
        trailMaxLength : 30,
        trailIntervalCreation : 100,
        delayBeforeDisappear : 2,
        colors: [
            '#D9B6D4', '#A29AC3',
            '#9091BF', '#9394C2',
            '#FBCACE', '#7E84B8',
            '#FCD5CE', '#6C79B5'
        ]
    },

    bgAnimationRendered: true, // true || false ,是否渲染背景动效
    backgroundAnimation : { // 背景动效设置
        colorSaturation: "60%",
        colorBrightness: "50%",
        colorAlpha: 0.5,
        colorCycleSpeed: 5,
        verticalPosition: "random",
        horizontalSpeed: 200,
        ribbonCount: 3,
        strokeSize: 0,
        parallaxAmount: -0.2,
        animateSections: true
    },

    // ---- 主页配置 ----
    // ---- 主页配置 ----
    homeTopImg    : [ // 主页图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张
        "https://raw.githubusercontent.com/BNDong/Cnblogs-Theme-SimpleMemory/master/img/home_top_bg.jpg"
    ],
    homeBannerText: "", // 主页头图上的标语，设置此选项会固定显示文字，默认为空，自动获取一句。

    // ---- 随笔页配置 ----
    essayTopImg: [ // 随笔页图片Url，支持多张，每次刷新随机设置一张
        "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-569548.png"
    ],
    essayCodeHighlightingType: 'cnblogs', // 代码主题插件类型：cnblogs || highlightjs || prettify
    essayCodeHighlighting: '', // 代码高亮主题，具体主题参考文档
    essaySuffix:{ // 随笔后缀处配置
        aboutHtml    : '', // 关于博主，不配置使用默认
        copyrightHtml: '', // 版权声明，不配置使用默认
        supportHtml  : ''  // 声援博主，不配置使用默认
    },

    // ---- 页脚配置 ----
    bottomBlogroll: [ // 友情链接，[[链接名,链接]....]

    ],
    bottomText: {  // 页脚标语
        icon: "❤️", // 图标
        left : "图标左侧文字", // 图标左侧文字
        right: "图标右侧文字"  // 图标右侧文字
    },

    // ---- 控制台输出 ----
    consoleList: [

    ],
    themeAuthor: true, // 是否显示主题作者（原谅我的臭屁，O(∩_∩)O哈哈~）
};

window.cnblogsConfig = $.extend( true, window.cnblogsConfigDefault, window.cnblogsConfig );
console.log(window.cnblogsConfig);

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