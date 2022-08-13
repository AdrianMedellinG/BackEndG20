//! Callbacks

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
*/


/*

const hacerPastel = (recetaSeHaLeido, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        recetaSeHaLeido.recetaLeida = true;

        // Si no se leyo la receta, lanzar un error
        if (!recetaSeHaLeido.recetaLeida) {
            error = "No ha leido la receta";
        }
        callback(error, recetaSeHaLeido);
    }, 2000);
};

const ingredientes = (siHayIngredientes, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        siHayIngredientes.ingredientesConseguidos = true;

        // Si no se leyo la receta, lanzar un error
        if (!siHayIngredientes.ingredientesConseguidos) {
            error = "No ha leido la receta";
        }
        callback(error, siHayIngredientes);
    }, 1000);
};

const masa = (masaYaPreparada, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        masaYaPreparada.masaPreparada = true;

        // Si no se leyo la receta, lanzar un error
        if (!masaYaPreparada.masaPreparada) {
            error = "No ha preparado la masa";
        }
        callback(error, masaYaPreparada);
    }, 1000);
};

const horneadoPastel = (estaPastelYaSeCocio, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        estaPastelYaSeCocio.pastelHorneado = true;

        // Si no se leyo la receta, lanzar un error
        if (!estaPastelYaSeCocio.pastelHorneado) {
            error = "No ha horneado el pastel";
        }
        callback(error, estaPastelYaSeCocio);
    }, 1000);
};

const decorandoPastel = (pastelYaDecorado, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        pastelYaDecorado.pastelDecorado = true;

        // Si no se leyo la receta, lanzar un error
        if (!pastelYaDecorado.pastelDecorado) {
            error = "No ha horneado el pastel";
        }
        callback(error, pastelYaDecorado);
    }, 1000);
};



hacerPastel(pastel, (error, recetaSeHaLeido) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }
    //console.log("recetaSeHaLeido:", recetaSeHaLeido);

    ingredientes(pastel, (error, ingredientesConseguidos) => {
        if (error) {
            console.log("error", error);
            return;
        }
       //console.log("ingredientesConseguidos:", ingredientesConseguidos);

            masa(pastel, (error, masaPreparada) => {
                if (error) {
                    console.log("error", error);
                    return;
                }
            //console.log("masaPreparada:", masaPreparada);

                horneadoPastel(pastel, (error, pastelHorneado) => {
                    if (error) {
                        console.log("error", error);
                        return;
                    }
                //console.log("pastelHorneado:", pastelHorneado);

                    decorandoPastel(pastel, (error, decorandoPastel) => {
                        if (error) {
                            console.log("error", error);
                            return;
                        }
                    console.log("decorandoPastel:", decorandoPastel);
                    });
                });
            });
    });
});
*/


//! Promesas

const pastel = {
   recetaLeida : false,
   ingredientesConseguidos: false,
   masaPreparada: false,
   pastelHorneado: false,
   pastelDecorado: false
}


const hacerPastel = (recetaSeHaLeido) => {
    return new Promise((resolve,reject) => {
   
    setTimeout(() => {
        // Voy a leer la receta
        recetaSeHaLeido.recetaLeida = false;

        // Si no se leyo la receta, lanzar un error
        if (!recetaSeHaLeido.recetaLeida) {
            reject = "No ha leido la receta";
        }
        
        resolve(recetaSeHaLeido)
    }, 1000);
});

};

const ingredientes = (siHayIngredientes) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            siHayIngredientes.ingredientesConseguidos = true;

            // No  hay ingrdientes, lanzar un error
            if (!siHayIngredientes.ingredientesConseguidos) {
                reject = "No hay ingredientes";
            }

            resolve(siHayIngredientes)
        }, 1000);
    });
};

const masa = (masaYaPreparada) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            masaYaPreparada.masaPreparada = true;

            // No esta la masa, lanzar un error
            if (!masaYaPreparada.masaPreparada) {
                reject = "No se ha cocido";
            }

            resolve(masaYaPreparada)
        }, 1000);
    });
};

const horneadoPastel = (estaPastelYaSeCocio) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            estaPastelYaSeCocio.pastelHorneado = true;

            // No se ha horneado el pastel, lanzar un error
            if (!estaPastelYaSeCocio.pastelHorneado) {
                reject = "No ha horneado el pastel";
            }

            resolve(estaPastelYaSeCocio)
        }, 1000);
    });
};

const decorandoPastel = (pastelYaDecorado) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            pastelYaDecorado.pastelDecorado = true;

            // No se ha horneado el pastel, lanzar un error
            if (!pastelYaDecorado.pastelDecorado) {
                reject = "No ha decorado el pastel";
            }

            resolve(pastelYaDecorado)
        }, 1000);
    });
};



const hagamosUnPastel = hacerPastel({ ...pastel });
hagamosUnPastel
    .then((recetaLeida) => {
        console.log(recetaLeida);

        ingredientes({ ...recetaLeida })
        .then((ingredientesConseguidos) => {
            console.log(ingredientesConseguidos);
    
            masa({ ...ingredientesConseguidos })
            .then((masaYaPreparada) => {
                console.log(masaYaPreparada);


                horneadoPastel({ ...masaYaPreparada })
                .then((pastelHorneado) => {
                    console.log(pastelHorneado);
                    
                    decorandoPastel({ ...pastelHorneado })
                    .then((pastelYaDecorado) => {
                        console.log("EXITO!!",pastelYaDecorado);
        
                    })
                    .catch((error) => {
                        console.log("error", error);
                    });
                    
                })
                .catch((error) => {
                    console.log("error", error);
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
        })
        .catch((error) => {
            console.log("error", error);
        });

    })
    .catch((error) => {
        console.log("error", error);
    });
