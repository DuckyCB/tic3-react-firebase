(this["webpackJsonptic3-react-firebase"]=this["webpackJsonptic3-react-firebase"]||[]).push([[11],{187:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return V}));var c=n(0),r=n.n(c),a=n(46),o=n(1),s=n(14),i=n(3),u=(n(105),n(227)),d=n(269),j=n(268),l=n(168),b=n(223),p=n(262),f=n(263),h=(n(117),n(169)),O=n(70),x=n(62),v=n(43),m=n(224),g=n(266),w=n(250),y=(n(67),n(103)),C=n(71),U=n(7);function D(t){var e=t.content,n=t.postedBy,c=t.createdAt;return Object(U.jsx)(d.a,{variant:"outlined",sx:{width:"100%"},children:Object(U.jsxs)(j.a,{children:[Object(U.jsx)(l.a,{variant:"body1",color:"text.primary",children:e}),Object(U.jsxs)(l.a,{variant:"caption",color:"text.secondary",component:O.b,to:"/u/".concat(n),sx:{textDecoration:"none",color:"text.primary"},children:[n," - ",c]})]})})}function k(t){var e=t.post,n=Object(i.useState)([]),c=Object(s.a)(n,2),u=c[0],d=c[1],j=Object(i.useState)([]),l=Object(s.a)(j,2),O=l[0],k=l[1],R=Object(i.useState)(null),T=Object(s.a)(R,2),V=T[0],B=T[1],F=Object(y.a)(v.auth),A=Object(s.a)(F,3),E=A[0],L=A[1];A[2];function M(){return(M=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.b)(Object(x.c)(v.db,"posts",e.id,"comments"),{content:O,createdAt:x.a.fromDate(new Date),downVotes:0,upVotes:0,postedBy:V.username});case 2:t.sent,k("");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n=Object(x.k)(Object(x.c)(v.db,"posts",e.id,"comments")),Object(x.i)(n,(function(t){var e=[];t.forEach((function(t){e.push(Object(a.a)({id:t.id},t.data()))})),d(e)}))}catch(c){console.error(c)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!L&&E){t.next=2;break}return t.abrupt("return");case 2:return t.t0=B,t.next=5,Object(C.a)(E);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n(),function(){t.apply(this,arguments)}()}),[E,L]),Object(U.jsx)(b.a,{sx:{width:.6,marginBottom:5},children:Object(U.jsxs)(p.a,{spacing:1,justifyContent:"center",alignItems:"center",sx:{width:.9,paddingTop:4,paddingBottom:4,margin:"auto"},children:[u.map((function(t){return Object(U.jsx)(D,{content:t.content,postedBy:t.postedBy,createdAt:Object(m.b)(t.createdAt)})})),Object(U.jsx)(h.a,{sx:{width:"100%"},children:Object(U.jsxs)(w.a,{container:!0,component:"form",sx:{paddingBottom:4},spacing:1,children:[Object(U.jsx)(w.a,{item:!0,xs:10,children:Object(U.jsx)(f.a,{fullWidth:!0,id:"outlined-textarea",label:"New comment",placeholder:"Excelent post!",multiline:!0,value:O,onChange:function(t){var e=t.target;return k(e.value)}})}),Object(U.jsx)(w.a,{item:!0,xs:2,container:!0,children:Object(U.jsx)(g.a,{variant:"contained",sx:{height:"100%",width:"100%"},onClick:function(){return M.apply(this,arguments)},children:"+"})})]})})]})})}var R=n(21),T=n(265);function V(){var t=Object(i.useState)(void 0),e=Object(s.a)(t,2),n=e[0],c=e[1],d=Object(R.g)().postid;return Object(i.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e=Object(x.d)(v.db,"posts","".concat(d)),Object(x.i)(e,(function(t){c(Object(a.a)({id:t.id},t.data()))}))}catch(n){console.error(n)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),document.title=n?"p/".concat(n.title):"p/",Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(p.a,{spacing:4,justifyContent:"center",alignItems:"center",children:[void 0!==n?Object(U.jsx)(u.a,{post:n,fullRender:"true"},n.id):Object(U.jsx)(T.a,{animation:"wave",variant:"rectangular",width:800,height:700}),void 0!==n?Object(U.jsx)(k,{post:n}):Object(U.jsx)(T.a,{animation:"wave",variant:"rectangular",width:800,height:150})]})})}},224:function(t,e,n){"use strict";function c(t){var e=t.toDate(),n=e.getUTCMonth()+1;return e.getUTCDate()+"/"+n+"/"+e.getUTCFullYear()}function r(t){var e=t.toDate(),n=e.getUTCMonth()+1,c=e.getUTCDate(),r=e.getUTCFullYear();return(24+e.getUTCHours()-3)%24+":"+(e.getUTCMinutes()>9?e.getUTCMinutes():"0"+e.getUTCMinutes())+" "+c+"/"+n+"/"+r}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}))},227:function(t,e,n){"use strict";var c=n(3),r=n(267),a=n(268),o=n(168),s=n(269),i=n(270),u=n(271),d=n(272),j=n(273),l=n(0),b=n.n(l),p=n(1),f=n(14),h=n(232),O=n.n(h),x=n(233),v=n.n(x),m=n(89),g=n(262),w=n(62),y=n(71),C=n(103),U=n(43),D=n(7),k=n(43).db;function R(t){var e=t.post,n=Object(c.useState)(null),r=Object(f.a)(n,2),a=r[0],s=r[1],i=Object(C.a)(U.auth),u=Object(f.a)(i,3),d=u[0],j=u[1],l=(u[2],e.upVotesCount),h=e.downVotesCount,x=e.usersUpvote,R=e.usersDownvote;Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j&&d){t.next=2;break}return t.abrupt("return");case 2:return t.t0=s,t.next=5,Object(y.a)(d);case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d,j]);var T=function(){var t=Object(p.a)(b.a.mark((function t(n){var c,r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.upVotesCount,h=e.downVotesCount,x=e.usersUpvote,R=e.usersDownvote,c=new Date,"upvote"===n?R.includes(a.id)?(R=R.filter((function(t){return t!==a.id})),h--):(l++,x.push(a.id)):x.includes(a.id)?(x=x.filter((function(t){return t!==a.id})),l--):(h++,R.push(a.id)),r=Object(w.n)(k),o=Object(w.d)(k,"posts",e.id),r.update(o,{upVotesCount:l,downVotesCount:h,usersUpvote:x,usersDownvote:R,updatedAt:w.a.fromDate(c)}),t.next=11,r.commit();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(g.a,{direction:"row",children:[Object(D.jsx)(m.a,{color:a?e.usersDownvote.includes(a.id)?"disabled":"upvote":"disabled",disabled:!a||e.usersUpvote.includes(a.id),style:a&&e.usersUpvote.includes(a.id)?{color:"#FF8b60"}:{},variant:"outlined",onClick:function(){return T("upvote")},children:Object(D.jsx)(O.a,{})}),Object(D.jsx)(m.a,{color:a?e.usersUpvote.includes(a.id)?"disabled":"downvote":"disabled",disabled:!a||e.usersDownvote.includes(a.id),style:a&&e.usersDownvote.includes(a.id)?{color:"#9494FF"}:{},variant:"outlined",onClick:function(){return T("downvote")},children:Object(D.jsx)(v.a,{})}),Object(D.jsx)(o.a,{p:1,children:e.upVotesCount-e.downVotesCount})]})})}var T=n(164),V=n(53),B=n(70),F=n(224);function A(t){var e=t.post,n=t.fullRender;return e.imgURL&&Object(D.jsx)(r.a,{component:"img",alt:"Image not fetched",image:e.imgURL}),Object(D.jsxs)(a.a,{children:[Object(D.jsx)(o.a,{variant:"h6",display:"block",gutterBottom:!0,children:e.title}),e.imgURL?Object(D.jsx)(r.a,{component:"img",alt:"Image not fetched",image:e.imgURL}):null,Object(D.jsx)(o.a,{sx:n?{padding:4}:{padding:4,maxHeight:250,overflow:"hidden",display:""===e.imgURL?"block":"none"},align:"justify",children:e.content})]})}var E=function(t){var e,n=t.post,c=t.fullRender;n.user&&(e="Posted by u/".concat(n.user.username));var r=Object(F.a)(n.createdAt);return Object(D.jsxs)(s.a,{sx:{width:.6},children:[Object(D.jsx)(i.a,{avatar:Object(D.jsx)(T.a,{sx:{bgcolor:V.a[500]},"aria-label":"recipe",src:n.subKinchoo.avatar}),title:Object(D.jsxs)(u.a,{component:B.b,to:"/r/".concat(n.subKinchoo.subname),sx:{textDecoration:"none",color:"text.primary"},children:["r/",n.subKinchoo.subname]}),subheader:Object(D.jsx)(u.a,{component:B.b,to:"/u/".concat(n.user.username),sx:{textDecoration:"none",color:"text.secondary"},children:e})}),c?Object(D.jsx)(A,{post:n,fullRender:c}):Object(D.jsx)(d.a,{component:B.b,to:"/p/".concat(n.id),children:Object(D.jsx)(A,{post:n,fullRender:c})}),Object(D.jsxs)(j.a,{sx:{justifyContent:"space-between"},children:[Object(D.jsx)(R,{post:n}),Object(D.jsxs)(o.a,{align:"right",children:["Posted: ",r]})]})]},n.id)};E.defaultProps={fullRender:!1};e.a=E}}]);
//# sourceMappingURL=11.4ae976e6.chunk.js.map