(function(){
    let canvas = document.querySelector('#draw');
    let drawing=false;
    let x=0;
        y=0;
    let ctx = canvas.getContext("2d");
    let lineWidth=20;
    let colorDeg=0;
    let direction=-1;
    // ctx.strokeStyle=`hsl(${colorDeg},100%,50%)`;
    ctx.lineWidth=lineWidth;
    ctx.lineCap='round';
    ctx.lineJoin='round';

    canvas.addEventListener('mousedown',(e)=>{
        console.log(e);
        drawing=true;
        [x,y]=[e.offsetX,e.offsetY];
    })
    canvas.addEventListener('mousemove',(e)=>{
        if(!drawing){return};
        console.log(draw);

        ctx.beginPath();
        colorDeg = colorDeg < 360 ? colorDeg+1 : 0;
        ctx.strokeStyle=`hsl(${colorDeg},100%,50%)`;

        if(lineWidth<1 || lineWidth>50){
            direction*=-1;
        };

        lineWidth += direction;

        ctx.lineWidth=lineWidth;
        
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        [x,y]=[e.offsetX,e.offsetY];
        ctx.stroke();
    })
    canvas.addEventListener('mouseup',()=>{
        drawing=false;
    })
    // canvas.addEventListener('mouseout',()=>{

    // })
    canvas.addEventListener('mouseleave',()=>{
        drawing=false;
    })
})();