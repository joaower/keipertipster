(this["webpackJsonpkeipertipster-website-channel-frontend-react"]=this["webpackJsonpkeipertipster-website-channel-frontend-react"]||[]).push([[8],{306:function(e,a,t){"use strict";var n=t(45),l=t(46),r=function(){function e(){Object(n.a)(this,e)}return Object(l.a)(e,[{key:"getSportValue",value:function(e){switch(e){case"1":return"Tenis";case"2":return"Basketball";case"3":return"Soccer";default:return"default"}}},{key:"getTypeValue",value:function(e){switch(e){case"1":return"Simples";case"2":return"Combinada";default:return"default"}}},{key:"getRiskValue",value:function(e){switch(e){case"1":return"Valor";case"2":return"Garantida";default:return"default"}}}]),e}();a.a=new r},562:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(0),r=t.n(l),c=t(87),o=t(258),i=t(13),s=t(45),u=t(46),m=t(19),d=t.n(m),p=(new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"getToday",value:function(){return d.a.get("".concat("http://localhost:8000","/soccer/today"),{headers:{"Content-Type":"application/json",Authorization:" Bearer ".concat(window.localStorage.getItem("jwt"))}})}}]),e}()),t(47)),f=new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"getToday",value:function(){return d.a.get("".concat("http://localhost:8000","/basketball/today"),{headers:{"Content-Type":"application/json"}})}}]),e}()),h=t(91),E=t(163);t(166),t(250),t(167),t(165),t(171),Object(c.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},flex:{display:"flex",flex:1}}}));var b=function(e){var a=e.classes;e.sportValue,e.handleSportChange,e.valueSport,e.dayValue,e.handleDayChange,e.valueDay;return r.a.createElement(o.a,{container:!0,direction:"row"},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(h.a,{className:a.paper1},r.a.createElement(E.a,{variant:"h5"},"Todos os jogos representados aqui j\xe1 foram analis"),r.a.createElement(E.a,{variant:"subtitle1"},"Pelo senhor Vidal o rei das apostas tugaas"))))},g=t(348),y=t(267),v=t(268),j=t(249),x=t(14),w=(r.a.memo((function(e){var a=e.match,t=e.sportValue,n=Object(x.a)();return console.log(a),r.a.createElement(y.a,{className:n.root},r.a.createElement(v.a,{className:n.cardFather},r.a.createElement("div",{className:n.displayTournament},r.a.createElement("p",null,"3"===t&&a.competition.name,"2"===t&&a.league.name),r.a.createElement("p",null,"3"===t&&a.competition.area.code,"2"===t&&a.league.type)),r.a.createElement("div",{className:n.displayCompetitors},r.a.createElement("p",null,"3"===t&&a.homeTeam&&a.homeTeam.name,"2"===t&&a.teams.home.name)),r.a.createElement("div",{className:n.displayCompetitors},r.a.createElement("p",null,"3"===t&&a.awayTeam&&a.awayTeam.name,"2"===t&&a.teams.away.name)),r.a.createElement("div",{className:n.buttons},"3"===t&&r.a.createElement(i.a,{to:"/spider/dashboard/".concat(a.id),state:{competition:a.competition,homeTeam:a.homeTeam,awayTeam:a.awayTeam,sportValue:t}},r.a.createElement(j.a,null,"Edit")),"2"===t&&r.a.createElement(i.a,{to:"/spider/dashboard/".concat(a.id),state:{competition:a.league,homeTeam:a.teams.home,awayTeam:a.teams.away,sportValue:t}},r.a.createElement(j.a,null,"Edit")))))}),(function(e,a){return e.match.id===a.match.id||e.sportValue!==a.sportValue})),t(306),function(e){var a=e.sportValue,t=Object(x.a)(),n=Object(x.b)();return r.a.createElement(y.a,{className:"".concat(t.root," ").concat(n.green),style:{padding:"1rem",marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement(v.a,{className:t.cardFather},r.a.createElement("div",{className:t.displayTournament},r.a.createElement(E.a,{variant:"overline",className:n.tGrey},"Nova aposta")),r.a.createElement("div",{className:t.displayCompetitors},r.a.createElement("p",null)),r.a.createElement("div",{className:t.displayCompetitors}),r.a.createElement("div",{className:t.buttons},r.a.createElement(i.a,{to:"/spider/dashboard/custom",state:{sportValue:a}},r.a.createElement(E.a,{className:n.tOrange},"Create")))))}),O=t(445),C=t.n(O),N=t(271),T=t(31),D=t(247),V=t(260),S=function(e){var a=e.classes,t=(e.data,e.sportValue,r.a.useState(0)),l=Object(n.a)(t,2),c=l[0],i=l[1],s=Object(x.b)(),u=Object(T.a)();function m(e){var a=e.children,t=e.value,n=e.index,l=Object(g.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),t===n&&r.a.createElement(D.a,{p:3},r.a.createElement(E.a,null,a)))}function d(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}return r.a.createElement(o.a,{item:!0,xs:12,md:6},r.a.createElement(w,null),r.a.createElement(h.a,{className:a.paper1},r.a.createElement(E.a,{variant:"h5",style:{marginBottom:"1rem"},className:a.title},"Jogos por avaliar apresentados aqui"),r.a.createElement(N.a,{value:c,onChange:function(e,a){i(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",TabIndicatorProps:{style:{background:"red"}}},r.a.createElement(V.a,Object.assign({className:s.tGreen,label:"Basquetebol"},d(0))),r.a.createElement(V.a,Object.assign({label:"Tenis"},d(1))),r.a.createElement(V.a,Object.assign({label:"Futebol"},d(2))),r.a.createElement(V.a,Object.assign({label:"Basebol"},d(3))),r.a.createElement(V.a,Object.assign({label:"Hoquei"},d(4)))),r.a.createElement(C.a,{axis:"rtl"===u.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){i(e)}},r.a.createElement(m,{value:c,index:0},"Para estriar p\xf3 meu puto Vidal."),r.a.createElement(m,{value:c,index:1},"Para estriar p\xf3 meu puto Vidal."),r.a.createElement(m,{value:c,index:2},"Para estriar p\xf3 meu puto Vidal."),r.a.createElement(m,{value:c,index:3},"Para estriar p\xf3 meu puto Vidal."),r.a.createElement(m,{value:c,index:4},"Para estriar p\xf3 meu puto Vidal."))))},k=t(533),B=t(404),I=t(266),A=t(464),F=t.n(A),P=t(465),q=t.n(P),G=t(463),H=t.n(G),J=t(563),M=t(90),L=Object(c.a)((function(e){return{root:{display:"flex"},rootTest:{display:"flex",width:"100%",backgroundColor:"red"},details:{display:"flex",flexDirection:"column",width:"100%"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},left:{marginLeft:"auto"}}})),R=function(e){var a=e.handleClose,t=e.open,n=e.handleDelete,l=e.removeAlreadyDataFromState,c=e.data,i=c.id,s=c.type,u=c.match,m=c.createdAt,d=L(),f=(Object(T.a)(),u.reduce((function(e,a){return e*a.odd}),1));function h(e){return r.a.createElement(J.a,Object.assign({elevation:6,variant:"filled"},e))}function b(e,a){e.preventDefault();var t={green:a,odd:f};M.a.createStat(t).then((function(e){200===e.status&&p.a.deleteMatchById(i).then((function(e){200===e.status&&l(i)}))}))}return r.a.createElement(y.a,{className:d.root},r.a.createElement(k.a,{open:t,autoHideDuration:6e3,onClose:a},r.a.createElement(h,{onClose:a,severity:"danger"},"Successfully deleted :/")),r.a.createElement("div",{className:d.details},r.a.createElement(v.a,{className:d.content},r.a.createElement(E.a,{component:"h5",variant:"h5"},"Tipo - ",s),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},"Dia - ",new Date(m).getDate()," - ",new Date(m).getHours(),"h"),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},"Qt - ",u.length,u.map((function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,e.match))})),"Odd - ",f)),r.a.createElement(o.a,{container:!0,alignContent:"space-between"},r.a.createElement(B.a,{onClick:function(e){return b(e,!0)},"aria-label":"previous"},r.a.createElement(H.a,{className:d.playIcon}),r.a.createElement(E.a,null,"Green confirmation")),r.a.createElement(B.a,{onClick:function(e){return b(e,!1)},"aria-label":"play/pause"},r.a.createElement(F.a,{className:d.playIcon}),r.a.createElement(E.a,null,"Red confirmation")),r.a.createElement(B.a,{onClick:function(e){return function(e){e.preventDefault(),n(i)}(e)},className:d.left,"aria-label":"next"},r.a.createElement(q.a,{className:d.playIcon}),r.a.createElement(E.a,null,"Delete"))),r.a.createElement(I.a,null)))},W=function(e){var a=e.classes,t=e.alreadyData,n=e.handleClose,l=e.handleDelete,c=e.open,i=e.removeAlreadyDataFromState;return r.a.createElement(o.a,{item:!0,xs:12,md:6},r.a.createElement(h.a,{className:a.paper},r.a.createElement(E.a,{variant:"h5",className:a.title},"Predictions")),t&&t.map((function(e){return r.a.createElement(R,{data:e,open:c,handleClose:n,handleDelete:l,removeAlreadyDataFromState:i})})))},z=Object(c.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.primary},paper1:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.primary,display:"flex",flexDirection:"column",margin:"auto"},title:{fontFamily:"Aclonica"}}})),Q=[{id:"1",desc:"Tenis"},{id:"2",desc:"Basquetebol"},{id:"3",desc:"Futebol"}],K=[{id:"1",desc:"Hoje"},{id:"2",desc:"Proxima semana"}];a.default=function(){var e=Object(l.useState)([]),a=Object(n.a)(e,2),t=a[0],c=a[1],i=Object(l.useState)([]),s=Object(n.a)(i,2),u=s[0],m=s[1],d=r.a.useState("3"),h=Object(n.a)(d,2),E=h[0],g=h[1],y=r.a.useState(1),v=Object(n.a)(y,2),j=v[0],x=v[1],w=z();Object(l.useEffect)((function(){p.a.getMatches().then((function(e){m(e.data)})).catch((function(e){}))}),[]);var O=Object(l.useState)(!1),C=Object(n.a)(O,2),N=C[0],T=C[1];function D(e){m(u.filter((function(a){return a.id!==e})))}return r.a.createElement(o.a,{container:!0,spacing:1},r.a.createElement(b,{classes:w,sportValue:E,handleSportChange:function(e){switch(g(e.target.value),e.target.value){case"1":break;case"2":f.getToday().then((function(e){console.log(e.data.response),c(e.data.response)})).catch((function(e){}));break;case"3":break;default:console.log("Choose a sport")}},valueSport:Q,dayValue:j,handleDayChange:function(e){x(e.target.value)},valueDay:K}),r.a.createElement(S,{classes:w,data:t,sportValue:E}),r.a.createElement(W,{classes:w,alreadyData:u,handleClose:function(e,a){"clickaway"!==a&&T(!1)},handleDelete:function(e){p.a.deleteMatchById(e).then((function(a){200===a.status&&(T(!0),D(e))}))},open:N,removeAlreadyDataFromState:D}))}}}]);
//# sourceMappingURL=8.0dba3930.chunk.js.map