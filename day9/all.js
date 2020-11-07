const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    let console={
        isDev:true,
        log(...args){
            if(!this.isDev){return};
            window.console.log('%c跨殺小','font-size:60px;color:red')
            window.console.log(...args);
        },
        warn(...args){
            window.console.warn(...args);
        },
        error(...args){
            if(!this.isDev){return};
            window.console.error(...args);
        },
        assert(...args){
          if(!this.isDev){return};
            window.console.assert(...args);
        }
    }

    let name ='jan';

    // Regular
    console.log(123,456);

    // Interpolated
    // console.log('Hello I am a %s string!', '💩');

    console.log('my name is %s','jan');
    console.log('i have %f dollars',3.45);
    console.log('i have %d dollars',3.45);//整數

    console.log(`my name is ${name}`);

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    // console.warn('OH NOOO');
    console.warn('警告');

    // Error :|
    // console.error('Shit!');
    console.error('錯誤');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    // const p = document.querySelector('p');

    // console.assert(p.classList.contains('ouch'), 'That is wrong!');

    //如果前方為錯，給予後面的提示
    console.assert(false,'訊息');
    console.assert('','訊息');
    console.assert(undefined,'訊息');
    console.assert(NaN,'訊息');
    console.assert(null,'訊息');
    console.assert(0,'訊息')

    // clearing
    //control+L
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);