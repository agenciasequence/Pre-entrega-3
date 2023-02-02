//FUNCIÓN PARA MOSTRAR PJS CREADOS

function mostrarPjs(){
    
    const pjsRecuperados = JSON.parse(localStorage.getItem("personajes"))
    
    let containerLista = document.getElementById("hojaMain2")
    

    //const pjsNombres = pjsRecuperados.map(a => a.nombre)
    
    for (const personaje of pjsRecuperados) {
        renderLista = document.createElement("h3")
        renderLista.innerHTML = personaje.nombre

        containerLista.append(renderLista)

    }

}

let botonLista = document.getElementById("botonLista")
botonLista.addEventListener("click", mostrarPjs)