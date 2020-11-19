function simpleMemoryTools() {
    const tools  = this,
          colors = {
              "gray": "color: #1B2B34;font-size: 12px; line-height: 18px;",
              "red": "color: #EC5f67;font-size: 12px; line-height: 18px;",
              "orange": "color: #F99157;font-size: 12px; line-height: 18px;",
              "yellow": "color: #FAC863;font-size: 12px; line-height: 18px;",
              "green": "color: #99C794;font-size: 12px; line-height: 18px;",
              "teal": "color: #5FB3B3;font-size: 12px; line-height: 18px;",
              "blue": "color: #6699CC;font-size: 12px; line-height: 18px;",
              "purple": "color: #C594C5;font-size: 12px; line-height: 18px;",
              "brown": "color: #AB7967;font-size: 12px; line-height: 18px;"
          };

    /**
     * 加载CSS文件
     */
    this.dynamicLoadingCss = function (path) {
        if (!path || path.length === 0) { throw new Error('argument "path" is required !'); }
        let head = document.getElementsByTagName('head')[0], link = document.createElement('link');
        link.href = path; link.rel = 'stylesheet'; link.type = 'text/css'; head.appendChild(link);
    };

    /**
     * 控制台输出图片
     */
    this.consoleImg = function(url) {
        console.log('%c', 'padding:50px 300px; line-height:120px; background:url('+url+') no-repeat;');
    };

    /**
     * 控制台输出内容
     */
    this.consoleText = function(list, mode) {
        let rHref = 'https://github.com/'
            + window.cnblogsConfig.GhUserName + '/'
            + window.cnblogsConfig.GhRepositories + '/tree/'
            + window.cnblogsConfig.GhVersions,

            e = ["\n %c %c %c Theme GitHub - " + (window.cnblogsConfig.GhVersions).substring(0,7)+" %c  %c "+rHref+"  %c \n\n", "background: #fadfa3; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;", "background: #FCEDC9; padding:5px 0;", "background: #fadfa3; padding:5px 0;"];
        window.console.log.apply(console, e);
        switch (mode) {
            case 'random':
                let colorList = [colors.red, colors.orange, colors.yellow, colors.green, colors.teal, colors.blue, colors.purple, colors.brown];
                $.each(list, function (i) {
                    let str = (list[i]).toString();
                    let ind = tools.randomNum(0, colorList.length - 1);
                    console.log('%c'+str, colorList[ind]);
                });
                break;
            case 'banner':
                $.each(list, function (i) {
                    let fl = list[i];
                    console.log('\n' + ' %c '+(fl[0])+' %c '+(fl[1])+' ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
                });
                break;

            default:
                console.log('%c'+list.join('\n'), colors.gray);
                break;
        }
    };

    /**
     * 滚动主体滚动条到指定位置
     */
    this.actScroll = function(endScroll, time) {
        $('html,body').stop().animate({scrollTop: endScroll}, time);
    };

    /**
     * 随机数
     */
    this.randomNum = function(minNum,maxNum) {
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1); break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum); break;
            default:
                return 0; break;
        }
    };

    /**
     * 随机字符串
     */
    this.randomString = function(len) {
        len = len || 32;
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', maxPos = $chars.length, pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };

    /**
     * 获取页面滚动百分比
     */
    this.getScrollPercent = function() {
        let scrollTo      = $(window).scrollTop(),
            docHeight     = $(document).height(),
            windowHeight  = $(window).height(),
            scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
        return scrollPercent.toFixed(0);
    };

    /**
     * 过滤HTML中JavaScript代码
     */
    this.htmlFiltrationScript = function(str) {
        let subStr = new RegExp('\<script.*\<\/script\>', 'ig');
        return str.replace(subStr,"");
    };

    /**
     * 运行时间
     * @param dateString 年-月-日
     */
    this.getRunDate = function (dateString) {
        dateString = (dateString).toString().split('-');
        let date = new Date();
        date.setUTCFullYear(dateString[0], dateString[1] - 1, dateString[2]);
        date.setUTCHours(0, 0, 0, 0);
        let birthDay = date;
        let today = new Date();
        let timeold = today.getTime() - birthDay.getTime();
        let sectimeold = timeold / 1000;
        let secondsold = Math.floor(sectimeold);
        let msPerDay = 24 * 60 * 60 * 1000;
        let e_daysold = timeold / msPerDay;
        let daysold = Math.floor(e_daysold);
        let e_hrsold = (daysold - e_daysold) * -24;
        let hrsold = Math.floor(e_hrsold);
        let e_minsold = (hrsold - e_hrsold) * -60;
        let minsold = Math.floor((hrsold - e_hrsold) * -60);
        let seconds = Math.floor((minsold - e_minsold) * -60).toString();
        return {
            daysold: daysold,
            hrsold: hrsold,
            minsold: minsold,
            seconds: seconds
        };
    };

    /**
     * 获取日期
     * @returns {string}
     */
    this.getNowFormatDate = function() {
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return year + seperator1 + month + seperator1 + strDate;
    };

    /**
     * html 转义
     * @return {string}
     */
    this.HTMLEncode = function(html) {
        let temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        let output = temp.innerHTML;
        temp = null;
        return output;
    };

    /**
     * 产生随机颜色
     * @returns {string}
     */
    this.getRandomColor = function(){
        return  '#' + (function(color){
            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length === 6) ?  color : arguments.callee(color);
        })('');
    };

    /**
     * 设置 cookie
     * @param key
     * @param value
     * @param expires 过期时间，单位秒
     */
    this.setCookie = function(key, value, expires) {
        let exp = new Date();
        exp.setTime(exp.getTime() + expires * 1000);
        document.cookie = key + "=" + escape (value) + "; expires=" + exp.toGMTString() + "; path=/";
    };

    /**
     * 获取 cookie
     * @param key
     * @returns {string|null}
     */
    this.getCookie = function(key) {
        let arr, reg = new RegExp("(^| )"+key+"=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if (arr) return unescape(arr[2]);
        else return null;
    };
}