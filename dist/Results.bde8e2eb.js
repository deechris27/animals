parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kyKK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("react-router-dom");function a(e){return e&&e.__esModule?e:{default:e}}function r(a){var r=a.name,l=a.animal,o=a.breed,c=a.media,n=a.location,u=a.id,i=[];c&&c.photos&&c.photos.photo&&(i=c.photos.photo.filter(function(e){return"pn"===e["@size"]}));var d="http://placecorgi.com/300/300";return i[0]&&i[0].value&&(d=i[0].value),e.default.createElement(t.Link,{to:"/details/".concat(u),className:"pet"},e.default.createElement("div",{className:"image-container"},e.default.createElement("img",{src:d,alt:r})),e.default.createElement("div",{className:"info"},e.default.createElement("h1",null,r),e.default.createElement("h2",null,"".concat(l," -- ").concat(o," -- ").concat(n))))}var l=r;exports.default=l;
},{"react":"n8MK","react-router-dom":"uc19"}],"zkm8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=b;var e=i(require("react")),t=a(require("petfinder-client")),r=require("./SearchContext"),n=a(require("./Pet"));function a(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){return p(e)||d(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}function p(e){if(Array.isArray(e))return e}var y=(0,t.default)({key:void 0,secret:void 0});function m(t){var r=c((0,e.useState)([]),2),a=r[0],o=r[1];return(0,e.useEffect)(function(){y.pet.find({location:t.searchParams.location,animal:t.searchParams.animal,breed:t.searchParams.breed,output:"full"}).then(function(e){var t,r=e.petfinder.pets;t=r&&r.pet?Array.isArray(r.pet)?r.pet:[r.pet]:[],o(t)})},[]),e.default.createElement("div",{className:"search"},a.map(function(t){var r;return r=Array.isArray(t.breeds.breed)?t.breeds.breed.join(", "):t.breeds.breed,e.default.createElement(n.default,{animal:t.animal,key:t.id,name:t.name,breed:r,media:t.media,location:"".concat(t.contact.city,", ").concat(t.contact.state),id:t.id})}))}function b(t){return e.default.createElement(r.Consumer,null,function(r){return e.default.createElement(m,u({},t,{searchParams:r}))})}
},{"react":"n8MK","petfinder-client":"HC7O","./SearchContext":"EVQ7","./Pet":"kyKK"}]},{},[], null)
//# sourceMappingURL=/Results.bde8e2eb.js.map