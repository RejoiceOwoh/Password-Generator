let password = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '!', '@', '#', '$', '%','^', '&', '*', '(', ')', '_', '-', '=', '+', '{', '[', '}', ']', "'", '/', '?', '|', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]


let passwordValue;
let inc = 0
function returnV(){
    passwordValue1 = document.getElementById( "password-value1");
    passwordValue2 = document.getElementById( "password-value2");          
    passwordValue3 = document.getElementById( "password-value3");  
    passwordValue4 = document.getElementById( "password-value4");  
}
returnV();

function generate(){
    let pass = "";
    passwordValue1.style.color = "#5DEF92";
    for (let i = 0; i < 15; i++){
        let randomValues = Math.floor(Math.random() * password.length)
        pass += password[randomValues]
        passwordValue1.value = pass;
        passwordValue2.value = pass;
        passwordValue3.value = pass;
        passwordValue4.value = pass
    }
}

function copyClip(){
    var copyText = document.querySelector(".copy");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied: " + copyText.value)
}
