!function(t,e,n){function i(t){return"[object Function]"==m.call(t)}function o(t){return"string"==typeof t}function r(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function l(){var t=g.shift();v=1,t?t.t?h(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),l()):v=0}function s(t,n,i,o,r,s,c){function u(e){if(!d&&a(p.readyState)&&(b.r=d=1,!v&&l(),p.onload=p.onreadystatechange=null,e)){"img"!=t&&h(function(){k.removeChild(p)},50);for(var i in S[n])S[n].hasOwnProperty(i)&&S[n][i].onload()}}var c=c||f.errorTimeout,p=e.createElement(t),d=0,m=0,b={t:i,s:n,e:r,a:s,x:c};1===S[n]&&(m=1,S[n]=[]),"object"==t?p.data=n:(p.src=n,p.type=t),p.width=p.height="0",p.onerror=p.onload=p.onreadystatechange=function(){u.call(this,m)},g.splice(o,0,b),"img"!=t&&(m||2===S[n]?(k.insertBefore(p,C?null:y),h(u,c)):S[n].push(p))}function c(t,e,n,i,r){return v=0,e=e||"j",o(t)?s("c"==e?P:w,t,e,this.i++,n,i,r):(g.splice(this.i++,0,t),1==g.length&&l()),this}function u(){var t=f;return t.loader={load:c,i:0},t}var p,f,d=e.documentElement,h=t.setTimeout,y=e.getElementsByTagName("script")[0],m={}.toString,g=[],v=0,b="MozAppearance"in d.style,C=b&&!!e.createRange().compareNode,k=C?d:y.parentNode,d=t.opera&&"[object Opera]"==m.call(t.opera),d=!!e.attachEvent&&!d,w=b?"object":d?"script":"img",P=d?"script":w,$=Array.isArray||function(t){return"[object Array]"==m.call(t)},L=[],S={},A={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};f=function(t){function e(t){var e,n,i,t=t.split("!"),o=L.length,r=t.pop(),a=t.length,r={url:r,origUrl:r,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=A[i.shift()])&&(r=e(r,i));for(n=0;o>n;n++)r=L[n](r);return r}function a(t,o,r,a,l){var s=e(t),c=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=i(o)?o:o[t]||o[a]||o[t.split("/").pop().split("?")[0]]),s.instead?s.instead(t,o,r,a,l):(S[s.url]?s.noexec=!0:S[s.url]=1,r.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(i(o)||i(c))&&r.load(function(){u(),o&&o(s.origUrl,l,a),c&&c(s.origUrl,l,a),S[s.url]=2})))}function l(t,e){function n(t,n){if(t){if(o(t))n||(p=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}),a(t,p,e,0,c);else if(Object(t)===t)for(s in l=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(s)&&(!n&&!--l&&(i(p)?p=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}:p[s]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(f[s])),a(t[s],p,e,s,c))}else!n&&d()}var l,s,c=!!t.test,u=t.load||t.both,p=t.callback||r,f=p,d=t.complete||r;n(c?t.yep:t.nope,!!u),u&&n(u)}var s,c,p=this.yepnope.loader;if(o(t))a(t,0,p,0);else if($(t))for(s=0;s<t.length;s++)c=t[s],o(c)?a(c,0,p,0):$(c)?f(c):Object(c)===c&&l(c,p);else Object(t)===t&&l(t,p)},f.addPrefix=function(t,e){A[t]=e},f.addFilter=function(t){L.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",p=function(){e.removeEventListener("DOMContentLoaded",p,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=l,t.yepnope.injectJs=function(t,n,i,o,s,c){var u,p,d=e.createElement("script"),o=o||f.errorTimeout;d.src=t;for(p in i)d.setAttribute(p,i[p]);n=c?l:n||r,d.onreadystatechange=d.onload=function(){!u&&a(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),s?d.onload():y.parentNode.insertBefore(d,y)},t.yepnope.injectCss=function(t,n,i,o,a,s){var c,o=e.createElement("link"),n=s?l:n||r;o.href=t,o.rel="stylesheet",o.type="text/css";for(c in i)o.setAttribute(c,i[c]);a||(y.parentNode.insertBefore(o,y),h(n,0))}}(this,document);var BLVDDependenciesLoaded=BLVDDependenciesLoaded||!1,BLVDTemplates=BLVDTemplates||!1;!function(t){var e=function(e,n,i){function o(){ut=t('<div class="blvd-loading"><div>Loading</div></div>').height($t.height()),$t.append(ut)}function r(){ut.animate({opacity:0},function(){ut.remove()})}function a(){o(),$t.addClass("player-container"),ct=W,G=new Pt,ot=new wt,t.when(ot.load(W.pluginPath),G.load(W.pluginPath)).done(function(){U=new yt,U.init(),nt=$t.find(_.playerLayoutOuter),V=new bt,V.init(W.jPlayer),q=new dt,J=new Ct,R=new gt,H=new vt,Q=new mt,l(),N.on("playlistInit",function(){U.manageLayout()}),t(window).on("resize."+M,function(){U.setLayoutParams()}),N.on("playlistInit playlistAdvance",function(){J.setBackground()}),N.on("playlistAdvance playlistInit",function(t,e){U.setTitle()}),t(window).onThrottled("resize."+M,500,function(){J.setBackground(),U.resize()}),t(".toggle-layout").on("click",function(){lt.length<=1||(st++,st>lt.length-1&&(st=0),s(lt[st]))}),r(),Lt=!0,N.publish("started")})}function l(){var e=t.extend(!0,{},W);lt=W.additionalLayoutConfigs||[],lt.push(e),st=lt.length-1}function s(e){1!=at&&(o(),at=!0,W=t.extend(!0,{},ct,e),N.publish("layoutSwitching",W),t.when(U.setLayout(W.layout)).then(J.resetBackground).done(function(){at=!1,r(),N.publish("layoutSwitchComplete")}))}function c(t,e){nt.attr(t,e)}function u(t){return"number"==typeof t&&isFinite(t)&&t>-9007199254740992&&9007199254740992>t&&Math.floor(t)===t}function p(){$t.off(),$t.empty(),t(window).off("resize."+M),V.destroy()}function f(t){u(t)&&W.additionalLayoutConfigs&&W.additionalLayoutConfigs[t]&&(st=t,t=W.additionalLayoutConfigs[st]),s(t)}function d(){U.manageLayout(!0),J.setBackground()}function h(){J.setBackground()}function y(e){e&&(W=t.extend(!0,{},W,e)),a()}function m(){return Lt===!0}function g(){var t=Array.prototype.slice.call(arguments);N.off.apply(this,t)}function v(){var t=Array.prototype.slice.call(arguments);N.on.apply(this,t)}function b(){var t=Array.prototype.slice.call(arguments);N.once.apply(this,t)}function C(){return W}function k(){U.manageLayout(!0)}function w(){V.play()}function P(){V.pause()}function $(){V.playlistNext()}function L(){V.playlistPrev()}function S(){V.togglePlay()}function A(e){W=t.extend(!0,{},W,e),ct=t.extend(!0,{},ct,e)}function x(t){n=t,V.playlistInit(!0),U.setTitle(),k()}function j(t){V.setPlaylist(t)}function I(){return new dt}function z(){return n}function T(t){return t=t.split("/"),t[t.length-1]}function D(){return(new Date).getTime()+"-"+Math.floor(1e5*Math.random())+1}function B(t){return t.substr(1)}function E(t){return"undefined"==typeof t}function O(t){console.log("ERROR: "+t)}var N,M,F,W,_,V,q,J,R,H,Q,G,U,Y,X,K,Z,tt,et,nt,it,ot,rt,at,lt,st,ct,ut,pt,ft,dt,ht,yt,mt,gt,vt,bt,Ct,kt,wt,Pt,$t=e,Lt=!1;return _={jPlayer:"#jquery_jplayer",jPlayerInterface:".jp-interface",playerPrevious:".jp-previous",playerNext:".jp-next",volume:".volume",trackList:".track-list",tracks:".tracks",track:".track",trackInfo:".track-info",trackTitle:".track-title",trackArtist:".track-artist",trackNumber:".track-number",playerTitle:".player-track-info",duration:".duration",buy:".buy",buyNotActive:".not-active",playing:".playing",moreButton:".more",player:".player",artist:".artist",artistOuter:".artist-outer",albumCover:".album-cover",albumCoverImage:".image",description:".description",descriptionShowing:".showing",albumCoverNaviation:".album-covers-wrapper",playerLayoutOuter:".player-layout-outer",playerLayout:".player-layout",playerLayoutInner:".player-layout-inner",playerControls:".player-controls",playerBackgroundOuter:".player-background-outer"},F={autoPlay:!1,overlayOpacity:".6",overlayColor:"dominant",gradientType:"vertical",gradientDegrees:"80deg",styleType:"blur",layout:"album-covers",smallScreenLayout:"single-album-cover",layoutType:!1,jPlayer:{},autoLoadDependencies:!0,backgroundImageSource:"cover",pluginPath:"boulevard/",smallScreenSize:640,imageEffects:!1,groupAlbumCoversInMiddle:!0,additionalLayoutConfigs:!1,autoStart:!0,baseLayout:!1},t.fn.onThrottled=function(t,e,n){var i=!1;this.on(t,function(){i||(setTimeout(function(){n(),i=!1},e),i=!0)})},pt=function(){function e(t,e){r.on(t,e)}function n(t,e){var n=function(){r.off(t,n),e.apply(this,Array.prototype.slice.call(arguments,1))};r.on(t,n)}function i(t){r.trigger(t,Array.prototype.slice.call(arguments,1))}function o(t,e){r.off(t,e)}var r=t("<b/>");return{on:e,once:n,off:o,publish:i}},N=new pt,mt=function(){function t(t){return E(n[t].artist)?"-":n[t].artist}function e(t){return E(n[t].duration)?"-":n[t].duration}function i(t){return E(n[t].title)?E(n[t].mp3)?E(n[t].oga)?"":T(n[t].oga):T(n[t].mp3):n[t].title}return{trackName:i,artist:t,duration:e}},bt=function(){function e(e){var n=$t.find(_.player),o="jp-interface-"+M;n.addClass(o),b=$t.find(".jPlayer-container");var r,s,u=3;r={swfPath:W.pluginPath+"dependencies/jquery-jplayer",supplied:"mp3",cssSelectorAncestor:"."+o,errorAlerts:!1,warningAlerts:!1},s=t.extend(!0,{},r,e),b.bind(t.jPlayer.event.ready,function(){b.bind(t.jPlayer.event.ended,function(){l()}),b.bind(t.jPlayer.event.play,function(){b.jPlayer("pauseOthers")}),b.bind(t.jPlayer.event.playing,function(){v=!0}),b.bind(t.jPlayer.event.pause,function(){v=!1}),$t.find(_.playerPrevious).on("click",function(){return c(),t(this).blur(),!1}),$t.find(_.playerNext).on("click",function(){return l(),t(this).blur(),!1}),$t.find(_.volume).on("click",function(){var e=[0,33,66,100],n=["mute","low","medium","high"];u++,u>e.length-1&&(u=0),b.jPlayer("volume",e[u]/100),t(this).attr("data-level",n[u])}),N.on("initPlaylistAdvance",function(t,e){e!=Y?a(e):b.data("jPlayer").status.srcSet?h():a(0)}),i(W.autoplay)}),b.jPlayer(s)}function i(t){Y=0,t?a(Y,null,!1):(r(Y),N.publish("playlistInit"))}function o(t){Y=0,n=t,r(Y),U.setTitle()}function r(t){s()&&(Y=t,b.jPlayer("setMedia",n[Y]))}function a(t,e,n){s()&&(e||(e=Y==f()&&0==t?"next":0==Y&&t==f()?"prev":t>Y?"next":"prev"),r(t),n!==!1&&N.publish("playlistAdvance",e),y())}function l(){if(s()){var t=u();a(t,"next")}}function s(){return X===!1}function c(){var t=p();a(t,"prev")}function u(){return Y+1<n.length?Y+1:0}function p(){return Y-1>=0?Y-1:d()}function f(){return n.length-1}function d(){return n.length-1}function h(){v?b.jPlayer("pause"):y()}function y(){b.jPlayer("play")}function m(){b.jPlayer("pause")}function g(){b.jPlayer("destroy")}var v=!1,b={};return{init:e,playlistInit:i,setPlaylist:o,playlistAdvance:a,playlistNext:l,playlistPrev:c,play:y,pause:m,getNextIndex:u,getPrevIndex:p,togglePlay:h,getIndexOfLastItem:d,$myJplayer:b,destroy:g}},Ct=function(){function e(){H=et.$canvas?et.$canvas:!1,et.$canvas=G.$get("canvas"),et.$canvas.css("opacity",0),et.canvas=et.$canvas.get(0),et.context=et.canvas.getContext("2d"),et.id=D(),et.$canvas.attr("id",et.id)}function i(){H&&H.animate({opacity:0},function(){et.$canvas.siblings("canvas").remove()})}function o(){H&&jQuery.contains(it[0])?ot.find("canvas.player-background").before(et.$canvas):ot.append(et.$canvas)}function r(t,e){var n=e||1,i=ot.width()*n,o=ot.height()*n,r=t.width/t.height,a=i,l=a/r;return o>l&&(l=o,a=l*r),{width:a,height:l}}function a(t){var e=t.height,n=t.width;et.canvas.width=n,et.canvas.height=e}function l(){et.context.drawImage(Z,0,0)}function s(t){var e="blur"!=W.styleType&&"blur-player"!=W.styleType?1:2,n=r(t,e);et.$canvas.width(n.width).height(n.height),et.$canvas.css({left:-(n.width-ot.width())/2,top:-(n.height-ot.height())/2})}function u(){var e=t.Deferred(),n=new Image;return n.onload=function(){e.resolve()},p(),n.src=Q,Z=n,e}function p(){Q="image"==W.backgroundImageSource&&"undefined"!=typeof n[Y].background?n[Y].background:n[Y].cover?n[Y].cover:!1}function f(e){var n=t.Deferred();return RGBaster.colors(e,function(t){K=t,n.resolve(t)},20),n}function d(t){var e=t.match(/\d+/g),n=(299*e[0]+587*e[1]+114*e[2])/1e3;return 128>=n?"dark-bg":"light-bg"}function h(){var e,n=t.Deferred();return e=t('<img class="temp-image-for-dominant-color-extraction" src='+Q+" />").get(0),t.when(f(e)).done(function(){y(),n.resolve()}),n}function y(){var t=d(K.dominant);"overlay"==tt||"overlay-simple"==tt||"dominant-color"==tt?g(t):nt===!0&&v(),m(t),N.publish("colorsProcessed",K,t)}function m(t){c("data-secondary-color",t)}function g(t){nt=!0,c("data-color",t)}function v(){nt=!1,c("data-color","")}function b(t){U=G.$get(t)}function C(){var t="dominant"==W.overlayColor;U||(b("overlay-background"),L()),k(t===!0?I(K.dominant,W.overlayOpacity):W.overlayColor)}function k(t){var e,n,i,o,r="string"==typeof t?[t]:t;if(W.overlayOpacity,"none"!=t)if(1==r.length)e=r[0],n=I(r[0],.2),$(e),w(n);else{i=r[0],o=r[1];var a={color1:i,color2:o,deg:W.gradientDegrees},l=kt.generate(W.gradientType,a);U.attr("style",l)}}function w(t){it.find(_.playerControls).css("background",t)}function P(){it.find(_.playerControls).css("background","")}function $(t){U.css("background",t)}function L(){var e=t.Deferred();return U.css("opacity",0),ot.append(U),S()||(U.css("opacity",1),e.resolve()),U.animate({opacity:1},function(){U.trigger("click"),A(),e.resolve()}),e}function S(){return X&&X.length}function A(){S()&&X.remove()}function x(){var e=t.Deferred();return b("dominant-color-background"),$(K.dominant),t.when(L()).done(function(){e.resolve()}),e}function j(t){return t.replace(/[^\d,]/g,"").split(",")}function I(t,e){var n=j(t);return n.length>3&&n.pop(),"rgba("+n.join(",")+","+e+")"}function z(){return U?!1:(b("general-background"),L())}function T(n){var r=t.Deferred();return e(),a(Z),o(),t.when(O()).done(function(){s(Z),B(),n!==!1&&i(),r.resolve()}),r}function B(){et.$canvas.animate({opacity:1})}function E(e){var n=t.Deferred();return t.when(T(!1)).done(function(){e(),i(),n.resolve()}),n}function O(){var e,n=t.Deferred();return e=!0,t.when(e).done(function(){t.when(M()).done(function(){n.resolve()})}),n}function M(){var e,n=t.Deferred();if(("blur"==tt||"blur-player"==tt)&&(W.imageEffects="stackBlur[20]"),W.imageEffects===!1||""===W.imageEffects)return l(),n.resolve(),n;if(e=W.imageEffects.split("|"),jQuery.contains($t[0],et.$canvas[0]))var i=Caman(et.$canvas[0],Q,function(){Caman.Event.listen(i,"processComplete",function(t){0==this.renderer.renderQueue.length&&n.resolve()}),t.each(e,function(t,o){var r,a,l=o.match(/(.*?)\[(.*?)\]/);l?(r=l[1],a=l[2].split(",")):(r=o,a=[]),i[r]&&i[r].apply(i,a),i.render(),"stackBlur"==r&&1==e.length&&n.resolve()})});return n}function F(){return W.imageEffects="greyscale",V()}function V(){return E(function(){C()})}function q(){var e=!1;switch(tt){case"dominant-color":e=x();break;case"blur":e=T();break;case"blur-player":e=T(),t.when(e).done(z);break;case"overlay-simple":e=V();break;case"overlay":e=F();break;case"image":e=T();break;default:z()}return e}function J(){var e=t.Deferred();return tt=W.styleType,c("data-style-type",tt),X=$t.find(".player-background"),N.publish("settingBackground",tt),P(),t.when(u()).then(h).then(q).done(function(){e.resolve(),N.publish("backgroundSet")}),e}function R(){U=null;var e=it.find(".player-background");e.removeClass("player-background").addClass("old-player-background").css("z-index",1),t.when(J()).done(function(){e.animate({opacity:0},function(){e.remove()})})}var H,Q,U,X,K,Z,tt,et={},nt=!1,ot=t(_.playerBackgroundOuter);return{setBackground:J,resetBackground:R}},kt=function(){function t(t,e){var n="background-image: -webkit-linear-gradient(left, {color1} 0%, {color2} 100%); // Safari 5.1-6, Chrome 10+background-image: -o-linear-gradient(left, {color1} 0%, {color2} 100%); // Opera 12background-image: linear-gradient(to right, {color1} 0%, {color2} 100%); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+background-repeat: repeat-x;progid:DXImageTransform.Microsoft.gradient(startColorstr='{color1}', endColorstr='{color2}', GradientType=1);";return n.replace(/\{color1\}/g,t).replace(/\{color2\}/g,e)}function e(t,e){var n="background-image: -webkit-linear-gradient(top, {color1} 0%, {color2} 100%);  // Safari 5.1-6, Chrome 10+background-image:  -o-linear-gradient(top, {color1} 0%, {color2} 100%);  // Opera 12background-image: linear-gradient(to bottom, {color1} 0%, {color2} 100%); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+background-repeat: repeat-x;progid:DXImageTransform.Microsoft.gradient(startColorstr='{color1}', endColorstr='{color2}', GradientType=0)";return n.replace(/\{color1\}/g,t).replace(/\{color2\}/g,e)}function n(t,e,n){var i="background-repeat: repeat-x;background-image: -webkit-linear-gradient({deg}, {color1}, {color2}); // Safari 5.1-6, Chrome 10+background-image: -o-linear-gradient({deg}, {color1}, {color2}); // Opera 12background-image: linear-gradient({deg}, {color1}, {color2}); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+";return i.replace(/\{color1\}/g,e).replace(/\{color2\}/g,n).replace(/\{deg\}/g,t)}function i(t,e){var n="background-image: -webkit-radial-gradient(circle, {color1}, {color2});background-image: radial-gradient(circle, {color1}, {color2});background-repeat: no-repeat;";return n.replace(/\{color1\}/g,t).replace(/\{color2\}/g,e)}function o(o,r){var a;switch(o){case"vertical":a=e(r.color1,r.color2);break;case"horizontal":a=t(r.color1,r.color2);break;case"directional":a=n(r.deg,r.color1,r.color2);break;case"radial":a=i(r.color1,r.color2)}return a}return{generate:o}}(),wt=function(){function e(){"undefined"==typeof yepnope&&O("YepNope is not defined. You must include YepNope in your page for the plugin to work.")}function n(e){var n,i,o=t.Deferred();if(!W.autoLoadDependencies||BLVDDependenciesLoaded===!0)return o.resolve(),o;if(i={rgbraster:["dependencies/rgbraster.js"],jplayer:["dependencies/jquery-jplayer/jquery.jplayer.min.js"],nanoscroller:["dependencies/nanoScrollerJS/jquery.nanoscroller.min.js","dependencies/nanoScrollerJS/nanoscroller.css"],camanjs:["dependencies/CamanJS/caman.full.min.js"]},e){var r={};t.each(i,function(n,i){var o=[];t.each(i,function(t,n){o.push(e+n)}),r[n]=o}),i=r}return n=[],t.each(i,function(t,e){n=n.concat(e)}),yepnope({load:n,complete:function(){BLVDDependenciesLoaded=!0,o.resolve()}}),o}return e(),{load:n}},Pt=function(){var e;this.load=function(n){var i;return BLVDTemplates!==!1?(e=BLVDTemplates,!0):i=t.ajax({url:n+"templates.html",success:function(n){e=t(n),BLVDTemplates=e}})},this.$get=function(t){return e.filter("#"+t).children().clone()}},yt=function(){function e(){s(),C(),o(),n()}function n(){var t=$t.height(),e=$t.width();(0==t||0==e)&&(t=$t.parent().height()||281,e=$t.parent().width()||500,$t.css({"min-height":t,"min-width":e}))}function i(t,e){var n=new ft;n.name=t,e.init&&(n.init=function(){ft.prototype.init.apply(n),e.init.apply(n),ft.prototype.postInitProcessing.apply(n)}),e.position&&(n.position=function(){e.position.apply(n)}),$[t]=n}function o(){i("album-cover-and-list",{init:function(){q.setAlbumCoverLayout("single"),R.buildTrackList()},position:function(){var t=this.$inner.height()-q.getAlbumCoverSize()-75;this.$albumCover.css("margin-top",t),this.$trackList.css("margin-top",t)}}),i("album-cover-and-list-fill-space",{init:function(){q.setAlbumCoverLayout("single-fill-space"),R.buildTrackList()}}),i("single-album-cover",{init:function(){q.setAlbumCoverLayout("single")},position:function(){var t=this.$inner.height()-q.getAlbumCoverSize()-120;0>t&&(t=0),this.$albumCover.css("margin-top",t)}}),i("album-covers",{init:function(){q.setAlbumCoverLayout()},position:function(){var t=this.$inner.height()-q.getAlbumCoverSize()-120;0>t&&(t=0),this.$albumCover.css("margin-top",t)}}),i("info-and-album-cover",{init:function(){q.setAlbumCoverLayout("single"),H.init()},position:function(){var t=this.$inner.height()-q.getAlbumCoverSize()-75;this.$albumCover.css("margin-top",t),t=t+q.getAlbumCoverSize()/2-this.$trackInfo.height()/2,this.$trackInfo.css("margin-top",t)}}),i("info-and-list",{init:function(){H.init(),R.buildTrackList()},position:function(){var t=this.$inner.height()/2-this.$trackInfo.height();this.$trackInfo.css("margin-top",t)}}),i("info",{init:function(){H.init()},position:function(){var t=this.$inner.height()/2-this.$trackInfo.height()/2;this.$trackInfo.css("margin-top",t)}}),i("album-cover-tiles",{init:function(){q.setAlbumCoverLayout("wall")}}),i("album-cover-wall",{init:function(){q.setAlbumCoverLayout("wall")}}),i("list",{init:function(){R.buildTrackList()}}),i("blank",{})}function r(e){var n=!1,i=t.Deferred(),o=e||W.layout;return N.publish("settingLayout",o),rt&&(n=$[rt].destroy()),t.when(n).done(function(){return rt=o,$[o]?(c("data-layout",o),f(),it=$t.find(_.playerLayout),k(),$[o].init(),i.resolve(),void N.publish("layoutSet")):(O(o+" is not a valid layout name"),!1)}),i}function a(){return $[rt]}function l(){P=$t.find(_.playerTitle)}function s(e){var n;e=e||W.layout,n=W.baseLayout?W.baseLayout instanceof jQuery?W.baseLayout.clone():t(W.baseLayout):G.$get("base-layout"),n.length||O("Invalid layout name"),n.css({opacity:0}).appendTo($t),w=G.$get("player-interface"),$t.find(".player-controls-outer").append(w),l(),n.animate({opacity:1})}function u(){if(W.layoutType){var e=W.layoutType.split(" ");t.each(e,function(t,e){$t.addClass("forced-"+e),"mini"==e||"mini2"==e?m(e):"mini-height"==e&&v()})}}function p(t){var e=$t.width();e<=W.smallScreenSize&&(rt!=W.smallScreenLayout||t===!0)?r(W.smallScreenLayout):e>W.smallScreenSize&&(rt!=W.layout||t===!0)&&r(W.layout),y()}function f(){var t=G.$get(rt);t.length||O("No template for this layout - "+rt),$t.find(".player-layout").prepend(t.find(".player-layout-inner"))}function d(){var t,e=Q.artist(Y);t=e?Q.trackName(Y)+" - "+e:Q.trackName(Y),P.html(t)}function h(){p()}function y(){var t=$t.width()<=W.smallScreenSize,e="undefined"==typeof K,n=$t.height()<=500,i="undefined"==typeof Z;return W.layoutType?void u():(!t||K&&!e?t||!K&&!e||g():m(),void(!n||Z&&!i?n||!Z&&!i||b():v()))}function m(t){t=t||"mini",K=!0,$t.addClass(t)}function g(){K=!1,$t.removeClass("mini mini2")}function v(){Z=!0,$t.addClass("mini-height")}function b(){Z=!1,$t.removeClass("mini-height")}function C(){function e(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=0;5>n;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}var n,i,o,r;n=e(),i=n+D(),r="#"+i,o=r+"{position: absolute;bottom: 100px;right: 20px;color: #fff; opacity: .2; font-size: 11px;text-decoration:none; }"+r+":hover{ color: #fff; opacity: .5;}.mini-height "+r+'{bottom:70px;}[data-color="light-bg"] '+r+"{color:#222;}",t("head").append('<style type="text/css">'+o+"</style>")}function k(){et={playerWidth:$t.width(),playerHeight:w.height(),playerTopMargin:parseInt($t.find(_.playerLayoutInner).css("padding-top"),10)}}var w,P,$={};return{setLayoutParams:k,buildInterface:s,setTitle:d,managePlayerControlsStyle:y,resize:h,getCurrentLayout:a,setLayout:r,manageLayout:p,init:e}},ft=function(){this.id=D(),this.name="",this.domElementsWithEventHandlers=[]},ft.prototype.domElements={$inner:".player-layout-inner",$albumCover:".album-covers-wrapper",$trackList:".track-list-wrapper",$trackInfo:".track-info-wrapper",$controls:".player-controls"},ft.prototype.init=function(){this.initDomElements()},ft.prototype.postInitProcessing=function(){var e=this;this.position(),this.bind(t(window),"resize",function(){e.position()})},ft.prototype.position=function(){},ft.prototype.initDomElements=function(){var e=this;t.each(this.domElements,function(t,n){e[t]=$t.find(n)})},ft.prototype.bind=function(t,e,n){var i,o;n?(i=t,o=e):(i=$t,o=t,n=e),i.on(o+"."+this.name,n),this.addEvent(i)},ft.prototype.addEvent=function(t){this.domElementsWithEventHandlers.push(t)},ft.prototype.destroy=function(){var e=this,n=t.Deferred();return t.each(this.domElementsWithEventHandlers,function(t,n){n.off("."+e.name)}),this.domElementsWithEventHandlers=[],$t.find(".player-layout-inner").animate({opacity:0},function(){$t.find(".player-layout-inner").off().empty().remove(),n.resolve()}),n},gt=function(){function e(){l=$t.find(_.tracks);for(var e=0;e<n.length;e++){var r=G.$get("list-item");r.find(_.trackNumber).html(e+1),r.find(_.trackTitle).html(Q.trackName(e)),r.find(_.trackArtist).html(Q.artist(e)),r.find(_.duration).html(Q.duration(e)),r.data("index",e),r.attr("data-index",e),l.append(r)}a=l.find(_.track),a.on("click",function(){N.publish("initPlaylistAdvance",t(this).data("index")),a.eq(Y).addClass(B(_.playing)).siblings().removeClass(B(_.playing))}),i(),o()}function i(t){var e,n,i=$t.find(_.trackList);if(q.hasAlbumCovers())var o=q.getAlbumCoverSize();else o="100%";n=o,e=l.height(),n>e&&e>0&&(n=e),i.height(n).width(o),i.nanoScroller()}function o(){t(window).on("resize."+M,function(){i()}),N.on("playlistAdvance playlistInit",function(){r()})}function r(){a&&a.eq(Y).addClass("playing").siblings(".playing").removeClass("playing")}var a,l;return{buildTrackList:e,setTrackListSize:i}},vt=function(){function e(){r=!0,a=$t.find(".track-info-wrapper"),l=a.find(".track-name").find("span"),s=a.find(".track-artist").find("span"),c||o(),c=!0,n()}function n(){r&&(c||e(),l.html(Q.trackName(Y)),s.html(Q.artist(Y)),i())}function i(){var e=a.width(),n=u[2e3];t.each(u,function(t,i){return e<=parseInt(t,10)?(n=i,!1):void 0}),a.attr("data-size",n)}function o(){N.on("playlistInit playlistAdvance",function(){n()}),t(window).on("resize."+M,function(){i()})}var r,a,l,s,c=!1,u={150:"tiny",250:"x-small",400:"small",600:"medium",800:"large",1200:"x-large",1600:"2x-large",2e3:"3x-large"};return{init:e}},dt=function(){this.initialized=!1,this.animationDuration=500,this.anchorWidth=null,this.albumCoverLayout=!1,this.albumCoversByPosition={},this.$anchor=!1},dt.prototype.init=function(t){t=t||{},this.$anchor=t.$anchor?t.$anchor:$t.find(_.albumCoverNaviation),n.length<=1&&!this.albumCoverLayout&&(this.albumCoverLayout="single"),this.manageAlbumCoverLayout(),this.bindDomEvents(),this.initialized||this.bindPlayerEvents(),this.initialized=!0},dt.prototype.positionAndSizeAlbumCovers=function(){t.each(this.albumCoversByPosition,function(t,e){e.setAlbumCoverSize(),e.setPosition(parseInt(t))})},dt.prototype.changeCurrentlyPlaying=function(t){"single"==this.albumCoverLayout||"single-fill-space"==this.albumCoverLayout?this.setSingleAlbumCoverLayout():"wall"==this.albumCoverLayout||this.moveAlbumCoversOnPlaylistAdvance(t)},dt.prototype.handleAlbumCoverClick=function(t){if("single"!=this.albumCoverLayout){var e=t.parent().data("cover");2==e.position?V.togglePlay():V.playlistAdvance(e.index)}},dt.prototype.verifyAlbumCoverForPrevSongSet=function(){"undefined"==typeof this.albumCoversByPosition[3]&&this.addAlbumCover(V.getIndexOfLastItem(),3)},dt.prototype.addAlbumCover=function(t,e,n){var i;i="undefined"!=typeof n?n:e;var o=new ht({animationDuration:this.animationDuration,$anchor:this.$anchor,index:t,position:i});this.logAlbumCoverPosition(o,e),o.render(),"undefined"!=typeof n&&o.setPosition(e,!0)},dt.prototype.logAlbumCoverPosition=function(t,e){this.albumCoversByPosition[e]=t},dt.prototype.getAlbumCoverAtPosition=function(t){return this.albumCoversByPosition[t]},dt.prototype.clearAlbumCovers=function(){t.each(this.albumCoversByPosition,function(t,e){e.remove()}),this.albumCoversByPosition={}},dt.prototype.moveAlbumCoversOnPlaylistAdvance=function(e){var n=this,i=[];"prev"==e&&this.verifyAlbumCoverForPrevSongSet(),X=!0,t.each(this.albumCoversByPosition,function(o,r){var a;"next"==e?a=r.increasePosition():"prev"==e&&(a=r.decreasePosition()),i.push(a),t.when(a).done(function(){r.position>3||r.position<1?r.remove():n.logAlbumCoverPosition(r,r.position)})}),t.when.apply(t,i).done(function(){X=!1});var o,r,a;"next"==e?(o=1,r=V.getNextIndex(),a=0):"prev"==e&&(o=3,r=V.getPrevIndex(),a=4),this.addAlbumCover(r,o,a)},dt.prototype.setSingleAlbumCoverLayout=function(){var t;tt=1,this.clearAlbumCovers(),t=new ht({position:2,$anchor:this.$anchor,index:Y,type:this.albumCoverLayout}),this.logAlbumCoverPosition(t,2),t.render()},dt.prototype.setAlbumCoverWallLayout=function(){for(var e=this,i=[],o=this.$anchor.height(),r=this.$anchor.width(),a=r/5,l=Math.ceil(o/a),s=5*l,c=Math.ceil(s/n.length),u=0,p=(n.length*c-s,0);c>p;p++)t.each(n,function(t){if(u>=s)return!1;var n=new ht({$anchor:e.$anchor,index:t,setSize:!1});i.push(n.render()),u++});t.when.apply(t,i).done(function(){e.sizeWallContainer(),e.$anchor.parents(".nano").first().nanoScroller()})},dt.prototype.sizeWallContainer=function(){this.$anchor.parent().height(this.$anchor.parents(".player-layout-inner").height())},dt.prototype.initLayout=function(t){var e;tt=3,e=t!==!1?0:!1,this.clearAlbumCovers(),this.addAlbumCover(Y,2,e),this.addAlbumCover(V.getNextIndex(),1,e)},dt.prototype.getAlbumCoverSize=function(){return this.albumCoversByPosition[2].size},dt.prototype.hasAlbumCovers=function(){return"undefined"!=typeof this.albumCoversByPosition[2]},dt.prototype.setAlbumCoverLayout=function(t,e){this.albumCoverLayout=t,this.init(e)},dt.prototype.manageAlbumCoverLayout=function(){"single"==this.albumCoverLayout||"single-fill-space"==this.albumCoverLayout?this.setSingleAlbumCoverLayout():"wall"==this.albumCoverLayout?this.setAlbumCoverWallLayout():this.initLayout(!1)},dt.prototype.bindDomEvents=function(){var e=this;this.$anchor.on("click",".album-cover",function(){e.handleAlbumCoverClick(t(this))})},dt.prototype.bindPlayerEvents=function(){var e=this;N.on("playlistAdvance",function(t,n){e.changeCurrentlyPlaying(n)}),N.on("settingLayout",function(){e.clearAlbumCovers()}),t(window).on("resize."+M,function(){"wall"!=e.albumCoverLayout?e.positionAndSizeAlbumCovers():e.sizeWallContainer()})},ht=function(t){this.$element=!1,this.margin=80,this.verticalMargin=120,this.position=t.position,this.$anchor=t.$anchor,this.id=D(),this.animationDuration=t.animationDuration,this.index=t.index,this.media=n[this.index],this.autoSetSize="undefined"!=typeof t.setSize?t.setSize:!0,this.type=t.type},ht.prototype.build=function(){this.$element=G.$get("album-cover"),this.$albumCoverImage=this.$element.find(_.albumCoverImage)},ht.prototype.setInfo=function(){this.$element.find(_.trackTitle).html(this.media.title),this.$element.find(_.trackArtist).html(this.media.artist)},ht.prototype.remove=function(){this.$element.remove(),$t.off("."+this.id)},ht.prototype.calculatePosition=function(t){return 1==W.groupAlbumCoversInMiddle?this.calculatePositionGroupedInMiddle(t):this.calculatePositionUsingAllSpace(t)},ht.prototype.calculatePositionGroupedInMiddle=function(t){var e,n=this,i=n.totalSize*(t-1)+n.margin/2;return e=0>i?i:i+this.offset,e+"px"},ht.prototype.calculatePositionUsingAllSpace=function(t){var e,n,i,o,r,a,l,s;return n=et.playerWidth,o=this.margin,r=(n-this.size)/2,a=n-this.margin-this.size,s=a-r,i=o-s,l=a+s,e=[i,o,r,a,l],e[t]},ht.prototype.setPosition=function(e,n){var i,o,r=this,a=new t.Deferred;return this.position=e,this.$element.attr("data-position",e),1==tt?(a.resolve(),a):(this.$element.css({position:"absolute"}),n?(o={duration:this.animationDuration,complete:function(){a.resolve()}},i={right:r.calculatePosition(e)},this.$element.stop().animate(i,o)):(this.$element.css({right:r.calculatePosition(e)}),a.resolve()),a)},ht.prototype.setMiniPosition=function(t){var e=this;this.$element.css({"margin-top":e.$anchor.height()-this.size-75})},ht.prototype.increasePosition=function(){return this.setPosition(this.position+1,!0)},ht.prototype.decreasePosition=function(){return this.setPosition(this.position-1,!0)},ht.prototype.setSize=function(t){this.size=t,this.totalSize=this.size+this.margin},ht.prototype.setAlbumCoverSize=function(){var t,e=this.$anchor.outerWidth();return this.autoSetSize!==!1?(t="single-fill-space"!=this.type?this.calculateSize(e):this.calculateSizeToFillSpace(),this.setSize(t),this.calculateOffset(e),this.$element.width(t).find(_.albumCover).height(t).width(t),"single-fill-space"==this.type&&this.positionInCenter(t),t):void 0},ht.prototype.positionInCenter=function(t){var e=this.$anchor.width(),n=this.$anchor.height();this.$element.css({left:(e-t)/2,top:(n-t)/2})},ht.prototype.calculateSize=function(t){var e=$t.height()-et.playerHeight-et.playerTopMargin-this.verticalMargin;return(e+this.margin)*tt>t&&(e=t/tt-this.margin),Math.floor(e)},ht.prototype.calculateSizeToFillSpace=function(){var t=this.$anchor.width(),e=this.$anchor.height();return t>e?t:e},ht.prototype.calculateOffset=function(t){var e=(t-this.totalSize*tt)/2;0>e&&(e=0),this.offset=e},ht.prototype.render=function(){return this.build(),
this.setAlbumCoverSize(),this.setInfo(),"undefined"!=typeof this.position&&this.setPosition(this.position),this.$element.data("cover",this),this.$element.appendTo(this.$anchor),this.setCover(this.media)},ht.prototype.setCover=function(e){var n=this,i=t.Deferred();return this.$albumCoverImage.animate({opacity:0},"fast",function(){if(!E(e.cover)){var o=Y,r=new Image,a=t('<img  alt="album cover" />').css("opacity",0);n.$albumCoverImage.prepend(a),a.attr("src",e.cover),r.onload=function(){o==Y&&(a.css("opacity",1),n.$albumCoverImage.animate({opacity:1})),i.resolve()},r.src=e.cover}}),i},W=t.extend(!0,{},F,i),Y=0,X=!1,at=!1,M=D(),W.autoStart===!0&&a(),{start:y,hasStarted:m,destroy:p,setLayout:f,manageLayout:d,on:v,once:b,off:g,getOptions:C,redraw:k,redrawBackground:h,play:w,pause:P,prev:L,next:$,togglePlay:S,setOptions:A,swapPlaylist:x,setPlaylist:j,getAlbumCoverManager:I,$anchor:$t,getPlaylist:z}};t.fn.ttwBoulevard=function(t,n){return new e(this,t,n)}}(jQuery),function(t){t.fn.flowtype=function(e){var n=t.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35},e),i=function(e){var i=t(e),o=i.width(),r=o>n.maximum?n.maximum:o<n.minimum?n.minimum:o,a=r/n.fontRatio,l=a>n.maxFont?n.maxFont:a<n.minFont?n.minFont:a;i.css("font-size",l+"px")};return this.each(function(){var e=this;t(window).resize(function(){i(e)}),i(this)})}}(jQuery);var myPlaylist=[{mp3:"../resources/audio/those_are_the_things.mp3",duration:"3:32",cover:"../resources/img/stairs-cover.jpg",title:"those are the things we used to do",artist:"#bicmnrostfulmfrenh",background:"../sample-playlists/bgs/1.jpg",moreInfo:"david leon - soprano saxophone and composition\nlowell ringel - fretless bass\nmatt buckner- percussion"},{mp3:"../resources/audio/true_story.mp3",duration:"3:28",cover:"../resources/img/lone-bass-boulevard.jpg",title:"true story",artist:"lowell ringel trio",background:"../../sample-playlists/bgs/1.jpg",moreInfo:"lowell ringel - upright bass and composition\ntal cohen - piano\nkyle swan - drums"},{mp3:"../resources/audio/ebullience.mp3",duration:"5:34",cover:"../resources/img/grayscale-bass.jpg",title:"ebullience",artist:"lowell ringel trio",background:"../../sample-playlists/bgs/1.jpg",moreInfo:"lowell ringel - upright bass and composition\nmatt wigler - piano\nkyle swan - drums"},{mp3:"../resources/audio/all_the_things_you_are.mp3",duration:"3:55",cover:"../resources/img/bass_horizontal.jpg",title:"all the things you are",artist:"lowell ringel trio",background:"../../sample-playlists/bgs/1.jpg",moreInfo:"lowell ringel - upright bass and composition\ntal cohen - piano\nkyle swan - drums\ncomposition by oscar hammerstein ii & jerome kern"},{mp3:"../resources/audio/out_of_the_night.mp3",duration:"9:13",cover:"../resources/img/evanlowell.jpg",title:"out of the night",artist:"ringel jazz collective",background:"../../sample-playlists/bgs/1.jpg",moreInfo:"lowell ringel - upright bass\nevan ringel - trombone\nmichael d'angelo - drums\nthomas linger - piano\ncomposition by horace silver"}];$(function(){var t,e;e={styleType:"blur",layout:"album-cover-and-list"},t=$("#boulevard-container").ttwBoulevard(myPlaylist,e),t.on("layoutSet",function(t){$(".track-info .track-title").append('<span class = "glyphicon glyphicon-info-sign" data-toggle="tooltip" style = "padding: 5px;"></span>');for(var e,n=$(".track-info .track-title").text(),i=0;i<myPlaylist.length;i++)if(myPlaylist[i].title==n){e=i;break}$('[data-toggle="tooltip"]').tooltip({title:myPlaylist[e].moreInfo}),("all the things you are"==n||"out of the night"==n)&&($(".track-info .track-title").css("color","black"),$(".track-info .track-artist").css("color","black"))}),t.on("playlistAdvance",function(){t.redraw()})});