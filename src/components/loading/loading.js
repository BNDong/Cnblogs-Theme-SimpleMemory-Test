/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: loading 处理
 */

import {
    rebound,
    Spinner,
} from 'exports-loader?exports=rebound,Spinner!./lib/loading.js';

export default function main(_) {

    let loading = function() {
        let that = this;

        this.config  = _.__config.loading;
        this.spring  = null;
        this.spinner = null;

        /**
         * Initialize Rebound.js with settings.
         * Rebound is used to generate a spring which
         * is then used to animate the spinner.
         * See more: http://facebook.github.io/rebound-js/docs/rebound.html
         */
        this.initRebound = () => {

            let settings = that.config.rebound;

            // Create a SpringSystem.
            let springSystem = new rebound.SpringSystem();

            // Add a spring to the system.
            that.spring = springSystem.createSpring(settings.tension, settings.friction);
        }

        /**
         * Initialize Spinner with settings.
         */
        this.initSpinner = () => {

            let settings = that.config.spinner;

            // Instantiate Spinner.
            that.spinner = new Spinner(settings);
        }

        /**
         * 开启 loading
         */
        this.start = () => {
            that.initRebound();
            that.initSpinner();
            that.spinner.init(that.spring, true);
        }

        /**
         * 结束 loading
         */
        this.stop = () => {
            that.spinner.setComplete();
        }
    }

    return (new loading());
}
//
// /**
//  * Demo.
//  */
// var demo = {
//     settings: settings,
//
//     spring: null,
//     spinner: null,
//
//     /**
//      * Initialize Rebound.js with settings.
//      * Rebound is used to generate a spring which
//      * is then used to animate the spinner.
//      * See more: http://facebook.github.io/rebound-js/docs/rebound.html
//      */
//     initRebound: function initRebound() {
//
//         var settings = demo.settings.rebound;
//
//         // Create a SpringSystem.
//         var springSystem = new rebound.SpringSystem();
//
//         // Add a spring to the system.
//         demo.spring = springSystem.createSpring(settings.tension, settings.friction);
//     },
//
//
//     /**
//      * Initialize Spinner with settings.
//      */
//     initSpinner: function initSpinner() {
//
//         var settings = demo.settings.spinner;
//
//         // Instantiate Spinner.
//         demo.spinner = new Spinner(settings);
//     },
//
//
//     /**
//      * Initialize demo.
//      */
//     init: function init() {
//
//         var spinnerTypeAutoSpin = true;
//
//         // Instantiate animation engine and spinner system.
//         demo.initRebound();
//         demo.initSpinner();
//
//         // Init animation with Rebound Spring System.
//         demo.spinner.init(demo.spring, spinnerTypeAutoSpin);
//
//         if (spinnerTypeAutoSpin) {
//             // Fake loading time, in a real world just call demo.spinner.setComplete();
//             // whenever the preload will be completed.
//             setTimeout(function () {
//                 demo.spinner.setComplete();
//             }, 6000);
//         } else {
//             // Perform real ajax request.
//             demo.loadSomething();
//         }
//     },
//
//
//     /**
//      * Ajax Request.
//      */
//     loadSomething: function loadSomething() {
//
//         var oReq = new XMLHttpRequest();
//
//         oReq.addEventListener('progress', function (oEvent) {
//             if (oEvent.lengthComputable) {
//
//                 var percent = Math.ceil(oEvent.loaded / oEvent.total * 100);
//                 console.log('ajax loding percent', percent);
//
//                 // By setting the end value with the actual loading percentage
//                 // the spinner will progress based on the actual ajax loading time.
//                 demo.spring.setEndValue(percent * 0.01);
//             }
//         });
//
//         oReq.addEventListener('load', function (e) {
//             // Complete the loading animation.
//             demo.spinner.setComplete();
//         });
//
//         oReq.open('GET', '/img/something.jpg');
//         oReq.send();
//     }
// };