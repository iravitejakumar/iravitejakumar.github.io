(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6IbO":function(e,t,a){"use strict";a("91GP");var r=a("q1tI"),n=a.n(r);var i=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={wrapHeight:"",hasStyleInfo:!1},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){var e=this.refs.fadeInWord.getBoundingClientRect().height+10;this.setState({hasStyleInfo:!0,wrapHeight:e})},i.render=function(){var e=this.props,t=e.children,a=e.className,r=void 0===a?"":a,i=e.style,o=this.state,s=o.wrapHeight,l=o.hasStyleInfo,c={};s&&(c={top:s+"px"});var d=r+(l?"":" op0 ")+(l?" keyFrameAnimator":"");return n.a.createElement("div",{ref:"wrap",className:"padT10 textcenter inline oh fadeInWrap "+(l?"":" op0")},n.a.createElement("div",{ref:"fadeInWord",className:"fadeInWord "+d,style:Object.assign({},c,i)},t))},r}(n.a.Component);t.a=i},MGXT:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return o}));var r={"Open Source Contributions":{date:"",details:[["origami","https://github.com/hotforfeature/origami","It is bridge library to use Polymer component with Angular. I made it compatible with Angular 9."],["system-design-primer","https://github.com/donnemartin/system-design-primer/","It is an Open Source project for learning system design. I contributed to documentation for it."],["deno-mongo-api","https://github.com/iravitejakumar/deno-mongo-api","Example for building REST APIS with deno and MongoDB."],["ngrx-helpers","https://github.com/madhusudhand/ngrx-helpers","A library to simplify development with ngrx store."]]},"Pramati Technologies Pvt Ltd":{date:"2018 Feb - Present",details:[["Nielsen-Connect Chart Library","","Developed a chart library using D3 and Angular. Apart from implementing routine charts like Bar Chart, Line Chart etc. I have implemented a custom chart called arrow chart which visually looks like circular shaped DAG(Directed Acyclic Graph).","Apr 2018 - Dec, 2019"],["Nielsen-IPM","","Built components library using Angular, Polymer and D3 and integrated library with IPM frontend app.","Apr 2018 - Dec, 2019"]]},"Innominds Software Pvt Ltd":{date:"2015 Dec - 2018 Feb",details:[["NVIDIA-IDM","","Implemented users management solution for Nvidia using Angular 4.x","Nov, 2016 - Jan, 2018"],["Innominds-Access","","Implemented a office visitors tracking system using MEAN Stack","Feb, 2016 - Oct, 2016"]]}},n=[["React","85%"],["Redux","80%"],["Javascript","90%"],["JQuery","90%"],["Cypress","70%"],["NodeJS","60%"]],i=[["HTML","85%"],["CSS","75%"],["Bootstrap","70%"],["ExpressJS","60%"],["Progressive Web Apps","70%"],["Gatsby","80%"]],o={description:["> Hello there!","> I'm Ravi Teja Kumar, as you know already 😅","> I am a Software Professional, working at Pramati, Hyderabad.","> I use Javascript, Angular and Node to create a Performant UI.","> I also Blog about some Interesting stuffs.","> I am an active Open Source Contributor","> What other things I do you ask?","> Well...","> I love Playing and watching Cricket.","> Big time Movie and TV shows Addict.","> Well that's pretty much about me!"]}},VfgA:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("7oih"),o=a("6IbO"),s=a("MGXT"),l=a("vrFN");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).themer=a.themer.bind(c(a)),a.getPrevTheme=a.getPrevTheme.bind(c(a)),a.renderHalf=a.renderHalf.bind(c(a)),a.state={theme:null},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var d=r.prototype;return d.componentDidMount=function(){var e=this,t=this.getPrevTheme();this.setState({theme:t}),setTimeout((function(){e.setState({loadWidth:!0})}),500)},d.getPrevTheme=function(){return window.__dkBlogTheme},d.themer=function(){var e="dark"===this.state.theme?"light":"dark";"undefined"!=typeof window&&(this.setState({theme:e}),document.body.className=e,window.__dkBlogTheme=e,window.localStorage.setItem("dkBlogTheme",e))},d.renderHalf=function(e){var t=this.state.loadWidth,a=e?s.d:s.c;return n.a.createElement("div",null,a.map((function(e){return n.a.createElement("div",{className:"pad5 ",key:e[0]},n.a.createElement("div",{className:"dflex flexspacebetween"},n.a.createElement("div",null,e[0]),n.a.createElement("div",null,e[1])),n.a.createElement("div",{className:"paddingTB10"},n.a.createElement("div",{className:"whiteborder  posRel marginTB5"}),n.a.createElement("div",{className:" posRel blueborder zeroWidthAnimation",style:{bottom:"2px",width:t?e[1]:"0"}})))})))},d.render=function(){return n.a.createElement(i.a,{className:"mh100",theme:this.state.theme,themer:this.themer},n.a.createElement(l.a,{title:"Ravi Teja Kumar's Jounrey | iravitejakumar skills"}),n.a.createElement("div",null,n.a.createElement("div",{className:"mh90vh"},n.a.createElement("div",{className:"width100 textcenter oh"},n.a.createElement(o.a,{className:" fs35 fadeInWord "},"Technical Skills")),n.a.createElement("div",{className:"skillCard marginT50"},n.a.createElement("div",{className:"widthhalf"},this.renderHalf()),n.a.createElement("div",{className:"widthhalf"},this.renderHalf(!0))))))},r}(n.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-skills-js-9bc6175780ead965b6f2.js.map