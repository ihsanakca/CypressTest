
function getNumber(currency){
    return new Promise((resolve,reject)=>{
        if(typeof currency != "number"){
            reject(new Error("Currency is not a number!!!"))
        }else{
            resolve(currency)
        }
    })

}

getNumber(500).then((val)=>{
    console.log("val",val)
})