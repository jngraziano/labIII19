var xml = new XMLHttpRequest();

//Creo una persona Global para manejar datos
var usuarioGlobal = { "id":"","nombre":"","apellido":"","fecha":"","sexo":"","avatar":"" }


$(document).ready(function () {
    
  
    //CREO y MUESTRO TABLA
    $.get("http://localhost:3000/materias",function (data, status) {

        console.log(status);
        console.log(data);

        var personasCompleto = data;
       
            var cuerpoTablaHTML = document.getElementById('tCuerpo');
            var seccionPersonas = "";
            

            for(var i=0; i< personasCompleto.length; i++)
            {

                seccionPersonas += "<tr>  <td hidden>"+ personasCompleto[i].id       + "</td>" +
                                          "<td>" +      personasCompleto[i].nombre   + "</td>" +
                                          "<td>" +      personasCompleto[i].cuatrimestre + "</td>" +
                                          "<td>" +      personasCompleto[i].fechaFinal    + "</td>" +
                                          "<td>" +      personasCompleto[i].turno     + "</td>"+
                                        //   "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                                        //   "<input type='file' "+" hidden>"+"</td>"+

                                    
                                         

                                 "</tr>" ;

                cuerpoTablaHTML.innerHTML = seccionPersonas;
                

                $("img").on("click", function () {

                //    var target = event.target || event.srcElement;
                    
                    
                    var target = event.target;

                    
                   if(target.nextSibling.hidden == true)
                   {
                       $(target.nextSibling).toggle();
                   }
                   else{
                    $(target.nextSibling).toggle();
                   }               
 
                      
                  });


                // $("input").change(function () { 
                //     var imgPost="";
                //     var targetInput = event.target;
                //     var idSeleccionado = $(this).parent().siblings(":first").text();
                   
            
                    // var idOtraforma = targetInput.parentNode.parentNode.setAtributte('id');

                //              var fReader = new FileReader();
                            
                //              fReader.addEventListener("load", function (e) {
            
                //                  imgPost=e.target.result;
                //                  //console.log(e.target.result);
                //                  $(event.target.previousSibling).attr("src", imgPost);
                //                  // $(event.target).toggle();
                //                  $.post("http://localhost:3000/editarFoto",
                //                 {
                //                         id: idSeleccionado, 
                //                         foto: imgPost
                        
                //                 },function () {
                                    
                //                     transicionSpinner();
                //                 }                                  
                //                  );
    
                //              });
                             
                //              fReader.readAsDataURL(targetInput.files[0]);
                           
                            
                            
                             
                    
                    
                    
            
                //      var spinner = document.getElementById("spinner");
                //      spinner.style.display = "block";
            
                    
                    
                // });

                 
                 
                
            // }

            
                    
            
    }});//fin $.get

    $("h2").click(function () { 
        $("#listadoPersonas").toggle(1000);
        
    });

    $("#tCuerpo").dblclick(function () {
        
        muestroDivconClick();
        
    })//fin td.dblclick

    $("#btnAgregar").click(function() { 
       $("#divOculto2").show(1000);
        
    });

    $("#btnAgregarConfirm").click(function() { 
        agregarPersona();
        
    });

    $("#btnModificar").click(function () { 
       modificarPersona();
        
    });

    $("#btnEliminar").click(function () { 
        eliminarPersona();
        
    });
    // $("input").change(function () { 
    //     imgPOST();
                
          
    // });
    
    // $("img").on("click", function () {

    // $(".radioC").click(function () {
        $("#radNocheE,#radNocheA").on("click", function () {

            $("#radMananaE,#radMananaA").prop("checked",false);

        });

        $("#radMananaE,#radMananaA").on("click", function () {

            $("#radNocheE,#radNocheA").prop("checked",false);

        });




        // if ($("#radNocheE").prop("checked") || $("#radNocheA").prop("checked")) {

        //     $("#radMananaE").prop("checked",false);
        //     $("#radMananaA").prop("checked",false);
        //     flag = true;
        // }
        // else{
        //     $("#radNocheE").prop("checked",false);
        //     $("#radNocheA").prop("checked",false);
        // }
        

       

    $(".btnCerrar").click(function () {
        $(".divOculto").hide(1000);
        
    })
   

    
})//fin del document.ready



  

//#region Como muestro la tabla 

function loginAccesso() {
    document.getElementById("loginWindow").style.visibility = "hidden";

    document.getElementById("divListado").style.visibility = "visible";

    // xml.onreadystatechange = logPost;

    //obtenemos user y pass del popup log in y enviamos un re post
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pasw").value;


    xml.open("POST", "http://localhost:3000/login", true);
    xml.setRequestHeader('Content-Type', 'application/json');

    // esto cambiar!! lo veo desde el js del profe
    // var log = { "email": usuario, "password":pass };

    // xml.send(JSON.stringify(log));
    
}


