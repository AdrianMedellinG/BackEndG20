//! Async/Await

const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}
const leiReceta = (recetaLaLei) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recetaLaLei.recetaLeida = true;
            if(!recetaLaLei.recetaLeida) {
                reject(", no leyó receta!");
            }
            resolve(recetaLaLei);
        }, 2000);
    })
}
const ingredientesListos = (ingredientesTotal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesTotal.ingredientesConseguidos = true;
            if(!ingredientesTotal.ingredientesConseguidos) {
                reject(", faltan ingredientes!");
            }
            resolve(ingredientesTotal);
        }, 2000);
    })
}
const amasar = (masaLista) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaLista.masaPreparada = true;
            if(!masaLista.masaPreparada) {
                reject(", no haz amasado!");
            }
            resolve(masaLista);
        }, 2000);
    })
}
const horneado = (horneadoListo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            horneadoListo.pastelHorneado= false;
            if(!horneadoListo.pastelHorneado) {
                reject(", pastel crudo!");
            }
            resolve(horneadoListo);
        }, 2000);
    })
}
const decorado = (decoraPastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            decoraPastel.pastelDecorado = true;
            if(!decoraPastel.pastelDecorado) {
                reject(", no esta decorado!");
            }
            resolve(decoraPastel);
        }, 2000);
    })
}
const leiRecetaCompleta = async () => {
    try {
        const recetaLeida = await leiReceta({...pastel})
        console.log("Leiste receta", recetaLeida);
        const completasteIngredientes = await ingredientesListos({...recetaLeida})
        console.log("Tienes todos los ingredientes", completasteIngredientes);
        const masaCompleta = await amasar({...completasteIngredientes})
        console.log("La masa esta lista", masaCompleta);
        const hornoPrecalentado = await horneado({...masaCompleta})
        console.log("El pastel esta horneado", hornoPrecalentado);
        const decoracionPastel = await decorado({...hornoPrecalentado})
        console.log("A comer!, el pastel esta listo!!!", decoracionPastel)
    } catch (err) {
        console.log("fallo un paso", err);
    }
}
leiRecetaCompleta()