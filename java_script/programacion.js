// Guarda los datos de los Jugadores almacenados en el Local Storage
const local_storage_jugadores = localStorage.getItem("jugadores");
const jugadores = JSON.parse(local_storage_jugadores);

const local_storage_busqueda = localStorage.getItem("busqueda_jugadores");
const busqueda = JSON.parse(local_storage_busqueda);

// Guarda los datos de las Convocatorias almacenados en el Local Storage
const local_storage_convocatoria = localStorage.getItem("convocatorias");
const convocatorias = JSON.parse(local_storage_convocatoria);

window.onload = function cargar_pagina() {
    // Al cargar la página se cargan los datos del Json en el Local Storage
    guardar_local_storage()
}

function guardar_local_storage() {
    // Guarda los datos de los Jugadores almacenados en el Local Storage
    const jugadores = localStorage.getItem("jugadores");

    // Si no los encuentra guarda el Json en el Local Storage
    if(jugadores === null){
        fetch("../json/jugadores.json")
            .then(response => response.json())
            .then(data => {
                // Guarda la lista de los Jugadores en el Local Storage
                localStorage.setItem("jugadores", JSON.stringify(data));
            })
    }
    // Al cargar la página se guardan los datos del Json que esta en el Local Storage en la Tabla
    leer_local_storge()
}

function leer_local_storge() {
    // Recorre la Lista donde estan almacenados los Jugadores
    if (busqueda === null) {
        for (let indice of jugadores) {
            // Guarda la referencia de la Tabla donde estan almacenados los Jugadores
            let tabla = document.getElementById("tabla_jugadores");

            // Agrega un Renglon al final de la Tabla
            let renglon = tabla.insertRow(-1);

            // Agrega la Celda para cada Columna
            let celda_1 = renglon.insertCell(0);
            let celda_2 = renglon.insertCell(1);
            let celda_3 = renglon.insertCell(2);
            let celda_4 = renglon.insertCell(3);
            let celda_5 = renglon.insertCell(4);
            let celda_6 = renglon.insertCell(5);
            let celda_7 = renglon.insertCell(6);
            let celda_8 = renglon.insertCell(7);

            // Agrega el Texto para cada Celda
            celda_1.innerHTML = indice.id;
            celda_2.innerHTML = indice.dni;
            celda_3.innerHTML = indice.nombre;
            celda_4.innerHTML = indice.apellido;
            celda_5.innerHTML = indice.posicion;
            celda_6.innerHTML = indice.apodo;
            celda_7.innerHTML = indice.dorsal;
            celda_8.innerHTML = indice.pie_habil;
        }
    }
    else if (busqueda !== null) {
        for (let indice of busqueda) {
            // Guarda la referencia de la Tabla donde estan almacenados los Jugadores
            let tabla = document.getElementById("tabla_jugadores");
    
            // Agrega un Renglon al final de la Tabla
            let renglon = tabla.insertRow(-1);
    
            // Agrega la Celda para cada Columna
            let celda_1 = renglon.insertCell(0);
            let celda_2 = renglon.insertCell(1);
            let celda_3 = renglon.insertCell(2);
            let celda_4 = renglon.insertCell(3);
            let celda_5 = renglon.insertCell(4);
            let celda_6 = renglon.insertCell(5);
            let celda_7 = renglon.insertCell(6);
            let celda_8 = renglon.insertCell(7);
    
            // Agrega el Texto para cada Celda
            celda_1.innerHTML = indice.id;
            celda_2.innerHTML = indice.dni;
            celda_3.innerHTML = indice.nombre;
            celda_4.innerHTML = indice.apellido;
            celda_5.innerHTML = indice.posicion;
            celda_6.innerHTML = indice.apodo;
            celda_7.innerHTML = indice.dorsal;
            celda_8.innerHTML = indice.pie_habil;
        }
    }
}

