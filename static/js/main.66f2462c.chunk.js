(this.webpackJsonpwebpage=this.webpackJsonpwebpage||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n.n(a),c=n(5),s=n.n(c),i=(n(15),n.p+"static/media/logo.6ce24c58.svg"),l=(n(16),n(6)),d=n(7),h=n(2),u=n(9),b=n(8),w=["Mover: Can hop into water and then teleport out of the water within visual distance.","Shaker: Can control the state of water in an area.","Thinker: Can send out a mental pulse to sense water in a 50 ft radius.","Brute: Can create a water bubble around themselves to protect them. They are immersed and must hold their breath while using this.","Blaster: Water gun.","Master: Can create a water echo of him that follows a simple mental directive.","Striker: Can deal a blow to an enemy by collecting water on his hand and striking an enemy. As the enemy is hit, he turns the water into steam. (+1 to Brawn rolls for this ability)","Changer: Can turn a part of himself into water to cushion a blow. This can only be done as a reaction to a blow by instinct. This power cannot be activated on demand."],m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={currPower:"---"},r.SetRandomPower=r.SetRandomPower.bind(Object(h.a)(r)),r.SetPower=r.SetPower.bind(Object(h.a)(r)),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary p-2 m-2",onClick:this.SetRandomPower,children:"Random Power"}),Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{className:"btn btn-info dropdown-toggle p-2 my-2 mr-4",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Select Power"}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(0)},children:"Mover - teleport"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(1)},children:"Shaker - state change"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(2)},children:"Thinker - sonar"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(3)},children:"Brute - bubble"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(4)},children:"Blaster - water gun"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(5)},children:"Master - water echo"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(6)},children:"Striker - steam punch"}),Object(r.jsx)("a",{className:"dropdown-item",onClick:function(){return e.SetPower(7)},children:"Changer - water body"})]})]}),Object(r.jsx)("div",{className:"p-2 m-2 bg-secondary",id:"powerDescription",children:this.state.currPower})]})}},{key:"SetPower",value:function(e){var t=w[e];this.setState({currPower:t})}},{key:"SetRandomPower",value:function(){var e=w[Math.floor(8*Math.random())];this.setState({currPower:e})}}]),n}(o.a.Component);var p=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(r.jsxs)("p",{children:["Edit ",Object(r.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(r.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(r.jsx)(m,{}),Object(r.jsx)(m,{})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(17),n(4),n(18);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),j()}},[[20,1,2]]]);
//# sourceMappingURL=main.66f2462c.chunk.js.map