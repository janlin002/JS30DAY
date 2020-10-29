;(function(){
    const inputs =document.querySelectorAll('.controls input');

    function changeHandler(){

        // console.log(this.name,this.value);

        switch(this.name){
            case 'spacing':
                document.querySelector('img').style.padding=this.value+'px'
                break
            case 'blur':
                document.querySelector('img').style.filter=`blur(${this.value}px)`
                break
            case 'base':
                document.querySelector('img').style.background=this.value
                document.querySelector('.hl').style.color=this.value
                break
        }
    }
    
    inputs.forEach(function(input){
        input.addEventListener('change',changeHandler);
        input.addEventListener('mousemove',changeHandler);
    })

    
})();





// let spacing=document.querySelector('#spacing');
    // let blur=document.querySelector('#blur');
    // let base=document.querySelector('#base');