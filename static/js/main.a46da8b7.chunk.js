(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),r=n.n(s),c=(n(14),n(1)),o=n(2),u=n(4),l=n(3),h=n(5),d=(n(15),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={file:null},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"file",onChange:this.props.TakePic,accept:"image/*",className:"Shutter",capture:"camera"}))}}]),t}(a.Component)),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={Context:"",CurrentLine:[],PastLines:[],Deleted:[]},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.ctx=this.refs.Canvas.getContext("2d"),this.refs.Canvas.height=window.innerHeight,this.refs.Canvas.width=window.innerWidth,this.ctx.lineWidth=3,this.ctx.strokeStyle="yellow";var t=this.props.Image;t.onload=function(){console.log(t),e.ctx.drawImage(t,0,0)}}},{key:"drawInit",value:function(e){var t=v(e);this.setState({CurrentLine:[{ev:e}],Drawing:!0}),this.ctx.moveTo(t.x,t.y)}},{key:"drawMove",value:function(e){if(this.state.Drawing){var t=this.state.CurrentLine,n=v(e);t.push(n),this.setState({CurrentLine:t}),this.ctx.lineTo(n.x,n.y),this.ctx.stroke()}}},{key:"drawEnd",value:function(e){var t=this.state.CurrentLine,n=this.state.PastLines;n.push(t),this.setState({CurrentLine:[],PastLines:n,Drawing:!1})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{className:"Image",ref:"Canvas",onTouchStart:this.drawInit.bind(this),onMouseDown:this.drawInit.bind(this),onTouchMove:this.drawMove.bind(this),onMouseMove:this.drawMove.bind(this),onTouchEnd:this.drawEnd.bind(this),onMouseUp:this.drawEnd.bind(this)}),i.a.createElement("button",{className:"Back"}," < "),i.a.createElement("button",{className:"UnBack"}," > "))}}]),t}(a.Component),v=function(e){return e.targetTouches?{x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY}:{x:e.clientX,y:e.clientY}},m=f,w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={file:null},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"TakePic",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0])})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{TakePic:this.TakePic.bind(this),file:this.state.file}),i.a.createElement("img",{src:this.state.file,ref:"Picture"}),this.state.file&&i.a.createElement("div",null," ",i.a.createElement(m,{Image:this.refs.Picture})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a46da8b7.chunk.js.map