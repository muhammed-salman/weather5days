webpackJsonp([1,2],{112:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(f(r.parts[a],t))}else{for(var u=[],a=0;a<r.parts.length;a++)u.push(f(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:u}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],i=a[1],l=a[2],c=a[3],f={css:i,media:l,sourceMap:c};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}function a(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=_[_.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function i(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,r,o,a;if(t.transform&&e.css){if(a=t.transform(e.css),!a)return function(){};e.css=a}if(t.singleton){var c=E++;n=g||(g=i(t)),r=s.bind(null,n,c,!1),o=s.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),r=p.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var a=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(a,u[t]):e.appendChild(a)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(u),i&&URL.revokeObjectURL(i)}var h={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=m(function(){return window&&document&&document.all&&!window.atob}),b=function(e){return document.querySelector(e)},v=function(e){var t={};return function(e){if("function"==typeof e)return e();if("undefined"==typeof t[e]){var n=b.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),g=null,E=0,_=[],w=n(113);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=y()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],u=0;u<n.length;u++){var i=n[u],l=h[i.id];l.refs--,a.push(l)}if(e){var c=o(e,t);r(c,t)}for(var u=0;u<a.length;u++){var l=a[u];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete h[l.id]}}}};var O=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},113:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/"),o=e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"});return o}},116:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),u=n(9),i=r(u),l=n(4),c=n(3),f=n(10),s=r(f),p=n(43),d=r(p),h=n(44),m=r(h);n(45);var y=(0,c.applyMiddleware)(s.default)(c.createStore);i.default.render(a.default.createElement(l.Provider,{store:y(m.default)},a.default.createElement(d.default,null)),document.getElementById("root"))},12:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=c+"&q="+e+",in",n=i.default.get(t).then();return{type:f,payload:n}}function a(e){return{type:s,payload:{term:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.UPDATE_CITY=t.FETCH_WEATHER=void 0,t.fetchWeather=o,t.updateCity=a;var u=n(18),i=r(u),l="58a4e0a65323e8a1d3f8101ad1192af4",c="https://api.openweathermap.org/data/2.5/forecast?appid="+l,f=t.FETCH_WEATHER="FETCH_WEATHER",s=t.UPDATE_CITY="UPDATE_CITY"},43:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(65),s=r(f),p=n(66),d=r(p),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Welcome to React"),c.default.createElement("p",{className:"text-center"},"A simple current 5 days weather forecasting app. Type the location of your choice to display forcast."),c.default.createElement("div",null,c.default.createElement(s.default,null),c.default.createElement(d.default,null)))}}]),t}(l.Component);t.default=h},44:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n(68),u=r(a),i=n(67),l=r(i),c=(0,o.combineReducers)({weather:u.default,city:l.default});t.default=c},45:function(e,t,n){var r=n(69);"string"==typeof r&&(r=[[e.i,r,""]]);var o,a={hmr:!0};a.transform=o,a.insertInto=void 0;n(112)(r,a);r.locals&&(e.exports=r.locals)},63:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return u.default.round(u.default.sum(e)/e.length)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(19),u=r(a),i=n(0),l=r(i),c=n(20);t.default=function(e){return l.default.createElement("div",null,l.default.createElement(c.Sparklines,{height:20,width:100,data:e.data},l.default.createElement(c.SparklinesLine,{color:e.color}),l.default.createElement(c.SparklinesReferenceLine,{type:"avg"})),l.default.createElement("div",null,o(e.data)," ",e.units))}},64:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){new google.maps.Map(this.refs.map,{zoom:12,center:{lat:this.props.lat,lng:this.props.lon}})}},{key:"render",value:function(){return c.default.createElement("div",{ref:"map"})}}]),t}(l.Component);t.default=f},65:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{term:e.city}}function l(e){return(0,d.bindActionCreators)({updateCity:h.updateCity,fetchWeather:h.fetchWeather},e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),s=r(f),p=n(4),d=n(3),h=n(12),m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={term:""},n.onInputChange=n.onInputChange.bind(n),n.onFormSubmit=n.onFormSubmit.bind(n),n}return u(t,e),c(t,[{key:"onInputChange",value:function(e){this.props.updateCity(e.target.value)}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.fetchWeather(this.props.term)}},{key:"render",value:function(){return s.default.createElement("form",{onSubmit:this.onFormSubmit,className:"input-group"},s.default.createElement("input",{placeholder:"Get a five day forecast in your favourite cities",className:"form-control",value:this.props.term,onChange:this.onInputChange}),s.default.createElement("span",{className:"input-group-btn"},s.default.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit")))}}]),t}(f.Component);t.default=(0,p.connect)(i,l)(m)},66:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.weather,n=e.city;return{weather:t,term:n}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),s=n(4),p=n(63),d=r(p),h=n(64),m=r(h),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"renderWeather",value:function(e){if(!e)return f.default.createElement("tr",{key:"error"},f.default.createElement("td",{colSpan:"2",className:"alert alert-danger",role:"alert"},"Sorry! We are unable to retrive data for the given city at the moment."),f.default.createElement("td",{colSpan:"2",className:"alert alert-info",role:"alert"},f.default.createElement("strong",null,"Note:")," Currently, we display data for Indian cities only."));var t=e.city.name,n=e.list.map(function(e){return e.main.temp}),r=e.list.map(function(e){return e.main.pressure}),o=e.list.map(function(e){return e.main.humidity}),a=e.city.coord,u=a.lon,i=a.lat;return f.default.createElement("tr",{key:t},f.default.createElement("td",null,f.default.createElement(m.default,{lon:u,lat:i})),f.default.createElement("td",null,f.default.createElement(d.default,{data:n,color:"orange",units:"K"})),f.default.createElement("td",null,f.default.createElement(d.default,{data:r,color:"green",units:"hPa"})),f.default.createElement("td",null,f.default.createElement(d.default,{data:o,color:"black",units:"%"})))}},{key:"render",value:function(){return f.default.createElement("table",{className:"table table-hover"},f.default.createElement("thead",null,f.default.createElement("tr",null,f.default.createElement("th",null,"City"),f.default.createElement("th",null,"Temperature (K)"),f.default.createElement("th",null,"Pressure (hPa)"),f.default.createElement("th",null,"Humidity (%)"))),f.default.createElement("tbody",null,this.props.weather.map(this.renderWeather)))}}]),t}(c.Component);t.default=(0,s.connect)(i)(y)},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.UPDATE_CITY:return t.payload.term}return e};var r=n(12)},68:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case o.FETCH_WEATHER:return[t.payload.data].concat(r(e))}return e};var o=n(12)},69:function(e,t,n){t=e.exports=n(70)(!1),t.push([e.i,"body{margin:0;padding:0;font-family:sans-serif}h1{text-align:center}td,th{vertical-align:middle!important;text-align:center!important}.input-group{margin:20px 0}svg{height:150px;width:200px}td:first-of-type,td:first-of-type>div{height:200px;width:250px}",""])},70:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o),u=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(u).concat([a]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}}},[116]);