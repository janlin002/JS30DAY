let li = document.querySelectorAll('.li');

let d = [...li].map(item=>item.dataset.time).map(item=>{
    let [min,sec] = time.split(':');
    return min*60+sec*1;
}).reduce((prev,next)=>prev+next,0);
console.log(d);

// sec=>min=>hour
let sec=d%60;
let min=((d-sec)/60)%60;
let hour=(d-min*60-sec)/3600;

//hour=>min=>sec
 

let hour = Math.floor(d/3600);
let min =Math.floor(d%3600)/60;
let sec = d&60;
