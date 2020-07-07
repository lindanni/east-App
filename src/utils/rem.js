//使用js将px -> rem 
function font () {
    /* 
      什么时候除以3.75 ？ 什么时候除以7.5？
        1. 蓝湖上使用    3.75 
        2. psd设计稿的搞   7.5
    */
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75  + 'px'
  }
  
  //项目第一次加载  px就需要转成rem 
  font()
  
  window.onresize = font 