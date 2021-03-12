(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[628],{166:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return c}});var n={};!function(){var t=n.util={},i=Array.prototype.concat,e=Array.prototype.slice;t.bind=function(t,n){var s=e.call(arguments,2);return function(){t.apply(n,i.call(s,e.call(arguments)))}},t.extend=function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};var s=n.SpringSystem=function(t){this._springRegistry={},this._activeSprings=[],this.listeners=[],this._idleSpringIndices=[],this.looper=t||new l,this.looper.springSystem=this};t.extend(s.prototype,{_springRegistry:null,_isIdle:!0,_lastTimeMillis:-1,_activeSprings:null,listeners:null,_idleSpringIndices:null,setLooper:function(t){this.looper=t,t.springSystem=this},createSpring:function(t,i){var e;return e=void 0===t||void 0===i?a.DEFAULT_ORIGAMI_SPRING_CONFIG:a.fromOrigamiTensionAndFriction(t,i),this.createSpringWithConfig(e)},createSpringWithBouncinessAndSpeed:function(t,i){var e;return e=void 0===t||void 0===i?a.DEFAULT_ORIGAMI_SPRING_CONFIG:a.fromBouncinessAndSpeed(t,i),this.createSpringWithConfig(e)},createSpringWithConfig:function(t){var i=new r(this);return this.registerSpring(i),i.setSpringConfig(t),i},getIsIdle:function(){return this._isIdle},getSpringById:function(t){return this._springRegistry[t]},getAllSprings:function(){var t=[];for(var i in this._springRegistry)this._springRegistry.hasOwnProperty(i)&&t.push(this._springRegistry[i]);return t},registerSpring:function(t){this._springRegistry[t.getId()]=t},deregisterSpring:function(t){_(this._activeSprings,t),delete this._springRegistry[t.getId()]},advance:function(t,i){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var e=0,n=this._activeSprings.length;e<n;e++){var s=this._activeSprings[e];s.systemShouldAdvance()?s.advance(t/1e3,i/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(s))}for(;this._idleSpringIndices.length>0;){var r=this._idleSpringIndices.pop();r>=0&&this._activeSprings.splice(r,1)}},loop:function(t){var i;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var e=t-this._lastTimeMillis;this._lastTimeMillis=t;var n=0,s=this.listeners.length;for(n=0;n<s;n++)(i=this.listeners[n]).onBeforeIntegrate&&i.onBeforeIntegrate(this);for(this.advance(t,e),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),n=0;n<s;n++)(i=this.listeners[n]).onAfterIntegrate&&i.onAfterIntegrate(this);this._isIdle||this.looper.run()},activateSpring:function(t){var i=this._springRegistry[t];-1==this._activeSprings.indexOf(i)&&this._activeSprings.push(i),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},addListener:function(t){this.listeners.push(t)},removeListener:function(t){_(this.listeners,t)},removeAllListeners:function(){this.listeners=[]}});var r=n.Spring=function t(i){this._id="s"+t._ID++,this._springSystem=i,this.listeners=[],this._currentState=new o,this._previousState=new o,this._tempState=new o};t.extend(r,{_ID:0,MAX_DELTA_TIME_SEC:.064,SOLVER_TIMESTEP_SEC:.001}),t.extend(r.prototype,{_id:0,_springConfig:null,_overshootClampingEnabled:!1,_currentState:null,_previousState:null,_tempState:null,_startValue:0,_endValue:0,_wasAtRest:!0,_restSpeedThreshold:.001,_displacementFromRestThreshold:.001,listeners:null,_timeAccumulator:0,_springSystem:null,destroy:function(){this.listeners=[],this.frames=[],this._springSystem.deregisterSpring(this)},getId:function(){return this._id},setSpringConfig:function(t){return this._springConfig=t,this},getSpringConfig:function(){return this._springConfig},setCurrentValue:function(t,i){return this._startValue=t,this._currentState.position=t,i||this.setAtRest(),this.notifyPositionUpdated(!1,!1),this},getStartValue:function(){return this._startValue},getCurrentValue:function(){return this._currentState.position},getCurrentDisplacementDistance:function(){return this.getDisplacementDistanceForState(this._currentState)},getDisplacementDistanceForState:function(t){return Math.abs(this._endValue-t.position)},setEndValue:function(t){if(this._endValue==t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var i=0,e=this.listeners.length;i<e;i++){var n=this.listeners[i].onSpringEndStateChange;n&&n(this)}return this},getEndValue:function(){return this._endValue},setVelocity:function(t){return t===this._currentState.velocity||(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId())),this},getVelocity:function(){return this._currentState.velocity},setRestSpeedThreshold:function(t){return this._restSpeedThreshold=t,this},getRestSpeedThreshold:function(){return this._restSpeedThreshold},setRestDisplacementThreshold:function(t){this._displacementFromRestThreshold=t},getRestDisplacementThreshold:function(){return this._displacementFromRestThreshold},setOvershootClampingEnabled:function(t){return this._overshootClampingEnabled=t,this},isOvershootClampingEnabled:function(){return this._overshootClampingEnabled},isOvershooting:function(){var t=this._startValue,i=this._endValue;return this._springConfig.tension>0&&(t<i&&this.getCurrentValue()>i||t>i&&this.getCurrentValue()<i)},advance:function(t,i){var e=this.isAtRest();if(!e||!this._wasAtRest){var n=i;i>r.MAX_DELTA_TIME_SEC&&(n=r.MAX_DELTA_TIME_SEC),this._timeAccumulator+=n;for(var s,o,a,l,c,h,u,p,d=this._springConfig.tension,_=this._springConfig.friction,g=this._currentState.position,v=this._currentState.velocity,f=this._tempState.position,m=this._tempState.velocity;this._timeAccumulator>=r.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=r.SOLVER_TIMESTEP_SEC,this._timeAccumulator<r.SOLVER_TIMESTEP_SEC&&(this._previousState.position=g,this._previousState.velocity=v),s=v,o=d*(this._endValue-f)-_*v,f=g+s*r.SOLVER_TIMESTEP_SEC*.5,a=m=v+o*r.SOLVER_TIMESTEP_SEC*.5,l=d*(this._endValue-f)-_*m,f=g+a*r.SOLVER_TIMESTEP_SEC*.5,c=m=v+l*r.SOLVER_TIMESTEP_SEC*.5,h=d*(this._endValue-f)-_*m,f=g+c*r.SOLVER_TIMESTEP_SEC*.5,u=m=v+h*r.SOLVER_TIMESTEP_SEC*.5,p=1/6*(o+2*(l+h)+(d*(this._endValue-f)-_*m)),g+=1/6*(s+2*(a+c)+u)*r.SOLVER_TIMESTEP_SEC,v+=p*r.SOLVER_TIMESTEP_SEC;this._tempState.position=f,this._tempState.velocity=m,this._currentState.position=g,this._currentState.velocity=v,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/r.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),e=!0);var S=!1;this._wasAtRest&&(this._wasAtRest=!1,S=!0);var y=!1;e&&(this._wasAtRest=!0,y=!0),this.notifyPositionUpdated(S,y)}},notifyPositionUpdated:function(t,i){for(var e=0,n=this.listeners.length;e<n;e++){var s=this.listeners[e];t&&s.onSpringActivate&&s.onSpringActivate(this),s.onSpringUpdate&&s.onSpringUpdate(this),i&&s.onSpringAtRest&&s.onSpringAtRest(this)}},systemShouldAdvance:function(){return!this.isAtRest()||!this.wasAtRest()},wasAtRest:function(){return this._wasAtRest},isAtRest:function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},setAtRest:function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},_interpolate:function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},getListeners:function(){return this.listeners},addListener:function(t){return this.listeners.push(t),this},removeListener:function(t){return _(this.listeners,t),this},removeAllListeners:function(){return this.listeners=[],this},currentValueIsApproximately:function(t){return Math.abs(this.getCurrentValue()-t)<=this.getRestDisplacementThreshold()}});var o=function(){};t.extend(o.prototype,{position:0,velocity:0});var a=n.SpringConfig=function(t,i){this.tension=t,this.friction=i},l=n.AnimationLooper=function(){this.springSystem=null;var i=this,e=function(){i.springSystem.loop(Date.now())};this.run=function(){t.onFrame(e)}};n.SimulationLooper=function(t){this.springSystem=null;var i=0,e=!1;t=t||16.667,this.run=function(){if(!e){for(e=!0;!this.springSystem.getIsIdle();)this.springSystem.loop(i+=t);e=!1}}},n.SteppingSimulationLooper=function(t){this.springSystem=null;var i=0;this.run=function(){},this.step=function(t){this.springSystem.loop(i+=t)}};var c=n.OrigamiValueConverter={tensionFromOrigamiValue:function(t){return 3.62*(t-30)+194},origamiValueFromTension:function(t){return(t-194)/3.62+30},frictionFromOrigamiValue:function(t){return 3*(t-8)+25},origamiFromFriction:function(t){return(t-25)/3+8}},h=n.BouncyConversion=function(t,i){this.bounciness=t,this.speed=i;var e=this.normalize(t/1.7,0,20);e=this.projectNormal(e,0,.8);var n=this.normalize(i/1.7,0,20);this.bouncyTension=this.projectNormal(n,.5,200),this.bouncyFriction=this.quadraticOutInterpolation(e,this.b3Nobounce(this.bouncyTension),.01)};t.extend(h.prototype,{normalize:function(t,i,e){return(t-i)/(e-i)},projectNormal:function(t,i,e){return i+t*(e-i)},linearInterpolation:function(t,i,e){return t*e+(1-t)*i},quadraticOutInterpolation:function(t,i,e){return this.linearInterpolation(2*t-t*t,i,e)},b3Friction1:function(t){return 7e-4*Math.pow(t,3)-.031*Math.pow(t,2)+.64*t+1.28},b3Friction2:function(t){return 44e-6*Math.pow(t,3)-.006*Math.pow(t,2)+.36*t+2},b3Friction3:function(t){return 45e-8*Math.pow(t,3)-332e-6*Math.pow(t,2)+.1078*t+5.84},b3Nobounce:function(t){return t<=18?this.b3Friction1(t):t>18&&t<=44?this.b3Friction2(t):this.b3Friction3(t)}}),t.extend(a,{fromOrigamiTensionAndFriction:function(t,i){return new a(c.tensionFromOrigamiValue(t),c.frictionFromOrigamiValue(i))},fromBouncinessAndSpeed:function(t,i){var e=new n.BouncyConversion(t,i);return this.fromOrigamiTensionAndFriction(e.bouncyTension,e.bouncyFriction)},coastingConfigWithOrigamiFriction:function(t){return new a(0,c.frictionFromOrigamiValue(t))}}),a.DEFAULT_ORIGAMI_SPRING_CONFIG=a.fromOrigamiTensionAndFriction(40,7),t.extend(a.prototype,{friction:0,tension:0});var u={};t.hexToRGB=function(t){if(u[t])return u[t];3===(t=t.replace("#","")).length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var i=t.match(/.{2}/g),e={r:parseInt(i[0],16),g:parseInt(i[1],16),b:parseInt(i[2],16)};return u[t]=e,e},t.rgbToHex=function(t,i,e){return t=t.toString(16),i=i.toString(16),e=e.toString(16),"#"+(t=t.length<2?"0"+t:t)+(i=i.length<2?"0"+i:i)+(e=e.length<2?"0"+e:e)};var p,d=n.MathUtil={mapValueInRange:function(t,i,e,n,s){return n+(t-i)/(e-i)*(s-n)},interpolateColor:function(i,e,n,s,r,o){s=void 0===s?0:s,r=void 0===r?1:r,e=t.hexToRGB(e),n=t.hexToRGB(n);var a=Math.floor(t.mapValueInRange(i,s,r,e.r,n.r)),l=Math.floor(t.mapValueInRange(i,s,r,e.g,n.g)),c=Math.floor(t.mapValueInRange(i,s,r,e.b,n.b));return o?"rgb("+a+","+l+","+c+")":t.rgbToHex(a,l,c)},degreesToRadians:function(t){return t*Math.PI/180},radiansToDegrees:function(t){return 180*t/Math.PI}};function _(t,i){var e=t.indexOf(i);-1!=e&&t.splice(e,1)}t.extend(t,d),"undefined"!=typeof window&&(p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}),p||"undefined"==typeof process||"node"!==process.title||(p=setImmediate),t.onFrame=function(t){return p(t)},"undefined"!=typeof exports?t.extend(exports,n):"undefined"!=typeof window&&(window.rebound=n)}();var s=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),r=function(){function t(){var i=arguments.length<=0||void 0===arguments[0]?100:arguments[0],e=arguments.length<=1||void 0===arguments[1]?3:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2],s=arguments[3];o(this,t),this._radius=i,this._sides=e,this._depth=n,this._colors=s,this._x=0,this._y=0,this.rotation=0,this.scale=1,this.points=this._getRegularPolygonPoints()}return s(t,[{key:"_getRegularPolygonPoints",value:function(){for(var t=[],i=0;i<this._sides;){var e=-this._radius*Math.sin(2*i*Math.PI/this._sides),n=this._radius*Math.cos(2*i*Math.PI/this._sides);t.push({x:e,y:n}),i++}return t}},{key:"_getInscribedPoints",value:function(t,i){var e=this,n=[];return t.forEach((function(s,r){var o=s,a=t[r+1];a||(a=t[0]);var l=e._getInterpolatedPoint(o,a,i);n.push(l)})),n}},{key:"_getInterpolatedPoint",value:function(t,i,e){var n=t.x,s=t.y;return{x:n+(i.x-n)*e,y:s+(i.y-s)*e}}},{key:"_getUpdatedChildren",value:function(t){for(var i=[],e=0;e<this._depth;e++){var n=i[e-1]||this.points,s=this._getInscribedPoints(n,t);i.push(s)}return i}},{key:"renderChildren",value:function(t,i){var e=this,s=this._getUpdatedChildren(i);s.forEach((function(i,r){t.beginPath(),i.forEach((function(i){return t.lineTo(i.x,i.y)})),t.closePath();var o=e._colors.stroke,a=e._colors.child;if(o&&(t.strokeStyle=o,t.stroke()),a){var l=n.util.hexToRGB(a),c=1/s.length,h=c+c*r,u="rgba("+l.r+", "+l.g+", "+l.b+", "+h+")";t.fillStyle=u,t.shadowColor="rgba(0,0,0, 0.1)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=0,t.fill()}}))}},{key:"render",value:function(t){t.save(),t.translate(this._x,this._y),0!==this.rotation&&t.rotate(n.MathUtil.degreesToRadians(this.rotation)),1!==this.scale&&t.scale(this.scale,this.scale),t.beginPath(),this.points.forEach((function(i){return t.lineTo(i.x,i.y)})),t.closePath();var i=this._colors.stroke,e=this._colors.base;i&&(t.strokeStyle=i,t.stroke()),e&&(t.fillStyle=e,t.fill()),t.restore()}}]),t}();s=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}();function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(i){o(this,t);i.id;var e=i.radius,n=i.sides,s=i.depth,a=i.colors,l=i.alwaysForward,c=i.restAt,h=i.renderBase;n<3&&(console.warn("At least 3 sides required."),n=3),this._canvas=document.createElement("canvas"),this._canvas.style.backgroundColor=a.background,this._canvasW=null,this._canvasH=null,this._canvasOpacity=1,this._centerX=null,this._centerY=null,this._alwaysForward=l,this._restThreshold=c,this._renderBase=h,this._springRangeLow=0,this._springRangeHigh=this._restThreshold||1,this._basePolygon=new r(e,n,s,a),this._progress=0,this._isAutoSpin=null,this._isCompleting=null}return s(t,[{key:"init",value:function(t,i){this._addCanvas(),this._spring=t,this._addSpringListener(),this._isAutoSpin=i,i?this._spin():(this._spring.setEndValue(0),this.render())}},{key:"_addCanvas",value:function(){document.body.appendChild(this._canvas),this._context=this._canvas.getContext("2d"),this._setCanvasSize()}},{key:"_setCanvasSize",value:function(){this._canvasW=this._canvas.width=window.innerWidth,this._canvasH=this._canvas.height=window.innerHeight,this._canvas.style.position="fixed",this._canvas.style.top=0,this._canvas.style.left=0,this._centerX=this._canvasW/2,this._centerY=this._canvasH/2}},{key:"_addSpringListener",value:function(){var t=this;this._spring.addListener({onSpringUpdate:function(i){var e=i.getCurrentValue(),s=t._springRangeLow,r=t._springRangeHigh;e=n.MathUtil.mapValueInRange(e,0,1,s,r),t.render(e)}})}},{key:"setComplete",value:function(){this._isCompleting=!0}},{key:"_completeAnimation",value:function(){this._canvasOpacity-=.1,this._canvas.style.opacity=this._canvasOpacity,this._canvasOpacity<=0&&(this._isAutoSpin=!1,this._spring.setAtRest(),this._canvas.remove())}},{key:"_spin",value:function(){if(this._alwaysForward){var t=this._spring.getCurrentValue();this._restThreshold&&1===t&&this._switchSpringRange(),1===t&&this._spring.setCurrentValue(0).setAtRest()}this._spring.setEndValue(1===this._spring.getCurrentValue()?0:1)}},{key:"_switchSpringRange",value:function(){var t=this._restThreshold;this._springRangeLow=this._springRangeLow===t?0:t,this._springRangeHigh=this._springRangeHigh===t?1:t}},{key:"render",value:function(t){t&&(this._progress=Math.round(1e4*t)/1e4),this._isAutoSpin&&this._spring.isAtRest()&&this._spin(),this._isCompleting&&this._completeAnimation(),this._context.clearRect(0,0,this._canvasW,this._canvasH),this._context.save(),this._context.translate(this._centerX,this._centerY),this._context.lineWidth=1.5,this._renderBase&&this._basePolygon.render(this._context),this._basePolygon.renderChildren(this._context,this._progress),this._context.restore()}}]),t}();function l(t){$("#blog-news").prepend('<div class="container"> <div class="menu-wrap optiscroll" id="menuWrap" style="display:none"> <nav class="menu"> <div class="introduce-box"> <div class="introduce-head"> <div class="introduce-via" id="menuBlogAvatar"></div> </div> <div id="introduce"></div> </div> <div class="nav-title"></div> <div class="icon-list"> <ul id="m-nav-list"> </ul> </div> <span id="calendar-box"></span> <div class="m-list-title"><span>找找看</span></div> <div class="m-icon-list" id="sb-sidebarSearchBox"></div> <div class="m-list-title"><span>积分排名<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-sidebarScorerank"></div> <div class="m-list-title"><span>最新随笔<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-sidebarRecentposts"></div> <div class="m-list-title"><span>我的标签<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-toptags"></div> <div class="m-list-title"><span>随笔分类<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-classify"></div> <div class="m-list-title"><span>文章分类<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-ArticleCategory"></div> <div class="m-list-title"><span>阅读排行<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-topview"></div> <div class="m-list-title"><span>推荐排行<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-topDiggPosts"></div> <div class="m-list-title"><span>最新评论<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-recentComments"></div> <div class="m-list-title"><span>文章档案<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-articlearchive"></div> <div class="m-list-title"><span>随笔档案<span class="iconfont icon-select m-list-title-select"></span></span> </div> <div class="m-icon-list" id="sb-record"></div> <span id="menuCustomList"></span> </nav> <button class="close-button" id="close-button">Close Menu</button> <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"> <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/> </svg> </div> </div> <button class="menu-button" id="open-button">MENU</button> <div class="content-wrap" id="content-wrap"></div> </div> <div class="main-header"> <canvas id="notHomeTopCanvas"></canvas> <div class="vertical"> <div class="main-header-content inner"> <h1 class="page-title" id="homeTopTitle"></h1> <h2 class="page-description" id="hitokoto"></h2> <h3 class="page-author" id="hitokotoAuthor"></h3> <h1 class="sb-title" id="sbTitle"></h1> <p class="article-info" id="articleInfo"></p> </div> </div> <a class="scroll-down" href="javascript:void(0);" data-offset="-45"> <span class="hidden">Scroll Down</span> <i class="scroll-down-icon iconfont icon-fanhui"></i> </a> </div> <div id="loading"></div> <div id="bottomProgressBar"></div> <div id="rightMenu"></div>'),(()=>{let i=t.__tools.tempReplacement('<li> <a href="https://www.cnblogs.com/{{user}}" target="_self"> <i class="iconfont icon-homepage_fill"></i> 首页 </a> </li> <li> <a href="https://msg.cnblogs.com/send/{{user}}" target="_blank"> <i class="iconfont icon-zhifeiji"></i> 联系 </a> </li> <li> <a href="javascript:void(0)" onclick=\'$("#blog_nav_rss").trigger("click")\' data-rss="https://www.cnblogs.com/{{user}}/rss/"> <i class="iconfont icon-qinmifu"></i> 订阅 </a> </li> <li> <a href="https://i.cnblogs.com/" target="_blank"> <i class="iconfont icon-setup_fill"></i> 管理 </a> </li>',"user",t.__status.user),e=t.__config.sidebar.navList;e.length>0&&$.each(e,(function(t){let n=e[t].length>2?e[t][2]:"icon-qianzishenhe";i+='<li><a href="'+e[t][1]+'" target="_blank"><i class="iconfont '+n+'"></i>'+e[t][0]+"</a></li>"})),$("#m-nav-list").append(i)})(),(()=>{let i=function(t){return new function(){let i=this;this.config=t.__config.loading,this.spring=null,this.spinner=null,this.initRebound=()=>{let t=i.config.rebound,e=new n.SpringSystem;i.spring=e.createSpring(t.tension,t.friction)},this.initSpinner=()=>{let t=i.config.spinner;i.spinner=new a(t)}}}(t);i.initRebound(),i.initSpinner(),i.spinner.init(i.spring,!0)})()}function c(t){l(t)}}}]);