(this["webpackJsonptic3-react-firebase"]=this["webpackJsonptic3-react-firebase"]||[]).push([[5],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n(0),r=n.n(a),i=n(46),c=n(1),o=n(14),s=n(3),l=n(230),u=n(250),d=n(262),b=n(269),p=n(272),j=n(168),h=n(265),f=n(223),O=n(70),x=n(62),v=n(43),m=n(7);function g(e){var t=e.subKinchoo;return Object(m.jsx)(b.a,{sx:{width:.8},variant:"outlined",children:Object(m.jsx)(p.a,{sx:{height:40,alignItems:"center",display:"flex"},component:O.b,to:"/r/".concat(t.subname),children:Object(m.jsxs)(j.a,{align:"center",children:["r/",t.subname]})})})}function w(){return Object(m.jsxs)(d.a,{spacing:2,justifyContent:"center",alignItems:"center",sx:{paddingTop:2,paddingBottom:2},children:[Object(m.jsx)(h.a,{animation:"wave",variant:"rectangular",sx:{width:.8,height:50}}),Object(m.jsx)(h.a,{animation:"wave",variant:"rectangular",sx:{width:.8,height:50}}),Object(m.jsx)(h.a,{animation:"wave",variant:"rectangular",sx:{width:.8,height:50}}),Object(m.jsx)(h.a,{animation:"wave",variant:"rectangular",sx:{width:.8,height:50}}),Object(m.jsx)(h.a,{animation:"wave",variant:"rectangular",sx:{width:.8,height:50}})]})}function C(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=Object(x.k)(Object(x.c)(v.db,"subkinchoo"),Object(x.j)("followersCount","desc"),Object(x.h)(5)),Object(x.i)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(i.a)({id:e.id},e.data()))})),a(t)}))}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)(f.a,{sx:{width:.8},children:[Object(m.jsx)(j.a,{sx:{paddingTop:3,paddingBottom:1},align:"center",variant:"h5",children:"Top 5 subKinchoos"}),n?Object(m.jsx)(d.a,{spacing:2,justifyContent:"center",alignItems:"center",sx:{paddingTop:2,paddingBottom:2},children:n.map((function(e){return Object(m.jsx)(g,{subKinchoo:e})}))}):Object(m.jsx)(w,{})]})}function S(){return Object(m.jsx)(f.a,{sx:{width:.8},children:Object(m.jsx)(j.a,{sx:{padding:2},children:"About us: Empresa internacional dedicada a crear subkinchoos lo menos cringes posibles."})})}var k=n(231),y=n(266),D=n(238),W=n(237),M=n(239),T=n(263),R=n(240);function U(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(""),l=Object(o.a)(i,2),u=l[0],b=l[1],p=Object(s.useState)(""),j=Object(o.a)(p,2),h=j[0],f=j[1],O=Object(s.useState)(""),g=Object(o.a)(O,2),w=g[0],C=g[1],S=Object(s.useState)(""),k=Object(o.a)(S,2),U=k[0],B=k[1],P=new Date;function F(){return(F=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)(Object(x.c)(v.db,"subkinchoo"),{avatar:w,description:U,followersCount:0,name:u,posts:[],subname:h,createdAt:x.a.fromDate(P)});case 2:e.sent,a(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){a(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{sx:{width:.8},variant:"contained",onClick:function(){a(!0)},children:"Create new SubKinchoo"}),Object(m.jsxs)(D.a,{fullWidth:!0,maxWidth:.6,sx:{},open:n,onClose:N,children:[Object(m.jsx)(W.a,{children:"Create new SubKinchoo"}),Object(m.jsx)(M.a,{children:Object(m.jsxs)(d.a,{spacing:1,justifyContent:"center",alignItems:"center",sx:{width:.8,paddingTop:4,paddingBottom:4,margin:"auto"},children:[Object(m.jsx)(T.a,{id:"name",label:"Name",placeholder:"Sub Kinchoo name",fullWidth:!0,onChange:function(e){var t=e.target;return b(t.value)}}),Object(m.jsx)(T.a,{id:"subname",label:"Subname",placeholder:"subkinchooname",fullWidth:!0,onChange:function(e){var t=e.target;return f(t.value)}}),Object(m.jsx)(T.a,{id:"imgLink",label:"Image link",placeholder:"images.com/yourimage",fullWidth:!0,onChange:function(e){var t=e.target;return C(t.value)}}),Object(m.jsx)(T.a,{id:"description",label:"Description",placeholder:"Description of the SubKinchoo",fullWidth:!0,multiline:!0,rows:3,onChange:function(e){var t=e.target;return B(t.value)}})]})}),Object(m.jsxs)(R.a,{children:[Object(m.jsx)(y.a,{variant:"contained",onClick:N,children:"Cancel"}),Object(m.jsx)(y.a,{variant:"contained",onClick:function(){return F.apply(this,arguments)},children:"Create"})]})]})]})}var B=n(71),P=n(103);function F(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],b=Object(s.useState)(null),p=Object(o.a)(b,2),j=p[0],h=p[1],f=Object(P.a)(v.auth),O=Object(o.a)(f,3),g=O[0],w=O[1];O[2];Object(s.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=Object(x.k)(Object(x.c)(v.db,"posts"),Object(x.j)("createdAt","desc")),Object(x.i)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(i.a)({id:e.id},e.data()))})),a(t)}))}catch(n){console.error(n.message)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),document.title="Kinchoo"}),[]),Object(s.useEffect)((function(){var e=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w&&g){e.next=2;break}return e.abrupt("return");case 2:return e.t0=h,e.next=5,Object(B.a)(g);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[g,w]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(u.a,{container:!0,spacing:2,justifyContent:"center",alignItems:"flex-start",children:[Object(m.jsx)(u.a,{item:!0,xs:8,children:n?Object(m.jsx)(l.a,{posts:n}):Object(m.jsx)(k.a,{})}),Object(m.jsx)(u.a,{item:!0,xs:4,children:Object(m.jsxs)(d.a,{spacing:3,paddingTop:3,children:[Object(m.jsx)(C,{}),j?Object(m.jsx)(U,{}):null,Object(m.jsx)(S,{})]})})]})})}},224:function(e,t,n){"use strict";function a(e){var t=e.toDate(),n=t.getUTCMonth()+1;return t.getUTCDate()+"/"+n+"/"+t.getUTCFullYear()}function r(e){var t=e.toDate(),n=t.getUTCMonth()+1,a=t.getUTCDate(),r=t.getUTCFullYear();return(24+t.getUTCHours()-3)%24+":"+(t.getUTCMinutes()>9?t.getUTCMinutes():"0"+t.getUTCMinutes())+" "+a+"/"+n+"/"+r}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))},225:function(e,t,n){"use strict";var a=n(3),r=Object(a.createContext)({});t.a=r},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(157),r=n(212);function i(e){return Object(a.a)("MuiDialogTitle",e)}var c=Object(r.a)("MuiDialogTitle",["root"]);t.a=c},227:function(e,t,n){"use strict";var a=n(3),r=n(267),i=n(268),c=n(168),o=n(269),s=n(270),l=n(271),u=n(272),d=n(273),b=n(0),p=n.n(b),j=n(1),h=n(14),f=n(232),O=n.n(f),x=n(233),v=n.n(x),m=n(89),g=n(262),w=n(62),C=n(71),S=n(103),k=n(43),y=n(7),D=n(43).db;function W(e){var t=e.post,n=Object(a.useState)(null),r=Object(h.a)(n,2),i=r[0],o=r[1],s=Object(S.a)(k.auth),l=Object(h.a)(s,3),u=l[0],d=l[1],b=(l[2],t.upVotesCount),f=t.downVotesCount,x=t.usersUpvote,W=t.usersDownvote;Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d&&u){e.next=2;break}return e.abrupt("return");case 2:return e.t0=o,e.next=5,Object(C.a)(u);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u,d]);var M=function(){var e=Object(j.a)(p.a.mark((function e(n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=t.upVotesCount,f=t.downVotesCount,x=t.usersUpvote,W=t.usersDownvote,a=new Date,"upvote"===n?W.includes(i.id)?(W=W.filter((function(e){return e!==i.id})),f--):(b++,x.push(i.id)):x.includes(i.id)?(x=x.filter((function(e){return e!==i.id})),b--):(f++,W.push(i.id)),r=Object(w.n)(D),c=Object(w.d)(D,"posts",t.id),r.update(c,{upVotesCount:b,downVotesCount:f,usersUpvote:x,usersDownvote:W,updatedAt:w.a.fromDate(a)}),e.next=11,r.commit();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(g.a,{direction:"row",children:[Object(y.jsx)(m.a,{color:i?t.usersDownvote.includes(i.id)?"disabled":"upvote":"disabled",disabled:!i||t.usersUpvote.includes(i.id),style:i&&t.usersUpvote.includes(i.id)?{color:"#FF8b60"}:{},variant:"outlined",onClick:function(){return M("upvote")},children:Object(y.jsx)(O.a,{})}),Object(y.jsx)(m.a,{color:i?t.usersUpvote.includes(i.id)?"disabled":"downvote":"disabled",disabled:!i||t.usersDownvote.includes(i.id),style:i&&t.usersDownvote.includes(i.id)?{color:"#9494FF"}:{},variant:"outlined",onClick:function(){return M("downvote")},children:Object(y.jsx)(v.a,{})}),Object(y.jsx)(c.a,{p:1,children:t.upVotesCount-t.downVotesCount})]})})}var M=n(164),T=n(53),R=n(70),U=n(224);function B(e){var t=e.post,n=e.fullRender;return t.imgURL&&Object(y.jsx)(r.a,{component:"img",alt:"Image not fetched",image:t.imgURL}),Object(y.jsxs)(i.a,{children:[Object(y.jsx)(c.a,{variant:"h6",display:"block",gutterBottom:!0,children:t.title}),t.imgURL?Object(y.jsx)(r.a,{component:"img",alt:"Image not fetched",image:t.imgURL}):null,Object(y.jsx)(c.a,{sx:n?{padding:4}:{padding:4,maxHeight:250,overflow:"hidden",display:""===t.imgURL?"block":"none"},align:"justify",children:t.content})]})}var P=function(e){var t,n=e.post,a=e.fullRender;n.user&&(t="Posted by u/".concat(n.user.username));var r=Object(U.a)(n.createdAt);return Object(y.jsxs)(o.a,{sx:{width:.6},children:[Object(y.jsx)(s.a,{avatar:Object(y.jsx)(M.a,{sx:{bgcolor:T.a[500]},"aria-label":"recipe",src:n.subKinchoo.avatar}),title:Object(y.jsxs)(l.a,{component:R.b,to:"/r/".concat(n.subKinchoo.subname),sx:{textDecoration:"none",color:"text.primary"},children:["r/",n.subKinchoo.subname]}),subheader:Object(y.jsx)(l.a,{component:R.b,to:"/u/".concat(n.user.username),sx:{textDecoration:"none",color:"text.secondary"},children:t})}),a?Object(y.jsx)(B,{post:n,fullRender:a}):Object(y.jsx)(u.a,{component:R.b,to:"/p/".concat(n.id),children:Object(y.jsx)(B,{post:n,fullRender:a})}),Object(y.jsxs)(d.a,{sx:{justifyContent:"space-between"},children:[Object(y.jsx)(W,{post:n}),Object(y.jsxs)(c.a,{align:"right",children:["Posted: ",r]})]})]},n.id)};P.defaultProps={fullRender:!1};t.a=P},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(227),r=n(262),i=n(7);function c(e){var t=e.posts;return Object(i.jsx)(r.a,{spacing:4,justifyContent:"center",mb:5,mt:2,alignItems:"center",children:t.map((function(e){return Object(i.jsx)(a.a,{post:e},e.id)}))})}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(262),r=n(265),i=n(7);function c(){return Object(i.jsxs)(a.a,{spacing:4,justifyContent:"center",mb:5,mt:2,alignItems:"center",children:[Object(i.jsx)(r.a,{animation:"wave",variant:"rectangular",sx:{width:.6,height:500}}),Object(i.jsx)(r.a,{animation:"wave",variant:"rectangular",sx:{width:.6,height:500}}),Object(i.jsx)(r.a,{animation:"wave",variant:"rectangular",sx:{width:.6,height:500}})]})}},237:function(e,t,n){"use strict";var a=n(6),r=n(10),i=n(3),c=(n(18),n(15)),o=n(211),s=n(168),l=n(16),u=n(19),d=n(226),b=n(225),p=n(7),j=["className","id"],h=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiDialogTitle"}),s=n.className,l=n.id,f=Object(r.a)(n,j),O=n,x=function(e){var t=e.classes;return Object(o.a)({root:["root"]},d.b,t)}(O),v=i.useContext(b.a).titleId,m=void 0===v?l:v;return Object(p.jsx)(h,Object(a.a)({component:"h2",className:Object(c.a)(x.root,s),ownerState:O,ref:t,variant:"h6",id:m},f))}));t.a=f},238:function(e,t,n){"use strict";var a=n(5),r=n(10),i=n(6),c=n(3),o=(n(18),n(15)),s=n(211),l=n(215),u=n(23),d=n(220),b=n(217),p=n(35),j=n(223),h=n(19),f=n(16),O=n(157),x=n(212);function v(e){return Object(O.a)("MuiDialog",e)}var m=Object(x.a)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),g=n(225),w=n(222),C=n(7),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],k=Object(f.a)(w.a,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),y=Object(f.a)(d.a,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),D=Object(f.a)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var n=e.ownerState;return[t.container,t["scroll".concat(Object(u.a)(n.scroll))]]}})((function(e){var t=e.ownerState;return Object(i.a)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),W=Object(f.a)(j.a,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var n=e.ownerState;return[t.paper,t["scrollPaper".concat(Object(u.a)(n.scroll))],t["paperWidth".concat(Object(u.a)(String(n.maxWidth)))],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&Object(a.a)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(m.paperScrollBody),Object(a.a)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==n.maxWidth&&Object(a.a)({maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(m.paperScrollBody),Object(a.a)({},t.breakpoints.down(t.breakpoints.values[n.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&Object(a.a)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(m.paperScrollBody),{margin:0,maxWidth:"100%"}))})),M={enter:p.b.enteringScreen,exit:p.b.leavingScreen},T=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiDialog"}),a=n["aria-describedby"],d=n["aria-labelledby"],p=n.BackdropComponent,f=n.BackdropProps,O=n.children,x=n.className,m=n.disableEscapeKeyDown,w=void 0!==m&&m,T=n.fullScreen,R=void 0!==T&&T,U=n.fullWidth,B=void 0!==U&&U,P=n.maxWidth,F=void 0===P?"sm":P,N=n.onBackdropClick,I=n.onClose,K=n.open,A=n.PaperComponent,E=void 0===A?j.a:A,L=n.PaperProps,V=void 0===L?{}:L,Y=n.scroll,H=void 0===Y?"paper":Y,X=n.TransitionComponent,J=void 0===X?b.a:X,z=n.transitionDuration,q=void 0===z?M:z,G=n.TransitionProps,Q=Object(r.a)(n,S),Z=Object(i.a)({},n,{disableEscapeKeyDown:w,fullScreen:R,fullWidth:B,maxWidth:F,scroll:H}),$=function(e){var t=e.classes,n=e.scroll,a=e.maxWidth,r=e.fullWidth,i=e.fullScreen,c={root:["root"],container:["container","scroll".concat(Object(u.a)(n))],paper:["paper","paperScroll".concat(Object(u.a)(n)),"paperWidth".concat(Object(u.a)(String(a))),r&&"paperFullWidth",i&&"paperFullScreen"]};return Object(s.a)(c,v,t)}(Z),_=c.useRef(),ee=Object(l.a)(d),te=c.useMemo((function(){return{titleId:ee}}),[ee]);return Object(C.jsx)(y,Object(i.a)({className:Object(o.a)($.root,x),BackdropProps:Object(i.a)({transitionDuration:q,as:p},f),closeAfterTransition:!0,BackdropComponent:k,disableEscapeKeyDown:w,onClose:I,open:K,ref:t,onClick:function(e){_.current&&(_.current=null,N&&N(e),I&&I(e,"backdropClick"))},ownerState:Z},Q,{children:Object(C.jsx)(J,Object(i.a)({appear:!0,in:K,timeout:q,role:"presentation"},G,{children:Object(C.jsx)(D,{className:Object(o.a)($.container),onMouseDown:function(e){_.current=e.target===e.currentTarget},ownerState:Z,children:Object(C.jsx)(W,Object(i.a)({as:E,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":ee},V,{className:Object(o.a)($.paper,V.className),ownerState:Z,children:Object(C.jsx)(g.a.Provider,{value:te,children:O})}))})}))}))}));t.a=T},239:function(e,t,n){"use strict";var a=n(5),r=n(10),i=n(6),c=n(3),o=(n(18),n(15)),s=n(211),l=n(16),u=n(19),d=n(157),b=n(212);function p(e){return Object(d.a)("MuiDialogContent",e)}Object(b.a)("MuiDialogContent",["root","dividers"]);var j=n(226),h=n(7),f=["className","dividers"],O=Object(l.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:Object(a.a)({},".".concat(j.a.root," + &"),{paddingTop:0}))})),x=c.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiDialogContent"}),a=n.className,c=n.dividers,l=void 0!==c&&c,d=Object(r.a)(n,f),b=Object(i.a)({},n,{dividers:l}),j=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return Object(s.a)(n,p,t)}(b);return Object(h.jsx)(O,Object(i.a)({className:Object(o.a)(j.root,a),ownerState:b,ref:t},d))}));t.a=x},240:function(e,t,n){"use strict";var a=n(10),r=n(6),i=n(3),c=(n(18),n(15)),o=n(211),s=n(16),l=n(19),u=n(157),d=n(212);function b(e){return Object(u.a)("MuiDialogActions",e)}Object(d.a)("MuiDialogActions",["root","spacing"]);var p=n(7),j=["className","disableSpacing"],h=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiDialogActions"}),i=n.className,s=n.disableSpacing,u=void 0!==s&&s,d=Object(a.a)(n,j),f=Object(r.a)({},n,{disableSpacing:u}),O=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(o.a)(n,b,t)}(f);return Object(p.jsx)(h,Object(r.a)({className:Object(c.a)(O.root,i),ownerState:f,ref:t},d))}));t.a=f}}]);
//# sourceMappingURL=5.8e933893.chunk.js.map