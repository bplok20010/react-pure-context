(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(71),l=n.n(a),c=(n(110),n(16),n(111),n(67),n(68),n(114),n(115),n(23)),i=n.n(c),o=n(37),u=n.n(o),d=n(72);function m(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}n.n(d).a;var h=function(e){const t=r.a.createContext({});return{Provider:class extends r.a.Component{constructor(...t){super(...t),u()(this,"_listeners",[]),u()(this,"state",e)}getSubscribeCount(){return this._listeners.length}setState(e,t){const n=this.state;super.setState(e,()=>{this._listeners.forEach(e=>{e(n,this.state)}),t&&t()})}subscribe(e){return this._listeners.push(e),()=>{const t=this._listeners.indexOf(e);t>-1&&this._listeners.splice(t,1)}}shouldComponentUpdate(e){return this.props!==e}componentWillUnmount(){this._listeners.length=0}render(){return r.a.createElement(t.Provider,{value:this},this.props.children)}},Consumer:function(n){const s=r.a.useState(e),a=i()(s,2),l=a[0],c=a[1],o=r.a.useContext(t);return r.a.useEffect(()=>o.subscribe((e,t)=>{c(t)})),n.children(l)},useProvider:function(){return r.a.useContext(t)},useState:function(){const n=r.a.useState(e),s=i()(n,2),a=s[0],l=s[1],c=r.a.useContext(t);return r.a.useEffect(()=>c.subscribe((e,t)=>{l(t)})),a},useSelector:function(n){const s=r.a.useState(n(e)),a=i()(s,2),l=a[0],c=a[1],o=r.a.useContext(t);return r.a.useEffect(()=>o.subscribe((e,t)=>{const s=n(t);(function(e,t){if(m(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!m(e[n[r]],t[n[r]]))return!1;return!0})(l,s)||c(s)})),l},useUpdate:function(){const e=r.a.useContext(t);return t=>{e.setState(t)}}}}({items:[{title:"demo1",desc:"test"}]});function f(){const e=h.useUpdate(),t=[...h.useSelector(e=>e.items)];return r.a.createElement(r.a.Fragment,null,t.length?null:r.a.createElement("div",{className:"item"},"no data."),t.map((n,s)=>r.a.createElement("div",{key:s,className:"item"},r.a.createElement("div",{className:"title"},n.title),r.a.createElement("div",{className:"desc"},n.desc),r.a.createElement("div",{className:"remove",onClick:()=>{t.splice(s,1),e({items:t})}},"Remove"))))}function p(e){const t=h.useProvider();return r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>e.handleAdd(t)},"Add"))}function E(){const e=h.useState();return r.a.createElement("div",{className:"total"},"totals: ",e.items.length)}class v extends r.a.Component{handleAdd(e){e.setState({items:[...e.state.items,{title:"demo_"+Date.now(),desc:"test"}]})}render(){return r.a.createElement("div",{className:"todo-list"},r.a.createElement(h.Provider,null,r.a.createElement(p,{handleAdd:this.handleAdd.bind(this)}),r.a.createElement(E,null),r.a.createElement(f,null)))}}var b=v;function C(){return r.a.createElement("div",{className:"main"},r.a.createElement(b,null),r.a.createElement(b,null))}l.a.render(r.a.createElement(C,null),document.getElementById("root"))},73:function(e,t,n){n(74),e.exports=n(120)}},[[73,1,2]]]);