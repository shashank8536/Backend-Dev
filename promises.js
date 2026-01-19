function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login");
            resolve();
        },2000);
    })
}

function userDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve();
        },1000);
    })
}
login().then(()=>{
    return userDetails
})
.then(()=>{
    console.log("all task done")
}).catch(()=>{
    console.log("error");
})