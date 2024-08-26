const encryptText = document.getElementById('encryptText');
const decryptText = document.getElementById('decryptText');
const inptTextAr = document.getElementById('inptTextAr');
const outptTextArea = document.getElementById('outptTextArea');
const copyRslt = document.getElementById('copyRslt');
const prInformation = document.getElementsByClassName("prInformation");
const codedKey = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
}

inptTextAr.addEventListener("input", validaText);
encryptText.onclick = encrypt; 
decryptText.onclick = decrypt;
copyRslt.onclick = copyResult;

function encrypt(){
    if (inptTextAr.value !== ""){
        const text = inptTextAr.value;
        let encrypted = text;
        for (const key in codedKey) {
            const RegEx = new RegExp(key, "g");
            encrypted = encrypted.replace(RegEx, codedKey[key]);
        }
        writeResult(encrypted);
    }
}

function decrypt(){
    if (inptTextAr.value !== ""){
        const text = inptTextAr.value;
        let encrypted = text;
        for (const key in codedKey) {
            const RegEx = new RegExp(codedKey[key], "g");
            encrypted = encrypted.replace(RegEx, key);
        }
        writeResult(encrypted);
    }
}

function writeResult(text){
    outptTextArea.value = text;
    showOrHiddenTextOutput("none", "block");
}

function copyResult(){
    outptTextArea.select();
    if (!navigator.clipboard) {
        document.execCommand("copy");
        return 
    }
    navigator.clipboard.writeText(outptTextArea.value);
}

function validaText() {
    if (inptTextAr.value === "") {
      showOrHiddenTextOutput("block", "none");
      return;
    }

    const RegEx = /[W]|[áéíóúÁÉÍÓÚñÑ¿¡«»“”‘’'"´`+*()\-–—/\\=|#@^\[\]{}%$§&~;:<>!?]|[A-Z]/g;
    const cleanedText = inptTextAr.value.replace(RegEx, "");
    inptTextAr.value = cleanedText;
}

function showOrHiddenTextOutput(style1, style2){
    for (let i = 0; i < prInformation.length; i++) {
      prInformation[i].style.display = style1;
    }
    outptTextArea.style.display = style2;
    copyRslt.style.display = style2;
}