//#endregion

//#region Mostrar y Ocultar div

//MOSTRAR DIV OCULTO con CLICK

function muestroDivconClick() {

    $("#divOculto").show(1000);

    var target = event.target || event.srcElement;

    fila = target.parentNode;

    var celdas = fila.getElementsByTagName("td");

    // document.getElementById("divOculto").style.visibility = "visible";
    
    usuarioGlobal.id= celdas[0].innerHTML;    
    document.getElementById("nombreE").value= celdas[1].innerHTML;
    document.getElementById("cuatrimestreE").value=celdas[2].innerHTML;

    // split date 
    var date = celdas[3].innerHTML.split("/");

    document.getElementById("fechaE").value=date[2] + "-" + date[1] + "-" + date[0];

    
    if (celdas[4].innerHTML == "Noche") {

        $("#radNocheE").prop("checked",true);
        $("#radMananaE").prop("checked",false);

     

    }
    else {
        $("#radMananaE").prop("checked",true);

    }

    
}

//#endregion

//#region Alta baja y modificacion de personas

// AGREGAR



function agregarPersona() {

    var flag = true;
    var nombreNuevo = document.getElementById("nombreA").value;
    var cuatrimestreNuevo =document.getElementById("cuatrimestreA").value;
    var fechaNueva = document.getElementById("fechaA").value;

    var fechaHOY = new Date();

    var turnoNuevo;

    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES y no vacio
    if (nombreNuevo.length < 3 || nombreNuevo == "") {
     
    //    $("#nombreA").addClass("ValidaError");
    document.getElementById("nombreA").className  = "ValidaBorderColorError";

        flag= false;
    }
    else {
        // $("#nombreA").addClass("ValidaCorrecto");
         document.getElementById("nombreA").className  = "ValidaBorderCorrecto";

        
    }
    // if (cuatrimestreNuevo.length < 3 || cuatrimestreNuevo == "") {

    //     // $("#cuatrimestreA").addClass("ValidaError");
    //     document.getElementById("cuatrimestreA").className  = "ValidaBorderColorError";
    //     flag= false;
    // }
    // else {
    //     // $("#cuatrimestreA").addClass("ValidaCorrecto");
    //     document.getElementById("cuatrimestreA").className  = "ValidaBorderCorrecto";

        
    // }

    //VALIDO FECHA
    var fechaSplit = fechaNueva.split("-");
    var fechaValidada = new Date(fechaSplit[0],fechaSplit[1]-1,fechaSplit[2],0,0,0,0);
    var fechaPost = fechaValidada.getFullYear() + "-" + ("0" + (fechaValidada.getMonth() + 1)).slice(-2) + "-" + ("0" + (fechaValidada.getDay() + 1)).slice(-2);
  

    if (fechaNueva == "" || fechaValidada.getTime() > fechaHOY.getTime()) {
        document.getElementById("PfechaA").className = "ValidaTextColorError";
        flag = false;
    }
    else{
        document.getElementById("PfechaA").className = "ValidaTextColorCorrecto";
        
    }

    //VALIDO QUE SELECCIONEN UNO DE LOS DOS SEXOS

    var radNoche = $("#radNocheA").prop("checked");
    var radManana = $("#radMananaA").prop("checked");

    // (document.getElementById("radNocheA").checked == false && document.getElementById("radMananaA").checked == false )

    if (radNoche && radManana)
    {
        flag=false;
        $("#radNocheA").prop("checked",false);
        $("#radMananaA").prop("checked",false);

        document.getElementById("labelSexoA").className = "ValidaTextColorError";
    } 
    else if(radManana) {

        turnoNuevo = "Mañana";
       

    }
    else{
        turnoNuevo = "Tarde"; 
    }

    //BASE64
    // var imgPost;
    // var input = document.getElementById("inputImgA");
    
    // $("#imgMuestro").attr(function () { 

        // if(input.files && input.files[0]){
            // var fReader = new FileReader();
            // console.log(fReader);
            // fReader.addEventListener("load", function (e) {
                // console.log(e.target.result);//es lo mismo que setatribbiut
                // $("#imagen").attr("src",e.target.result);
                //si se lo paso directamente al src de un tag img levanta la imagen, por eso uso attr
                // imgPost = e.target.result;
                
            // })
            // fReader.readAsDataURL(input.files[0]);
        // }
        
    // });


   
    if(flag == true)
    {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "block";

        $.post("http://localhost:3000/nueva",
        {
                nombre: nombreNuevo,
                cuatrimestre: cuatrimestreNuevo,
                turno: turnoNuevo,
                fecha: fechaPost
                // avatar: imgPost

        },
        
        
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );       
       
    }
}



