const clock = document.getElementById('clock');


// this setInterval use for, how much time required to update the clock time.
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)   // here 1000 is mili-second, it means 1 second