function registrar_jugador() {
    // Evalua si existe un dato en Dni, si no hay no hace nada
    if (document.getElementById("jugadores_registro_dni").value !== "") {
        // Guarda la referencia de los Jugadores almacenados en la Tabla
        let tabla = document.getElementById("tabla_body");

        // Agrega un Renglon al final de la Tabla
        let renglon = tabla.insertRow(-1);

        // Agrega la Celda para cada Columna
        let celda_1 = renglon.insertCell(0);
        let celda_2 = renglon.insertCell(1);
        let celda_3 = renglon.insertCell(2);
        let celda_4 = renglon.insertCell(3);
        let celda_5 = renglon.insertCell(4);
        let celda_6 = renglon.insertCell(5);
        let celda_7 = renglon.insertCell(6);

        // Guarda en las Celdas los datos del Jugador
        celda_1.innerHTML = document.getElementById("jugadores_registro_dni").value;
        celda_2.innerHTML = document.getElementById("jugadores_registro_nombre").value;
        celda_3.innerHTML = document.getElementById("jugadores_registro_apellido").value;
        celda_4.innerHTML = document.getElementById("jugadores_registro_posicion").value;
        celda_5.innerHTML = document.getElementById("jugadores_registro_apodo").value;
        celda_6.innerHTML = document.getElementById("jugadores_registro_dorsal").value;
        celda_7.innerHTML = document.getElementById("jugadores_registro_pie_habil").value;

        // Guarda la referencia de los Jugadores almacenados en el Local Storage
        const local_storage = localStorage.getItem("jugadores");
        const jugadores = JSON.parse(local_storage);

        // Obtiene el Id maximo
        id_maximo = jugadores.reduce(
            (max, obj) => obj.id > max ? obj.id : max, -Infinity);
            let id = 0;

        if (id_maximo !== -Infinity){
        id = id_maximo + 1;
        }

        // Un Diccionario con los datos del Jugador a Registrar
        const jugador_nuevo = {
            "id": id,
            "dni": document.getElementById("jugadores_registro_dni").value,
            "nombre": document.getElementById("jugadores_registro_nombre").value,
            "apellido": document.getElementById("jugadores_registro_apellido").value,
            "posicion": document.getElementById("jugadores_registro_posicion").value,
            "apodo": document.getElementById("jugadores_registro_apodo").value,
            "dorsal": document.getElementById("jugadores_registro_dorsal").value,
            "pie_habil": document.getElementById("jugadores_registro_pie_habil").value
        }

        // Agrega el Diccionario con los datos del Jugador en la Lista
        jugadores.push(jugador_nuevo);

        // Guarda la lista en el Local Storage donde estan los Jugadores
        const guardar = JSON.stringify(jugadores);
        localStorage.setItem("jugadores", guardar);

        // Borra la lista de Busqueda en el Local Storage
        localStorage.removeItem("busqueda_jugadores");

        // Envia un mensaje si se registro o no al Jugador
        alert("Jugador registrado");
    }
}

function editar_jugador() {
    // Evalua si existe un dato en Id, si no hay no hace nada
    if (document.getElementById("jugadores_editar_id").value !== "") {
        // El Contador va ser el Indice donde se va a editar el Jugador en la Lista
        let contador = 0;

        // Encontro va ser la variable que diga si se encontro o no a un Jugador
        let encontro = false;

        // Recorre la Lista donde estan los Jugadores    Ej:    {"dni": "33016244", "nombre": "Emiliano", "apellido": "Martínez", "posicion": "Arquero","apodo": "Dibu", "dorsal": "23", "pie_habil": "Derecho"}
        for (let indice of jugadores) {
            // Si el DNI ingresado coincide con uno de los Jugadores, los datos de ese Jugador seran reemplazados por los datos ingresados
            if (parseInt(document.getElementById("jugadores_editar_id").value) === indice.id) {
                // Un Diccionario con los datos del Jugador a editar
                const jugador_modificado = {
                    "id": jugadores[contador].id,
                    "dni": jugadores[contador].dni,
                    "nombre": document.getElementById("jugadores_editar_nombre").value,
                    "apellido": document.getElementById("jugadores_editar_apellido").value,
                    "posicion": document.getElementById("jugadores_editar_posicion").value,
                    "apodo": document.getElementById("jugadores_editar_apodo").value,
                    "dorsal": document.getElementById("jugadores_editar_dorsal").value,
                    "pie_habil": document.getElementById("jugadores_editar_pie_habil").value
                }

                // Modifica los datos en la lista
                jugadores[contador] = jugador_modificado;

                // Encontro al Jugador
                encontro = true
            }
            // Al terminar de recorrer los datos del Jugador aumenta en 1 el Contador
            contador = contador + 1;
        }

        // Guarda la lista en el Local Storage donde estan los Jugadores
        const guardar = JSON.stringify(jugadores);
        localStorage.setItem("jugadores", guardar);

        // Borra la lista de Busqueda en el Local Storage
        localStorage.removeItem("busqueda_jugadores");
        
        // Envia un mensaje si se edito o no al Jugador
        if (encontro === true) {
            alert("Jugador editado");
        }
        else {
            alert("Jugador no editado");
        }
    }
}