// MODIFICACION

function modificarPersona() {
    
    var flag = true;
    var nombreEdit = document.getElementById("nombreE").value;
    var cuatrimestreEdit =document.getElementById("cuatrimestreE").value;
    var fechaHOY = new Date();
    var fechaEdit = $("#fechaE").val;
    var turnoEdit;

    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES
    if (nombreEdit.length < 3 || nombreEdit == "") {
     
        //    $("#nombreA").addClass("ValidaError");
        document.getElementById("nombreE").className  = "ValidaBorderColorError";
    
            flag= false;
        }
        else {
            // $("#nombreA").addClass("ValidaCorrecto");
             document.getElementById("nombreE").className  = "ValidaBorderCorrecto";
    
            
        }
        // if (cuatrimestreEdit.length < 3 || cuatrimestreEdit == "") {
    
        //     // $("#cuatrimestreA").addClass("ValidaError");
        //     document.getElementById("cuatrimestreE").className  = "ValidaBorderColorError";
        //     flag= false;
        // }
        // else {
        //     // $("#cuatrimestreA").addClass("ValidaCorrecto");
        //     document.getElementById("cuatrimestreE").className  = "ValidaBorderCorrecto";
    
            
        // }

        //VALIDO FECHA
        var fechaEdit = document.getElementById("fechaE").value;

        var fechaSplit = fechaEdit.split("-");

        var fechaValidada = new Date(fechaSplit[0],fechaSplit[1]-1,fechaSplit[2],0,0,0,0);
        //recordar posible -1 al mes
       
        
        var fechaPost = ("0" + (fechaValidada.getDay() + 1)).slice(-2) + "/" + ("0" + (fechaValidada.getMonth() + 1)).slice(-2) + "/" +  fechaValidada.getFullYear();


        if (fechaEdit == "" || fechaValidada.getTime() < fechaHOY.getTime()) {
            document.getElementById("PfechaE").className = "ValidaTextColorError";
            flag = false;
        }
        else{
            document.getElementById("PfechaE").className = "ValidaTextColorCorrecto";
            
        }

  


    //VALIDO QUE SELECCIONEN UNO DE LOS DOS turnos

    var radNoche = $("#radNocheE").prop("checked");
    var radManana = $("#radMananaE").prop("checked");

    if (radNoche && radManana || radNoche == false && radManana == false)
    {
        flag=false;
        $("#radNocheE").prop("checked",false);
        $("#radMananaE").prop("checked",false);

        document.getElementById("labelSexoE").className = "ValidaTextColorError";
    } 
    else if(radManana) {

        turnoEdit = "Mañana";
       

    }
    else{
        turnoEdit = "Noche"; 
    }

    //BASE64
    // var imgE;
    // var inputE = document.getElementById("inputImgE");
    
    // $("#imgMuestro").attr(function () { 

        // if(input.files && input.files[0]){
            // var fReaderE = new FileReader();
            // console.log(fReader);
            // fReaderE.addEventListener("load", function (e) {
                // console.log(e.target.result);//es lo mismo que setatribbiut
                // $("#imagen").attr("src",e.target.result);
                //si se lo paso directamente al src de un tag img levanta la imagen, por eso uso attr
            //     imgE = e.target.result;
                
            // })
            // fReaderE.readAsDataURL(inputE.files[0]);
        // }
        
    // });




     if(flag== true)
     {
        document.getElementById("spinner").style.display = "block";

         $.post("http://localhost:3000/editar",
        {
                id: usuarioGlobal.id,
                nombre: nombreEdit,
                cuatrimestre: cuatrimestreEdit,
                turno: turnoEdit,
                fechaFinal: fechaPost
                // avatar: imgE
        },
        
        
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );
       
    }
  


}

// ELIMINAR

function eliminarPersona() {

    var target = event.target || event.srcElement;
    //tenemos la variable id del boton que es la misma que de la noticia a borrar
    var idaPasar = target.id

    var spinner = document.getElementById("spinner");
    

   
    if(confirm("¿Confirma eliminar persona?"))
    {
        var spinner = document.getElementById("spinner");
            spinner.style.display = "block";

        $.post("http://localhost:3000/eliminar",
        {
                id:  usuarioGlobal.id
                
        },
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );

    }
        

    
}

//#endregion

//SPINNER (NO ANDA)

function transicionSpinner() {
    
      
    // document.getElementById("spinner").style.display = "block";
   
    //anda flama el tema del spiner solo que es chico y se muestra abajo nada mas 
    

    // $("#divTotal").css("filter", "grayscale(100%)");
 
 
    document.getElementById("spinner").style.display = "none";
    $(".divOculto").hide();


    //No hay chance no toma el fondo 
    $("body").addClass("claseFondo");
        
    location.reload();
    
    

}