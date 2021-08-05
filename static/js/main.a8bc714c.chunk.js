(this["webpackJsonpethereal-chat"]=this["webpackJsonpethereal-chat"]||[]).push([[0],{175:function(e,t,n){},176:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(38),s=n.n(a),o=(n(175),n(77)),i=n(16),l=(n(176),n(257)),u=n(246),d=n(150),j=n.n(d),b=n(260),f=n(247),h=n(261),O=n(48),m=n(248),p=n(83),x=function(){return Object(p.b)()},g=p.c,v=n(241),w=n(242),y=n(240),S=n(3),C=function(e){var t=e.name,n=e.src,r=e.size;return Object(S.jsx)(y.a,{name:t||"Anonymous",src:n,size:r})},k=c.a.memo(C),z=n(243),R=n(244),U=n(158),E=function(e){var t=e.name,n=e.status;return Object(S.jsxs)(v.a,{w:"100%",children:[Object(S.jsx)(w.a,{children:Object(S.jsx)(k,{name:t,src:"",size:"lg"})}),Object(S.jsx)(v.a,{bgColor:"gray.100",mh:"213px",mt:-9,borderRadius:12,p:4,pb:7,children:Object(S.jsxs)(z.a,{pt:8,centerContent:!0,children:[Object(S.jsx)(R.a,{fontSize:"xl",fontWeight:"bold",m:0,children:t}),Object(S.jsx)(R.a,{fontSize:"sm",fontWeight:"bold",color:"gray.400",mt:0,children:n}),Object(S.jsx)(U.a,{colorScheme:"linkedin",w:"100%",mt:8,size:"sm",children:"Chat Preferences"})]})})]})},N=c.a.memo(E),F=n(73),P=n(59),W=Object(P.b)({name:"chat",initialState:{onlineUsers:[],messages:[]},reducers:{updateOnlineUsers:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{onlineUsers:t.payload})},addMessage:function(e,t){var n;null===(n=e.messages)||void 0===n||n.push(t.payload)}}}),M=W.actions,G=M.updateOnlineUsers,_=M.addMessage,A=W.reducer,D=function(e){var t=e.name,n=e.isSelected?"gray.100":"none";return Object(S.jsx)(v.a,{bgColor:n,px:4,py:4,borderRadius:12,_hover:{bgColor:"gray.200",cursor:"pointer"},children:Object(S.jsxs)(u.a,{direction:"row",children:[Object(S.jsx)(k,{name:t,src:"",size:"md"}),Object(S.jsxs)(v.a,{w:"100%",pl:4,children:[Object(S.jsx)(R.a,{fontWeight:"bold",children:t}),Object(S.jsx)(R.a,{fontSize:"sm",color:"gray.700",children:"Online"})]})]})})},L=c.a.memo(D),I=function(){var e=x(),t=g((function(e){return e.connection})).socket,n=g((function(e){return e.chat})).onlineUsers;return Object(r.useEffect)((function(){null===t||void 0===t||t.on("onlineUsers",(function(t){e(G(t))}))}),[t,e]),Object(r.useEffect)((function(){console.log("Online Users:",null===n||void 0===n?void 0:n.length)}),[n]),Object(S.jsx)("div",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(S.jsx)(L,{name:e.displayName,isSelected:!1},e.email)}))})},T=c.a.memo(I),B=function(){return Object(S.jsxs)(v.a,{pt:4,children:[Object(S.jsx)(R.a,{fontSize:"2xl",fontWeight:"bold",mb:4,mt:8,children:"Online Users"}),Object(S.jsx)(T,{})]})},H=c.a.memo(B),J=function(){var e=g((function(e){return e.user})).displayName;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(N,{name:e,status:"Active Now"}),Object(S.jsx)(H,{})]})},Y=c.a.memo(J),q=function(e){e.socket;var t=Object(b.a)(),n=t.isOpen,r=t.onOpen,a=t.onClose,s=c.a.useRef(null);return Object(S.jsxs)(u.a,{w:["auto","auto","388px","388px"],maxW:"388px",h:"100%",p:[0,0,4,4],children:[Object(S.jsx)(f.a,{"aria-label":"Open Menu",size:"lg",bgColor:"white",icon:Object(S.jsx)(m.a,{}),display:["flex","flex","none","none"],ref:s,onClick:r}),Object(S.jsxs)(h.a,{isOpen:n,placement:"left",onClose:a,finalFocusRef:s,children:[Object(S.jsx)(O.f,{}),Object(S.jsxs)(h.b,{children:[Object(S.jsx)(O.c,{}),Object(S.jsx)(O.e,{children:"Ethereal Chat"}),Object(S.jsx)(O.b,{children:Object(S.jsx)(Y,{})})]})]}),Object(S.jsx)(u.a,{direction:"column",w:"100%",display:["none","none","flex","flex"],children:Object(S.jsx)(Y,{})})]})},K=c.a.memo(q),Q=function(e){var t=e.message,n=e.isSenderSelf,r=n?"cyan.700":"white",c=n?"white":"black";return Object(S.jsx)(v.a,{bgColor:r,color:c,p:3,maxW:[64,64,96,96],borderRadius:12,_hover:{cursor:"pointer",boxShadow:"md"},children:t})},V=c.a.memo(Q),X=function(e){var t=e.sender,n=e.message,r=e.isSenderSelf,c=r?"row-reverse":"row";return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(u.a,{direction:c,gridGap:4,py:2,children:[Object(S.jsx)(k,{name:t,src:"",size:"md"}),Object(S.jsx)(V,{isSenderSelf:r,message:n})]})})},Z=c.a.memo(X),$=n(4),ee=n(262),te=n(263),ne=n(250),re=n(251),ce=n(96),ae=function(){var e=Object(r.useState)(""),t=Object($.a)(e,2),n=t[0],c=t[1],a=Object(ce.a)().handleSubmit,s=g((function(e){return e.connection})).socket,o=g((function(e){return e.user})).email;return Object(S.jsx)(v.a,{bgColor:"white",children:Object(S.jsx)("form",{onSubmit:a((function(){var e={sender:o,destination:"__BROADCAST__",payload:{type:"chat",content:n}};null===s||void 0===s||s.emit("message",e),c("")})),children:Object(S.jsxs)(ee.a,{size:"lg",children:[Object(S.jsx)(te.a,{placeholder:"Write your message here",onChange:function(e){c(e.target.value)},value:n}),Object(S.jsx)(ne.a,{children:Object(S.jsx)(f.a,{"aria-label":"Send",icon:Object(S.jsx)(re.a,{}),size:"sm",type:"submit"})})]})})})},se=c.a.memo(ae),oe=function(){var e=x(),t=g((function(e){return e.connection})).socket,n=g((function(e){return e.chat})),c=n.onlineUsers,a=n.messages,s=g((function(e){return e.user})).email;return Object(r.useEffect)((function(){console.log("Received",a),console.log(c)}),[a]),Object(r.useEffect)((function(){null===t||void 0===t||t.on("message",(function(t){var n=t.sender,r=t.destination,c=t.payload;e(_({sender:n,destination:r,payload:c})),console.log({sender:n,destination:r,payload:c})}))}),[t]),Object(S.jsx)(v.a,{w:"full",h:"100vh",p:[0,0,4,4],children:Object(S.jsx)(u.a,{bgColor:"gray.100",direction:"column",h:"100%",px:8,py:4,children:Object(S.jsxs)(u.a,{direction:"column",minH:0,flexGrow:1,children:[Object(S.jsx)(u.a,{id:"messages",flexDirection:"column",overflow:"scroll",minH:0,flex:1,flexGrow:1,mb:4,children:null===a||void 0===a?void 0:a.map((function(e,t){var n,r=e.sender,a=e.payload;return Object(S.jsx)(Z,{sender:null===c||void 0===c||null===(n=c.find((function(e){return e.email===r})))||void 0===n?void 0:n.displayName,message:a.content,isSenderSelf:s===r},t)}))}),Object(S.jsx)(se,{})]})})})},ie=c.a.memo(oe),le={socket:void 0},ue=Object(P.b)({name:"connection",initialState:le,reducers:{updateSocket:function(e,t){return{socket:t.payload}}}}),de=ue.actions.updateSocket,je=ue.reducer,be=function(){var e=Object(i.f)(),t=Object(l.a)(),n=x(),c=g((function(e){return e})).user;return Object(r.useEffect)((function(){c.token||(t({title:"Invalid Token",description:"Please login to continue",status:"warning",duration:9e3,isClosable:!0,position:"top"}),e.push("/login"));var r=j()("ws://localhost:4000/");return r.auth={token:c.token},n(de(r)),function(){null===r||void 0===r||r.disconnect()}}),[n,e,t,c.token]),Object(S.jsxs)(u.a,{w:"full",alignItems:"stretch",flexDirection:["row","row","row","row"],children:[Object(S.jsx)(K,{}),Object(S.jsx)(ie,{})]})},fe=n(253),he=n.p+"static/media/construction.3b356196.svg",Oe=n(9),me=n.n(Oe),pe=n(18),xe=n(159),ge=n(116),ve=n.n(ge),we="http://localhost:4000/api",ye=function(){var e=Object(pe.a)(me.a.mark((function e(t,n){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.post("".concat(we,"/user/login"),{email:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Se=function(){var e=Object(pe.a)(me.a.mark((function e(t,n,r){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.post("".concat(we,"/user/register"),{email:t,password:n,displayName:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Ce=Object(P.b)({name:"user",initialState:{email:"",displayName:"",token:"",level:0},reducers:{updateUser:function(e,t){return Object(F.a)(Object(F.a)({},e),t.payload)}}}),ke=Ce.actions.updateUser,ze=Ce.reducer,Re=function(){var e=Object(r.useState)(""),t=Object($.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object($.a)(a,2),o=s[0],d=s[1],j=Object(r.useState)(""),b=Object($.a)(j,2),f=b[0],h=b[1],O=Object(r.useState)(""),m=Object($.a)(O,2),p=m[0],g=m[1],v=Object(i.f)(),w=Object(l.a)(),y=x(),C=function(){var e=Object(pe.a)(me.a.mark((function e(){var t,r,c,a,s,i;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o===f){e.next=2;break}return e.abrupt("return",w({title:"Ooops",description:"Passwords do not match",status:"warning",duration:9e3,isClosable:!0,position:"top"}));case 2:return e.prev=2,e.next=5,Se(n,o,p);case 5:200===(t=e.sent).status&&(r=t.data,c=r.user,a=r.token,y(ke({email:c.email,level:c.level,token:a})),w({title:"Success",description:"Account created",status:"success",duration:9e3,isClosable:!0,position:"top"}),v.push("/")),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),s=e.t0.response,i=s.data,w({title:"Registration Failed",description:i,status:"error",duration:9e3,isClosable:!0,position:"top"});case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)(u.a,{direction:"column",gridGap:4,justifyContent:"center",height:"100%",children:Object(S.jsxs)(xe.a,{children:[Object(S.jsx)(R.a,{fontWeight:"bold",fontSize:"2xl",children:"Create an account"}),Object(S.jsx)(te.a,{name:"email",size:"lg",variant:"filled",placeholder:"Email address",mt:4,onChange:function(e){return c(e.target.value)}}),Object(S.jsx)(te.a,{name:"displayName",size:"lg",variant:"filled",placeholder:"Display Name",mt:4,onChange:function(e){return g(e.target.value)}}),Object(S.jsx)(te.a,{name:"password",size:"lg",variant:"filled",placeholder:"Password",type:"password",mt:4,onChange:function(e){return d(e.target.value)}}),Object(S.jsx)(te.a,{name:"confirmPassword",size:"lg",variant:"filled",placeholder:"Confirm Password",type:"password",mt:4,onChange:function(e){return h(e.target.value)}}),Object(S.jsx)(U.a,{colorScheme:"blue",size:"md",mt:9,borderRadius:99,w:"full",type:"submit",onSubmit:C,onClick:C,children:"Register"})]})})},Ue=n(252),Ee=function(e){var t=e.toggle,n=Object(ce.a)().handleSubmit,c=Object(r.useState)(""),a=Object($.a)(c,2),s=a[0],o=a[1],d=Object(r.useState)(""),j=Object($.a)(d,2),b=j[0],f=j[1],h=Object(i.f)(),O=Object(l.a)(),m=x(),p=g((function(e){return e})).user,v=function(){var e=Object(pe.a)(me.a.mark((function e(){var t,n,r,c,a,o;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye(s,b);case 3:200===(t=e.sent).status&&(n=t.data,r=n.user,c=n.token,m(ke({email:r.email,displayName:r.displayName,level:r.level,token:c})),O({title:"Success",description:"You have successfully logged in.",status:"success",duration:9e3,isClosable:!0,position:"top"}),h.push("/")),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),a=e.t0.response,o=a.data,O({title:"Login Failed",description:o,status:"error",duration:9e3,isClosable:!0,position:"top"});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log(p)}),[p]),Object(S.jsx)(u.a,{direction:"column",gridGap:4,justifyContent:"center",height:"100%",children:Object(S.jsxs)("form",{onSubmit:n(v),children:[Object(S.jsx)(R.a,{fontWeight:"bold",fontSize:"2xl",children:"Login to continue"}),Object(S.jsx)(te.a,{size:"lg",variant:"filled",placeholder:"Email address",mt:4,onChange:function(e){o(e.target.value)}}),Object(S.jsx)(te.a,{size:"lg",variant:"filled",placeholder:"Password",type:"password",onChange:function(e){f(e.target.value)},mt:4}),Object(S.jsx)(U.a,{colorScheme:"blue",size:"md",mt:9,borderRadius:99,w:"full",type:"submit",children:"Login"}),Object(S.jsx)(Ue.a,{mt:4}),Object(S.jsx)(w.a,{children:Object(S.jsx)(U.a,{colorScheme:"blue",variant:"link",mt:4,onClick:function(){return t()},children:"Create an account"})})]})})},Ne=function(){var e=Object(r.useState)(!1),t=Object($.a)(e,2),n=t[0],c=t[1];return Object(S.jsxs)(u.a,{direction:"column",gridGap:4,justifyContent:"center",height:"100%",children:[!n&&Object(S.jsx)(Ee,{toggle:function(){c(!n)}}),n&&Object(S.jsx)(Re,{})]})},Fe=function(){return Object(S.jsxs)(u.a,{direction:"row",h:"100vh",children:[Object(S.jsx)(v.a,{flexGrow:1,children:Object(S.jsx)(u.a,{justifyContent:"center",h:"100vh",children:Object(S.jsx)(fe.a,{src:he})})}),Object(S.jsx)(v.a,{w:"500px",p:8,h:"100vh",children:Object(S.jsx)(Ne,{})})]})};var Pe=function(){return Object(S.jsx)(o.a,{children:Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{path:"/login",component:Fe}),Object(S.jsx)(i.a,{path:"/",component:be})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,264)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},Me=n(258),Ge=n(255),_e=Object(P.a)({reducer:{user:ze,connection:je,chat:A},middleware:function(e){return e({serializableCheck:!1})}}),Ae=n(254),De=Object(Ae.a)({config:{initialColorMode:"light",useSystemColorMode:!1}});s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(p.a,{store:_e,children:Object(S.jsxs)(Me.a,{children:[Object(S.jsx)(Ge.a,{initialColorMode:De.config.initialColorMode}),Object(S.jsx)(Pe,{})]})})}),document.getElementById("root")),We()}},[[230,1,2]]]);
//# sourceMappingURL=main.a8bc714c.chunk.js.map