//GENERADOR DE PERSONAJES DE DUNGEONS AND DRAGONS



//Primero generamos el objeto "personaje", el array "personajes" y los personajes precargados

//CREAMOS OBJETO PERSONAJE

function personaje (nombre, raza, clase, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, modiFuerza, modiDestreza) {
    this.nombre = nombre
    this.raza = raza
    this.clase = clase
    this.fuerza = fuerza
    this.destreza = destreza 
    this.constitucion = constitucion
    this.inteligencia = inteligencia
    this.sabiduria = sabiduria
    this.carisma = carisma
    this.modiFuerza = modiFuerza
    this.modiDestreza = modiDestreza
    }


//CREAMOS FUNCIONES PARA CARGAR ARRAY E IMPORTARLO DEL STORAGE

function cargarPjs (){
    let pjsJSON = JSON.stringify(personajes)
    localStorage.setItem("personajes", pjsJSON)
}

function importarPjs (){
    let pjsRecuperados = localStorage.getItem("personajes")
}

//PERSONAJES PRE CARGADOS

const Jan = new personaje("Jan", "Humano", "Bárbaro",16,14,16,10,10,12,3,1)
const Korra = new personaje("Korra", "Semiorco", "Mago",8,14,16,16,10,10,-1,2)
const Adelfos = new personaje("Adelfos", "Elfo", "Explorador",8,16,14,12,14,10,-1,3)
const Esben = new personaje("Esben", "Enano", "Guerrero",8,16,14,16,12,12,-1,3)

//ARRAY DE NOMBRES Y ARRAY DE OBJETOS

const personajesNombres = [Jan.nombre + " (pregenerado)", Korra.nombre + " (pregenerado)", Adelfos.nombre + " (pregenerado)", Esben.nombre + " (pregenerado)"]
const personajes = [Jan, Korra, Adelfos, Esben]

cargarPjs ()

let boton = document.getElementById("submit")
boton.addEventListener("click", crearpj)

function crearpj() {
    let nombre = document.getElementById('nombre').value
    let claseVal = document.getElementById('claseOpt')
    let clasePersonaje = claseVal.options[claseVal.selectedIndex].text
    let razaVal = document.getElementById('razaOpt')
    let razaPersonaje = razaVal.options[razaVal.selectedIndex].text
    let fuerzaVal = document.getElementById('fuerzaOpt')
    let fuerzaPersonaje = fuerzaVal.options[fuerzaVal.selectedIndex].text
    let destrezaVal = document.getElementById('destrezaOpt')
    let destrezaPersonaje = destrezaVal.options[destrezaVal.selectedIndex].text
    let constitucionVal = document.getElementById('constitucionOpt')
    let constitucionPersonaje = constitucionVal.options[constitucionVal.selectedIndex].text
    let inteligenciaVal = document.getElementById('inteligenciaOpt')
    let inteligenciaPersonaje = inteligenciaVal.options[inteligenciaVal.selectedIndex].text
    let sabiduriaVal = document.getElementById('sabiduriaOpt')
    let sabiduriaPersonaje = sabiduriaVal.options[sabiduriaVal.selectedIndex].text
    let carismaVal = document.getElementById('carismaOpt')
    let carismaPersonaje = carismaVal.options[carismaVal.selectedIndex].text

    if (razaPersonaje == "Humano"){
        fuerzaPersonaje = parseInt(fuerzaPersonaje) + 1
        destrezaPersonaje = parseInt(destrezaPersonaje) + 1
        constitucionPersonaje = parseInt(constitucionPersonaje) + 1
        inteligenciaPersonaje = parseInt(inteligenciaPersonaje) + 1
        sabiduriaPersonaje = parseInt(sabiduriaPersonaje) + 1
        carismaPersonaje = parseInt(carismaPersonaje) + 1
    }

    if (razaPersonaje == "Elfo"){
        destrezaPersonaje = parseInt(destrezaPersonaje) + 2
        inteligenciaPersonaje = parseInt(inteligenciaPersonaje) + 1
        
    }

    if (razaPersonaje == "Enano"){
        constitucionPersonaje = parseInt(constitucionPersonaje) + 2
        sabiduriaPersonaje = parseInt(sabiduriaPersonaje) + 1
        
    }

    if (razaPersonaje == "Semiorco"){
        constitucionPersonaje = parseInt(constitucionPersonaje) + 1
        fuerzaPersonaje = parseInt(fuerzaPersonaje) + 1
        
    }

    
    let modFuerza = (fuerzaPersonaje - 10) / 2
    let modDestreza = (destrezaPersonaje - 10) / 2

    const pjnuevo = new personaje (nombre, razaPersonaje, clasePersonaje, fuerzaPersonaje, destrezaPersonaje, constitucionPersonaje, inteligenciaPersonaje, sabiduriaPersonaje, carismaPersonaje, modFuerza, modDestreza)
    personajesNombres.push(pjnuevo.nombre)
    personajes.push(pjnuevo)
    cargarPjs ()

    //console.log(nombre+"\n"+clasePersonaje+"\n"+razaPersonaje+"\n"+"fuerza: "+parseInt(fuerzaPersonaje)+"\n"+"destreza: "+parseInt(destrezaPersonaje)+"\n"+"constitución: "+parseInt(constitucionPersonaje)+"\n"+"inteligencia: "+parseInt(inteligenciaPersonaje)+"\n"+"sabiduria: "+parseInt(sabiduriaPersonaje)+"\n"+"carisma: "+parseInt(carismaPersonaje))
}

