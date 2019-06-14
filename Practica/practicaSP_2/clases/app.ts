/// <reference path="../clases/cliente1.ts" />
/// <reference path="../clases/persona1.ts" />

// require('../clases/cliente1');
// require('cliente1');



// import './cliente1';
// import './persona1';

namespace segundoParcial{


 

    $(document).ready(function () {
        
        let usuarioID = 0;



        $("#addPopup").click(function () {
      
        $("#btnModificar").css("visibility","hidden");
        $("#btnEliminar").css("visibility","hidden");
        $("#btnAgregar").css("visibility","visible");
        $("#divTipo").css("visibility","visible");
        $('#nombreA').attr('value', "");
        $('#sondioA').attr('value', "");


        });

        $("#btnCerrar").click(function () {
        $("#divOculto1").css("visibility","hidden");
         
        });

        $("#btnLimpia").click(function () {

            localStorage.clear();
            location.reload();
            
        })


        mostrarPersonas();




        $("#radGatoA").on("click",function () {
            $("#radPerroA").prop("checked",false);
            $("#radPajaroA").prop("checked",false);            
        });
        $("#radPerroA").on("click",function () {
            $("#radGatoA").prop("checked",false);
            $("#radPajaroA").prop("checked",false);            
        });
        $("#radPajaroA").on("click",function () {
            $("#radGatoA").prop("checked",false);
            $("#radPerroA").prop("checked",false);
            
        });

        $("#checkFORM :checkbox").on("click",function() {

            // var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();

          
            // if(checkboxON.length == 0)         {  location.reload();}
            // checkboxON.includes("nombreF")       == true ? $(".col1").css("display","none"):null;
            // checkboxON.includes("apellidoF")       == true ? $(".col2").css("display","none"):null;
            // checkboxON.includes("edadF")       == true ? $(".col3").css("display","none"):null;
            // checkboxON.includes("sexoF")       == true ? $(".col4").css("display","none"):null;

        

            

        });



        

        $("#btnPrmedio").click(function () {

                
                // var acumEdad = usuarios
                // .reduce(function(actual,siguiente){
                //     return actual+siguiente.edad;
               // },0); //Inicializa y arranca en 0 porque es un numero lo que devuelve y no un objeto
                //En la primer iteracion, actual toma 0 como valor
            
                // var cantidad = usuarios
                // .reduce (function(actual,siguiente){
                //     return actual + 1;
                // }, 0);
                // return (acumEdad / cantidad).toFixed(2);
            
            
        });


        // $("#filtrarPor").change(function(){
            // let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            // mostrarPersonas(valorFiltro);
            // // tablaAux = undefined;
        // });

        $("#tablaID tbody tr").dblclick(function (e) {
            
        
        //    $('#myModal').modal('show');

           $("#btnModificar").css("visibility","visible");
           $("#btnEliminar").css("visibility","visible");
           $("#btnAgregar").css("visibility","hidden");

      

           

            let idSeleccionado = $(e.target).prev().text();
            let nombreSelec = $(e.target).text();
            let cantPatSelec = $(e.target).next().text();
            let tipoSelec = $(e.target).next().next().text();
            let ruidoSelec = $(e.target).next().next().next().text();

           $("#divTipo").css("visibility","hidden");

           $('#nombreA').attr('value', nombreSelec);
           $('#sondioA').attr('value', ruidoSelec);

         
            


            // let fila = $(target).parent();

            // let celdas = fila.$("td");

            // usuarioID= celdas[0].innerHTML;    

            // document.getElementById("nombreE").value= celdas[1].innerHTML;
            // document.getElementById("apellidoE").value=celdas[2].innerHTML;
            // document.getElementById("fechaE").value=celdas[3].innerHTML;
        
            // document.getElementById("divOculto").style.visibility = "visible";
            
            // usuarioGlobal.id= celdas[0].innerHTML;  


        //    var idSeleccionado = $(this).parent().siblings(":first").text();
        //    if(target.nextSibling.hidden == true)



        //    fila = target.parentNode;

        //    var celdas = fila.getElementsByTagName("td");

           
        //    $("#btnModificar")


            // $('body').removeClass('modal-open'); 
            
        });
        
      


        $("#btnAgregar").click(function () {
            
                      
          
           // window.location.href="./index2.html"; //Tomo otro html
           let nombreA:string = String($("#nombreA").val());
           let apellidoA:string = String($("#apellidoA").val());
           let edadA:number = Number($("#edadA").val());

           let sexoA:string = String($('.selectedBox:checked').val());

           //    let radPajaroA:boolean = $("#radPajaroA").prop("checked");


            let personasLista = JSON.parse(localStorage.getItem("Localpersona") || "[]");

            // for (var i = 0; i < personasLista.length; i++) {

                if(personasLista.length == 0)
                {
                    usuarioID = 1;
                }
                else{
                    usuarioID = personasLista.length+1;
                }


               

           
    
           
            let unCliente:cliente1 = new cliente1(nombreA,apellidoA,edadA,sexoA, usuarioID);
           
            personasLista.push(JSON.stringify(unCliente));       
          
          
        

           let stringpersonasLista = JSON.stringify(personasLista);
          
           localStorage.setItem("Localpersona", stringpersonasLista);

           location.reload();
        //    let unJson = JSON.parse(localStorage.getItem("animales")); //me dijo el profesor
        //    alert(unJson[0]);
        //    alert(localStorage.getItem("animales"));
        });
       
        
    
    
    });//fin document.ready


    

    function mostrarPersonas(valor?:any):void {
        let personasStorage:any|null =  JSON.parse(localStorage.getItem("Localpersona") || "[]"); 
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas:string = "";   
    
   
       

        if(valor)
        {
        //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
           let stringFinal = personasStorage
                                    .filter(function(animal:any){
                                        let animalRet = JSON.parse(animal);
                                        return animalRet.tipo == valor;
                                    })
                                    .map(function(animal:any){
                                        let animalRet = JSON.parse(animal);
                                        return animalRet;
                                    });   
                        personasStorage= stringFinal;
        }
       
        // $("#optionNull").
        if($('#filtrarPor').val() == "todos")
        {
            location.reload();
            
        }
        for (let i = 0; i < personasStorage.length; i++) {
            
           

            let personaActual;
            if(valor){personaActual = personasStorage[i];}
            else     {personaActual = JSON.parse(personasStorage[i]);}

            seccionPersonas += "<tr>      <td>"+ personaActual.ID   + "</td>" + 
                                          "<td class='col1'>" +      personaActual.nombre     + "</td>" +
                                          "<td class='col2'>" +      personaActual.apellido   + "</td>" +
                                          "<td class='col3'>" +      personaActual.edad  + "</td>" +
                                          "<td class='col4'>" +      personaActual.sexo  + "</td>" +
                                        
                                 "</tr>" ;
            tBodyTable.innerHTML = seccionPersonas;

    }
}

// function eliminarAnimal(idAnimal:number):void
// {
//     var indice = determinoIndice(idAnimal);
//     modificarEmpleado(indice,Clases.estadoCLIEMP.BAJA);
// } 

// function determinoIndice (idEmpleado:number)
// {
//     var retorno;
//     let personasStorage:string|null =  JSON.parse(localStorage.getItem("Localpersona") || "[]"); 
//     for (var i = 0; i < personasStorage.length ; i++) 
//     {
//        let empleadoActual = JSON.parse(personasStorage[i]);
//        if (empleadoActual._id == idEmpleado)
//        {retorno = i;}
//     }
//     return retorno;
// }

}

