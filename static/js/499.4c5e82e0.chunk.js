"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{8499:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a,c,s,u,i=n(5861),o=n(9439),p=n(7757),f=n.n(p),v=n(168),h=n(6444),d=h.ZP.ul(r||(r=(0,v.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),l=h.ZP.li(a||(a=(0,v.Z)(["\n    &:not(:last-child) {\n        padding-bottom: 8px;\n        margin-bottom: 16px;\n        border-bottom: 1px solid black;\n    }\n"]))),m=h.ZP.h4(c||(c=(0,v.Z)(["\n    margin-left: 24px;\n    margin-bottom: 8px;\n"]))),x=h.ZP.p(s||(s=(0,v.Z)(["\n    margin-bottom: 8px;\n"]))),Z=h.ZP.p(u||(u=(0,v.Z)(["\n    text-align: center;\n"]))),w=n(2791),b=n(7689),g=n(4585),k=n(1933),y=n(184),_=function(){var e=(0,w.useState)(null),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,w.useState)(!1),c=(0,o.Z)(a,2),s=c[0],u=c[1],p=(0,w.useState)(""),v=(0,o.Z)(p,2),h=v[0],_=v[1],j=(0,b.UO)().movieId;return(0,w.useEffect)((function(){u(!0);var e=function(){var e=(0,i.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.ZP.fetchMovieReviews(j);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),_(e.t0.message);case 10:return e.prev=10,u(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]),(0,y.jsxs)(y.Fragment,{children:[s&&(0,y.jsx)(g.a,{}),h&&(0,y.jsx)("p",{children:"We have error!"}),0===(null===n||void 0===n?void 0:n.length)&&(0,y.jsx)(Z,{children:"We don't have any reviews for this movie."}),n&&(0,y.jsx)(d,{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,y.jsxs)(l,{children:[(0,y.jsxs)(m,{children:["Author: ",n]}),(0,y.jsx)(x,{children:r})]},t)}))})]})}},1933:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),s=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3"}),u="6aa771366ac6b5ed8b84d1848afc45ff",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day?",{params:{api_key:u}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?",{params:{api_key:u,query:t}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fetchMoviesTrending:i,fetchMovieSearch:o,fetchMovieInfo:p,fetchMovieCast:f,fetchMovieReviews:v};t.ZP=h}}]);
//# sourceMappingURL=499.4c5e82e0.chunk.js.map