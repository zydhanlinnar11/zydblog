(this.webpackJsonpzydblog=this.webpackJsonpzydblog||[]).push([[5],{100:function(t,e,n){},101:function(t,e,n){"use strict";var r=n(30),i=n(31),a=n(2);e.a=function(t){var e=t.text;return Object(a.jsxs)("div",{className:"icon-only-div",children:[Object(a.jsx)(r.a,{className:"middle-icon",icon:i.a}),Object(a.jsx)("h4",{className:"middle-text",children:e})]})}},148:function(t,e,n){},212:function(t,e,n){"use strict";n.r(e);var r=n(97),i=n(89),a=n.n(i),c=n(90),s=n(27),o=n(28),u=function(){function t(e,n,r){Object(s.a)(this,t),this.name=void 0,this.user_name=void 0,this.user_id=void 0,this.user_id=e,this.name=n,this.user_name=r}return Object(o.a)(t,[{key:"getId",value:function(){return this.user_id}},{key:"getName",value:function(){return this.name}},{key:"getUserName",value:function(){return this.user_name}}]),t}(),l=function(){function t(){Object(s.a)(this,t)}return Object(o.a)(t,[{key:"getUser",value:function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/user/".concat(e));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Error");case 6:return t.next=8,r.json();case 8:i=t.sent,n(new u(e,i.name,i.username)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),n(void 0),console.error("APIv2UserService.getUser(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),v=n(32),f=n(0),h=n(93),d=(n(148),n(99)),b=n(29),p=n(101),g=n(149),j=function(){function t(e,n){Object(s.a)(this,t),this.file_name=void 0,this.url=void 0,this.file_name=e,this.url=n}return Object(o.a)(t,[{key:"getFileName",value:function(){return this.file_name}},{key:"getUrl",value:function(){return this.url}}]),t}(),m=n(15),O=n(2),k=function(t){var e=new u("unknown","Unknown User","unknown"),n=new h.a("Loading post...","",""),r=new h.a("This post isn't available","",""),i=new j("default-cover",m.a.getTitleBoxDefaultBackground()),a=t.slug,c=t.postService,s=t.userService,o=t.fileService,l=Object(f.useState)((function(){return n})),k=Object(v.a)(l,2),x=k[0],S=k[1],w=Object(f.useState)((function(){return e})),y=Object(v.a)(w,2),N=y[0],U=y[1],A=Object(f.useState)((function(){return Object(O.jsx)(b.a,{})})),_=Object(v.a)(A,2),P=_[0],F=_[1],I=Object(f.useState)((function(){return i})),E=Object(v.a)(I,2),L=E[0],z=E[1];return Object(f.useEffect)((function(){c.getPost(a,(function(t){if(t)S(t);else{S(r);var e=Object(O.jsx)(p.a,{text:"This page isn't available"});F(e)}}))}),[]),Object(f.useEffect)((function(){x!=n&&(s.getUser(x.getAuthor()||"",(function(t){t&&U(t)})),o.getFile(x.getCoverFileName(),(function(t){t&&z(t)})))}),[x]),Object(f.useEffect)((function(){if(N!=e){var t=Object(O.jsx)("div",{className:"post-content-container",children:Object(O.jsxs)("div",{className:"post-content",children:[Object(O.jsx)("h3",{className:"post-content-title",children:x.getTitle()}),Object(O.jsxs)("p",{className:"post-content-info",children:[Object(O.jsx)("span",{className:"not-highlighted",children:"Created by"})," ",N.getUserName()," ",Object(O.jsx)("span",{className:"not-highlighted",children:"on"})," ",x.getLocalDateString()]}),Object(O.jsx)("hr",{}),Object(O.jsx)(g.a,{html:x.getSanitizedHtml()})]})});F(t)}}),[N]),Object(O.jsxs)("main",{children:[Object(O.jsx)(d.a,{backgroundURL:L.getUrl(),title:x.getTitle()}),P]})},x=function(){function t(){Object(s.a)(this,t)}return Object(o.a)(t,[{key:"getFile",value:function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/file/".concat(e));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Error");case 6:return t.next=8,r.json();case 8:i=t.sent,n(new j(i.file_name,i.url)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),n(void 0),console.error("APIv2FileService.getFile(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}]),t}();e.default=function(t){var e=t.match,n=new r.a,i=new l,a=new x;return k({postService:n,userService:i,fileService:a,slug:e.params.slug})}},93:function(t,e,n){"use strict";var r=n(27),i=n(28),a=function(){function t(e,n,i,a){Object(r.a)(this,t),this.title=void 0,this.dateISOFormatString=void 0,this.coverFileName=void 0,this.postOptionalAttributes=void 0,this.title=e,this.dateISOFormatString=n,this.coverFileName=i,this.postOptionalAttributes=a}return Object(i.a)(t,[{key:"getTitle",value:function(){return this.title}},{key:"getDateISOFormatString",value:function(){return this.dateISOFormatString}},{key:"getLocalDateString",value:function(){return new Date(this.getDateISOFormatString()).toLocaleString()}},{key:"getCoverFileName",value:function(){return this.coverFileName}},{key:"getDescription",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.description}},{key:"getSlug",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.slug}},{key:"getAuthor",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.author}},{key:"getSanitizedHtml",value:function(){var t;return(null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.sanitizedHtml)?this.postOptionalAttributes.sanitizedHtml:"<h1>No content available</h1>"}},{key:"getURL",value:function(){return this.getSlug()?"/post/".concat(this.getSlug()):this.getSlug()}},{key:"getCoverURL",value:function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.coverUrl}}]),t}();e.a=a},97:function(t,e,n){"use strict";var r=n(89),i=n.n(r),a=n(90),c=n(27),s=n(28),o=n(93),u=function(){function t(){Object(c.a)(this,t)}return Object(s.a)(t,[{key:"getListPosts",value:function(){var t=Object(a.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/posts");case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,n.ok){t.next=9;break}throw new Error("Error");case 9:e(r.map((function(t){return new o.a(t.title,t.created_at,"",{description:t.description,slug:t.slug,coverUrl:t.cover_url})}))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),e([]),console.error("APIv2PostService.getListPosts(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getPost",value:function(){var t=Object(a.a)(i.a.mark((function t(e,n){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/post/".concat(e));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Error");case 6:return t.next=8,r.json();case 8:a=t.sent,n(new o.a(a.title,a.created_at,a.cover_file_name,{author:a.user_id,sanitizedHtml:a.sanitized_html})),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),n(void 0),console.error("APIv2PostService.getPost(): Unable to fetch data from API");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}]),t}();e.a=u},99:function(t,e,n){"use strict";n(100);var r=n(2);e.a=function(t){var e=t.title,n=t.backgroundURL;return Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(n,")"),backgroundPosition:"center",backgroundSize:"cover"},className:"title-box-container",children:Object(r.jsx)("h1",{className:"title-box-post-title",children:e})})}}}]);
//# sourceMappingURL=5.cb817b27.chunk.js.map