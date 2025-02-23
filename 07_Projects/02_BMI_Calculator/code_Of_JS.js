const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value) // to get the height value, this is string we need to convert in int using parseInt
    const weight = parseInt(document.querySelector('#weight').value) // to get the weight value, this is string we need to convert in int using parseInt
    const results = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter the valid height";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter the valid weight";
    }
    else{
        const BMI = (weight / ((height*height) / 10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${BMI}</span>`
        console.log("\n");
        if(BMI < "18.6"){
            weight_guide.innerHTML = "Under Weight"
        }
        else if (BMI >= "18.6" && BMI <= "24.9"){
            weight_guide.innerHTML = "Normal Range"
        }
        else{
            weight_guide.innerHTML = "Over Weight";
        }
    }
})