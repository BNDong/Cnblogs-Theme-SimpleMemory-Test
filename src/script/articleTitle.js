$(document).ready(function () {
    const s       = $('#cnblogs_post_body'),
          tools   = new myTools;

    if (s.length === 0) return;
    const h = s.find(':header');
    if (h.length === 0) return;

    // 开始获取页面顶级标题
    let topLev = (s.find('h1').length ? 1 : false)
        || (s.find('h2').length ? 2 : false)
        || (s.find('h3').length ? 3 : false)
        || (s.find('h4').length ? 4 : false)
        || (s.find('h5').length ? 5 : false)
        || (s.find('h6').length ? 6 : false);
    if (topLev > 4) return;

    // 处理标题缩放级别
    let hScale = {};
    for (let i = topLev, j = 1; i < 6; i++, j = j - 0.1) {
        hScale['h'+i] = j.toFixed(1);
    }

    let topHT = 'h' + topLev, topTwHT = 'h' + (topLev + 1), topHTN = 0, topTwHTN = 0, bw = s.outerWidth(false);
    h.each(function () {
        let u = $(this), v = u[0], ht = v.tagName.toLowerCase(), ln = 1, rn = 0, style = '';
        if (ht === 'h6') return true;
        u.attr('tid', 'tid-' + tools.randomString(6));
        let thText = tools.HTMLEncode(u.text()), headerStyle = 'transform:scale('+ hScale[ht] +');';

        // 判断标题级别
        switch (ht) {
            case topHT: // 一级标题
                topHTN++; ln = topHTN; topTwHTN = 0;
                break;

            case topTwHT: // 二级标题
                topTwHTN++; ln = topHTN; rn = topTwHTN;
                headerStyle += 'left: -' +  (((1 - hScale[ht]) * bw / 2) - ((1 - hScale[ht]) * 10 * 8)).toFixed(2) + 'px;';
                break;

            default: // 其它级别标题
                style = 'visibility: hidden;';
                headerStyle += 'left: -' +  (((1 - hScale[ht]) * bw / 2) - ((1 - hScale[ht]) * 10 * 8)).toFixed(2) + 'px;';
                break;
        }

        u.wrap('<span title-type="' + ht + '" class="header__span" style="' + headerStyle + '"></span>').text('').addClass('header__dev');

        var thHtml = '<span style="' + style + '"><b class="dev__fe"><i>' + ln + '</i></b>';
        thHtml += '<span class="dev__slash">|</span>';
        thHtml += '<b class="dev__ux"><i>' + rn + '</i></b></span>';
        thHtml += '<b class="dev__developer"><span class="dev__title">' + thText + '</span></b>';

        u.append(thHtml);

        u.parent(".header__span").hover(
            function(){
                $(this).find('.header__dev').addClass("header__dev--open");
            } ,
            function(){
                $(this).find('.header__dev').removeClass("header__dev--open");
            }
        );
    });


    // var th = [], th1i = 0, th1set = false, th2num = 0, th2last = 0;
    // h.each(function () {
    //     var u = $(this), v = u[0];
    //     if ($.inArray((v.tagName.toLowerCase()), ["h1", "h2"]) === -1) return true;
    //     th.push(u);
    // });
    //
    // if (th.length > 0) {
    //     $.each(th, function (i) {
    //         var u = $(this), v = u[0];
    //
    //         switch (v.tagName.toLowerCase()) {
    //             case 'h1':
    //                 setTh1(u);break;
    //
    //             case 'h2':
    //                 if (th1set) setTh2(u, i);break;
    //         }
    //     });
    // }
    //
    // function setTh1(th1) {
    //     th1.attr('tid', 'tid-' + tools.randomString(6));
    //     var th1Text = tools.HTMLEncode(th1.text());
    //
    //     if (!th1set) th1set = true;
    //
    //     th1.wrap('<span title-type="h1" class="header__span"></span>');
    //     th1.text('');
    //     th1.addClass('header__dev');
    //
    //     var th1Html = '<b class="dev__fe"><i>' + (th1i+1) + '</i></b>';
    //     th1Html += '<span class="dev__slash">|</span>';
    //     th1Html += '<b class="dev__ux"><i>0</i></b>';
    //     th1Html += '<b class="dev__developer"><span class="dev__title">' + th1Text + '</span></b>';
    //
    //     th1.append(th1Html);
    //     th1.parents('.header__span').after('<br>');
    //
    //     th1.parent(".header__span").hover(
    //         function(){
    //             $(this).find('.header__dev').addClass("header__dev--open");
    //         } ,
    //         function(){
    //             $(this).find('.header__dev').removeClass("header__dev--open");
    //         }
    //     );
    //     th1i++;
    // }
    //
    // function setTh2(th2, index) {
    //     th2.attr('tid', 'tid-' + tools.randomString(6));
    //     var th2Text = tools.HTMLEncode(th2.text());
    //
    //     th2.wrap('<span title-type="h2" class="header__span"></span>');
    //     th2.text('');
    //     th2.addClass('header__dev');
    //
    //     var their = [];
    //     $.each(th, function (i) {
    //         if (i > index) return false;
    //         var u = $(this), v = u[0];
    //         if (v.tagName.toLowerCase() === 'h1') {
    //             their.push(u.parents('.header__span'));
    //         }
    //     });
    //
    //     if (their.length > 0) {
    //         their = $(their[their.length - 1]);
    //         var current  = parseInt(their.find('.dev__fe i').text());
    //         if (current !== th2last) {
    //             th2num  = 0;
    //         }
    //         th2last = current;
    //     } else {
    //         th2num = 0;
    //     }
    //
    //     var th2Html = '<b class="dev__fe"><i>' + th2last + '</i></b>';
    //     th2Html += '<span class="dev__slash">|</span>';
    //     th2Html += '<b class="dev__ux"><i>' + (++th2num) + '</i></b>';
    //     th2Html += '<b class="dev__developer"><span class="dev__title">' + th2Text + '</span></b>';
    //
    //     th2.append(th2Html);
    //     th2.parents('.header__span').after('<br>');
    //     th2.parent(".header__span").hover(
    //         function(){
    //             $(this).find('.header__dev').addClass("header__dev--open");
    //         } ,
    //         function(){
    //             $(this).find('.header__dev').removeClass("header__dev--open");
    //         }
    //     ) ;
    // }
});