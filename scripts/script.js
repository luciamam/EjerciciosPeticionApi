//let nombre="lucia"

let bonton_buscar=document.getElementById('btn-pulsar')
let inputNombre=document.getElementById('input-nombre')
let seccionDatos=document.getElementById('seccion-introducir')
let seccion_mostrarDatos=document.getElementById('seccionMostrarDatos')
let divMostrarDatos=document.getElementById('div-mostrar-datos')
let boton_volver=document.getElementById('volver')
let datogenero
let datoedad
let dato_nacionalidad

let mostrarDatos=()=>{

    seccionDatos.style.display='none'
    seccion_mostrarDatos.style.display='flex'
    divMostrarDatos.innerHTML=`
    <h3 class='dato'>Género: ${datogenero}</h3>
    <h3 class='dato'>Edad:${datoedad}</h3>
    <h3 class='dato'>Nacionalidad:${dato_nacionalidad}</h3>
    `

    
}

bonton_buscar.addEventListener('click',async()=>{
    let nombre=inputNombre.value
    if (nombre.trim().length<4) {
        inputNombre.value=""
        return alert("Debe ser mayor de 3 carateres")
    }



    let endpoint_edad=`https://api.agify.io?name=${nombre}`
    let res= await fetch(endpoint_edad)
    let dato= await res.json()
    datoedad = dato.age


    let endpoint_nacionalidad=`https://api.nationalize.io/?name=${nombre}`
    let res1=await fetch(endpoint_nacionalidad)
    let datoN=await res1.json()
    dato_nacionalidad=datoN.country[0].country_id
    console.log(dato_nacionalidad);
    
    


    let endpointgenero=`https://api.genderize.io?name=${nombre}`
    let res2= await fetch(endpointgenero)
    let datogenero_Objeto = await res2.json()
    //console.log(datogenero_Objeto);


    let endpointedad=



    
    datogenero=datogenero_Objeto.gender



    mostrarDatos()
    
    


})

boton_volver.addEventListener('click',()=>{
    seccionDatos.style.display= 'flex'
    seccion_mostrarDatos.style.display= 'none'
})
  