const textArea = document.querySelector('#textArea');
const encript = document.querySelector('#encript-button');
const desEncript = document.querySelector('#desencript-button');
const encriptArea = document.querySelector('#encript-area');
const img = document.querySelector('#img');
const textImg = document.querySelector('#texto-img');
const copyButton = document.querySelector('#copy-button');
let text = [];
function action(){
    encriptArea.value = text;
    encriptArea.classList.remove('hidden');
    img.classList.add('hidden');
    textImg.classList.add('hidden');
    copyButton.classList.remove('hidden');
    textArea.value = '';
    encriptArea.focus();
}
encript.onclick = () => {
    text = textArea.value.toLowerCase();
    text = text.replace(/e/gm, 'enter');
    text = text.replace(/i/gm, 'imes');
    text = text.replace(/a/gm, 'ai');
    text = text.replace(/o/gm, 'ober');
    text = text.replace(/u/gm, 'ufat');
    action();
};

desEncript.onclick = () => {
    text = textArea.value.toLowerCase();
    text = text.replace(/enter/gm, 'e');
    text = text.replace(/imes/gm, 'i');
    text = text.replace(/ai/gm, 'a');
    text = text.replace(/ober/gm, 'o');
    text = text.replace(/ufat/gm, 'u');
    action();
};
copyButton.onclick = () => {
    encriptArea.select();
    document.execCommand('copy');
    encriptArea.value = '';
    alert('Mensaje copiado al portapapeles')
    textArea.focus();
};
