require.config({
    baseUrl: window.__simpleMemory.getJsDelivrUrl(),
    waitSeconds: 100,
    map: {
        '*': {
            'css': window.__simpleMemory.setFileNameMin('lib/css.min', 'js')
        }
    },
    paths: {
        //-- 菜单滚动条
        optiscroll: window.__simpleMemory.setFileNameMin('lib/jquery.optiscroll', 'js'),

        //-- 进度条
        ToProgress: window.__simpleMemory.setFileNameMin('lib/ToProgress.min', 'js'),

        //-- 旋转
        rotate: window.__simpleMemory.setFileNameMin('lib/jquery.rotate.min', 'js'),

        //-- snap svg
        snapSvg: window.__simpleMemory.setFileNameMin('lib/snap.svg-min', 'js'),

        //-- 菜单
        classie: window.__simpleMemory.setFileNameMin('lib/classie', 'js'),
        main4: window.__simpleMemory.setFileNameMin('main4', 'js'),

        //-- bootstrap
        bootstrap: window.__simpleMemory.setFileNameMin('lib/bootstrap.min', 'js'),

        //-- 图片灯箱
        fancybox: window.__simpleMemory.setFileNameMin('lib/jquery.fancybox.min', 'js'),

        //-- 文章标题
        title: window.__simpleMemory.setFileNameMin('articleTitle', 'js'),

        //-- 文章目录
        marvin: window.__simpleMemory.setFileNameMin('marvin.nav2', 'js'),

        //-- 文章后缀
        articleStatement: window.__simpleMemory.setFileNameMin('articleStatement', 'js'),

        //-- 代码高亮 - prettify
        codePrettify: window.__simpleMemory.setFileNameMin('lib/run_prettify', 'js'),
        codeDesert: window.__simpleMemory.setFileNameMin('lib/run_prettify', 'js'),
        codeSunburst: window.__simpleMemory.setFileNameMin('lib/run_prettify', 'js'),
        codeObsidian: window.__simpleMemory.setFileNameMin('lib/run_prettify', 'js'),
        codeDoxy: window.__simpleMemory.setFileNameMin('lib/run_prettify', 'js'),

        //-- 代码高亮 - highlightjs
        highlightjs: window.__simpleMemory.setFileNameMin('lib/highlight.min', 'js'),

        //-- 拷贝：博客园
        encoder: window.__simpleMemory.setFileNameMin('lib/encoder', 'js'),

        //-- 拷贝：clipboard
        clipboard: window.__simpleMemory.setFileNameMin('lib/clipboard.min', 'js'),

        //-- 主页头图动画
        circleMagic: window.__simpleMemory.setFileNameMin('lib/circleMagic', 'js'),

        //-- 非主页头图动画
        TweenMax: window.__simpleMemory.setFileNameMin('lib/TweenMax.min', 'js'),
        MyTween: window.__simpleMemory.setFileNameMin('MyTween', 'js'),

        //-- 背景动画：丝带（随机）
        RibbonsEffect: window.__simpleMemory.setFileNameMin('RibbonsEffect', 'js'),

        //-- tools
        tools: window.__simpleMemory.setFileNameMin('tools', 'js'),

        //-- base
        base: window.__simpleMemory.setFileNameMin('base', 'js'),

        // == 合并压缩文件 == //
        //-- 菜单滚动条 && 进度条 && 旋转
        optiscroll_ToProgress_rotate: window.__simpleMemory.setFileNameMin('optiscroll_ToProgress_rotate.min', 'js'),

        //-- 非主页头图动画
        TweenMax_MyTween: window.__simpleMemory.setFileNameMin('TweenMax_MyTween.min', 'js'),
    },
    shim:{
        optiscroll: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('optiscroll.css')]
        },
        classie: {
            deps: ['snapSvg'],
        },
        title: {
            deps: ['tools'],
        },
        main4: {
            deps: ['snapSvg','classie', 'css!' + window.__simpleMemory.getJsDelivrUrl('menu_bubble.css')]
        },
        codePrettify: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('codePrettify.css')]
        },
        fancybox: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('jquery.fancybox.min.css')]
        },
        codeDesert: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('codeDesert.css')]
        },
        codeSunburst: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('codeSunburst.css')]
        },
        codeObsidian: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('codeObsidian.css')]
        },
        codeDoxy: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('codeDoxy.css')]
        },
        marvin: {
            deps: ['title', 'bootstrap', 'css!' + window.__simpleMemory.getJsDelivrUrl('marvin.nav2.css')]
        },
        MyTween: {
            deps: ['TweenMax']
        },
        base: {
            deps: [
                'tools',
                'css!//at.alicdn.com/t/font_543384_kv876ayucyc.css', // 阿里云字体图标
                'css!' + window.__simpleMemory.getJsDelivrUrl('google-fonts.css'), // 谷歌字体
            ]
        },

        // == 合并压缩文件 == //
        optiscroll_ToProgress_rotate: {
            deps: ['css!' + window.__simpleMemory.getJsDelivrUrl('optiscroll.css')]
        },
    }
});
