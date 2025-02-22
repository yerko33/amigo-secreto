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

