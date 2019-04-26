var solicitud = new XMLHttpRequest();

//lo asigno como variable global para poder acceder despues al contenido del json noticia con solicitud.loQueNecesite
var contenido_json = '';
//la uso para saber el id de la noticia que voy a editar
var editId = "";

var userLogIn = '';



// generamos las variables aca de los botones ni bien carga la pag
window.onload = function () {


    var btnLogin = document.getElementById("submit_login")
    btnLogin.addEventListener("click", logueo)



    var btnPost = document.getElementById("btnPost");
    btnPost.addEventListener("click", cBPOST);

    var btnPostE = document.getElementById("btnPostE");
    btnPostE.addEventListener("click", cBPOSTE);

    var bAdd = document.getElementById("add");
    var bClose = document.getElementById("btn_close");

    var bCloseE = document.getElementById("btn_closeE");
    bCloseE.addEventListener("click", visualized);
    
    bAdd.addEventListener("click", visualiz, false);
    bClose.addEventListener("click", visualiz);

   
}

// function getLogin(){

//     pass;
// }

//esto estaba antes en window onload
function windowLoad(){

    solicitud.onreadystatechange = cBGet;
    solicitud.open("GET", "http://localhost:3000/personas", true);
    solicitud.send(null);
   

}
function cBGet() {

    if (solicitud.readyState == 4) {
        if (solicitud.status == 200) {

            // creo la variable contenido y se la asigno a la variable global para poder acceder despues a ella en los edits
            var contenido = JSON.parse(solicitud.responseText);
            contenido_json = contenido

            //ahora en vez de ser en el body esta en un div para poder hacer lo que sigue
            var contenedor = document.getElementById("tBody");
            
            //Hago un while para eliminar todo lo que tenga el div asi cuando carguen las noticias
            //esto este vacio (si no hago esto cada vez que se corra va a agregar las noticias viejas abajo de lo que estaba)
            while (contenedor.firstChild) {
                contenedor.removeChild(contenedor.firstChild);
            }

            // tomo
            for (var i = 0; i < contenido.length; i++) {

                //var contenedor = document.createElement("div");

                //entramos a crear tags a lo pavote y los metemos en el contenedor div asignando id a los botones para su uso posterior

                var divPersona = document.createElement("div");
                divPersona.className = "contenedores";

                var nombres = document.createElement("h2")
                nombres.innerHTML = contenido[i].nombre;
                divPersona.append(nombres);

                var apellidos = document.createElement("h2");
                apellidos.innerHTML = contenido[i].apellido;
                divPersona.append(apellidos);

                var edad = document.createElement("h2");
                edad.innerHTML = contenido[i].fecha;
                divPersona.append(edad);

                var sexos = document.createElement("p");
                sexos.innerHTML = contenido[i].sexo;
                divPersona.append(sexos);


                divPersona.append(document.createElement("hr"));

                contenedor.append(divPersona);

                if(userLogIn == 'Admin'){
                var btnBorrar = document.createElement("BUTTON");
                var btnEditar = document.createElement("BUTTON");

                btnBorrar.id = contenido[i].id;
                btnEditar.id = contenido[i].id;

                divPersona.append(btnEditar);
                divPersona.append(btnBorrar);

                //si es admin que vea los botones

                
                    btnEditar.className = "modificarD";
                    btnBorrar.className = "cerrarD";

                    btnBorrar.innerText = 'Borrar';
                    btnEditar.innerText = 'Editar';


                    btnBorrar.addEventListener("click", borradoD);
                    btnEditar.addEventListener("click", editarD);

                }

     
            }

            console.log(contenido);
            console.log(contenedor);

        }

    }

}
function borradoD() {
    //funcion super loca del santo stackoverfload para obtener el ID de la funcion desencadenante del evento (el boton)
    var target = event.target || event.srcElement;
    //tenemos la variable id del boton que es la misma que de la noticia a borrar
    var id = target.id

    solicitud.onreadystatechange = envioPOST;
    solicitud.open("POST", "http://localhost:3000/eliminar", true);
    solicitud.setRequestHeader('Content-Type', 'application/json');
    var elim = { "id": id };

    solicitud.send(JSON.stringify(elim));
}


function logueo() {

    
    solicitud.onreadystatechange = logPost;

    //obtenemos user y pass del popup log in y enviamos un re post
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pasw").value;


    solicitud.open("POST", "http://localhost:3000/login", true);
    solicitud.setRequestHeader('Content-Type', 'application/json');

    // esto cambiar!! lo veo desde el js del profe
    var log = { "email": usuario, "password":pass };

    solicitud.send(JSON.stringify(log));
}

