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
            console.log("userDetails");
        },1000);
    })
}
function password(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
            console.log("password");
        }, (4000));
    })
}

async function demo(){
    try{
        await login();
        await userDetails();
        await password();

    }catch(error){
        console.log("error",error);
    }

    console.log("all task done")
}
demo();