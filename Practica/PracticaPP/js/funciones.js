var xml = new XMLHttpRequest();


window.onload = function () {
    // arrayNoticias = [];
    xml.onreadystatechange = callBackGET;
    // xml.open("GET","http://192.168.2.32:3000/noticias",true);
    xml.open("GET", "http://localhost:3000/noticias", true);
    // uso null osea nada dentro del parentesis en el send porque es un get
    xml.send();
};

// CALLBACK GET Y POST

function callBackGET() {
    //verifico que tenga una respuesta correcta del servidor
    if (xml.readyState === 4) {
    //verifico que sea 200 el status que es el correcto
        if (xml.status === 200) {

            // JSON.parse y JSON.stringify para pasar de string a jsonObject y viceversa
            // var jsonString = JSON.stringify({"edad":20});
            // Lo muestro en el label del html
            // document.getElementById("textoLabel").innerHTML = xml.responseText;
            // puedo pasar el texto a un JSON para poder acceder 

            var noticias = JSON.parse(xml.responseText);
            var cuerpo = document.getElementById('tCuerpo');
            var seccionNoticias ="";

             for (var i = 0; i < noticias.length; i++) {
            
             seccionNoticias+=    "<tr><td><p id='temaNoti'><small>"+noticias[i].tema+"</small></p>" +
                                  "<h3 id='tituloNoti'>"+noticias[i].titulo  + "</h3>"+
                                  "<p id='noticiaNoti'>"+noticias[i].noticia + "</p>" +
                                  "<button class='btn btn-info' id='btnResultado' onclick='btnEdit()'>" +
                                  "<i class='glyphicon glyphicon-pencil'></i></button>" +
                                  "<button class='btn btn-danger' id='btnResultado' onclick='btnBorrar()'>" +
                                  "<i class='glyphicon glyphicon-remove'></i></button></td></tr>"+
                                  "<input type='hidden' id='idNoti' value='"+noticias[i].id+"'>";

            cuerpo.innerHTML = seccionNoticias;
                
             }
             console.log(noticias);
        }
    }
}





function callBackPOST() {
    if (xml.readyState == 4) {
        //verifico que tenga una respuesta correcta. 
        if (xml.status == 200) {
            alert("Realizado.");
            location.reload();

        }
    }
}

function callbackMODIF() {
   

    if (xml.readyState == 4) {
        
            if (xml.status == 200) {

               

                var noticias = JSON.parse(xml.responseText);

                var idHidden =document.getElementById("idNoti").value;

               

                // for(var i=0;i<noticias.length;i++)
                // {
                //     if (idHidden == noticias[i]) {
                //         document.getElementById("add-edit").hidden = false;
                //         document.getElementById("tituloE").value= noticias[i].titulo;
                //         // document.getElementById("tipoTema").
                //         document.getElementById("descipcionE").value= noticias[i].noticia;
                //         this.btnAgregar();
                        
                //     }
                //     else
                //     {
                //         alert("elemento no encontrado.");
                //     }

                // }



                var cuerpo = document.getElementById('tCuerpo');
                var seccionNoticias ="";
    
                 
                 console.log(noticias);
            }
        }
}


// BOTONES


function btnEdit() {

    xml.onreadystatechange = callbackMODIF;

    xml.open("POST", "http://localhost:3000/editarNoticia", true);



    xml.send();


    
}

function btnAgregar() {

    xml.onreadystatechange = callBackPOST;

   
    xml.open("POST", "http://localhost:3000/nuevaNoticia", true);
    xml.setRequestHeader('Content-Type','application/json');

    var titulo = document.getElementById("tituloE").value;
    var temaNum = document.getElementById("tipoTema").value;
    var tema = this.stringTema(temaNum);


    var descripcion = document.getElementById("descripcionE").value;
    var email ="add@add.com";

    var datos ={"titulo":titulo,"tema":tema,"noticia":descripcion,"email":email};

    xml.send(JSON.stringify(datos));
    
}

function edicionClick() {
    document.getElementById("add-edit").hidden = false;
}
function btnCerrar() {
    document.getElementById("add-edit").hidden = true;
}



//Tranformar Select/Option a string

function stringTema(number) {

    switch (number) {
        case "0":
        tema="Deportes";
        break;
        case "1":
        tema="Economia";
        break;
        case "2":
        tema="Ciencia";
        break;
        default:
            break;
    }

    return number;
    
}