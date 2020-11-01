;(function(){

    let panels = document.querySelectorAll('.panel');

    panels.forEach(function(panel){
        panel.addEventListener("click",clickHandler);
        panel.addEventListener("transitionend",transitionHandler)

    });

    function clickHandler(){
        this.classList.toggle("open");
    }

    function transitionHandler(e){
        if (e.propertyName.indexOf("flex") !== -1){
            this.classList.toggle("open-active");
        }
    };

})()