(this.webpackJsonpzydblog=this.webpackJsonpzydblog||[]).push([[4],{100:function(t,e,r){},101:function(t,e,r){"use strict";var n=r(30),o=r(31),i=r(2);e.a=function(t){var e=t.text;return Object(i.jsxs)("div",{className:"icon-only-div",children:[Object(i.jsx)(n.a,{className:"middle-icon",icon:o.a}),Object(i.jsx)("h4",{className:"middle-text",children:e})]})}},146:function(t,e,r){},147:function(t,e,r){},213:function(t,e,r){"use strict";r.r(e);var n=r(97),o=r(32),i=r(0),a=r.n(i),c=r(99),u=r(21),s=(r(146),r(76)),l=r(40),h=r(1),f=(r(3),r(34)),v=r(75),p=r(35);var d=function(t){var e=t.children,r=t.theme,n=Object(v.a)(),o=a.a.useMemo((function(){var t=null===n?r:function(t,e){return"function"===typeof e?e(t):Object(h.a)({},t,e)}(n,r);return null!=t&&(t[p.a]=null!==n),t}),[r,n]);return a.a.createElement(f.a.Provider,{value:o},e)},g=r(2),y=Object(l.a)({overrides:{MuiButton:{text:{padding:"0",color:"var(--main-font-color)",transition:"color var(--transition-delay)"},root:{background:"var(--card-background)"}}}});var m=function(t){var e=t.title,r=t.localDate,n=t.description,o=t.thumbnailURL,i=t.customTheme;return Object(g.jsx)(d,{theme:i||y,children:Object(g.jsxs)(s.a,{style:{width:"100%"},className:"post-item-container",children:[Object(g.jsx)("img",{src:o,alt:"Thumbnail of ".concat(e)}),Object(g.jsxs)("div",{className:"right-container",children:[Object(g.jsx)("h2",{className:"post-title",children:e}),Object(g.jsx)("h3",{className:"post-date",children:r}),Object(g.jsx)("p",{className:"post-desc",children:n})]})]})})},b=r(29),j=r(101),x=r(15);r(147);var w=function(t){var e=[],r=t.postService,n=Object(i.useState)((function(){return e})),a=Object(o.a)(n,2),s=a[0],l=a[1],h=Object(i.useState)((function(){return Object(g.jsx)(b.a,{})})),f=Object(o.a)(h,2),v=f[0],p=f[1],d=Object(i.useState)((function(){return!1})),y=Object(o.a)(d,2),w=y[0],O=y[1];return Object(i.useEffect)((function(){r.getListPosts(l),O(!0)}),[]),Object(i.useEffect)((function(){if(w){var t=Object(g.jsx)("div",{className:"list-content",children:s.map((function(t){return Object(g.jsx)(u.b,{style:{textDecoration:"none"},to:t.getURL()||"",children:Object(g.jsx)(m,{title:t.getTitle(),localDate:t.getLocalDateString(),description:t.getDescription()||"No description",thumbnailURL:t.getCoverURL()||x.a.getTitleBoxDefaultBackground()})},t.getSlug())}))});0===s.length?p(Object(g.jsx)(j.a,{text:"No content available."})):p(t)}}),[s]),Object(g.jsxs)("main",{children:[Object(g.jsx)(c.a,{title:x.a.getBlogName(),backgroundURL:x.a.getTitleBoxDefaultBackground()}),v]})};e.default=function(){return w({postService:new n.a})}},89:function(t,e,r){t.exports=r(98)},90:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},93:function(t,e,r){"use strict";var n=r(27),o=r(28),i=function(){function t(e,r,o,i){Object(n.a)(this,t),this.title=void 0,this.dateISOFormatString=void 0,this.coverFileName=void 0,this.postOptionalAttributes=void 0,this.title=e,this.dateISOFormatString=r,this.coverFileName=o,this.postOptionalAttributes=i}return Object(o.a)(t,[{key:"getTitle",value:function(){return this.title}},{key:"getDateISOFormatString",value:function(){return this.dateISOFormatString}},{key:"getLocalDateString",value:function(){return new Date(this.getDateISOFormatString()).toLocaleString()}},{key:"getCoverFileName",value:function(){return this.coverFileName}},{key:"getDescription",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.description}},{key:"getSlug",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.slug}},{key:"getAuthor",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.author}},{key:"getSanitizedHtml",value:function(){var t;return(null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.sanitizedHtml)?this.postOptionalAttributes.sanitizedHtml:"<h1>No content available</h1>"}},{key:"getURL",value:function(){return this.getSlug()?"/post/".concat(this.getSlug()):this.getSlug()}},{key:"getCoverURL",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.coverUrl}}]),t}();e.a=i},97:function(t,e,r){"use strict";var n=r(89),o=r.n(n),i=r(90),a=r(27),c=r(28),u=r(93),s=function(){function t(){Object(a.a)(this,t)}return Object(c.a)(t,[{key:"getListPosts",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/posts");case 3:return r=t.sent,t.next=6,r.json();case 6:if(n=t.sent,r.ok){t.next=9;break}throw new Error("Error");case 9:e(n.map((function(t){return new u.a(t.title,t.created_at,"",{description:t.description,slug:t.slug,coverUrl:t.cover_url})}))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),e([]),console.error("APIv2PostService.getListPosts(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getPost",value:function(){var t=Object(i.a)(o.a.mark((function t(e,r){var n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/post/".concat(e));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Error");case 6:return t.next=8,n.json();case 8:i=t.sent,r(new u.a(i.title,i.created_at,i.cover_file_name,{author:i.user_id,sanitizedHtml:i.sanitized_html})),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),r(void 0),console.error("APIv2PostService.getPost(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}]),t}();e.a=s},98:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",v="executing",p="completed",d={};function g(){}function y(){}function m(){}var b={};b[i]=function(){return this};var j=Object.getPrototypeOf,x=j&&j(j(_([])));x&&x!==r&&n.call(x,i)&&(b=x);var w=m.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),u(w,c,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},99:function(t,e,r){"use strict";r(100);var n=r(2);e.a=function(t){var e=t.title,r=t.backgroundURL;return Object(n.jsx)("div",{style:{backgroundImage:"url(".concat(r,")"),backgroundPosition:"center",backgroundSize:"cover"},className:"title-box-container",children:Object(n.jsx)("h1",{className:"title-box-post-title",children:e})})}}}]);
//# sourceMappingURL=4.72a3607d.chunk.js.map