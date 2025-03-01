// generate the random colours

const changingColors = function(){
    const hex = "0123456789ABCDEF";
    let colors  = "#";
    for(let i = 0; i<6; i++)
    {
        colors += hex[Math.floor(Math.random() * 16)]
    }
    return colors;
};

// console.log(changingColors());

const changeBG = function(){
    document.body.style.backgroundColor = changingColors();
};


let Interval_Id;
const startChangingColor = function(){
    console.log("STARTED");
    Interval_Id = setInterval(changeBG, 1000);
};


const stopChangingColor = function(){
    console.log("STOPPED");
    clearInterval(Interval_Id);
};

document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);

