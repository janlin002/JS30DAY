;(function(){
    const checkboxes=Array.from(
        document.querySelectorAll('.inbox input[type="checkbox"]')
    )

    let lastCheck=null;

    
     function clickhandler(e){
         if(this.checked){
            if(e.shiftKey&&lastCheck !== null){
                let nowCheck =checkboxes.indexOf(this);
                checkboxes
                .slice(
                    Math.min(nowCheck,lastCheck),
                    Math.max(nowCheck,lastCheck)
                )
                .forEach(input=>(input.checked=true));
            }
            lastCheck=checkboxes.indexOf(this);
         }else{
             lastCheck=null;
         }
        
     }
    checkboxes.forEach(function(input){
        input.addEventListener('click',clickhandler);
    })

})();








// 原作者的程式碼
// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// function handleCheck(e) {
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

