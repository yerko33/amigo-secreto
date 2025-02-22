let amigos = [];

function agregarAmigo(){
    let amigo_nuevo = document.getElementById('amigo').value;
    
    if(amigo_nuevo == ""){
        alert('Por favor, inserte un nombre.');
    }
    else{
        amigos.push(amigo_nuevo);
        document.querySelector('#amigo').value = '';
        listaAmigos();
    }
}

function listaAmigos(){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){

        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length != 0){
        let indiceSeleccionado = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceSeleccionado];

        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = "El amigo secreto sorteado es: " + amigoSeleccionado;

        document.querySelector('#listaAmigos').setAttribute('hidden', 'true');
    }
}