;(function(){

    let panels = document.querySelectorAll('.panel');

    panels.forEach(function(panel){
        panels.addEventListener('click',clickHandler)
    })

    function clickHandler(){
        this.classList.toggle('open');
    }


})()