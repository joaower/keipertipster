(this["webpackJsonpkeipertipster-website-channel-frontend-react"]=this["webpackJsonpkeipertipster-website-channel-frontend-react"]||[]).push([[1],{14:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l}));var n=a(107),r=a(15),i=a(87),o=Object(i.a)({green:{backgroundColor:"#013328!important"},black:{backgroundColor:"#100C0D!important"},grey:{backgroundColor:"#E3DCD2!important"},orange:{backgroundColor:"#CC8B65!important"},tGreen:{color:"#013328!important"},tBlack:{color:"#100C0D!important"},tGrey:{color:"#E3DCD2!important"},tOrange:{color:"#CC8B65!important"}}),c=Object(i.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},displayTournament:{flex:2,display:"flex",flexDirection:"column"},displayCompetitors:{display:"flex",flex:2,flexDirection:"column"},cardFather:{display:"flex",flexDirection:"row"},nameDisplay:{flex:1,display:"flex"}}),l=Object(i.a)((function(e){return{root:{display:"flex",overflow:"hidden",flexDirection:"column"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(n.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))},176:function(e,t,a){e.exports=a(206)},181:function(e,t,a){},182:function(e,t,a){},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(4),r=a(164),i=Object(n.a)({root:{"& label.Mui-focused":{color:"#013328"},"& .MuiInput-underline:after":{borderBottomColor:"yellow"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#E3DCD2"},"&:hover fieldset":{borderColor:"#CC8B65"},"&.Mui-focused fieldset":{borderColor:"#013328"}}}})(r.a)},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(181),a(182),a(270)),l=a(14),s=a(10),m=a(13),u=r.a.createContext(),d=function(e){var t=window.localStorage.getItem("jwt"),a=window.localStorage.getItem("username"),i=Object(n.useState)(""!==t?t:""),o=Object(s.a)(i,2),c=o[0],l=o[1],d=Object(n.useState)(""!==a?a:""),p=Object(s.a)(d,2),g=p[0],f=(p[1],Object(n.useState)(!1)),b=Object(s.a)(f,2),E=b[0],h=b[1];return r.a.createElement(u.Provider,{value:{auth:c,login:function(e,t,a){window.localStorage.setItem("username",e),window.localStorage.setItem("jwt",t),"privileged"===a?(h(!0),Object(m.c)("/spider/dashboard")):Object(m.c)("/"),setTimeout((function(){return l(!0)}),1e3)},logout:function(){setTimeout((function(){return l(!1)}),1e3),window.localStorage.clear()},username:g,role:E,handleRole:function(e){h(e)}}},e.children)},p=u.Consumer,g=a(91),f=a(42),b=a(90);var E=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(0),c=Object(s.a)(o,2),l=c[0],u=c[1];Object(n.useEffect)((function(){b.a.countStats().then((function(e){i(e.data)})).catch((function(e){void 0!==e.response&&401===e.response.status&&Object(m.c)("/login")})),b.a.countGreen().then((function(e){u(e.data)})).catch((function(e){void 0!==e.response&&401===e.response.status&&Object(m.c)("/login")}))}),[]);var d=[{betOutcome:"Green",bets:l},{betOutcome:"Red",bets:a-l}];return r.a.createElement(g.a,null,r.a.createElement(f.d,{data:d},r.a.createElement(f.b,null),r.a.createElement(f.f,{max:a+1}),r.a.createElement(f.c,{valueField:"bets",argumentField:"betOutcome"}),r.a.createElement(f.e,{text:"Chart with greens and reds"}),r.a.createElement(f.a,null)))},h=a(87),v=a(271),y=a(260),j=function(){return r.a.createElement("div",null,"PredictionStatistics")},O=function(){return r.a.createElement("div",null,"PredictionHousess")},x=a(15),w=a(258),N=a(163),C=a(125),S=a.n(C),k=function(e){var t=e.data,a=t.sport,n=t.competition,i=t.match,o=t.odd,c=t.description,s=Object(l.b)();return r.a.createElement(w.a,{container:!0,style:{marginBottom:"0.5rem",padding:"1rem"},className:s.green,direction:"row",alignItems:"center"},r.a.createElement(w.a,{item:!0,xs:12,sm:10},r.a.createElement(w.a,{container:!0,style:{marginBottom:"0.5rem",padding:"1rem"},className:s.green,direction:"row",justify:"space-evenly"},r.a.createElement(w.a,{item:!0,xs:6,sm:2},r.a.createElement(N.a,{className:s.tOrange,variant:"body1"},a)),r.a.createElement(w.a,{item:!0,xs:6,sm:2},r.a.createElement(N.a,{className:s.tOrange,variant:"body1"},n)),r.a.createElement(w.a,{item:!0,xs:12,sm:4},r.a.createElement(N.a,{className:s.tOrange,variant:"body1",align:"center"},i)),r.a.createElement(w.a,{item:!0,xs:6,sm:2},r.a.createElement(N.a,{className:s.tOrange,variant:"body1",align:"center"},o)),r.a.createElement(w.a,{item:!0,xs:6,sm:2},r.a.createElement(N.a,{className:s.tOrange,variant:"body1",align:"center"},o)),r.a.createElement(w.a,{style:{marginTop:"1rem"},item:!0,xs:12},r.a.createElement(N.a,{className:s.tGrey,variant:"body1",align:"center"},c)))),r.a.createElement(w.a,{item:!0,xs:12,sm:2,align:"center"},r.a.createElement(S.a,{className:s.tGrey,style:{fontSize:"3rem"}})))},B=Object(h.a)((function(e){return{typeDisplay:Object(x.a)({padding:"2rem",marginLeft:"2rem",marginRight:"2rem"},e.breakpoints.up("md"),{marginLeft:"20rem",marginRight:"20rem"})}})),q=function(e){var t=e.data,a=t.type,n=t.match,i=t.risk,o=B(),c=Object(l.b)();return r.a.createElement(w.a,{container:!0,alignItems:"center",alignContent:"center"},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"h5",style:{marginTop:"2rem",marginBottom:"2rem",fontWeight:"bold"},align:"center"},"TIPO DE APOSTA"),r.a.createElement(g.a,{className:"".concat(c.green," ").concat(o.typeDisplay),elevation:3},a&&i&&r.a.createElement(N.a,{variant:"body1",className:c.tOrange,align:"center"},"Esta \xe9 uma aposta ",a.toLowerCase()," com risco de ",i.toLowerCase()," "))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"h5",style:{marginLeft:"5rem",marginTop:"2rem",marginBottom:"2rem",fontWeight:"bold"},align:"center"},"JOGOS"),r.a.createElement(g.a,{style:{padding:"2rem",marginLeft:"2rem",marginRight:"2rem"},elevation:3},void 0!==n&&n.map((function(e){return r.a.createElement(k,{data:e})})))))},I=a(47),D=Object(h.a)({root:{flexGrow:1},paper:{display:"flex",flexDirection:"colomn"},paperChild:{display:"flex",flex:"1"}});var T=function(e){var t=D(),a=Object(n.useState)(1),i=Object(s.a)(a,2),o=i[0],c=i[1],m=Object(l.b)(),u=Object(n.useState)({}),d=Object(s.a)(u,2),p=d[0],f=d[1],b=Object(n.useState)(""),E=Object(s.a)(b,2),h=E[0],x=E[1];return Object(n.useEffect)((function(){null!==window.localStorage.getItem("jwt")?I.a.getMatchById(e.id).then((function(e){200===e.status&&f(e.data)})).catch((function(e){x(e.message)})):I.a.getMatchByIdUnauthenticated(e.id).then((function(e){200===e.status&&f(e.data)})).catch((function(e){x(e.message)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:t.root},r.a.createElement(v.a,{value:o,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",centered:!0},r.a.createElement(y.a,{disabled:!0,className:m.tBlack,label:"Estatisticas do confronto"}),r.a.createElement(y.a,{className:m.tGreen,label:"Previs\xe3o"}),r.a.createElement(y.a,{disabled:!0,className:m.tBlack,label:"Casas de apostas"}))),h,0==o&&r.a.createElement(j,null),1==o&&r.a.createElement(q,{data:p}),2==o&&r.a.createElement(O,null))},A=a(272),W=a(249),z=a(265),G=a(263),F=a(247),L=a(80),R=a.n(L),M=a(264),P=a(45),U=a(46),V=a(19),J=a.n(V),Y=new(function(){function e(){Object(P.a)(this,e)}return Object(U.a)(e,[{key:"login",value:function(e){return J.a.post("".concat("http://localhost:1337","/auth/local"),e)}},{key:"register",value:function(e){return J.a.post("".concat("http://localhost:1337","/auth/local/register"),e)}}]),e}()),H=a(20);function K(){var e=Object(l.b)();return r.a.createElement(N.a,{variant:"body2",className:e.tGreen,align:"center"},"Copyright \xa9 ",r.a.createElement(G.a,{color:"inherit",href:"https://material-ui.com/"},"Vidal's Website")," ",(new Date).getFullYear(),".")}var X=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function $(e){var t=X(),a=Object(l.b)(),i=Object(n.useState)(""),o=Object(s.a)(i,2),c=o[0],u=o[1],d=Object(n.useState)(""),g=Object(s.a)(d,2),f=g[0],b=g[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),v=h[0],y=h[1];return r.a.createElement(p,null,(function(e){var n=e.login;return r.a.createElement(M.a,{component:"main",maxWidth:"xs"},r.a.createElement(z.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(A.a,{className:"".concat(t.avatar," ").concat(a.green)},r.a.createElement(R.a,{className:"".concat(a.green," ").concat(a.tOrange)})),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return u(e.target.value)}}),r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return b(e.target.value)}}),r.a.createElement(W.a,{type:"submit",fullWidth:!0,variant:"contained",className:"".concat(t.submit," ").concat(a.green," ").concat(a.tOrange),onClick:function(e){!function(e,t){e.preventDefault();var a={identifier:c,password:f};Y.login(a).then((function(e){t(e.data.user.username,e.data.jwt,e.data.user.role.type)})).catch((function(e){void 0!==e.response?y(e.response.data.message[0].messages[0].message):y("Server currently down...")}))}(e,n)}},"Login"),r.a.createElement("h1",null,v),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,align:"center",justify:"center"},r.a.createElement(G.a,{className:a.tBlack,onClick:function(){return Object(m.c)("/auth/registo")},variant:"body2"},r.a.createElement(N.a,{align:"center"},"N\xe3o tens conta? Regista-te aqui")))))),r.a.createElement(F.a,{mt:8},r.a.createElement(K,null)))}))}var _=a(127),Q=a.n(_),Z=a(128),ee=a.n(Z),te=a(129),ae=a.n(te),ne=Object(h.a)((function(e){return{triple:Object(x.a)({textAlign:"center",padding:"1rem"},e.breakpoints.up("md"),{padding:"6rem",paddingRight:"10rem",paddingLeft:"10rem"}),padding1:{padding:"1rem"}}})),re=function(){var e=ne(),t=Object(l.b)();return r.a.createElement("section",null,r.a.createElement(N.a,{align:"center",style:{padding:"2rem",fontWeight:"bold"},variant:"h3"},"Special hub"),r.a.createElement(w.a,{className:e.triple,container:!0,spacing:3,direction:"row"},r.a.createElement(w.a,{item:!0,xs:12,sm:4},r.a.createElement(g.a,{className:t.green,elevation:3},r.a.createElement(Q.a,{className:"".concat(t.tGrey," ").concat(e.padding1),fontSize:"large"}),r.a.createElement(N.a,{className:"".concat(t.tOrange," ").concat(e.padding1),align:"center",variant:"h4"},"Desportos reis"),r.a.createElement(N.a,{align:"justify",className:t.tGrey,style:{padding:"3rem",paddingTop:"1rem"},variant:"subtitle1"},"Vidal segue e aposta nas tr\xeas modalidades mais conhecidas, futebol, basketball e tenis."))),r.a.createElement(w.a,{item:!0,xs:12,sm:4},r.a.createElement(g.a,{className:t.green,elevation:3},r.a.createElement(ee.a,{className:"".concat(t.tGrey," ").concat(e.padding1),fontSize:"large"}),r.a.createElement(N.a,{className:"".concat(t.tOrange," ").concat(e.padding1),variant:"h4"},"Apostas"),r.a.createElement(N.a,{className:t.tGrey,style:{padding:"3rem",paddingTop:"1rem"},align:"justify",variant:"subtitle1"},"Com este site tens a possibilidade de observar as apostas freemium e premium se te pretenderes juntar ao grupo."))),r.a.createElement(w.a,{item:!0,xs:12,sm:4},r.a.createElement(g.a,{className:t.green,elevation:3},r.a.createElement(ae.a,{className:"".concat(t.tGrey," ").concat(e.padding1),fontSize:"large"}),r.a.createElement(N.a,{className:"".concat(t.tOrange," ").concat(e.padding1),variant:"h4"},"Apoio individual"),r.a.createElement(N.a,{className:t.tGrey,style:{padding:"3rem",paddingTop:"1rem"},align:"justify",variant:"subtitle1"},"Ao pertenceres ao grupo tens a possibilidade de contatar 3x por semana para conseguires aprender e perceber melhor o risco.")))))},ie=a(266),oe=a(134),ce=a.n(oe),le=a(133),se=a.n(le),me=a(132),ue=a.n(me),de=a(130),pe=a.n(de),ge=a(131),fe=a.n(ge),be=function(){var e=Object(l.b)();return r.a.createElement("footer",{className:e.grey,style:{paddingTop:"7rem",paddingBottom:"2rem",textAlign:"center",borderTop:"5px solid #013328!important"}},r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:12,sm:!0},r.a.createElement(N.a,{gutterBottom:!0,variant:"h6",className:e.tGreen},"Sobre n\xf3s"),r.a.createElement("ul",{style:{listStyleType:"none",padding:"0.5rem"}},r.a.createElement("li",null,r.a.createElement(ie.a,null),r.a.createElement(N.a,{gutterBottom:!0,variant:"subtitle1"},"Tens alguma quest\xe3o?"),r.a.createElement(N.a,{gutterBottom:!0,variant:"body2"},r.a.createElement(pe.a,{style:{marginRight:"1rem"},fontSize:"small"})," bobapostas@gmail.com")),r.a.createElement(ie.a,null),r.a.createElement("li",null,r.a.createElement(N.a,{gutterBottom:!0,variant:"body1"},"Horas de apostas"),r.a.createElement(N.a,{gutterBottom:!0,variant:"body2"},r.a.createElement(fe.a,{style:{marginRight:"1rem"},fontSize:"small"})," 15-17h")))),r.a.createElement(w.a,{item:!0,xs:12,sm:!0},r.a.createElement(N.a,{variant:"h6",className:e.tGreen},"Codigo de etica"),r.a.createElement(N.a,{variant:"body1"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta accusantium tempore dolore id soluta accusamus, harum modi rem fuga, fugit itaque, culpa a animi ipsa natus perferendis laboriosam consequuntur!Tempore, provident porro magni harum deserunt dolorum doloremque a! Nulla mollitia error ea dolorem nihil dolore atque deleniti, tempore praesentium a ipsa culpa, consectetur ducimus nam temporibus quod et perspiciatis!")),r.a.createElement(w.a,{item:!0,xs:12,sm:!0},r.a.createElement(N.a,{variant:"h6",className:e.tGreen},"Conecta-te connosco"),r.a.createElement("p",null),r.a.createElement(ue.a,{className:e.tBlack,style:{marginRight:"1rem",fontSize:"2rem"},size:"large"}),r.a.createElement(se.a,{className:e.tBlack,onClick:function(){return Object(m.c)("https://www.facebook.com/keipertipster-106156397668326/")},style:{marginRight:"1rem",fontSize:"2rem"},size:"large"}),r.a.createElement(ce.a,{className:e.tBlack,onClick:function(){return Object(m.c)("https://www.instagram.com/keipertipster/")},style:{marginRight:"1rem",fontSize:"2rem"},size:"large"}))))},Ee=Object(h.a)((function(e){return{text:Object(x.a)({padding:"3rem",textJustify:"inter-word",textAlign:"justify"},e.breakpoints.up("md"),{paddingRight:"10rem",paddingLeft:"10rem"})}})),he=function(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{style:{paddingBottom:"2rem",paddingTop:"2rem",textAlign:"center"}},r.a.createElement("h2",null,"Mete-se aqui um textozito "),r.a.createElement("p",{className:e.text},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam adipisci assumenda quasi, laborum odio earum laudantium itaque. Earum eum, similique sequi nemo corporis dignissimos? Repellat explicabo nam repellendus odit beatae! Nesciunt error nihil impedit quo ex porro provident temporibus possimus eaque exercitationem magnam fuga commodi, tempora labore, ad nisi facilis consequatur unde iusto adipisci! Delectus a quas quis doloribus! Eaque. Illum, odio ducimus adipisci cum odit similique asperiores. Laudantium maxime libero harum aperiam. Unde, ab cumque. Enim harum maiores ab quae rem corporis aspernatur, provident corrupti molestiae quasi sint dolor? Labore at ex, earum iusto consequuntur provident dolorum quos sapiente ea numquam animi iste qui perferendis hic quasi? Eaque voluptatem saepe maxime dolore possimus vero, voluptas ea iure nulla harum? Atque magnam, amet earum repellat architecto nihil odit ipsum iure voluptate doloribus, minus veritatis reprehenderit sit fuga modi distinctio non. Laborum optio architecto perferendis odit consectetur quisquam ea itaque totam.")),r.a.createElement(re,null),r.a.createElement(be,null))},ve=Object(h.a)((function(e){return{contSection:Object(x.a)({textAlign:"center"},e.breakpoints.up("md"),{padding:"5rem",paddingRight:"10rem",paddingLeft:"10rem"}),formContainer:Object(x.a)({textAlign:"center"},e.breakpoints.up("md"),{}),formItem:Object(x.a)({textAlign:"center",padding:"0.3rem"},e.breakpoints.up("md"),{paddingTop:"0.5rem"}),formButton:Object(x.a)({textAlign:"center",paddingTop:"2rem",paddingBottom:"2rem"},e.breakpoints.up("md"),{})}})),ye=function(){var e=ve(),t=Object(l.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:e.contSection},r.a.createElement(g.a,{className:e.formContainer,elevation:3},r.a.createElement(N.a,{variant:"h4"},"Utilize este formulario para me contatar"),r.a.createElement("form",null,r.a.createElement(w.a,{style:{paddingTop:"5rem"},container:!0,direction:"column",justify:"space-around"},r.a.createElement(w.a,{container:!0,direction:"row"},r.a.createElement(w.a,{className:e.formItem,item:!0,xs:12,sm:6},r.a.createElement(H.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Primeiro nome",variant:"outlined"})),r.a.createElement(w.a,{className:e.formItem,item:!0,xs:12,sm:6},r.a.createElement(H.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Ultimo nome",variant:"outlined"}))),r.a.createElement(w.a,{className:e.formItem,item:!0,xs:12},r.a.createElement(H.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Email",variant:"outlined"})),r.a.createElement(w.a,{className:e.formItem,item:!0,xs:12},r.a.createElement(H.a,{fullWidth:!0,id:"outlined-number",label:"Number",required:!0,type:"number",InputLabelProps:{shrink:!0},variant:"outlined"})),r.a.createElement(w.a,{className:e.formItem,item:!0,xs:12},r.a.createElement(H.a,{fullWidth:!0,required:!0,id:"outlined-multiline-static",label:"Mensagem",multiline:!0,rows:4,variant:"outlined"})),r.a.createElement(w.a,{className:e.formButton,item:!0,xs:12},r.a.createElement(W.a,{className:"".concat(t.tOrange," ").concat(t.green),style:{color:"#CC8B65",background:"#013328"},variant:"outlined",size:"large"},"Submit")))))),r.a.createElement(be,null))},je=a(267),Oe=a(268),xe=a(135),we=a.n(xe),Ne=Object(h.a)((function(e){return{root:Object(x.a)({flexGrow:1,marginBottom:"1rem"},e.breakpoints.up("md"),{marginBottom:"1rem",marginLeft:"10rem",marginRight:"10rem"}),paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},paper1:{display:"flex",flexDirection:"column",margin:"auto",padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},title:Object(x.a)({fontFamily:"Aclonica",margin:"1rem"},e.breakpoints.up("md"),{margin:"3rem",marginBottom:"4rem"}),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},displayTournament:{flex:2,display:"flex",flexDirection:"column"},midContent:Object(x.a)({},e.breakpoints.up("xs"),{marginBottom:"11rem"}),displayCompetitors:{display:"flex",flex:2,flexDirection:"column"},cardFather:{display:"flex",flexDirection:"row"},nameDisplay:{flex:1,display:"flex"}}}));var Ce=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=(t[0],t[1]),i=Object(n.useState)([]),o=Object(s.a)(i,2),c=o[0],u=o[1],d=new Date,p=Object(l.b)();"".concat(d.getFullYear(),"-").concat("0".concat(d.getMonth()+1).slice(-2),"-").concat("0".concat(d.getDate()).slice(-2)),Object(n.useEffect)((function(){null!==window.localStorage.getItem("jwt")?I.a.getMatches().then((function(e){a(e.data),u(e.data)})).catch((function(e){void 0!==e.response&&401===e.response.status&&Object(m.c)("/login")})):I.a.getMatchesUnauthenticated().then((function(e){a(e.data),u(e.data)})).catch((function(e){void 0!==e.response&&401===e.response.status&&Object(m.c)("/login")}))}),[]);var f=Ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{container:!0,spacing:1,className:f.midContent},r.a.createElement(w.a,{item:!0,xs:12}),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(g.a,{className:f.paper1},r.a.createElement(N.a,{variant:"h4",className:f.title},"Jogos analisados"),void 0!==c&&null!==c&&c.map((function(e){return r.a.createElement(je.a,{className:"".concat(f.root," ").concat(p.green)},r.a.createElement(Oe.a,{className:f.cardFather},r.a.createElement(w.a,{container:!0,alignContent:"center",alignItems:"center"},r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(N.a,{gutterBottom:!0,variant:"overline",style:{fontWeight:"bold"},className:p.tOrange},"Tipo de aposta"),r.a.createElement(N.a,{className:p.tGrey},e.type)),r.a.createElement(w.a,{item:!0,xs:4},r.a.createElement(N.a,{gutterBottom:!0,variant:"overline",style:{fontWeight:"bold"},className:p.tOrange},"Dia"),r.a.createElement(N.a,{className:p.tGrey},new Date(e.createdAt).getDate())),r.a.createElement(w.a,{item:!0,xs:2},r.a.createElement(m.a,{to:"/previsao/".concat(e.id)},r.a.createElement(we.a,{className:p.tOrange,fontSize:"large"}))))))}))))),r.a.createElement(be,null))},Se=a(166),ke=a(171),Be=a(250);function qe(){return r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(G.a,{color:"inherit",href:"https://material-ui.com/"},"Vidal's Website")," ",(new Date).getFullYear(),".")}var Ie=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function De(){var e=Ie(),t=Object(l.b)(),a=Object(n.useState)(""),i=Object(s.a)(a,2),o=i[0],c=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],g=d[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),E=b[0],h=b[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),j=y[0],O=y[1],x=Object(n.useState)(""),C=Object(s.a)(x,2),S=C[0],k=C[1],B=Object(n.useState)(""),q=Object(s.a)(B,2),I=q[0],D=q[1],T=Object(n.useState)(""),L=Object(s.a)(T,2),P=L[0],U=L[1];return r.a.createElement(M.a,{component:"main",maxWidth:"xs"},r.a.createElement(z.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(A.a,{className:"".concat(e.avatar," ").concat(t.green)},r.a.createElement(R.a,{className:"".concat(t.green," ").concat(t.tOrange)})),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"Primeiro nome",name:"firstName",autoComplete:"fName",autoFocus:!0,onChange:function(e){return c(e.target.value)}})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"Ultimo nome",name:"lastName",autoComplete:"lName",autoFocus:!0,onChange:function(e){return g(e.target.value)}})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Enderen\xe7o email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return O(e.target.value)}})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Nome usuario",name:"username",autoFocus:!0,onChange:function(e){return h(e.target.value)}})),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(H.a,{variant:"outlined",type:"password",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"current-password",autoFocus:!0,onChange:function(e){return k(e.target.value)}})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(Se.a,{id:"demo-simple-select-label"},"Como ouviste falar do website?"),r.a.createElement(ke.a,{fullWidth:!0,labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:function(e){return D(e.target.value)}},r.a.createElement(Be.a,{value:"Amigo"},"Amigo"),r.a.createElement(Be.a,{value:"Instagram"},"Instagram"),r.a.createElement(Be.a,{value:"Facebook"},"Facebook"),r.a.createElement(Be.a,{value:"Twitter"},"Twitter")))),r.a.createElement(W.a,{type:"submit",fullWidth:!0,variant:"contained",className:"".concat(e.submit," ").concat(t.green," ").concat(t.tOrange),onClick:function(e){return function(e,t){e.preventDefault();var a={firstName:o,lastName:p,username:E,email:j,password:S};Y.register(a).then((function(e){t(e.data.user.username,e.data.jwt,e.data.user.role.type)})).catch((function(t){void 0!==e.response?U(e.response.data.message[0].messages[0].message):U("Server currently down...")}))}(e)}},"Sign Up"),r.a.createElement("h1",null,P),r.a.createElement(w.a,{container:!0,justify:"flex-end"},r.a.createElement(w.a,{item:!0},r.a.createElement(G.a,{className:t.tBlack,variant:"body2",onClick:function(){return Object(m.c)("/auth/login")}},"Already have an account? Sign in"))))),r.a.createElement(F.a,{mt:5},r.a.createElement(qe,null)))}var Te=function(){return r.a.createElement(m.b,null,r.a.createElement(he,{path:"/"}),r.a.createElement(Ce,{path:"/apostas"}),r.a.createElement(ye,{path:"/contacto"}),r.a.createElement(E,{path:"estatisticas"}),r.a.createElement(T,{path:"previsao/:id"}),r.a.createElement($,{path:"auth/login"}),r.a.createElement(De,{path:"auth/registo"}))},Ae=a(81),We=a.n(Ae),ze=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Loading..."))},Ge=function(e){return r.a.createElement(p,null,(function(t){return t.auth?r.a.createElement("div",{className:"container"},e.children):r.a.createElement($,{anyProp:"Is not Authenticated..."})}))},Fe=We()({loader:function(){return Promise.all([a.e(0),a.e(5),a.e(8)]).then(a.bind(null,562))},loading:ze}),Le=We()({loader:function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,565))},loading:ze}),Re=We()({loader:function(){return Promise.all([a.e(0),a.e(3),a.e(7)]).then(a.bind(null,564))},loading:ze}),Me=function(){return r.a.createElement(m.b,null,r.a.createElement(Ge,{path:"spider"},r.a.createElement(Fe,{path:"/dashboard"}),r.a.createElement(Re,{path:"/dashboard/custom"}),r.a.createElement(Le,{path:"/dashboard/:id"})))},Pe=a(269),Ue=a(251),Ve=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"#E3DCD2"}}}));function Je(){var e=Ve(),t=Object(l.b)(),a=r.a.useState(null),n=Object(s.a)(a,2),i=n[0];n[1],Boolean(i);return r.a.createElement("div",{className:e.root},r.a.createElement(Pe.a,{position:"static"},r.a.createElement(Ue.a,{className:t.green,style:{height:"13vh"}},r.a.createElement(w.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",spacing:1},r.a.createElement(w.a,{container:!0,direction:"row",item:!0,xs:12,sm:8},r.a.createElement("div",null,r.a.createElement(N.a,{gutterBottom:!0,variant:"h4",className:e.title},r.a.createElement(G.a,{to:"/",style:{textDecoration:"none",cursor:"pointer"},onClick:function(){return Object(m.c)("/")},className:t.tOrange},"KeiperTipster")))),r.a.createElement(w.a,{item:!0,container:!0,direction:"row",alignItems:"flex-end",justify:"flex-end",xs:12,sm:4},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(G.a,{style:{textDecoration:"none",cursor:"pointer"},onClick:function(){return Object(m.c)("/apostas")},className:t.tOrange},r.a.createElement(N.a,{gutterBottom:!0,variant:"h6"},"Apostas"))),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(G.a,{style:{textDecoration:"none",cursor:"pointer"},onClick:function(){return Object(m.c)("/contacto")},className:t.tOrange},r.a.createElement(N.a,{gutterBottom:!0,variant:"h6"},"Contacto"))),r.a.createElement(w.a,{item:!0,xs:!0,align:"center",justify:"center"},r.a.createElement(p,null,(function(e){var a=e.auth,n=e.logout;e.role;return a?r.a.createElement(G.a,{style:{textDecoration:"none",cursor:"pointer"},onClick:n,className:t.tOrange},r.a.createElement(N.a,{gutterBottom:!0,variant:"h6"},"Logout")):r.a.createElement(G.a,{style:{textDecoration:"none",cursor:"pointer"},onClick:function(){return Object(m.c)("/auth/login")},className:t.tOrange},r.a.createElement(N.a,{gutterBottom:!0,variant:"h6"},"Login"))}))))))))}function Ye(){return r.a.createElement(d,null,r.a.createElement(Je,null),r.a.createElement(Te,null),r.a.createElement(Me,null))}var He=a(103),Ke=a(123),Xe=a.n(Ke),$e=a(70),_e=Object(He.a)({palette:{primary:$e.a,secondary:Xe.a},status:{danger:"orange"}});var Qe=function(){var e=Object(l.c)();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{theme:_e},r.a.createElement("main",{className:e.content},r.a.createElement(Ye,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){"use strict";var n=a(45),r=a(46),i=a(19),o=a.n(i),c="http://localhost:1337",l=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getMatches",value:function(){return console.log(c),o.a.get("".concat(c,"/free-bets"),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"getMatchesUnauthenticated",value:function(){return console.log(c),o.a.get("".concat(c,"/free-bets"),{headers:{"Content-Type":"application/json"}})}},{key:"createMatch",value:function(e){return o.a.post("".concat(c,"/free-bets"),e,{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"getMatchById",value:function(e){return o.a.get("".concat(c,"/free-bets/").concat(e),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"getMatchByIdUnauthenticated",value:function(e){return o.a.get("".concat(c,"/free-bets/").concat(e),{headers:{"Content-Type":"application/json"}})}},{key:"deleteMatchById",value:function(e){return o.a.delete("".concat(c,"/free-bets/").concat(e),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}}]),e}();t.a=new l},90:function(e,t,a){"use strict";var n=a(45),r=a(46),i=a(19),o=a.n(i),c="http://localhost:1337",l=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"createStat",value:function(e){return o.a.post("".concat(c,"/betting-statistics"),e,{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"getStats",value:function(){return o.a.get("".concat(c,"/stats"),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"countStats",value:function(){return o.a.get("".concat(c,"/stats/count"),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}},{key:"countGreen",value:function(){return o.a.get("".concat(c,"/stats/count").concat("?green_eq=true"),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}}]),e}();t.a=new l}},[[176,2,4]]]);
//# sourceMappingURL=main.e00add4e.chunk.js.map