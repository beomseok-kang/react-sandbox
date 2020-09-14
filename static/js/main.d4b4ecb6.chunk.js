(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],{360:function(e,n,t){},361:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(38),o=t.n(c),l=t(13),i=(t(61),t(62),t(1)),u=t(2),s=t(7),m=t(39),f=t.n(m),d=t(365),E=t(364),p=t(8);function v(){var e=Object(s.a)(["\n  padding: 1rem;\n  background: #FFFFFF;\n  border-radius: 0.5rem;\n  border: 2.5px solid #272643;\n"]);return v=function(){return e},e}function b(){var e=Object(s.a)(["\n  background: #E3F6F5;\n  margin: 1rem;\n  border-radius: 1rem;\n  padding: 2rem;\n  box-shadow: 0 10px 50px #2C698D;\n  h2 {\n    padding: 1rem 1rem 2rem;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #272643;\n  }\n  h3 {\n    padding: 3rem 1rem 1rem;\n    font-size: 1.25rem;\n    font-weight: bold;\n    color: #272643;\n  }\n  pre {\n      border-radius: 1rem;\n    code {\n      line-height: 1.2;\n      overflow-x: scroll; \n      background: none;\n      padding: 1rem;\n      border-radius: 0.25rem;\n      display: block;\n      color: #FFFFFF;\n      scrollbar-width: none; /* Firefox */\n      -ms-overflow-style: none;  /* IE 10+ */\n      &::-webkit-scrollbar {\n        width: 0px;\n        background: transparent; /* Chrome/Safari/Webkit */\n      }\n    }\n  }\n  code {\n    display: inline-block;\n    padding: 0.25rem;\n    border-radius: 0.25rem;\n    background: #BAE8E8;\n  }\n"]);return b=function(){return e},e}var h=p.a.div(b()),g=p.a.div(v());function x(e){return r.a.createElement(d.a,{language:"javascript",style:E.a},e.value)}var w=function(e){var n=e.md,t=e.ExampleComponent;return r.a.createElement(h,null,r.a.createElement(f.a,{source:n,renderers:{code:x}}),r.a.createElement("h3",null,"Sample Component"),r.a.createElement(g,null,r.a.createElement(t,null)))},y=function(e,n){var t=Object(a.useState)(e),r=Object(u.a)(t,2),c=r[0],o=r[1];return{value:c,onChange:function(e){var t=e.target.value,a=!0;"function"===typeof n&&(a=n(t)),a&&o(t)}}};function k(){var e=y("Mr. ",(function(e){return e.length<10}));return r.a.createElement("input",Object.assign({placeholder:"Name"},e))}var j=[{tab:"Section 1",content:"Hi, I'm the content of the section 1."},{tab:"Section 2",content:"Hi, I'm the content of the section 2."},{tab:"Section 3",content:"Hi, I'm the content of the section 3."}];function F(){var e=function(e,n){var t=Object(a.useState)(e),r=Object(u.a)(t,2),c=r[0],o=r[1];if(n&&Array.isArray(n))return{currentItem:n[c],changeItem:o}}(0,j),n=e.currentItem,t=e.changeItem;return r.a.createElement("div",null,j.map((function(e,n){return r.a.createElement("button",{key:e.tab,onClick:function(){return t(n)}},e.tab)})),r.a.createElement("p",null,n.content))}function O(){var e=function(e){var n=Object(a.useState)(e),t=Object(u.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){document.querySelector("title").innerText=r}),[r]),c}("Beom Seok React Sandbox"),n=y("");return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(n.value)}},r.a.createElement("input",n),r.a.createElement("button",{type:"submit"},"Change Title To Above!"))}function N(){var e=function(e){var n=Object(a.useRef)();if(Object(a.useEffect)((function(){return n.current&&n.current.addEventListener("click",e),function(){n.current&&n.current.removeEventListener("click",e)}}),[]),"function"===typeof e)return n}((function(){alert("clicked!")}));return r.a.createElement("h4",{ref:e},"Click Me")}function _(){var e=function(e,n,t){if(n&&"function"===typeof n){return function(){window.confirm(e)?n():t()}}}("Are you sure?",(function(){return console.log("Deleting the world...")}),(function(){return console.log("Delete cancelled.")}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Hi Thanos, do you want to delete the world?"),r.a.createElement("button",{onClick:e},"Delete the world."))}function C(){var e=function(){var e=function(e){e.preventDefault(),e.returnValue=""};return{enablePrevent:function(){window.addEventListener("beforeunload",e)},disablePrevent:function(){window.removeEventListener("beforeunload",e)}}}(),n=e.enablePrevent,t=e.disablePrevent;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:n},"Protect"),r.a.createElement("button",{onClick:t},"unprotect"))}function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement(C,null)))}function L(){return function(e){var n=function(n){n.clientY<=0&&e()};Object(a.useEffect)((function(){return document.addEventListener("mouseleave",n),function(){document.removeEventListener("mouseleave",n)}}),[])}((function(){return console.log("please don't leave!")})),r.a.createElement("div",null,"This is nothing but a sample text.")}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Object(a.useRef)();if(Object(a.useEffect)((function(){if(t.current){var a=t.current;a.style.transition="opacity ".concat(e,"s ease-in-out ").concat(n,"s"),a.style.opacity=1}}),[]),"number"===typeof e&&"number"===typeof n)return{ref:t,style:{opacity:0}}};function I(){var e=D(5,2),n=D(5,6);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",e,"Fades in."),r.a.createElement("p",n,"Lorem Imsum is a sample text."))}function T(){var e=function(e){var n=Object(a.useState)(navigator.onLine),t=Object(u.a)(n,2),r=t[0],c=t[1],o=function(){c(navigator.onLine),"function"===typeof e&&e(navigator.onLine)};return Object(a.useEffect)((function(){return window.addEventListener("online",o),window.addEventListener("offline",o),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}),[]),r}((function(e){e||alert("Hey, you are offline.")}));return r.a.createElement("div",null,e?"you are online.":"you are offline.")}function B(){var e=function(){var e=Object(a.useRef)();return{element:e,triggerFullscreen:function(){if(e.current){var n=e.current;n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen()}},exitFullscreen:function(){var e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitExitFullscreen?e.webkitExitFullscreen():e.msExitFullscreen&&e.msExitFullscreen()}}}(),n=e.element,t=e.triggerFullscreen,c=e.exitFullscreen;return r.a.createElement("div",null,r.a.createElement("div",{ref:n},r.a.createElement("img",{src:"https://media1.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif",alt:"cute kitty"}),r.a.createElement("button",{onClick:c},"Exit fullscreen")),r.a.createElement("button",{onClick:t},"Let's go fullscreen"))}var H=t(46),R=t.n(H),A=t(47),M=t.n(A),q=t(48),z=t.n(q),P=t(49),W=t.n(P),J=t(50),K=t.n(J),U=t(51),G=t.n(U),X=t(52),Q=t.n(X),V=t(53),Y=t.n(V),$=t(54),Z=t.n($);var ee=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),i=l[0],s=l[1],m=Object(a.useState)(""),f=Object(u.a)(m,2),d=f[0],E=f[1],p=Object(a.useState)(""),v=Object(u.a)(p,2),b=v[0],h=v[1],g=Object(a.useState)(""),x=Object(u.a)(g,2),y=x[0],j=x[1],_=Object(a.useState)(""),C=Object(u.a)(_,2),D=C[0],H=C[1],A=Object(a.useState)(""),q=Object(u.a)(A,2),P=q[0],J=q[1],U=Object(a.useState)(""),X=Object(u.a)(U,2),V=X[0],$=X[1],ee=Object(a.useState)(""),ne=Object(u.a)(ee,2),te=ne[0],ae=ne[1];return Object(a.useEffect)((function(){fetch(R.a).then((function(e){return e.text()})).then((function(e){c(e)})),fetch(M.a).then((function(e){return e.text()})).then((function(e){s(e)})),fetch(z.a).then((function(e){return e.text()})).then((function(e){E(e)})),fetch(W.a).then((function(e){return e.text()})).then((function(e){h(e)})),fetch(K.a).then((function(e){return e.text()})).then((function(e){j(e)})),fetch(G.a).then((function(e){return e.text()})).then((function(e){H(e)})),fetch(Q.a).then((function(e){return e.text()})).then((function(e){J(e)})),fetch(Y.a).then((function(e){return e.text()})).then((function(e){$(e)})),fetch(Z.a).then((function(e){return e.text()})).then((function(e){ae(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{md:t,ExampleComponent:k}),r.a.createElement(w,{md:i,ExampleComponent:F}),r.a.createElement(w,{md:d,ExampleComponent:O}),r.a.createElement(w,{md:b,ExampleComponent:N}),r.a.createElement(w,{md:y,ExampleComponent:S}),r.a.createElement(w,{md:D,ExampleComponent:L}),r.a.createElement(w,{md:P,ExampleComponent:I}),r.a.createElement(w,{md:V,ExampleComponent:T}),r.a.createElement(w,{md:te,ExampleComponent:B}))};function ne(){var e=Object(s.a)(["\n  color: #DDDDDD;\n  font-size: 1.25rem;\n  font-weight: 700;\n  text-align: center;\n  background: #272643;\n  padding: 2rem;\n"]);return ne=function(){return e},e}var te=p.a.footer(ne());var ae=function(){return r.a.createElement(te,null,"2020 Designed and deployed by Beom Seok Kang")},re=t(55);function ce(){var e=Object(s.a)(["\n  h1 {\n    color: #DDDDDD;\n    font-size: 3rem;\n    letter-spacing: -3px;\n    font-weight: 700;\n    text-align: center;\n    background: #272643;\n    padding: 2rem;\n  }\n  ul.nav-tabs {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    height: 3rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background: #2C698D;\n    li {\n      a {\n        padding: 1rem;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        justify-content: center;\n        text-decoration: none;\n        color: #EEEEEE;\n        font-weight: bold;\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    li + li {\n      margin-left: 2rem;\n    }\n  }\n"]);return ce=function(){return e},e}var oe=p.a.header(ce());var le=function(){return r.a.createElement(oe,null,r.a.createElement("h1",null,"Beom Seok's React Sandbox"),r.a.createElement("ul",{className:"nav-tabs"},re.map((function(e){return r.a.createElement("li",{key:e.tab},r.a.createElement(l.b,{to:e.path},e.tab))}))))};function ie(e,n){var t=n.getElementsByClassName("word"),a=[],r=0;t[r].style.opacity=1;for(var c=0;c<t.length;c++)u(t[c]);function o(){for(var e=a[r],n=r==t.length-1?a[0]:a[r+1],c=0;c<e.length;c++)l(e,c);for(c=0;c<n.length;c++)n[c].className="letter behind",n[0].parentElement.style.opacity=1,i(n,c);r=r==a.length-1?0:r+1}function l(e,n){setTimeout((function(){e[n].className="letter out"}),80*n)}function i(e,n){setTimeout((function(){e[n].className="letter in"}),340+80*n)}function u(e){var t=e.innerHTML;e.innerHTML="";for(var r=[],c=0;c<t.length;c++){var o=n.createElement("span");o.className="letter",o.innerHTML=t.charAt(c),e.appendChild(o),r.push(o)}a.push(r)}o();var s=setInterval(o,4e3);this.unmount=function(){clearInterval(s)}}t(360);function ue(){var e=Object(s.a)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n"]);return ue=function(){return e},e}var se=p.a.h2(ue());var me=function(e){var n=e.children;return r.a.createElement(se,null,n)};var fe=function(){return Object(a.useEffect)((function(){var e=new ie(window,document);return function(e,n,t){void 0===t&&(t=["#fff"]);var a=!0,r=document.getElementById("console"),c=1,o=1,l=!1,i=document.getElementById(n);i.setAttribute("style","color:"+t[0]),window.setInterval((function(){0===c&&!1===l?(l=!0,i.innerHTML=e[0].substring(0,c),window.setTimeout((function(){var n=t.shift();t.push(n);var a=e.shift();e.push(a),o=1,i.setAttribute("style","color:"+t[0]),c+=o,l=!1}),1e3)):c===e[0].length+1&&!1===l?(l=!0,window.setTimeout((function(){c+=o=-1,l=!1}),1e3)):!1===l&&(i.innerHTML=e[0].substring(0,c),c+=o)}),120),window.setInterval((function(){!0===a?(r.className="console-underscore hidden",a=!1):(r.className="console-underscore",a=!0)}),400)}(["Hello World.","Console Text","Made with Love."],"text",["tomato","rebeccapurple","lightblue"]),function(){e.unmount()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inner",id:"letters-in-and-out"},r.a.createElement(me,null,"lettersInAndOut"),r.a.createElement("div",{className:"center-wrapper"},r.a.createElement("span",{className:"word blue"},"McDonalds"),r.a.createElement("span",{className:"word red"},"KFC"),r.a.createElement("span",{className:"word green"},"GBK"),r.a.createElement("span",{className:"word yellow"},"Burger_King"),r.a.createElement("span",{className:"word tomato"},"Byron"),r.a.createElement("span",{className:"word cyan"},"Jolibee"),r.a.createElement("span",{className:"word violet"},"Imperial_Union_Bar"))),r.a.createElement("div",{className:"inner",id:"letters-up-and-down"},r.a.createElement(me,null,"lettersUpAndDown"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__container"},r.a.createElement("p",{className:"content__container__text"},"Hello"),r.a.createElement("ul",{className:"content__container__list"},r.a.createElement("li",{className:"content__container__list__item"},"world !"),r.a.createElement("li",{className:"content__container__list__item"},"Beom Seok !"),r.a.createElement("li",{className:"content__container__list__item"},"users !"),r.a.createElement("li",{className:"content__container__list__item"},"everybody !"))))),r.a.createElement("div",{className:"inner",id:"glitch"},r.a.createElement(me,null,"glitch"),r.a.createElement("div",{className:"glitch","data-text":"GLITCH!"},"GLITCH!")),r.a.createElement("div",{className:"console-container inner",id:"terminal-text"},r.a.createElement(me,null,"terminalText"),r.a.createElement("span",{id:"text"}),r.a.createElement("div",{className:"console-underscore",id:"console"},"_")),r.a.createElement("div",{className:"title inner",id:"text-with-background"},r.a.createElement(me,null,"textWithBackground"),r.a.createElement("h1",null,"text with",r.a.createElement("br",null),"background")),r.a.createElement("div",{className:"inner",id:"focus-text"},r.a.createElement(me,null,"focusText"),r.a.createElement("div",{className:"center-wrapper"},r.a.createElement("div",{className:"focus"},r.a.createElement("div",{className:"focus--mask"},r.a.createElement("div",{className:"focus--mask-inner"},"Beom Seok"))))))};var de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/custom-hooks",component:ee}),r.a.createElement(i.a,{exact:!0,path:"/useful-animation-effects",component:fe})),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"/react-sandbox"},r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,n,t){e.exports=t.p+"static/media/useInput.2115a839.md"},47:function(e,n,t){e.exports=t.p+"static/media/useTabs.11e84e97.md"},48:function(e,n,t){e.exports=t.p+"static/media/useTitle.381baca1.md"},49:function(e,n,t){e.exports=t.p+"static/media/useClick.b671c687.md"},50:function(e,n,t){e.exports=t.p+"static/media/useConfirm.2bd4170a.md"},51:function(e,n,t){e.exports=t.p+"static/media/useBeforeLeave.e4d09c74.md"},52:function(e,n,t){e.exports=t.p+"static/media/useFadeIn.f9e5a8d0.md"},53:function(e,n,t){e.exports=t.p+"static/media/useNetwork.934f7ab7.md"},54:function(e,n,t){e.exports=t.p+"static/media/useFullscreen.06ba87e8.md"},55:function(e){e.exports=JSON.parse('[{"tab":"Custom Hooks","path":"/custom-hooks"},{"tab":"Useful Animation Effects","path":"/useful-animation-effects"}]')},56:function(e,n,t){e.exports=t(361)},61:function(e,n,t){},62:function(e,n,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.d4b4ecb6.chunk.js.map