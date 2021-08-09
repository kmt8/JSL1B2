// UI
const   form = document.getElementById('form'),
        username = document.getElementById('username'),
        email = document.getElementById('email'),
        password = document.getElementById('password'),
        cfpassword = document.getElementById('confirm password');


// Event Listener ( Method 1 )
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     // console.log('hay');

//     if(username.value === ''){
//         showerror(username,'Username is required');
//     }else{
//         showsuccess(username);
//     }

//     if(email.value === ''){
//         showerror(email,'Email is required');
//     }else if(!validateEmail(email.value)){
//         showerror(email,'Email is not valid');
//     }else{
//         showsuccess(email);
//     }

//     if(password.value === ''){
//         showerror(password,'Password is required');
//     }else{
//         showsuccess(password);
//     }

//     if(cfpassword.value === ''){
//         showerror(cfpassword,'Confirm password is required');
//     }else if(password.value !== cfpassword.value){
//         showerror(cfpassword,"Password didn\'t match!");
//     }else{
//         showsuccess(cfpassword);
//     }
// });

function showerror(input,message){
    const formcontrol = input.parentElement;
        formcontrol.className = "form-control error";    
    // formcontrol.classList.add('error');

    const small = formcontrol.querySelector('small');
    small.textContent = message;

}

function showsuccess(input,message){
    const formcontrol = input.parentElement;
    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
    formcontrol.className = "form-control success";
}

// Check Email is valid
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is not valid');
    }
}

// Check Required Field
function checkrequired(inputarr){
    // console.log(inputarr);

    inputarr.forEach((input)=>{
        // console.log(input);
        // console.log(input.value);
        // console.log(input.id);
        if(input.value === ''){
            showerror(input,`${getfieldname(input)} is required`);
        }else{
            showsuccess(input);
        }
    });
}

// Get Field Name
function getfieldname(input){
    // console.log('hay');
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Check Input Length
function checklength(input,min,max){
    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
    }else{
        showsuccess(input);
    }
}

// Check Passwords Match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showerror(input2,"Password didn\'t' match");
    }
}

// Event Listener ( Method 2 )
form.addEventListener('submit',(e)=>{    
    e.preventDefault();
    // console.log('hay');

    checkrequired([username,email,password,cfpassword]);

    checklength(username,3,15);
    checklength(password,6,15);
    checkemail(email);
    checkpasswordsmatch(password,cfpassword);
});