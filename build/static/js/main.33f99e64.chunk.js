(this.webpackJsonpfilmaria=this.webpackJsonpfilmaria||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(11),r=c.n(i),a=(c(33),c(6)),o=c(2),j=c(9),l=c.n(j),u=c(12),b=c(7),d=(c(35),c(26)),O=c.n(d).a.create({baseURL:"https://sujeitoprogramador.com/"}),f=c(1);var h=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("r-api/?api=filmes");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"lista-filmes",children:c.map((function(e){return Object(f.jsxs)("article",{children:[Object(f.jsxs)("strong",{children:[" ",e.nome," "]}),Object(f.jsx)("img",{src:e.foto,alt:e.nome}),Object(f.jsx)(a.b,{to:"/filme/".concat(e.id),children:"Acessar"})]},e.id)}))})})},m=(c(64),c(8));function x(){var e=Object(o.f)().id,t=Object(o.e)(),c=Object(n.useState)([]),s=Object(b.a)(c,2),i=s[0],r=s[1],a=Object(n.useState)(!0),j=Object(b.a)(a,2),d=j[0],h=j[1],x=Object(n.useState)(0),p=Object(b.a)(x,2),v=p[0],g=p[1],S=Object(n.useState)(),N=Object(b.a)(S,2),k=(N[0],N[1]);return Object(n.useEffect)((function(){function c(){return(c=Object(u.a)(l.a.mark((function c(){var n;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.get("r-api/?api=filmes/".concat(e));case 2:if(0!==(n=c.sent).data.length){c.next=6;break}return t.replace("/"),c.abrupt("return");case 6:r(n.data),h(!1);case 8:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){console.log("COMPONENTE DESMONTADO")}}),[t,e]),d?Object(f.jsx)("div",{className:"filme-info",children:Object(f.jsx)("h1",{children:"Carregando seu Filme..."})}):Object(f.jsxs)("div",{className:"filme-info",children:[Object(f.jsxs)("h1",{children:[" ",i.nome," "]}),Object(f.jsx)("img",{src:i.foto,alt:i.nome}),Object(f.jsx)("h3",{children:"Sinopse"}),Object(f.jsxs)("p",{children:[" ",i.sinopse," "]}),Object(f.jsxs)("div",{className:"botoes",children:[Object(f.jsx)("button",{children:Object(f.jsx)("a",{target:"_blank",href:"https://youtube.com/results?search_query=".concat(i.nome," Trailer"),children:"Trailer"})}),Object(f.jsxs)("div",{className:"btn-add",children:[Object(f.jsx)("h3",{children:"Selecione quantos deseja salvar"}),Object(f.jsx)("button",{onClick:function(){return g(v-1)},children:" - "}),Object(f.jsx)("input",{type:"text",id:"cont",name:"cont",value:v}),Object(f.jsx)("button",{onClick:function(){return g(v+1)},children:" + "}),Object(f.jsx)("button",{onClick:function(){var e=localStorage.getItem("filmes"),t=JSON.parse(e)||[];t.some((function(e){return e.id===i.id}))?m.b.error("Voc\xea j\xe1 possui esse filme salvo."):(t.push(i),localStorage.setItem("filmes",JSON.stringify(t)),m.b.success("Filme salvo com sucesso!"))},children:"Salvar"})]}),Object(f.jsx)("form",{children:Object(f.jsx)("input",{type:"button",value:"IMPRIMIR",onClick:function(){return k(window.print)}})})]})]})}c(65);function p(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("filmes");s(JSON.parse(e)||[])}),[]),Object(f.jsxs)("div",{className:"meus-filmes",children:[Object(f.jsx)("h1",{children:"Meus Filmes"}),0===c.length&&Object(f.jsx)("span",{children:"Voc\xea n\xe3o possui nenhum filme salvo :( "}),Object(f.jsx)("ul",{children:c.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:e.nome}),Object(f.jsxs)("div",{children:[Object(f.jsx)(a.b,{to:"/filme/".concat(e.id),children:"Ver detalhes"}),Object(f.jsx)("button",{onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));s(t),localStorage.setItem("filmes",JSON.stringify(t)),m.b.success("Filme excluido com sucesso")}(e.id)},children:"Excluir"})]})]},e.id)}))})]})}c(66);function v(){return Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("h1",{children:"404"}),Object(f.jsx)("h2",{children:"Pagina n\xe3o encontrada!"}),Object(f.jsx)(a.b,{to:"/",children:"Veja todos os filmes"})]})}c(67);function g(){return Object(f.jsxs)("header",{children:[Object(f.jsx)(a.b,{className:"logo",to:"/",children:"Filmaria"}),Object(f.jsx)(a.b,{className:"favoritos",to:"/favoritos",children:"Salvos"})]})}var S=function(){return Object(f.jsxs)(a.a,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)("switch",{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(f.jsx)(o.a,{exact:!0,path:"/filme/:id",component:x}),Object(f.jsx)(o.a,{exact:!0,path:"/favoritos",component:p}),Object(f.jsx)(o.a,{path:"*",component:v})]})]})};c(68);var N=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(S,{}),Object(f.jsx)(m.a,{autoClose:3e3})]})};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.33f99e64.chunk.js.map