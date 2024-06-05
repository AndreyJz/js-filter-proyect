const botones = document.querySelectorAll("button");
const components = document.querySelector(".components");

const home = document.getElementById("#home");

botones.forEach(boton => {
    boton.addEventListener('click', () =>{
        components.innerHTML = ""
        if (boton.id === "imc"){
            console.log('hola')
            components.innerHTML = "<page-imc></page-imc>"
        } else if (boton.id === "gallery"){
            console.log('hola')
            components.innerHTML = "<image-gallery></image-gallery>"
        } else if (boton.id === "table"){
            console.log('hola')
            components.innerHTML = "<table-component></table-component>"
        }
    });
})
