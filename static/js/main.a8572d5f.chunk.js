(this.webpackJsonpreact_cal=this.webpackJsonpreact_cal||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),c=(a(22),a(2)),i=a(3),o=a(5),h=a(4),p=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).getChange=function(e){},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:u},l.a.createElement("div",null,l.a.createElement("input",{onChange:this.getChange,style:m,type:"text",value:this.props.line1,placeholder:"first number"})),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.getChange,style:m,type:"text",value:this.props.line2,placeholder:"symbol"})),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.getChange,style:m,type:"text",value:this.props.line3,placeholder:"another number"})),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("input",{onChange:this.getChange,style:m,type:"text",value:this.props.result,placeholder:"result"})))}}]),a}(n.Component),u={backgroundColor:"#ffffff",margin:"10px 10px 10px 10px",border:"10px",borderColor:"red",padding:"10px"},m={border:"none",height:"50px",width:"100%"},d=p,b=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:g},l.a.createElement("div",{className:"row"},l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"1")},"1"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"2")},"2"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"3")},"3"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"+")},"+"),l.a.createElement("span",{style:E})),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"4")},"4"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"5")},"5"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"6")},"6"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"-")},"-"),l.a.createElement("span",{style:E})),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"7")},"7"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"8")},"8"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"9")},"9"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"/")},"/"),l.a.createElement("span",{style:E})),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"c")},"c"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"0")},"0"),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"=")},"="),l.a.createElement("span",{style:E}),l.a.createElement("button",{className:"col",style:y,onClick:this.props.getChar.bind(this,"x")},"x"),l.a.createElement("span",{style:E}))))}}]),a}(n.Component),y={backgroundColor:"transparent",color:"#ffffff",border:"1px solid red",borderRadius:"5px"},E={backgroundColor:"transparent",width:"10px"},g={margin:"10px 10px 10xp 10px"},C=b,v=a(16),f=a.n(v),k=!1,x=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).getChar=function(t){"="===t?e.cal(e.state.line1,e.state.line2,e.state.line3):!1===k?"+"===t||"/"===t||"x"===t||"-"===t?(e.setState({line2:e.state.line2+t}),k=!0):e.setState({line1:e.state.line1+t}):e.setState({line3:e.state.line3+t}),"c"===t&&(e.setState({line1:"",line2:"",line3:"",result:""}),k=!1)},e.state={line1:"",line2:"",line3:"",result:""},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:N},l.a.createElement("br",null),l.a.createElement(d,{line1:this.state.line1,line2:this.state.line2,line3:this.state.line3,result:this.state.result}),l.a.createElement(C,{getChar:this.getChar})))}},{key:"cal",value:function(e,t,a){var n=Number(e),l=Number(a);"+"===t?this.add(n,l):"-"===t?this.sub(n,l):"/"===t?this.div(n,l):"x"===t&&this.mul(n,l)}},{key:"add",value:function(e,t){var a=e+t;this.resultSetter(a)}},{key:"sub",value:function(e,t){var a=e-t;this.resultSetter(a)}},{key:"mul",value:function(e,t){var a=e*t;this.resultSetter(a)}},{key:"div",value:function(e,t){var a=e/t;this.resultSetter(a)}},{key:"resultSetter",value:function(e){var t=this;f.a.get("https://api.npoint.io/fd024bc915e3f6fac514").then((function(a){var n=a.data,l=t.getRandomInt(n.length-1),r=n[l].line,s=n[l].emoji,c=t.state.line1,i=t.state.line2,o=t.state.line3,h="Your result for ".concat(c," ").concat(i," ").concat(o," = ").concat(e);t.setState({line1:r,line2:s,line3:".",result:h})}))}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}}]),a}(n.Component),N={height:"500px",backgroundColor:"#000000",marginTop:"50px",border:"2px",borderColor:"red"},j=x,w=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(j,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a8572d5f.chunk.js.map