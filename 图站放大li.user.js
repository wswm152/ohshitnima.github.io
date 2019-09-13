// ==UserScript==
// @name         图站放大li
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yande.re/post*
// @match        https://konachan.com/post*
// @grant        none
// @updateURL    https://ohshitnima.github.io/图站放大li.user.js

// ==/UserScript==

(function() {
    'use strict';
    var scale_wswm = 2;
    var width_wswm=150*scale_wswm;
    var wswm$=jQuery.noConflict();
    wswm$("div.inner").css({"width":width_wswm+20+'px',"height": width_wswm+'px'});
    wswm$("ul#post-list-posts li").css("width",width_wswm+10+'px');
    wswm$("a.thumb img").each(function(){
        wswm$(this).css("width",wswm$(this).width()*scale_wswm);
        wswm$(this).css("height",wswm$(this).height()*scale_wswm);
                                        });
    wswm$("a.directlink").each(function(){
        wswm$(this).css("height",wswm$(this).height()*scale_wswm);
        wswm$(this).attr("target","_blank");
        wswm$(this).children(0).css("font-size",10*scale_wswm+"px");
    })
    // Your code here...
})();
