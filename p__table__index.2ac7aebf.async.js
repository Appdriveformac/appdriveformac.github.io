"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[673],{97295:function(U,P,e){var b=e(15009),r=e.n(b),S=e(99289),v=e.n(S),j=e(15910),p=e(94885),O={onCreate:function(){var d=v()(r()().mark(function h(s){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.Z)("/create",{method:"POST",prefix:j.A5,data:s}));case 1:case"end":return a.stop()}},h)}));function c(h){return d.apply(this,arguments)}return c}(),onGetList:function(){var d=v()(r()().mark(function h(s){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.Z)("/list",{method:"POST",prefix:j.A5,data:s}));case 1:case"end":return a.stop()}},h)}));function c(h){return d.apply(this,arguments)}return c}(),onDelete:function(){var d=v()(r()().mark(function h(s){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.Z)("/delete",{method:"POST",prefix:j.A5,data:s}));case 1:case"end":return a.stop()}},h)}));function c(h){return d.apply(this,arguments)}return c}()};P.Z=O},16292:function(U,P,e){e.r(P),e.d(P,{default:function(){return Y}});var b=e(15009),r=e.n(b),S=e(99289),v=e.n(S),j=e(97857),p=e.n(j),O=e(5574),d=e.n(O),c=e(67294),h=e(17788),s=e(53025),g=e(2453),a=e(66309),W=e(78957),Z=e(14726),B=e(96365),_=e(8925),A=e(78045),w=e(47389),z=e(82061),N=e(51042),k=e(90930),H=e(79829),me=e(97295),L=e(15910),I=e(94885),X={onCreate:function(){var C=v()(r()().mark(function f(m){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,I.Z)("/create",{method:"POST",prefix:L.h8,data:m}));case 1:case"end":return u.stop()}},f)}));function x(f){return C.apply(this,arguments)}return x}(),onGetList:function(){var C=v()(r()().mark(function f(m){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,I.Z)("/list",{method:"POST",prefix:L.h8,data:m}));case 1:case"end":return u.stop()}},f)}));function x(f){return C.apply(this,arguments)}return x}(),onDelete:function(){var C=v()(r()().mark(function f(m){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,I.Z)("/delete",{method:"POST",prefix:L.h8,data:m}));case 1:case"end":return u.stop()}},f)}));function x(f){return C.apply(this,arguments)}return x}()},M=X,t=e(85893),J=h.Z.confirm,Q=function(){var x=s.Z.useForm(),f=d()(x,1),m=f[0],D=(0,c.useState)([]),u=d()(D,2),q=u[0],ee=u[1],te=(0,c.useState)(!1),K=d()(te,2),ne=K[0],T=K[1],re=(0,c.useState)(null),G=d()(re,2),ae=G[0],R=G[1],ue=(0,c.useState)(!1),$=d()(ue,2),ie=$[0],V=$[1],F=function(){V(!0),M.onGetList({}).then(function(n){n&&n.statusCode&&n.statusCode===200?ee(n.data):g.ZP.error(n.error?n.error:n.data.message),V(!1)})};(0,c.useEffect)(function(){F()},[]);var le=[{title:"STT",dataIndex:"index",key:"index",align:"center",render:function(n,o,i){return i+1}},{title:"T\xEAn b\xE0n \u0103n",dataIndex:"name",key:"name",align:"center",render:function(n){return(0,t.jsx)("b",{children:n})}},{title:"K\xEDch ho\u1EA1t",dataIndex:"active",key:"active",align:"center",render:function(n){return n?(0,t.jsx)(a.Z,{color:"green",children:"K\xEDch ho\u1EA1t"}):(0,t.jsx)(a.Z,{color:"red",children:"Kh\xF3a"})}},{title:"Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp",dataIndex:"orderNumber",key:"orderNumber",align:"center"},{title:"Ch\u1EE9c n\u0103ng",key:"actions",align:"center",render:function(n,o){return(0,t.jsxs)(W.Z,{children:[(0,t.jsx)(Z.ZP,{type:"primary",icon:(0,t.jsx)(w.Z,{}),onClick:function(){return se(o)},children:"S\u1EEDa"}),(0,t.jsx)(Z.ZP,{type:"primary",icon:(0,t.jsx)(z.Z,{}),onClick:function(){return he(o)},danger:!0,children:"Xo\xE1"})]})}}],se=function(n){m.setFieldsValue(p()({},n)),R(n),T(!0)},oe=function(n,o,i){m.resetFields(),T(!0)},de=function(){var l=v()(r()().mark(function n(){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:m.resetFields(),T(!1);case 2:case"end":return i.stop()}},n)}));return function(){return l.apply(this,arguments)}}(),ce=function(){var l=v()(r()().mark(function n(){var o;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,m.validateFields();case 2:o=y.sent,M.onCreate(p()({},o)).then(function(E){E&&E.statusCode&&E.statusCode===200?(g.ZP.success(E.data.message),F()):g.ZP.error(E.error?E.error:E.data.message),T(!1)});case 4:case"end":return y.stop()}},n)}));return function(){return l.apply(this,arguments)}}(),he=function(n){J({title:"B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn xo\xE1 b\xE0n n\xE0y kh\xF4ng?",okText:"C\xF3",okType:"danger",cancelText:"Kh\xF4ng",onOk:function(){M.onDelete(p()({},n)).then(function(i){i&&i.statusCode&&i.statusCode===200?(g.ZP.success(i.data.message),F()):g.ZP.error(i.error?i.error:i.data.message)})}})};return(0,t.jsxs)(k._z,{children:[(0,t.jsx)(H.Z,{size:"small",pagination:{defaultPageSize:10,showSizeChanger:!0,showTotal:function(n,o){return(0,t.jsx)("div",{children:"".concat(o[0],"-").concat(o[1]," / T\u1ED5ng s\u1ED1 b\u1EA3n ghi : ").concat(n)})}},options:{reload:!1,setting:!1,density:!1},loading:ie,tooltip:!1,bordered:!0,search:!1,columns:le,dataSource:q,rowKey:"id",toolBarRender:function(){return[(0,t.jsx)(Z.ZP,{style:{marginBottom:10},type:"primary",icon:(0,t.jsx)(N.Z,{}),onClick:oe,children:"Th\xEAm m\u1EDBi"},"3")]}}),(0,t.jsx)(h.Z,{visible:ne,title:ae?"Ch\u1EC9nh s\u1EEDa th\xF4ng tin b\xE0n \u0103n":"Th\xEAm b\xE0n \u0103n",okText:"L\u01B0u",cancelText:"H\u1EE7y",onCancel:function(){T(!1),R(null)},footer:!0,children:(0,t.jsxs)(s.Z,{form:m,layout:"vertical",children:[(0,t.jsx)(s.Z.Item,{hidden:!0,name:"id",children:(0,t.jsx)(B.Z,{})}),(0,t.jsx)(s.Z.Item,{name:"name",label:"T\xEAn b\xE0n",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp t\xEAn b\xE0n"}],children:(0,t.jsx)(B.Z,{})}),(0,t.jsx)(s.Z.Item,{name:"orderNumber",label:"Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp",children:(0,t.jsx)(_.Z,{defaultValue:0})}),(0,t.jsx)(s.Z.Item,{initialValue:1,name:"active",label:"K\xEDch ho\u1EA1t",children:(0,t.jsxs)(A.ZP.Group,{defaultValue:1,children:[(0,t.jsx)(A.ZP,{value:1,children:"K\xEDch ho\u1EA1t"}),(0,t.jsx)(A.ZP,{value:0,children:"Kho\xE1"})]})}),(0,t.jsxs)(s.Z.Item,{children:[(0,t.jsx)(Z.ZP,{type:"primary",onClick:ce,children:"L\u01B0u"}),(0,t.jsx)(Z.ZP,{style:{marginLeft:8},onClick:de,children:"Hu\u1EF7"})]})]})})]})},Y=Q}}]);