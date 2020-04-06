var input  = document.querySelector('#chat-input');
var button = document.querySelector('#chat-send');
var chat   = document.querySelector('.chat-body');

if(input && button && chat){
    button.addEventListener('click', addMessage);
    document.addEventListener('keydown',function(e){
        if(e.keyCode == 13 && document.activeElement.tagName == 'INPUT'){
            addMessage();
        }
    });
}

function addMessage(){
    if(input.value != ''){
        var conteudo = input.value;
        input.value = '';
        var element = document.createElement('DIV');
        element.classList.add('chat-message');
        element.classList.add('chat-i');
        element.innerHTML = conteudo;
        chat.appendChild(element);
    }
}