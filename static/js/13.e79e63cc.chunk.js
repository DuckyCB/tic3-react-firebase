(this["webpackJsonptic3-react-firebase"]=this["webpackJsonptic3-react-firebase"]||[]).push([[13],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var r=a(45),n=a(0),s=a.n(n),c=a(1),u=a(250),i=a(15),l=a(21),o=a(71),b=a(3),m=a(108),j=a(40),d=a(70),h=a(63),p=a(44),f=function(){var e=Object(c.a)(s.a.mark((function e(t,a,r,n,c,u){var i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&a&&r&&n&&c){e.next=2;break}throw new Error("empty field");case 2:return i=Object(d.b)(),e.prev=3,e.next=6,x(c);case 6:return e.next=8,Object(d.a)(i,t,a);case 8:return l=e.sent,e.next=11,O(l.user.uid,t,r,n,c,u);case 11:return e.abrupt("return",l.user);case 14:throw e.prev=14,e.t0=e.catch(3),e.t0;case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,a,r,n,s,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(s.a.mark((function e(t,a,r,n,c,u){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.l)(Object(h.d)(p.db,"users",t),{email:a,firstName:r,lastName:n,username:c,postsCount:0,subscriptions:[],avatar:u});case 2:case"end":return e.stop()}}),e)})));return function(t,a,r,n,s,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(h.k)(Object(h.c)(p.db,"users"),Object(h.m)("username","==",t)),e.next=3,Object(h.f)(a);case 3:if(r=e.sent,!(r.docs.map((function(e){return e.data})).length>=1)){e.next=7;break}throw new Error("username already exists");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=a(249),g=a(275),w=a(161),y=a(262),C=a(169),S=a(164),k=a(168),N=a(272),W=a(247),E=a(72),q=a(7),T=["onChange"];function A(){var e=Object(l.f)(),t=(Object(b.useContext)(m.a).firebase,Object(b.useState)("")),a=Object(i.a)(t,2),n=a[0],d=a[1],h=Object(b.useState)(""),p=Object(i.a)(h,2),O=p[0],x=p[1],A=Object(b.useState)(""),F=Object(i.a)(A,2),I=F[0],D=F[1],J=Object(b.useState)(""),P=Object(i.a)(J,2),U=P[0],K=P[1],L=Object(b.useState)(!1),R=Object(i.a)(L,2),z=R[0],B=R[1],G=Object(b.useState)(""),H=Object(i.a)(G,2),M=H[0],Q=H[1],V=Object(b.useState)(!1),X=Object(i.a)(V,2),Y=X[0],Z=X[1],$=Object(b.useState)(!1),_=Object(i.a)($,2),ee=_[0],te=_[1],ae=Object(b.useState)(""),re=Object(i.a)(ae,2),ne=re[0],se=re[1],ce=Object(W.a)(),ue=ce.register,ie=(ce.handleSubmit,ce.setError),le=ce.formState.errors,oe=ce.clearErrors,be=Object(b.useRef)(null),me=ue("username"),je=(me.onChange,Object(u.a)(me,T)),de=function(){var t=Object(c.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!(pe(n)||n.length<4||!he(U)||M.length<6)){t.next=7;break}return pe(n)||n.length<4?(te(!0),ie("username",{type:"manual",message:"username can't have white spaces or be shorter than 4 characters"})):te(!1),he(U)?B(!1):(B(!0),ie("password",{type:"manual",message:"Invalid email"})),M.length<6?(Z(!0),ie("password",{type:"manual",message:"Password must be at least 6 characters"})):Z(!1),t.abrupt("return");case 7:return t.next=9,f(U,M,O,I,n,ne);case 9:return t.sent,t.next=12,Object(E.b)(U,M);case 12:e.push(j.a),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(1),r=t.t0.message,t.t0.code,"username already exists"===r&&(te(!0),ie("username",{type:"manual",message:"username already exists"})),console.error(r);case 21:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}(),he=function(e){return e.includes("@")},pe=function(e){return e.indexOf(" ")>=0};return Object(b.useEffect)((function(){document.title="Kinchoo signup"}),[]),Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(q.jsx)(w.a,{}),Object(q.jsxs)(C.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(q.jsx)(S.a,{sx:{m:1,bgcolor:"#ef6c00"}}),Object(q.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(q.jsxs)(C.a,{component:"form",onSubmit:de,sx:{mt:3},children:[Object(q.jsxs)(v.a,{container:!0,spacing:2,children:[Object(q.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(y.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:O,onChange:function(e){var t=e.target;return x(t.value)}})}),Object(q.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(y.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name",value:I,onChange:function(e){var t=e.target;return D(t.value)}})}),Object(q.jsx)(v.a,{item:!0,xs:12,children:Object(q.jsx)(y.a,Object(r.a)({required:!0,ref:be,error:ee,helperText:le.username&&le.username.message,fullWidth:!0,id:"username",label:"Username",value:n,onChange:function(e){var t=e.target;oe("username"),te(!1),d(t.value)}},je))}),Object(q.jsx)(v.a,{item:!0,xs:12,children:Object(q.jsx)(y.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:U,error:z,helperText:z?"Invalid email":"",onChange:function(e){var t=e.target;return K(t.value)}})}),Object(q.jsx)(v.a,{item:!0,xs:12,children:Object(q.jsx)(y.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:M,error:Y,helperText:Y&&le.password.message,onChange:function(e){var t=e.target;return Q(t.value)}})}),Object(q.jsx)(v.a,{item:!0,xs:12,children:Object(q.jsx)(y.a,{fullWidth:!0,name:"avatar",label:"Avatar link",type:"avatar",id:"avatar",value:ne,onChange:function(e){var t=e.target;return se(t.value)}})})]}),Object(q.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(q.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(q.jsx)(v.a,{item:!0,children:Object(q.jsx)(k.a,{component:o.b,to:j.c,color:"inherit",children:"Already have an account? Sign in"})})})]})]})]})})}}}]);
//# sourceMappingURL=13.e79e63cc.chunk.js.map