var rellax=new Rellax(".rellax");const animatedItems=document.querySelectorAll("._animated-items");if(animatedItems.length>0){function animationOnScroll(e){for(let e=0;e<animatedItems.length;e++){const t=animatedItems[e],n=t.offsetHeight,i=offset(t).top,o=4;let l=window.innerHeight-n/o;n>window.innerHeight&&(l=window.innerHeight-window.innerWidth/o),pageYOffset>i-l&&pageYOffset<i+n?t.classList.add("_active"):t.classList.remove("_active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}window.addEventListener("scroll",animationOnScroll),animationOnScroll()}