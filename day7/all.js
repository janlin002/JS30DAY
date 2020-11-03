
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19?
      // const isAdult = people.some(function(person) {
      //   const currentYear = (new Date()).getFullYear();
      //   if(currentYear - person.year >= 19) {
      //     return true;
      //   }
      // });


      //Array.prototype.some()

      const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
  
      console.log({isAdult});

      const ans=people.some(people=>{
        return new Date().getFullYear()-people.year>=19;
    });
    console.log(ans);

      // Array.prototype.every() // is everyone 19?
  
      const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
      console.log({allAdults});

      
      // Array.prototype.find() 
      // 找到就停，相同的只會顯示一個
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
    
      const ans2=comments.find(comments=>{
          return comments.id==823423;
      })
      console.log(ans2)
  
      const comment = comments.find(comment => comment.id === 823423);
  
      console.log(comment);
  
      // Array.prototype.findIndex() 找排序
      // 找到就停，相同的只會顯示一個
      // Find the comment with this ID
      // delete the comment with the ID of 823423

      const ans3=comments.findIndex(comments=>{
          return comments.id==823423;
      })
      console.log(ans3);


      const index = comments.findIndex(comment => comment.id === 823423);
      console.log(index);
  
      // comments.splice(index, 1);
  
      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];
      
      //slice 直接對原資料動手腳
      const ans4= comments.splice(ans3,1);
      console.log(ans4);

      //splice 複製一份新的資料
    
      const ans5=comments.splice(0,ans3);
      const ans6=comments.splice(ans3+1);

      const ans7=[
          ...ans5,...ans6
      ]
      console.log(ans7,comments);



    