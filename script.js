const username = document.getElementById("singleForm1");
const password = document.getElementById("singleForm2");



// function login()
// {
//     console.log(username);
//     console.log(password);
// }

let validusername=false;
let validpass=false;

username.addEventListener("keyup",function(event){
    //console.log(username.value);
    if(username.value.length>0)
    {
        validusername=true;
    }
    else
    {
        validusername=false; 
    }
    // console.log(validusername);
    validcheck();
});
password.addEventListener("keyup",function(event){
    // console.log(password.value);
    if(password.value.length>5)
    {
        validpass=true;
    }
    else
    {
        validpass=false; 
    }
    // console.log(validpass);
    validcheck();
});

let valid=false;
function validcheck()
{
    if(validusername==true && validpass==true)
    {
        valid=true;
    }
    else
    {
        valid=false;
    }
    console.log(valid);
    ifitisvalid();
}

const loginbutton=document.getElementById("login");


function ifitisvalid()
{
    if(valid==true)
    {
        loginbutton.style.backgroundColor = "#0095f7";
        // loginbutton.disabled = false;
    }

    else{
        loginbutton.style.backgroundColor = "#B2DFFC";
        
    }
}

