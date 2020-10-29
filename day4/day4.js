const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
   // Array.prototype.filter()
    1. Filter the list of inventors for those who were born in the 1500's （15年出生的人）

    // const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    // console.table(fifteen);

    let ans=inventors.filter(function(inventors){
        return inventors.year>=1500 && inventors.year<1600;
    })
    console.table(ans);

   

    // Array.prototype.map()
    2. Give us an array of the inventor first and last names （名字陣列）

    // const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    // console.log(fullNames);

    let ans =inventors.map(function(inventors){
        return inventors.first+''+inventors.last;
    })
    console.table(ans);

    let ans=[];
    inventors.forEach(function(inventors){
        return ans.push(inventors.first+''+inventors.last);
    })

    // Array.prototype.sort()
    3. Sort the inventors by birthdate, oldest to youngest （年紀大到年紀輕）
    // const ordered = inventors.sort(function(a, b) {
    //   if(a.year > b.year) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    // const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    // console.table(ordered);

    let ans=inventors.sort(function(a,b){
        return a.year-b.year;
    })
    console.table(ans);


    // Array.prototype.reduce()
    4. How many years did all the inventors live? （全部人的年齡加總）


    // const totalYears = inventors.reduce((total, inventor) => {
    //   return total + (inventor.passed - inventor.year);
    // }, 0);
    // console.log(totalYears);

    過去解法
    let total=0;
    inventors.forEach(function(inventors){
        total+=inventors.passed-inventors.year;
    })
    console.log(total);

    現在解法
    let total=inventors.reduce(function(total,inventors){
        return total+inventors.passed-inventors.year;
    },0)
    console.log(total);



    5. Sort the inventors by years lived （年齡排序）
    // const oldest = inventors.sort(function(a, b) {
    //   const lastInventor = a.passed - a.year;
    //   const nextInventor = b.passed - b.year;
    //   return lastInventor > nextInventor ? -1 : 1;
    // });
    // console.table(oldest);

    let ans=inventors.sort(function(a,b){
        return (a.passed-a.year)-(b.passed-b.year);
    })
    console.table(ans);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    // 7. sort Exercise
    Sort the people alphabetically by last name （按字母排序）
    // const alpha = people.sort((lastOne, nextOne) => {
    //   const [aLast, aFirst] = lastOne.split(', ');
    //   const [bLast, bFirst] = nextOne.split(', ');
    //   return aLast > bLast ? 1 : -1;
    // });
    // console.log(alpha);

    let ans =people.sort(function(a,b){
        let [aFirst,aLast]=a.split(',');
        let [bFirst,bLast]=b.split(',');

        return aLast>bLast ? 1 : bLast>aLast ? -1 : 0;
    })
    console.table(ans);

    8. Reduce Exercise(轉換成物件)
    // Sum up the instances of each of these
    // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    // const transportation = data.reduce(function(obj, item) {
    //   if (!obj[item]) {
    //     obj[item] = 0;
    //   }
    //   obj[item]++;
    //   return obj;
    // }, {});

    // console.log(transportation);

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    let ans=data.reduce(function(obj,content){
        if(!obj[content]){
            obj[content]=1
        }else{
            obj[content]+=1
        }
        return obj;
    },{})
    console.log(ans);
