/*--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.0.0 - 2014
author:     Burocratik
website:    http://www.burocratik.com
 outdatedBrowser.min.js
-----------------------------------------------------------------------*/
var outdatedBrowser=function(o){function t(o){r.style.opacity=o/100,r.style.filter="alpha(opacity="+o+")"}function e(o){t(o),1==o&&(r.style.display="block"),100==o&&(a=!0)}var r=document.getElementById("outdated"),l=document.getElementById("btnClose"),n=document.getElementById("btnUpdate");this.defaultOpts={bgColor:"#F25648",color:"#FFF",lowerThan:"IE10"},o?(this.defaultOpts.bgColor=o.bgColor,this.defaultOpts.color=o.color,"IE8"==o.lowerThan||"borderSpacing"==o.lowerThan?o.lowerThan="borderSpacing":"IE9"==o.lowerThan||"boxShadow"==o.lowerThan?o.lowerThan="boxShadow":"IE10"==o.lowerThan||"transform"==o.lowerThan||""==o.lowerThan||"undefined"==typeof o.lowerThan?o.lowerThan="transform":("IE11"==o.lowerThan||"borderImage"==o.lowerThan)&&(o.lowerThan="borderImage"),this.defaultOpts.lowerThan=o.lowerThan,bkgColor=this.defaultOpts.bgColor,txtColor=this.defaultOpts.color,cssProp=this.defaultOpts.lowerThan):(bkgColor=this.defaultOpts.bgColor,txtColor=this.defaultOpts.color,cssProp=this.defaultOpts.lowerThan);var a=!0,s=function(){var o=document.createElement("div"),t="Khtml Ms O Moz Webkit".split(" "),e=t.length;return function(r){if(r in o.style)return!0;for(r=r.replace(/^[a-z]/,function(o){return o.toUpperCase()});e--;)if(t[e]+r in o.style)return!0;return!1}}();if(!s(""+cssProp)){if(a&&"1"!==r.style.opacity){a=!1;for(var i=1;100>=i;i++)setTimeout(function(o){return function(){e(o)}}(i),10*i)}l.onmousedown=function(){return r.style.display="none",!1}}r.style.backgroundColor=bkgColor,r.style.color=txtColor,n.style.color=txtColor,n.style.borderColor=txtColor,n.onmouseover=function(){this.style.color=bkgColor,this.style.backgroundColor=txtColor},n.onmouseout=function(){this.style.color=txtColor,this.style.backgroundColor=bkgColor}};


/*--------------------------------------------------------------------
 svg4everybody.min.js
-----------------------------------------------------------------------*/
(function(e,t,n,r,i){function s(t,n){if(n){var r=n.getAttribute("viewBox"),i=e.createDocumentFragment(),s=n.cloneNode(true);if(r){t.setAttribute("viewBox",r)}while(s.childNodes.length){i.appendChild(s.childNodes[0])}t.appendChild(i)}}function o(){var t=this,n=e.createElement("x"),r=t.s;n.innerHTML=t.responseText;t.onload=function(){r.splice(0).map(function(e){s(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})};t.onload()}function u(){var i;while(i=t[0]){var a=i.parentNode,f=i.getAttribute("xlink:href").split("#"),l=f[0],c=f[1];a.removeChild(i);if(l.length){var h=r[l]=r[l]||new XMLHttpRequest;if(!h.s){h.s=[];h.open("GET",l);h.onload=o;h.send()}h.s.push([a,c]);if(h.readyState===4){h.onload()}}else{s(a,e.getElementById(c))}}n(u)}if(i){u()}})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent));


/*--------------------------------------------------------------------
 alexdiliberto.com scripts
-----------------------------------------------------------------------*/
$(document).ready(function() {
  outdatedBrowser({
    bgColor: '#3f3f3f',
    color: '#e3e3e3',
    lowerThan: 'IE10'
  });

  $("a.top-link").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
