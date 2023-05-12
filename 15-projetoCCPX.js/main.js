function addRedBorder(id)
{
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}


function cardsombra(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("sombra")
}
/*
function verificaTecla(){

    document.addEventListener('keydown', (event) =>{
        var name = event.Key;
        var code = event.code;
        alert(`Tecla pressionada ${name} \r\n Key code value: ${code}`);
    }, false);
}

verificaTecla();
*/
function addKeyboardEventListeners(){

    document.addEventListener('keydown', (event) =>{

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");


        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("sombra");
            ingresso2.classList.remove("sombra");
            ingresso3.classList.remove("sombra");
            ingresso4.classList.remove("sombra");
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove("sombra");
            ingresso2.classList.toggle("sombra");
            ingresso3.classList.remove("sombra");
            ingresso4.classList.remove("sombra");

        }

        if(code == 'Digit3'){
            ingresso1.classList.remove("sombra");
            ingresso2.classList.remove("sombra");
            ingresso3.classList.toggle("sombra");
            ingresso4.classList.remove("sombra");

        }

        if(code == 'Digit4'){
            ingresso1.classList.remove("sombra");
            ingresso2.classList.remove("sombra");
            ingresso3.classList.remove("sombra");
            ingresso4.classList.toggle("sombra");

        }
    }, false );
}
addKeyboardEventListeners();

