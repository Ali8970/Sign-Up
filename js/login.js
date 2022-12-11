// fetch("https://goldblv.com/api/hiring/tasks/register").then((result)=>{
//     let data = result.json();
//     console.log(data);
// });

document.getElementById("submit").onsubmit = function(){
    let userNameInput = document.getElementById("username").value;
    let userNameRegex = /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z]$/;
    let validInput = userNameRegex.test(userNameInput)
    if(validInput === false){
        alert("In UserName input only letters and numbers are allowed, with no numbers at the beginning or the end.");
        return false;
    }
    // window.location="../successlogin/index.html";
    return true;
}

function passValue(){
    let emailInput = document.getElementById("email").value;
    localStorage.setItem("email",emailInput);
    return false;
}

