// console.log("hola mundo")
// console.log(process.argv[2])
// let bienvenido = (name) =>{
// if (process.argv[2] != undefined){
//     console.log(`Bienvenido ${name}`)
// } else {
//     console.log("Fuera de aqui!")
// }
// }
// bienvenido(process.argv[2])


//! Prueba 1
const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
]

/*
let nombresCorto = [];
let nombresLargo = [];


const revisarNombres = (arr) => {
    arr.forEach(cv => {
        if (cv.length > 4) {
            nombresCorto.push(cv)
        } else {
            nombresLargo.push(cv)
        }
    });
    return
}

const [nomCortos, nomLargos] = revisarNombres(nombres);
revisarNombres("nombres cortos", nomCortos);
*/

//! Prueba 2
const transformarNombres = (nombres) => {

const objDeKoders = {}

    nombres.forEach((valor,indice)=>{
        objDeKoders[indice] = {
            name: valor,
            length: valor.length,
            isGreaterThanFour: valor.length > 4
        }
    })
    return objDeKoders
}

const transformadosNombres = transformarNombres(nombres)
console.log("transformadosNombres", transformadosNombres)