function editarD() {

    visualized();
    var target = event.target || event.srcElement;

    var id = target.id;

    editId = id;

    var nombre_input = document.getElementById("nombre");
    var apellido_input = document.getElementById("apellido");
    var fecha_input = document.getElementById("fecha");
    var sexo_input = document.getElementById("sexo");

    for (var i = 0; i < contenido_json.length; i++) {
    
        if (contenido_json[i].id == id) {

            nombre_input.setAttribute('value', contenido_json[i].nombre);
            apellido_input.setAttribute('value', contenido_json[i].apellido);
            sexo_input.setAttribute('value', contenido_json[i].sexo);
            fecha_input.setAttribute('value', contenido_json[i].fecha);
            

        }

    }

}

function logPost() {

    //cuando se entra a un post ponemos el loading asi sabesmos que esta cargando
    loading();

    if (solicitud.readyState == 4) {
        if (solicitud.status == 200) {

            //si esta todo ok agarramos la respuesta del server
            //en este caso desde el js del profe vemos que responde true o false
            //**nota-> siempre fijarse con un alert para ver que me trae y saber como manipularlo desp si es necesario alert(jdata) */
            var jdata = JSON.parse(solicitud.responseText);


            if (jdata.type == "User")  {  
                var load = document.getElementById("loginWindow");
                load.remove();
                alert("Bienvenido al blog de noticias de Juli al refrescar la pagina debera volver a introducir sus credenciales")
                userLogIn = jdata.type

                windowLoad();
            }

            if(jdata.type == "Admin"){
               
                //con credenciales bien borro de la faz de la tierra a la ventana de log in (se vuelve a crear al recargar la pag)
                var load = document.getElementById("loginWindow");
                load.remove();

                var addbts = document.getElementById("add");
                addbts.style.visibility="visible";


                userLogIn = jdata.type
                
                //logueo bien asi que pedimos que nos traiga la pasta;
                windowLoad();

                //no se por que pero si pongo loading() de vuelta no se va el loading sin nada se cierra solo ¯\_(ツ)_/¯

            }

            if (jdata.type == "error")  {  
                //con credenciales mal tira alert
                alert("Verifique sus credenciales");
            }

        }
   
    }
    
}

function envioPOST() {

    //otro post por ende login
    loading()

    if (solicitud.readyState == 4) {
        if (solicitud.status == 200) {

        var jdata = JSON.parse(solicitud.responseText);

        if (jdata.type == "error")  {  
            alert("An error Ocurred")
        }

        
        windowLoad();
        }


    }
    
}

function cBPOST() {

    

    solicitud.onreadystatechange = envioPOST;
        solicitud.open("POST", "http://localhost:3000/nueva", true);
        solicitud.setRequestHeader('Content-Type', 'application/json');
    
        var nombre_input = document.getElementById("nombre1").value;
        var apellido_input = document.getElementById("apellido1").value;
        var fecha_input = document.getElementById("fecha1").value;
        var sexo_input = document.getElementById("sexo1").value;


        var datosP = {"nombre": nombre_input, "apellido": apellido_input, "fecha": fecha_input, "sexo": sexo_input };

        console.log(JSON.stringify(datosP));
        solicitud.send(JSON.stringify(datosP));

    

    visualiz();

}

function cBPOSTE() {

    //lo mismo que antes pero para editar esta vez
    var nombre_input = document.getElementById("nombre").value;
    var apellido_input = document.getElementById("apellido").value;
    var fecha_input = document.getElementById("fecha").value;
    var sexo_input = document.getElementById("sexo").value;



    solicitud.onreadystatechange = envioPOST;

    //cambia la url pero es identico si se tiene tiempo se puede hacer un if para saber si se quiere editar o agregar y ahorras codigo pero no time
    solicitud.open("POST", "http://localhost:3000/editar", true);
    solicitud.setRequestHeader('Content-Type', 'application/json');



    var datosP = {"id":editId, "nombre": nombre_input, "apellido": apellido_input, "fecha": fecha_input, "sexo": sexo_input };

    console.log(JSON.stringify(datosP));
    solicitud.send(JSON.stringify(datosP));
    visualized();

}

function visualiz() {

    if (document.getElementById("popUp").style.visibility == "visible") {

        document.getElementById("popUp").style.visibility = "hidden";

    } else {
        document.getElementById("popUp").style.visibility = "visible";
    }

}

function visualized() {

    if (document.getElementById("popUpEditar").style.visibility == "visible") {

        document.getElementById("popUpEditar").style.visibility = "hidden";

    } else {
        document.getElementById("popUpEditar").style.visibility = "visible";
    }

}

function loading(){

    var load = document.getElementById('load');

    if (load.style.visibility == "visible"){
        load.style.visibility = "hidden";
    }
    else{
        load.style.visibility = "visible";
    }
}
