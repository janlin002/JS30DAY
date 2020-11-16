// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }




    function scrollHandler(){
      // console.log("scroll",new Date().getTime());
      
      let windowTop =window.scrollY;//螢幕頂層
      let windowBottom =windowTop + innerHeight;//螢幕底層
      let img=document.querySelector('img')
      let image = document.querySelectorAll('img')


      

      //中段
      image.forEach((img)=>{
        let imgMiddle = img.offsetTop + (img.height/2);
        if(imgMiddle < windowBottom && imgMiddle > windowTop){
          img.classList.add('active');
        }else{
          img.classList.remove('active');
        }
      })


      //頭
      // if(img.offsetTop<windowBottom){
      //   img.classList.add('active');
        //classList用於取得class屬性
      // }


      //尾
      // if(img.offsetTop +img.height<windowBottom){
      //   img.classList.add('active');
        //classList用於取得class屬性
      // }



    }

    window.addEventListener("scroll",scrollHandler);
  

