/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.0.1 - 2014
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser=function(k){var l=document.getElementById("outdated");var f=document.getElementById("btnCloseUpdateBrowser");var h=document.getElementById("btnUpdateBrowser");this.defaultOpts={bgColor:"#F25648",color:"#ffffff",lowerThan:"transform"};if(k){this.defaultOpts.bgColor=k.bgColor,this.defaultOpts.color=k.color;if(k.lowerThan=="IE8"||k.lowerThan=="borderSpacing"){k.lowerThan="borderSpacing"}else{if(k.lowerThan=="IE9"||k.lowerThan=="boxShadow"){k.lowerThan="boxShadow"}else{if(k.lowerThan=="IE10"||k.lowerThan=="transform"||k.lowerThan==""||typeof k.lowerThan==="undefined"){k.lowerThan="transform"}else{if(k.lowerThan=="IE11"||k.lowerThan=="borderImage"){k.lowerThan="borderImage"}}}}this.defaultOpts.lowerThan=k.lowerThan;bkgColor=this.defaultOpts.bgColor;txtColor=this.defaultOpts.color;cssProp=this.defaultOpts.lowerThan}else{bkgColor=this.defaultOpts.bgColor;txtColor=this.defaultOpts.color;cssProp=this.defaultOpts.lowerThan}var a=true;function g(i){l.style.opacity=i/100;l.style.filter="alpha(opacity="+i+")"}function d(i){g(i);if(i==1){l.style.display="none";a=true}}function e(i){g(i);if(i==1){l.style.display="block"}if(i==100){a=true}}function c(m,i){return(" "+m.className+" ").indexOf(" "+i+" ")>-1}var j=(function(){var n=document.createElement("div"),m="Khtml Ms O Moz Webkit".split(" "),i=m.length;return function(o){if(o in n.style){return true}o=o.replace(/^[a-z]/,function(p){return p.toUpperCase()});while(i--){if(m[i]+o in n.style){return true}}return false}})();if(!j(""+cssProp+"")){if(a&&l.style.opacity!=="1"){a=false;for(var b=1;b<=100;b++){setTimeout((function(i){return function(){e(i)}})(b),b*10)}}f.onmousedown=function(){l.style.display="none";return false}}l.style.backgroundColor=bkgColor;l.style.color=txtColor;h.style.color=txtColor;h.style.borderColor=txtColor;f.style.color=txtColor;h.onmouseover=function(){this.style.color=bkgColor;this.style.backgroundColor=txtColor};h.onmouseout=function(){this.style.color=txtColor;this.style.backgroundColor=bkgColor}};


/*--------------------------------------------------------------------
 svg4everybody.min.js
-----------------------------------------------------------------------*/
(function(e,t,n,r,i){function s(t,n){if(n){var r=n.getAttribute("viewBox"),i=e.createDocumentFragment(),s=n.cloneNode(true);if(r){t.setAttribute("viewBox",r)}while(s.childNodes.length){i.appendChild(s.childNodes[0])}t.appendChild(i)}}function o(){var t=this,n=e.createElement("x"),r=t.s;n.innerHTML=t.responseText;t.onload=function(){r.splice(0).map(function(e){s(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})};t.onload()}function u(){var i;while(i=t[0]){var a=i.parentNode,f=i.getAttribute("xlink:href").split("#"),l=f[0],c=f[1];a.removeChild(i);if(l.length){var h=r[l]=r[l]||new XMLHttpRequest;if(!h.s){h.s=[];h.open("GET",l);h.onload=o;h.send()}h.s.push([a,c]);if(h.readyState===4){h.onload()}}else{s(a,e.getElementById(c))}}n(u)}if(i){u()}})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent));


/*--------------------------------------------------------------------
 alexdiliberto.com scripts
-----------------------------------------------------------------------*/
$(document).ready(function() {
  outdatedBrowser({
    bgColor: '#f25648',
    color: '#ffffff',
    lowerThan: 'transform'
  });

  $("a.top-link").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
