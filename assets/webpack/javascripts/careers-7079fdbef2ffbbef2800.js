webpackJsonx([29],{1886:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(0),r=a(o),i=n(8),l=a(i),d=n(41),u=a(d),c=n(597),p=a(c),s=window.Raise.data.careers.video,f=s.id,y=s.placeholder;(0,u.default)(function(){var e=document.getElementById("react-video-container"),t=r.default.createElement(p.default,{videoId:f,placeholder:y});e&&l.default.render(t,e)})},597:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),c=a(u),p=n(1),s=a(p),f=n(5),y=a(f),h=n(598),b=a(h),m=n(599),v=a(m),w=function(){return(new Date).getTime()+Math.floor(9999*Math.random())+100},g=c.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"50px",x:"0px",y:"0px",viewBox:"0 0 50 50"},c.default.createElement("g",null,c.default.createElement("path",{id:"Fill-5",fill:"#F4F4F4",d:"M49.7,24.7c0,13.5-11,24.5-24.5,24.5S0.7,38.3,0.7,24.7s11-24.5,24.5-24.5 S49.7,11.2,49.7,24.7"}),c.default.createElement("path",{id:"Fill-7",fill:"#3F484D",d:"M18.9,34.2c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.3-0.3-0.3-0.5V15.9c0-0.2,0.1-0.4,0.3-0.5 c0.2-0.1,0.4-0.1,0.6,0l16.5,8.9c0.2,0.1,0.3,0.3,0.3,0.5c0,0.2-0.1,0.4-0.3,0.5l-16.5,8.9C19.1,34.1,19,34.2,18.9,34.2"}))),S=function(e){function t(){var e,n,a,o;r(this,t);for(var l=arguments.length,d=Array(l),u=0;u<l;u++)d[u]=arguments[u];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),a.state={player:null,embedReady:!1,placeholderHidden:!1},a.onStateChange=function(e){0===e.data&&(a.setState({placeholderHidden:!1}),a.props.autoplay&&a.props.onVideoEnd())},a.onReady=function(){a.setState({embedReady:!0}),a.props.autoplay&&a.state.player.playVideo()},a.onApiReady=function(e){a.setState({player:e})},a.clickPlaceholder=function(){a.state.player&&a.state.player.playVideo&&(a.state.player.playVideo(),a.setState({placeholderHidden:!0}))},o=n,i(a,o)}return l(t,e),d(t,[{key:"componentWillMount",value:function(){this.id="YTP-"+w(),this.props.autoplay&&this.setState({placeholderHidden:!0})}},{key:"componentDidMount",value:function(){var e={id:this.id,onApiReady:this.onApiReady,events:{onReady:this.onReady,onStateChange:this.onStateChange}};v.default.initPlayer(this.props.videoId,e)}},{key:"getWrapperStyles",value:function(){var e=this.props,t=e.width,n=e.height,a={};return t&&(a.width=t+"px"),n&&(a.height=n+"px"),a}},{key:"embedSrc",value:function(){return"https://www.youtube.com/embed/"+this.props.videoId+"?enablejsapi=1"}},{key:"render",value:function(){var e,t=(0,y.default)((e={},o(e,b.default.placeholder,!0),o(e,b.default.hide,this.state.placeholderHidden),e)),n={className:b.default.youtubeWrapper,style:this.getWrapperStyles()},a=(0,y.default)(o({},b.default.hide,!this.state.placeholderHidden)),r={className:a,id:this.id,width:"100%",height:"100%",src:this.embedSrc(),frameBorder:0,allowFullScreen:!0},i={backgroundImage:"url("+this.props.placeholder+")"},l={className:t,style:i,onClick:this.clickPlaceholder},d=this.props.headline||"";return c.default.createElement("div",n,c.default.createElement("iframe",r),c.default.createElement("div",l,c.default.createElement("div",{className:b.default.placeholderContents},c.default.createElement("h2",{className:b.default.headline},d),g)))}}]),t}(u.Component);S.propTypes={videoId:s.default.string.isRequired,width:s.default.string,height:s.default.string,placeholder:s.default.string,headline:s.default.string,autoplay:s.default.bool,onVideoEnd:s.default.func},t.default=S},598:function(e,t){e.exports={youtubeWrapper:"youtubeWrapper--1V4fH",placeholder:"placeholder--1VWFA",placeholderContents:"placeholderContents--3b_rz",headline:"headline--i4mwU",hide:"hide--28yEk"}},599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={},r=!1,i=t.isYouTubeApiMounted=function(){return"object"===a(window.YT)&&window.YT.Player},l=t.isYouTubeApiReady=function(){return r},d=function(e,t){return new window.YT.Player(e,{iframeId:e,events:t})};window.onYouTubeIframeAPIReady=function(){r=!0;var e=void 0;if(Object.keys(o).length)for(e in o)if(o.hasOwnProperty(e)){var t=o[e];t.onApiReady(d(t.id,t.events)),delete o[e]}};var u=t.initPlayer=function(e,t){i()&&l()?t.onApiReady(d(t.id,t.events)):i()&&!l()&&(o[e]=t,window.onYouTubeIframeAPIReady()),o[e]=t};t.default={initPlayer:u,isYouTubeApiReady:l,isYouTubeApiMounted:i}}},[1886]);