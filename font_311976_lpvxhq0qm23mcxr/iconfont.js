(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-combinedshapefuben" viewBox="0 0 1024 1024">'+""+'<path d="M254.0544 37.888c-7.5776-7.5776-18.944-3.7888-26.5216 3.7888-3.7888 7.5776-3.7888 18.944 3.7888 26.5216l534.7328 447.488L231.3216 967.0656c-7.5776 7.5776-7.5776 18.944-3.7888 26.5216 7.5776 7.5776 18.944 7.5776 26.5216 3.7888l553.6768-466.5344c7.5776-7.5776 11.3664-18.944 3.7888-26.5216"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-zuoyou" viewBox="0 0 1024 1024">'+""+'<path d="M777.852493 536.854152L304.163273 1010.543372a41.882758 41.882758 0 0 1-59.241012-59.241012l448.846215-448.846214L259.334389 67.942434A39.812508 39.812508 0 0 1 315.629275 11.647547l450.438715 450.438716a39.255133 39.255133 0 0 1 8.997627 14.412127c0.79625 0.716625 1.990625 0 2.786876 1.194376a41.882758 41.882758 0 0 1 0 59.161386z" fill="#777D90" ></path>'+""+"</symbol>"+""+'<symbol id="icon-zuoyou1" viewBox="0 0 1024 1024">'+""+'<path d="M246.148 487.146l473.689-473.689c7.581-7.581 18.053-12.269 29.621-12.269 23.135 0 41.89 18.755 41.89 41.89 0 11.568-4.689 22.040-12.269 29.621l-448.846 448.846 434.434 434.514c6.915 7.152 11.176 16.908 11.176 27.658 0 21.988-17.825 39.813-39.813 39.813-10.751 0-20.506-4.261-27.669-11.186l-450.428-450.428c-5.447-5.544-9.262-12.708-10.658-20.703 0.864 5.573-0.33 6.291-1.127 5.097-7.558-7.576-12.232-18.032-12.232-29.581 0-11.548 4.674-22.005 12.233-29.581z" fill="#777D90" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)