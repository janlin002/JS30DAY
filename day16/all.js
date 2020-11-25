(function(){
    document
    .querySelector('.hero')
    .addEventListener('mousemove',function(e){
        // console.log(e)
        let {offsetX,offsetY}=e;
        if(e.target !==this){
            offsetX+=e.target.offsetLeft;
            offsetY+=e.target.offsetTop;
        }
        let lengthX = Math.floor((offsetX / this.offsetWidth)*length)*2-length;
        let lengthY = Math.floor((offsetX / this.offsetHeight)*length)*2-length;

        text.style.textShadow =
       ${length*-1}px ${length*-1}px 5px rgba(255,0,0,1),

    })
})()