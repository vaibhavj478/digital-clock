let a= new Date();
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a= new Date();

time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
date= a.toLocaleDateString(undefined ,options);

document.getElementById("time-1").innerHTML=

time ;

document.getElementById("time-2").innerHTML=
"on "+date;
}, 1000);

