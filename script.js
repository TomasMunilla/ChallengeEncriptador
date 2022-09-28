var encryptButton = document.querySelector(".encrypt-btn");
var decryptButton = document.querySelector(".decrypt-btn");
var copyButton = document.querySelector(".copy-btn");
var img = document.querySelector(".img-container");
var h3 = document.querySelector(".h3-container");
var p = document.querySelector(".p-container");
var encryptedText = document.querySelector("#encrypted-text");
/* var finalText = ""; */

encryptButton.onclick = encrypt;

function textRecover() {
    var area = document.querySelector(".area-InitialText");
    return area.value;
}

function hideInitialSection2() {
    img.classList.add("hide");
    h3.classList.add("hide");
    p.classList.add("hide");
}

function encryptText(userText) {
    var text = userText.toLowerCase();
    var finalText = "";

    for(var i = 0; i < text.length; i++) {
        if(text[i] == "a") {
            finalText += "ai";
        }
        else if(text[i] == "e") {
            finalText += "enter";
        }
        else if(text[i] == "i") {
            finalText += "imes";
        }
        else if(text[i] == "o") {
            finalText += "ober";
        }
        else if(text[i] == "u") {
            finalText += "ufat";
        }
        else {
            finalText += text[i];
        }
    }
    return finalText;
}

function encrypt() {
    hideInitialSection2();
    var area = textRecover();
    encryptedText.textContent = encryptText(area);    
}


decryptButton.onclick = decrypt;

function decryptText(userText) {
    var text = userText;
    var finalText = "";

    for(var i = 0; i < text.length; i++) {
        if(text[i] == "a") {
            finalText += "a";
            i += 1;
        }
        else if(text[i] == "e") {
            finalText += "e";
            i += 4;
        }
        else if(text[i] == "i") {
            finalText += "i";
            i += 3;
        }
        else if(text[i] == "o") {
            finalText += "o";
            i += 3;
        }
        else if(text[i] == "u") {
            finalText += "u";
            i += 3;
        }
        else {
            finalText += text[i];
        }
    }
    return finalText;
}

function decrypt() {
    hideInitialSection2();
    var area = textRecover();
    encryptedText.textContent = decryptText(area);    
}


copyButton.onclick = copy;

function copy() {
    var content = document.querySelector('#encrypted-text')
    content.select();
    document.execCommand('copy');
    alert('copiado!');
}

