const secretCode=[68,65,86,73,68,49,50,51];
const input =[];
window.addEventListener('keyup',function(e){
    // console.log(e.key,e.keyCode);
    input.push(e.keyCode);
    if(input.join("|")===secretCode.join("|")){
        cornify_add();
    }
})