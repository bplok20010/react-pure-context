(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(71),c=n.n(a),l=(n(111),n(17),n(112),n(67),n(68),n(13)),o=n.n(l),u=(n(118),n(119),n(24)),i=n.n(u),m=n(72),d=n.n(m),f=n(73);function h(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}n.n(f).a;function E(e){e.__$isProvider||d()(!1)}var p=function(e){const t=r.a.createContext({}),n=r.a.createContext({}),s=()=>"function"===typeof e?e():e,a=class extends r.a.Component{constructor(...e){super(...e),i()(this,"_listeners",[]),i()(this,"__$isProvider",!0),i()(this,"state",s())}getSubscribeCount(){return this._listeners.length}getState(){return this.state}setState(e,t){const n=this.state;super.setState(e,()=>{this._listeners.forEach(e=>{e(n,this.state)}),t&&t()})}subscribe(e){return this._listeners.push(e),()=>{const t=this._listeners.indexOf(e);t>-1&&this._listeners.splice(t,1)}}componentWillUnmount(){this._listeners.length=0}render(){return r.a.createElement(n.Provider,{value:this.state},r.a.createElement(t.Provider,{value:this},this.props.children))}},c=function(){const e=r.a.useContext(t);return E(e),e};return{Context:n,Provider:a,Consumer:function(e){const n=r.a.useState(s()),a=o()(n,2),c=a[0],l=a[1],u=r.a.useContext(t);return E(u),r.a.useEffect(()=>u.subscribe((e,t)=>{l(t)})),e.children(c)},useProvider:c,useStore:c,useState:function(){const e=r.a.useState(s()),n=o()(e,2),a=n[0],c=n[1],l=r.a.useContext(t);return E(l),r.a.useEffect(()=>l.subscribe((e,t)=>{c(t)})),a},useSelector:function(e){const n=r.a.useState(e(s())),a=o()(n,2),c=a[0],l=a[1],u=r.a.useContext(t);return E(u),r.a.useEffect(()=>u.subscribe((t,n)=>{const s=e(n);(function(e,t){if(h(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!h(e[n[r]],t[n[r]]))return!1;return!0})(c,s)||l(s)})),c},useUpdate:function(){const e=r.a.useContext(t);return E(e),t=>{e.setState(t)}}}}(()=>({items:[{title:"demo1",desc:"test"}]}));function v(){const e=p.useUpdate(),t=[...p.useSelector(e=>e.items)];return r.a.createElement(r.a.Fragment,null,t.length?null:r.a.createElement("div",{className:"item"},"no data."),t.map((n,s)=>r.a.createElement("div",{key:s,className:"item"},r.a.createElement("div",{className:"title"},n.title),r.a.createElement("div",{className:"desc"},n.desc),r.a.createElement("div",{className:"remove",onClick:()=>{t.splice(s,1),e({items:t})}},"Remove"))))}function b(){const e=p.useUpdate();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:()=>e(e=>({items:[...e.items,{title:"demo_"+Date.now(),desc:"test"}]}))},"Add"))}function C(){const e=p.useState();return r.a.createElement("div",{className:"total"},e.items.length," total")}function S(e){let t=r.a.useState(0),n=o()(t,2),s=n[0],a=n[1];return r.a.useEffect(()=>{a(s+1)},[e]),r.a.createElement(r.a.Fragment,null,s)}class g extends r.a.Component{render(){return r.a.createElement("div",{className:"todo-list"},r.a.createElement(p.Provider,null,r.a.createElement(b,null),r.a.createElement("button",{onClick:()=>this.forceUpdate()},"Refresh")," ",r.a.createElement(S,null),r.a.createElement(C,null),r.a.createElement(v,null)))}}var x=g;function _(){return r.a.createElement("div",{className:"main"},r.a.createElement(x,null),r.a.createElement(x,null))}c.a.render(r.a.createElement(_,null),document.getElementById("root"))},74:function(e,t,n){n(75),e.exports=n(121)}},[[74,1,2]]]);