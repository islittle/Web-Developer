注释：我们都知道scroll，resize是一个非常消耗内存的两个事件，因为要事实监控，只要改变就会渲染页面。这样低版本的浏览器可能
因此会造成假死。可以用下面的方法进行优化。  
//resize          
var resizeTimer = null;       
window.onresize=function(){         
  if (resizeTimer) {
      clearTimeout(resizeTimer)           
    }             
    resizeTimer = setTimeout(function(){            
        alert(0);               
     }, 400);           
}                       
//scroll 也一样             
var scrollTimer = null;                         
$(window).on('scroll',function(){                           
   if (scrollTimer) {
        clearTimeout(scrollTimer)
    }
    scrollTimer = setTimeout(function(){
        $('div:eq(1)').animate({                  
          top:$(document).scrollTop()+($(window).height())/2;                     
        })          
     }, 300);             
}) 

注意：心细的会发现上面是两种写法。但是用法是一样的。因为jquery的事件中，没有带有on----什么的。
