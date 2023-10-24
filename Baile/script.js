let esqueleto = "off"; //creamos la variable del esqueleto
let esqueletoStop=document.getElementById("esqueletoquieto")
let botonSonido =new Audio('../sounds/2.mp3')
let botonAudio =new Audio('../sounds/1.mp3')


function bailar(){// se crea esta funcion que va a tener otras funciones
    if(esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("ON");//se va a cambiar a la clase esqueletoOff.on
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
        console.log("On");
    } else {
        esqueleto ="off"
        esqueletoStop.classList.remove("ON")
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
        console.log("Off")
    }
}