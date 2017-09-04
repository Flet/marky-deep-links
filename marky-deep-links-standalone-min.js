(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var rehash=require(".");rehash();

},{".":2}],2:[function(require,module,exports){
function markyDeepLinks(e){hashchange.update(function(n){var a=e||"user-content-";if(0===n.indexOf(a))hashchange.updateHash(n.replace(a,""));else{var o=document.getElementById(a+n);o&&window.scrollTo(window.scrollX,o.getBoundingClientRect().top+window.scrollY)}}),domReady(function(){hashchange.update()})}module.exports=markyDeepLinks;var hashchange=require("hashchange"),domReady=require("detect-dom-ready");

},{"detect-dom-ready":4,"hashchange":7}],3:[function(require,module,exports){
module.exports=function(r,e){if(r.indexOf)return r.indexOf(e);for(var n=0;n<r.length;++n)if(r[n]===e)return n;return-1};

},{}],4:[function(require,module,exports){
module.exports=require("./lib/detect-dom-ready");

},{"./lib/detect-dom-ready":5}],5:[function(require,module,exports){
"use strict";module.exports=function(t){if(document.addEventListener)document.addEventListener("DOMContentLoaded",function(){t()},!1);else if(document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"!==document.readyState||t()}),document.documentElement.doScroll&&window===window.top)){try{document.documentElement.doScroll("left")}catch(e){return void t()}return void t()}};

},{}],6:[function(require,module,exports){
var hasOwn=Object.prototype.hasOwnProperty,toString=Object.prototype.toString;module.exports=function(t,r,o){if("[object Function]"!==toString.call(r))throw new TypeError("iterator must be a function");var e=t.length;if(e===+e)for(var n=0;n<e;n++)r.call(o,t[n],n,t);else for(var a in t)hasOwn.call(t,a)&&r.call(o,t[a],a,t)};

},{}],7:[function(require,module,exports){
var each=require("each"),indexOf=require("indexof"),getFragment=function(n){return(n=n||window.location.href).replace(/^[^#]*#?(.*)$/,"$1")},HashChange=function(){var n=this;return this.onChangeCallbacks=[],window.addEventListener("hashchange",function(e){n.hashChanged(getFragment(e.newURL))},!1),this};HashChange.prototype={update:function(n){if(n)return this.onChangeCallbacks.push(n),this;this.hashChanged(getFragment())},unbind:function(n){var e=indexOf(this.onChangeCallbacks,n);return-1!==e&&this.onChangeCallbacks.splice(e-1,1),this},updateHash:function(n){this.currentHash=n,window.location.href=window.location.href.replace(/#.*/,"")+"#"+n},hashChanged:function(n){return this.onChangeCallbacks.length&&each(this.onChangeCallbacks,function(e){return e(n),!0}),this}},hashChange=new HashChange,module.exports=hashChange;

},{"each":6,"indexof":3}]},{},[1]);