function buscar_jugador_nombre() {   
    // Filtra los Jugadores por Nombre
    let busqueda = jugadores.filter(jugador => sin_acentos(jugador.nombre.toLowerCase()) == sin_acentos(document.getElementById("jugadores_buscar_nombre").value.toLowerCase()));
    
    // Envia un mensaje si se encontro o no a los Jugadores
    if (document.getElementById("jugadores_buscar_nombre").value !== "") {
        if (busqueda.length >= 1 && busqueda.length <= 1) {
            alert("Jugador encontrado");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else if (busqueda.length >= 1) {
            alert("Jugadores encontrados");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else {
            alert("Jugador no encontrado");
        }
    }
}

function buscar_jugador_apellido() {         
    // Filtra los Jugadores por Apellido
    let busqueda = jugadores.filter(jugador => sin_acentos(jugador.apellido.toLowerCase()) == sin_acentos(document.getElementById("jugadores_buscar_apellido").value.toLowerCase()))

    // Envia un mensaje si se encontro o no a los Jugadores
    if (document.getElementById("jugadores_buscar_apellido").value !== "") {
        if (busqueda.length >= 1 && busqueda.length <= 1) {
            alert("Jugador encontrado");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else if (busqueda.length >= 1) {
            alert("Jugadores encontrados");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else {
            alert("Jugador no encontrado");
        }
    }
}

function buscar_jugador_posicion() {        
    // Filra los Jugadores por dorsal
    let busqueda = jugadores.filter(jugador => jugador.posicion.toLowerCase() == document.getElementById("jugadores_buscar_posicion").value.toLowerCase())

    // Envia un mensaje si se encontro o no al Jugador o jugadores
    if (document.getElementById("jugadores_buscar_posicion").value !== "") {
        if (busqueda.length >= 1 && busqueda.length <= 1) {
            alert("Jugador encontrado");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else if (busqueda.length >= 1) {
            alert("Jugadores encontrados");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else {
            alert("Jugador no encontrado");
        }
    }
}

function buscar_jugador_dorsal() {     
    // Filra los Jugadores por dorsal
    let busqueda = jugadores.filter(jugador => jugador.dorsal == document.getElementById("jugadores_buscar_dorsal").value)

    // Envia un mensaje si se encontro o no al Jugador
    if (document.getElementById("jugadores_buscar_dorsal").value !== "") {
        if (busqueda.length >= 1 && busqueda.length <= 1) {
            alert("Jugador encontrado");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else if (busqueda.length >= 1) {
            alert("Jugadores encontrados");
        
            // Guarda la lista de Busqueda en el Local Storage
            const guardar = JSON.stringify(busqueda);
            localStorage.setItem("busqueda_jugadores", guardar);
        }
        else {
            alert("Jugador no encontrado");
        }
    }
}

function listado() {
    // Borra la lista de Busqueda en el Local Storage
    localStorage.removeItem("busqueda_jugadores");

    // Envia un mensaje avisando que se mostro el listado completo de los jugadores
    alert("Listado completo de los Jugadores");
}

function eliminar_jugador() {
    // Evalua si existe un dato en Id, si no hay no hace nada
    if (document.getElementById("jugadores_eliminar_id").value !== "") {
        // El Contador va ser el Indice donde se va a editar el Jugador en la Lista 
        let contador_1 = 0;
        let contador_2 = 0;
        let contador_3 = 0;

        // Encontro va ser la variable que diga si se encontro o no a un Jugador
        let encontro = false;

        // Recorre la Lista donde estan los Jugadores    Ej:    {"dni": "33016244", "nombre": "Emiliano", "apellido": "Martínez", "posicion": "Arquero","apodo": "Dibu", "dorsal": "23", "pie_habil": "Derecho"}
        for (let indice_1 of jugadores) {
            // Si el DNI ingresado coincide con uno de los Jugadores, los datos de ese Jugador seran reemplazados por los datos ingresados
            if (parseInt(document.getElementById("jugadores_eliminar_id").value) === indice_1.id) {
                // Elimina el Jugador en el indice segun el Contador
                jugadores.splice(contador_1, 1);
                
                // Encontro al Jugador
                encontro = true
            }
            // Al terminar de recorrer los datos del Jugador aumenta en 1 el Contador
            contador_1 = contador_1 + 1;
        }

        // Recorre la lista de las Convocatorias
        for (let indice_2 of convocatorias) {
            // Recorre la lista donde estan los Convocados
            for (indice_3 of indice_2.convocados){
                if (parseInt(document.getElementById("jugadores_eliminar_id").value) === indice_3.id_convocado) {
                    convocatorias[contador_3].convocados.splice(contador_2, 1);
                }
                contador_2 = contador_2 + 1;
            }
            contador_3 = contador_3 + 1;
            contador_2 = 0
        }

        contador_2 = 0;
        contador_3 = 0;

        // Recorre la lista de las Convocatorias
        for (let indice_2 of convocatorias) {
            // Recorre la lista donde esta el Equipo Titular
            for (indice_3 of indice_2.titulares){
                if (parseInt(document.getElementById("jugadores_eliminar_id").value) === indice_3.id_titular) {
                    convocatorias[contador_3].titulares.splice(contador_2, 1);
                }
                contador_2 = contador_2 + 1;
            }
            contador_3 = contador_3 + 1;
            contador_2 = 0
        }

        // Guarda la lista en el Local Storage donde estan los Jugadores
        const guardar_1 = JSON.stringify(jugadores);
        localStorage.setItem("jugadores", guardar_1);

        // Borra la lista de Busqueda en el Local Storage
        localStorage.removeItem("busqueda_jugadores");
        localStorage.removeItem("busqueda_equipo_titular");


        // Guarda la lista en el Local Storage donde estan las Convocatorias
        const guardar_2 = JSON.stringify(convocatorias);
        localStorage.setItem("convocatorias", guardar_2);

        // Envia un mensaje si se elimino o no al Jugador
        if (encontro === true) {
            alert("Jugador eliminado");
        }
        else {
            alert("Jugador no eliminado");
        }
    }
}

let sin_acentos = (function() {
    let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
         a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        re = new RegExp('['+de+']' , 'ug');

    return texto => texto.replace( re, match => a.charAt(de.indexOf(match)));
} )();