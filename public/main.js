const user= document.getElementById("username");
const password=document.getElementById("pass");
const cPass= document.getElementById("c-pass");
const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", callBack)

function callBack(event){
    console.log(user.value);
    console.log(password.value);
    console.log(cPass.value);


    
    if (user.value ==="" || password.value==="" || cPass.value==="" || password.value !== cPass.value){
        alert("fuck you")
    }
    else{
        const data = {
            username: user.value,
            password: password.value,
            cPass: cPass.value
        }

        fetch("http://localhost:3303/signup", {
            method: "POST",
            headers:{
                "Content-Type": 'application/json'
            },
            
            body: JSON.stringify(data)
        }).then(() => { console.log("Response granted") })
        .catch(err => console.log(err));
    }

}
