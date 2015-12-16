// ==UserScript==
// @name          Facebook noir
// @namespace     https://github.com/Kaotic/DarkFacebook
// @version       0.1
// @description   Facebook en noir
// @author        Kaotic
// @match         https://www.facebook.com/*
// @grant         none
// @run-at        document-end
// ==/UserScript==

function AddStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


AddStyle('._li._li._li {overflow: initial; background-color: #333 !important; }');
AddStyle('._5cop ._59fb {background-image: url(/rsrc.php/v2/yU/r/zgsQ2jX5rpz.png); background-repeat: no-repeat; background-size: auto; background-position: -21px -1438px; margin-top: 8px;}');
AddStyle('._3nzl a.jewelButton {background-image: url(/rsrc.php/v2/yU/r/zgsQ2jX5rpz.png); background-repeat: no-repeat; background-size: auto; background-position: 0 -1093px;}');
AddStyle('._1z4y a.jewelButton {background-image: url(/rsrc.php/v2/yU/r/zgsQ2jX5rpz.png); background-repeat: no-repeat; background-size: auto; background-position: 0 -700px;}');
AddStyle('._4xi2.east a.jewelButton {background-image: url(/rsrc.php/v2/yU/r/zgsQ2jX5rpz.png); background-repeat: no-repeat; background-size: auto; background-position: 0px -1346px;}');

AddStyle('._5vb_, ._5vb_ #contentCol { background-color: #333 !important; }');
AddStyle('._5vb_.hasLeftCol #leftCol { background-color: #eee !important; }');
AddStyle('#blueBarNAXAnchor, .titlebar { background-color: black !important; background-image: none !important; border: thin solid black !important;}');
