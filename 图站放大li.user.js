// ==UserScript==
// @name         图站放大li
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yande.re/post*
// @match        https://konachan.com/post*
// @match        *konachan.net/post*
// @grant        none
// @updateURL    https://ohshitnima.github.io/图站放大li.user.js

// ==/UserScript==

(function() {
    'use strict';

    var wswm$=jQuery.noConflict();
    var scale_wswm = 2;
    var content_width=wswm$("div.content").width();
    console.log(content_width);

    //计算缩放比
    var int_num = (content_width-content_width%320)/320;
    if(int_num<2){
        wswm$("div.sidebar").css("width","15%");
        wswm$("div.content").css("width","80%");
        content_width=wswm$("div.content").width();
        int_num = (content_width-content_width%320)/320;
        scale_wswm = content_width/320;
    }
    else{
        scale_wswm= 2+(content_width%320)/(int_num*320);
    }

    var width_wswm=150*scale_wswm;
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
    });
    removeads();

    function removeads(){wswm$('iframe').remove();}
    function gettags(ele){
        var tags = wswm$(ele).attr("alt").replace(/Rating:.*Tags: | User:.*/,"").replace(/ User:.*/,"");
        return tags;
    }
    function getid(ele){
        var id = wswm$(ele).parent().attr("href").replace(/\/post\/show\//,"");
        console.log(id);
    }
    function resrc(ele){
        var resrc = wswm$(ele).attr('src').replace(/assets\.yande\.re\/data\/preview\/.*\/.*\//,'files.yande.re/sample/');
        resrc = resrc.replace(/(\.)jpg|png/,"/yande.re%20"+ getid(ele)+"%20sample%20"+gettags(ele)+".jpg");
        wswm$(ele).attr("src",resrc);
    }

    // Your code here...
})();
