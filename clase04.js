//! Callbacks

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}


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