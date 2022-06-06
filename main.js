let button = document.getElementById("button");
let n;
let result;
let password = "";
let charl= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let charm = charl + "0123456789";
let charh = charm + "`!?$?%^&*()_-+={[}]:;@'~#|\\<,>.?/";
let difficulty = {
    "low":charl,
    "medium":charm,
    "high":charh
}
function generatePassword (n,diff){
    for (let i = 0; i<n;i++){
        let c = diff.charAt(Math.floor(Math.random()*diff.length));
        password +=c; 
    }
    return password;
}
button.addEventListener("click",()=>{
    password = "";
    n = parseInt(document.getElementById("numchar").value);
    let v = document.getElementById("difficulty");
    result = generatePassword(n, difficulty[v.value]);
    document.getElementById("pass").innerText = result;
    navigator.clipboard.writeText(result);
})



