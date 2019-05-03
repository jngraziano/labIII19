var xml = new XMLHttpRequest();

//Creo una persona Global para manejar datos
var usuarioGlobal = { "id":"","nombre":"","apellido":"","fecha":"","sexo":"","avatar":"" }

window.onload = function () {

    //BOTON LOGIN
    // var btnLogin = document.getElementById("loginB");
    // btnLogin.addEventListener("click", logueo);

    muestroTabla();

   


   

  
}



function muestroTabla(){

    xml.open("GET", "http://localhost:3000/personas", true);
    xml.onreadystatechange = callBackPOST;
  

    // xml.setRequestHeader('Content-Type', 'application/json');
    // xml.send(JSON.stringify(datosLogin));
    xml.send();

    
}


function callBackPOST(){

      //verifico que tenga una respuesta correcta del servidor
      if (xml.readyState === 4) {
        //verifico que sea 200 el status que es el correcto
            if (xml.status === 200) {


                var personasCompleto = JSON.parse(xml.responseText);
       
                var cuerpoTablaHTML = document.getElementById('tCuerpo');
                var seccionPersonas = "";
                
            
                for(var i=0; i< personasCompleto.length; i++)
                {
                    // Creo fila
                    var row = document.createElement("tr");

                    // Creo la columna ID (esta con hidden por css)
                    var colID = document.createElement("td");
                    colID.setAttribute("id", "colID");

                    // Creo el resto de las columnas
                    var colNombre = document.createElement("td");
                    var colApellido = document.createElement("td");
                    var colFecha = document.createElement("td");
                    var colSexo = document.createElement("td");
                    // var colFoto = document.createElement("td");

                    var id = document.createTextNode(personasCompleto[i].id);
                    var nombre = document.createTextNode(personasCompleto[i].nombre);
                    var apellido = document.createTextNode(personasCompleto[i].apellido);
                    var fecha = document.createTextNode(personasCompleto[i].fecha);
                    var sexo = document.createTextNode(personasCompleto[i].sexo);
                    // var foto = document.createTextNode(personasCompleto[i].foto);

                    row.appendChild(colNombre.appendChild(nombre));
                    row.appendChild(colApellido.appendChild(apellido));
                    row.appendChild(colFecha.appendChild(fecha));
                    row.appendChild(colSexo.appendChild(sexo));
                    // row.appendChild(colFoto.appendChild(foto));

                    cuerpoTablaHTML.appendChild(row);

                    // cuerpoTablaHTML.appendChild(nombre);
                    // cuerpoTablaHTML.appendChild(apellido);
                    // cuerpoTablaHTML.appendChild(fecha);
                    // cuerpoTablaHTML.appendChild(sexo);
                    // cuerpoTablaHTML.appendChild(foto);




                    
                    // seccionPersonas += "<tr>  <td hidden>"+ personasCompleto[i].id       + "</td>" +
                    //                           "<td>" +      personasCompleto[i].nombre   + "</td>" +
                    //                           "<td>" +      personasCompleto[i].apellido + "</td>" +
                    //                           "<td>" +      personasCompleto[i].fecha    + "</td>" +
                    //                           "<td>" +      personasCompleto[i].sexo     + "</td>"+
                    //                           "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                    //                           "<input type='file' "+" hidden>"+"</td>"+
            
                                        
                                             
            
                    //                  "</tr>" ;
            
                    // cuerpoTablaHTML.innerHTML = seccionPersonas;
                    // cuerpoTablaHTML.innerHTML += seccionPersonas; //agregar seccionPersonas despues del igual arriba para usar esto

                }




            }
        }
     //Creo y muestro tabla
    
}