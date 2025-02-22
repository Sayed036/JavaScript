const buttons = document.querySelectorAll(".button")
const body =  document.body
// console.log(buttons);

buttons.forEach( function(button) {
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id; // in this id = "grey"
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id; // in this id = "white"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id; // in this id = "blue"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id; // in this id = "yellow"
        }

    })
} )