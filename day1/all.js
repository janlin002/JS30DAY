(function(){
    window.addEventListener('keydown',playMusic);

    function playMusic(e){
        //play music
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(audio) {
            audio.currentTime=0;//連續播放
            audio.play();
        }
        //dom style
        const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(dom )dom.classList.add('playing');

        console.log(audio,dom);

        document.querySelectorAll('.key').forEach(function(key){
            key.addEventListener('transitionend',transitionHandler)
        })
        function transitionHandler(e){
            if(e.propertyName === 'transform'){
                e.currentTarget.classList.remove('playing');
            }
        }
    }
})()