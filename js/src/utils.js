NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var e=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var i=location.hash;""!==i&&($(e+'li:has(a[href="'+i+'"])').addClass("active").siblings().removeClass("active"),$(i).addClass("active").siblings().removeClass("active"))}).trigger("hashchange")}),$(e+".tab").on("click",function(e){if(e.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active"),""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){27===e.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",window.pageYOffset>50);var i=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),t=Math.round(100*i),n=t>100?100:t;$("#scrollpercent>span").html(n)}),e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe"),i=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function t(e){return{width:e.width(),height:e.height()}}function n(e,i){return i/e*100}e.each(function(){var e,s=$(this),o=t(s);if(this.src.search(i)>0){var a=n(o.width,o.height);s.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var r=document.createElement("div");if(r.className="fluid-vids",r.style.position="relative",r.style.marginBottom="20px",r.style.width="100%",r.style.paddingTop=a+"%",""===r.style.paddingTop&&(r.style.paddingTop="50%"),this.parentNode.insertBefore(r,this),r.appendChild(this),this.src.search("music.163.com")>0)((e=t(s)).width>o.width||e.height<o.height)&&(r.style.paddingTop=n(e.width,o.height)+"%")}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height();return e>i?e-i:$(document).height()-i},getSidebarb2tHeight:function(){return CONFIG.sidebar.b2t?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var e="block"==$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width();return this.isPisces()||this.isGemini()?2*t+e+2*CONFIG.sidebar.offset+this.getSidebarb2tHeight():2*t+e/2}},$(document).ready(function(){function e(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}!function(){var i;$(window).on("resize",function(){i&&clearTimeout(i),i=setTimeout(function(){var i=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();e(i)},0)});var t=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+t+"px)");$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+t+"px)");e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}()});