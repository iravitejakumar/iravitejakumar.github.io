(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6IbO":function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),i=a.n(n);var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={wrapHeight:"",hasStyleInfo:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this.refs.fadeInWord.getBoundingClientRect().height+10;this.setState({hasStyleInfo:!0,wrapHeight:e})},o.render=function(){var e=this.props,t=e.children,a=e.className,n=void 0===a?"":a,o=e.style,r=this.state,s=r.wrapHeight,l=r.hasStyleInfo,d={};s&&(d={top:s+"px"});var c=n+(l?"":" op0 ")+(l?" keyFrameAnimator":"");return i.a.createElement("div",{ref:"wrap",className:"padT10 textcenter inline oh fadeInWrap "+(l?"":" op0")},i.a.createElement("div",{ref:"fadeInWord",className:"fadeInWord "+c,style:Object.assign({},d,o)},t))},n}(i.a.Component);t.a=o},MGXT:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return r}));var n={"Open Source":{date:"",details:[["YOUTUBE EXTENSION","https://chrome.google.com/webstore/detail/hecflpbbibegbikpciipfnkliakdikjm/publish-accepted?authuser=1","Don't like youtube's suggestion? Choose which song should play next on the go.","Aug - Sep, 2019"],["IMDB EXTENSION","https://chrome.google.com/webstore/detail/imdb-ratings/aodmmndimojddogmhmpaemocbibnimkl?authuser=1","Just hover over the movie name you will be popped up with all those Information. You are not limited to any websites in particular.Alternatively, you can highlight a movie name and right-click to search it on IMDb.","Jan - Feb, 2019"],["EXPENSE MANAGER","https://exspensesmgr.herokuapp.com/login","Created an Expense Manager Mobile First Web application which involved End to End Full stack development using MongoDB, Express, React and Node(MERN) technologies. It provides the users with unique login to store their Expenses and the ability to monitor their daily expenses, spending rates and to Graphically visualise them","Dec-Jan, 2019"],["REACT RIPPLE","https://www.npmjs.com/package/ripple-react","Built an independent component in React which helps creating a Material Ripple / waterdrop effect on clicking a button or a card and published it on NPM","Jan 2019"],["RESUME BUILDER","https://github.com/dhilipkmr/aboutDhilip","An Open Source Project which helps people with building a New Resume for them just with the update in JSON","Mar-Apr, 2018"]]},Goibibo:{date:"2018 May - Present",details:[["FLIGHTS LISTING PAGE","","Implemented Flights Search Results page from scratch which had Infinite Flights Loader, Sticky scrollable Filters and loading Indicators.","Apr - Jun, 2019"],["LANDING PAGE REVAMP","","Worked on implementing the new UI changes done to Desktop Web Goibibo landing/flights Page. It includes effective changes to Multi-city implementation, introduced deferred image loading for carousels for better loading speed, Parallax effect and fading in effect on the background image and on-page anchor scroll","Jan - Feb, 2019"],["FARE TRENDS","","Developed an Independent React based SVG Line-graph component which plots Fares on different dates for a given data set","Sep - Oct, 2018"],["PWA MIGRATION","","Migrated Goibibo Flights Mobile Website to PWA from Booking till Traveller Details page","Jul - Aug, 2018"],["FARE CALENDAR","","Created Lazyloaded Fare Calendar to let user the Cheapest Fare upfront just by scrolling through dates.","May - Jun, 2018"]]},Oracle:{date:"2016 Jan - 2018 Apr",details:[["TREE GRID","","Reduced the Page Loading time by implementing Lazy Load functionality as a part of Tree Grid","Nov - Jan, 2018"],["QUICK FILTERS","","Condition-based Record Filtering for Grids, based on Job's Start/End Time and Status","Sep - oct, 2017"],["DASHBOARD","","A Summary Dashboard on Data Transfers Status for each jobs to identify & rectify errors","Jun - Aug, 2017"],["QUICK SAVE","","Ability to immediately save Flows before the last screen which helped in faster modification of Flows","Jan - Feb, 2017"],["JOB SCHEDULE","","Implemented a Wizard which allows users to schedule a Job, based on their choice","Oct - Nov, 2016"],["OBJECT MANIPULATION","","Provided the ability to modify the configurations for Out of the Box Flows","Feb - Apr, 2016"]]}},i=[["React","85%"],["Redux","80%"],["Javascript","90%"],["JQuery","90%"],["Cypress","70%"],["NodeJS","60%"]],o=[["HTML","85%"],["CSS","75%"],["Bootstrap","70%"],["ExpressJS","60%"],["Progressive Web Apps","70%"],["Gatsby","80%"]],r={description:["> Hello there!","> I'm Dhilip Kumar, as you know already 😅","> I am a Software Professional, working at Microsoft.","> I use Javascript, React, Redux and Node to create a Performant UI.","> I also Blog about some Interesting (Technical) stuffs that I create at DEV community","> I have few Open source projects and Npm Packages if you are interested :)","> What other things I do you ask?","> Well...","> I love Playing and watching Cricket.","> Big time Movie and TV shows Addict.","> Well that's pretty much about me!"]}},VfgA:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("7oih"),r=a("6IbO"),s=a("MGXT"),l=a("vrFN");function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).themer=a.themer.bind(d(a)),a.getPrevTheme=a.getPrevTheme.bind(d(a)),a.renderHalf=a.renderHalf.bind(d(a)),a.state={theme:null},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=this,t=this.getPrevTheme();this.setState({theme:t}),setTimeout((function(){e.setState({loadWidth:!0})}),500)},c.getPrevTheme=function(){return window.__dkBlogTheme},c.themer=function(){var e="dark"===this.state.theme?"light":"dark";"undefined"!=typeof window&&(this.setState({theme:e}),document.body.className=e,window.__dkBlogTheme=e,window.localStorage.setItem("dkBlogTheme",e))},c.renderHalf=function(e){var t=this.state.loadWidth,a=e?s.d:s.c;return i.a.createElement("div",null,a.map((function(e){return i.a.createElement("div",{className:"pad5 ",key:e[0]},i.a.createElement("div",{className:"dflex flexspacebetween"},i.a.createElement("div",null,e[0]),i.a.createElement("div",null,e[1])),i.a.createElement("div",{className:"paddingTB10"},i.a.createElement("div",{className:"whiteborder  posRel marginTB5"}),i.a.createElement("div",{className:" posRel blueborder zeroWidthAnimation",style:{bottom:"2px",width:t?e[1]:"0"}})))})))},c.render=function(){return i.a.createElement(o.a,{className:"mh100",theme:this.state.theme,themer:this.themer},i.a.createElement(l.a,{title:"Dhilip's Jounrey | dhilipkmr skills"}),i.a.createElement("div",null,i.a.createElement("div",{className:"mh90vh"},i.a.createElement("div",{className:"width100 textcenter oh"},i.a.createElement(r.a,{className:" fs35 fadeInWord "},"Technical Skills")),i.a.createElement("div",{className:"skillCard marginT50"},i.a.createElement("div",{className:"widthhalf"},this.renderHalf()),i.a.createElement("div",{className:"widthhalf"},this.renderHalf(!0))))))},n}(i.a.Component);t.default=c}}]);
//# sourceMappingURL=component---src-pages-skills-js-5454df333a8300b28b3e.js.map