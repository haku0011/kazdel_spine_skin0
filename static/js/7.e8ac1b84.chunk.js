(this.webpackJsonpkazdel_spine_skin0=this.webpackJsonpkazdel_spine_skin0||[]).push([[7],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var i=n(65),s=n(66),a=n(67),o=n(69),d=n(68),l=n(0),c=n(72),r=n(97),h=n(89),p=n(90),f=n(71),k=n.n(f),u=n(88),m=n(73),x=n(70),b=n(1),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n),e=t.call(this);var s=JSON.parse(document.getElementById("SPINEDATA2").innerHTML),o=JSON.parse(document.getElementById("INDEXDATA2").innerHTML);return e.spineData=s.skin,e.name=s.name,e.prefix=s.prefix,e.skinIndex=o.skinIndex,e.aniIndex=0,e.modelIndex=0,e.skinList=Object.keys(e.spineData),e.reset=e.reset.bind(Object(a.a)(e)),e.changeModel=e.changeModel.bind(Object(a.a)(e)),e.nextAnimation=e.nextAnimation.bind(Object(a.a)(e)),e.animationsData=[],e.state={color:"00000000",speed:1,animations:[],animation:"",loop:!0,openInfo:!1,skin:e.skinList[e.skinIndex],modelList:Object.keys(e.spineData[e.skinList[e.skinIndex]]),model:Object.keys(e.spineData[e.skinList[e.skinIndex]])[0],loading:!0,json:{},fullscreen:!1,scale:.3,building:!1,progress:0},e.spineRef=Object(l.createRef)(),e.rootRef=Object(l.createRef)(),e.loopRef=Object(l.createRef)(),e.isMobile=Object(x.a)(),e}return Object(s.a)(n,[{key:"reset",value:function(){this.state.loading||this.spineRef.current.reset()}},{key:"changeModel",value:function(){0==this.modelIndex?this.modelIndex=2:this.modelIndex=0;var e=this.state.modelList[this.modelIndex];this.setState({model:e,animation:"",animations:[],loading:!0}),this.loadData(this.state.skin,e)}},{key:"nextAnimation",value:function(){this.aniIndex++,this.aniIndex>=this.state.animations.length&&(this.aniIndex=0),this.setState({animation:this.state.animations[this.aniIndex]}),this.state.loading||this.spineRef.current.updateAnimation(this.state.animations[this.aniIndex],this.state.loop)}},{key:"componentDidMount",value:function(){this.loadData(this.skinList[this.skinIndex],Object.keys(this.spineData[this.skinList[this.skinIndex]])[0])}},{key:"loadData",value:function(e,t){var n=this;Object(m.a)(this.prefix+this.spineData[e][t].file+".skel").then((function(i){var s=Object.keys(i.animations);n.setState({json:i,animations:s,animation:s[0]}),n.spineRef.current.loadWidget(i,n.prefix+n.spineData[e][t].file+".atlas",s[0],n.state.color,n.state.loop,n.spineData[n.state.skin][n.state.model].skin||"default",n.state.speed,(function(e){n.animationsData=e,n.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{style:{width:"fit-content",position:"relative"},children:Object(b.jsxs)(r.a,{ref:this.rootRef,style:{backgroundColor:"#00000000",display:"flex",width:"fit-content",boxShadow:"none"},children:[Object(b.jsx)(u.a,{onClick:function(){e.nextAnimation()},children:Object(b.jsx)(h.a,{style:{padding:0},children:Object(b.jsx)(c.a,{ref:this.spineRef,scale:this.state.scale,loading:this.state.loading})})}),Object(b.jsx)(p.a,{style:{backgroundColor:"#00000000",position:"absolute",zIndex:1,left:10,top:170,width:30,height:30},onClick:function(){e.changeModel()},children:Object(b.jsx)(k.a,{})})]})})}}]),n}(l.Component)}}]);
//# sourceMappingURL=7.e8ac1b84.chunk.js.map