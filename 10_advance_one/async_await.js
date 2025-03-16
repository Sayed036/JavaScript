
async function Wheather() { 
    let Kolkata_Wheather = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree")
        }, 1000);
} )

    let Jalpaiguri_Wheather = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("19 Degree")
        }, 10000)
    })

    console.log("Kolkata wheater is loading. please wait....")
    let KolkataW = await Kolkata_Wheather
    console.log("Kolkata wheater is feched" + KolkataW)

    console.log("Jalpaiguri  wheater is loading. please wait....") 
    let JalpaiguriW = await Jalpaiguri_Wheather
    console.log("Jalpaiguri wheater is feched" + JalpaiguriW)


    return [KolkataW, JalpaiguriW]

}

let a = Wheather()
// console.log(a)
a.then((val)=> {
    console.log(val);
    
}) 

// soul().then( (x)=>{
//     alert(x)
// } )

