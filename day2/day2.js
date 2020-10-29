(function(){
    const second=document.querySelector('.second-hand');
    const min=document.querySelector('.min-hand');
    const hour=document.querySelector('.hour-hand');

    function setClock(){
        let data=new Date();

        let secondDeg=data.getSeconds()*6//(360/6)
        let minDeg=data.getMinutes()*6//(360/6)
        let hourDeg=data.getHours()*30//(360/12)

        second.style.transform=`rotate(${secondDeg}deg)`;
        min.style.transform=`rotate(${minDeg}deg)`;
        hour.style.transform=`rotate(${hourDeg}deg)`;
    }
    setClock();//初始化畫面

    

    //計時器方法


    // setInterval(setClock,1000); //設定間隔，持續執行


    setTimeout(timeoutHandler,1000); //設定延遲，執行一次

    function timeoutHandler(){
        setClock();
        setTimeout(timeoutHandler,1000)//持續執行
    }

    
    // function animationHandler(){
    //     setClock();
    //     window.requestAnimationFrame(animationHandler)
    // }
    // window.requestAnimationFrame(animationHandler) //處理畫面更新的setTimeout





})()