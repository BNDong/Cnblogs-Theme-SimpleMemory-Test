/*!
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 **/
if (initCheck()) {

    window.cnblogsConfigDefault = {
        GhUserName: 'BNDong',
        GhRepositories: 'Cnblogs-Theme-SimpleMemory',
        GhVersions: 'v1.1.2',
        CnVersions: "",
        blogUser: "",
        blogAvatar: "",
        blogStartDate: "2019-01-01",
        menuCustomList: {},
        menuNavList: [],
        menuUserInfoBgImg: '',
        webpageTitleOnblur: "(oﾟvﾟ)ノ Hi",
        webpageTitleOnblurTimeOut: 500,
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",
        webpageTitleFocusTimeOut: 1000,
        webpageIcon: "",
        fontIconExtend: "",
        progressBar: {
            id: 'top-progress-bar',
            color: '#77b6ff',
            height: '2px',
            duration: 0.2
        },
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
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,
        homeTopAnimation: {
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,
        essayTopAnimation: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },
        bgAnimationRendered: true,
        backgroundAnimation: {
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
        homeTopImg: [
            "https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/home_top_bg.jpg"
        ],
        homeBannerText: "",
        homeBannerTextType: "jinrishici",
        essayTopImg: [
            "https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/nothome_top_bg.jpg"
        ],
        essayCodeHighlightingType: 'cnblogs',
        essayCodeHighlighting: '',
        essaySuffix: {
            codeImgUrl: '',
            aboutHtml: '',
            copyrightHtml: '',
            supportHtml: ''
        },
        bottomBlogroll: [],
        bottomText: {
            icon: "❤️",
            left: "",
            right: ""
        },
        footerStyle: 2,
        consoleList: [],
        themeAuthor: false,
    };

    window.cnblogsConfig = $.extend( true, window.cnblogsConfigDefault, window.cnblogsConfig );
    getVersionConfig();

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
                        // 'optiscroll', 'ToProgress', 'rotate',
                        'optiscroll_ToProgress_rotate',
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

} else {

    $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
        'display': 'block',
        'text-align': 'center',
        'padding-top': '45vh',
        'font-size': '20px',
        'color': '#333'
    });
}

// init check
function initCheck() {

    // check base theme
    var baseStyle = $('#mobile-style').attr('href');
    if (typeof baseStyle != 'undefined') {
        var bt = baseStyle.split('/');
        if($.inArray('SimpleMemory', bt) !== -1) {
            return true;
        }
    }
    return false;
}

// get version config
function getVersionConfig() {

    window.cnblogsConfigDefault.CnVersions = window.cnblogsConfigDefault.GhVersions;
    if ( window.cnblogsConfigDefault.GhUserName !== 'BNDong') { return; }
    // var url = 'https://raw.githubusercontent.com/' + window.cnblogsConfigDefault.GhUserName + '/' + window.cnblogsConfigDefault.GhRepositories + '/master/version.conf';
    const url = 'https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/version.conf';

    $.ajax({
        type: "get",
        url: url,
        dataType: "text",
        async: false,
        success: function(conf)
        {
            var confObj = conf ? JSON.parse(conf) : false;
            var confVersion = getEndConfVal(window.cnblogsConfigDefault.GhVersions);
            if (confVersion) { window.cnblogsConfigDefault.GhVersions = confVersion; }

            function getEndConfVal(thisGhVersion) {
                var endVal = '';
                confObj && $.each(confObj, function (i) {
                    if (confObj[i][0] === thisGhVersion) {
                        endVal = confObj[i][1];return false;
                    }
                });
                if (endVal === '') {
                    return thisGhVersion;
                } else {
                    return getEndConfVal(endVal);
                }
            }
        }
    });
}

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    return 'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/' + (file ? file : '');
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix  = null,fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length -1)], ['js', 'css']) !== -1) {
        suffix = fileArr.pop();
        switch (suffix) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    } else {
        if (typeof directory == 'undefined') return '';
        switch (directory) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    }
    file.search('.min') === -1 && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? ('src/' + directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}