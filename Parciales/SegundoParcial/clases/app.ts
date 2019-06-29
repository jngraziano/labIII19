/// <reference path="../clases/Vehiculo.ts" />
/// <reference path="../clases/Auto.ts" />
/// <reference path="../clases/Camioneta.ts" />


// /// <reference path="../clases/persona1.ts" />


namespace segundoParcial{


 

    $(document).ready(function () {
        
        let usuarioID = 0;

        $("#ListadoRefresh").click(function (){
            location.reload();
        });


        $("#addPopup").click(function () {
      
        $("#btnModificar").css("visibility","hidden");
        // $("#btnEliminar").css("visibility","hidden");
        $("#btnAgregar").css("visibility","visible");
        $("#divTipo").css("visibility","visible");
        $('#marcaA').attr('value', "");
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

            // var checkboxON = $('input:checkbox:checked.checkItems').map(function(x) { return x == "nombreF"; }).get();
            // let checkboxON: any = $('input:checkbox:checked.checkItems').val();
            // console.log(checkboxON);
          
            // if(checkboxON.length == 0)         {  location.reload();}

            // if(checkboxON == "nombreF")
            // {
            //     $(".col1").css("display","none");                
            //     $(".col3").css("display","none");
            //     $(".col4").css("display","none");


            // }

            // checkboxON.includes("nombreF")       == true ? $(".col2").css("display","none"):null;
            // checkboxON.includes("apellidoF")       == true ? $(".col3").css("display","none"):null;
            // checkboxON.includes("edadF")       == true ? $(".col3").css("display","none"):null;
            // checkboxON.includes("sexoF")       == true ? $(".col4").css("display","none"):null;

        

            

        });

        $("#btnNombApe").click(function(){
            
            mostrarNombApe(); 

        });



        

        $("#btnPromedio").click(function () {

            let personasStorage:any|null =  JSON.parse(localStorage.getItem("Localvehiculo") || "[]"); 
            let acumulador;
            // console.log(personasStorage);

            const arr = [0];

            for (let index = 0; index < personasStorage.length; index++) {
                let personaprueba = JSON.parse(personasStorage[index]);
                // console.log(personaprueba);
                if(personaprueba.precio != 0)
                {
                    arr.push( personaprueba.precio);

                }
                
            }
            console.log(arr);

            // sum all the elements of the array
            const sum = arr.reduce(function (accumulator, currentValue){
            return accumulator + currentValue;
            });
            console.log(sum);
            let divido = arr.length-1;

          
            let average = sum / divido;
            average = Math.round(average * 100) / 100
            $("#promedioText").html("$"+average.toString());
            
        });

        $("select.selectTipoA").change(function(){

            // var targetInput = event.target;
            // var idSeleccionado = $(this).parent().siblings(":first").text();
            var selectedEstado = $(this).children("option:selected").val();
           
            if(selectedEstado == "AUTO")
            {
                //  $("#btnAgregar").css("visibility","hidden");

                // alert("auto");
                $("#inputPuertas").css("visibility","visible");
                $("#inputCuatro").css("visibility","hidden");

            }
            else
            {
                $("#inputCuatro").css("visibility","visible");
                $("#inputPuertas").css("visibility","hidden");

              

            }

            // alert("perrote");
            // let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            // let valorSeleccionado = $("#filtrarPor").value;
            
            // tablaAux = undefined;
        });




        $("select.selectEstado").change(function(){

            // var targetInput = event.target;
            // var idSeleccionado = $(this).parent().siblings(":first").text();
            var selectedEstado = $(this).children("option:selected").val();
            mostrarPersonas(selectedEstado);
        

            // alert("perrote");
            // let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            // let valorSeleccionado = $("#filtrarPor").value;
            
            // tablaAux = undefined;
        });

        $("#tablaID tbody tr").dblclick(function (e) {
            
        
        //    $('#myModal').modal('show');

        //    $("#btnModificar").css("visibility","visible");
        //    $("#btnEliminar").css("visibility","visible");
           $("#btnAgregar").css("visibility","hidden");

      

           

            let idSeleccionado = $(e.target).prev().text();
            let nombreSelec = $(e.target).text();
            let cantPatSelec = $(e.target).next().text();
            let tipoSelec = $(e.target).next().next().text();
            let ruidoSelec = $(e.target).next().next().next().text();

           $("#divTipo").css("visibility","hidden");

           $('#marcaA').attr('value', nombreSelec);
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

      

        $(".eliminarVe").click(function (e) { 
            var idSeleccionado = $(this).parent().siblings(":first").text();
            let personasLista = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");

            

          for (let index = 0; index < personasLista.length; index++) {
            let vehiaux = JSON.parse(personasLista[index]);
             console.log(vehiaux);
            if(vehiaux.ID== idSeleccionado)
            {
             personasLista.splice(index,1);
        
            }
              
          }

          let listaenviar = JSON.stringify(personasLista);
          console.log(listaenviar);

          localStorage.setItem("Localvehiculo", listaenviar);
          location.reload();
    
        });

            


        $("#btnAgregar").click(function () {
            
                      
          
           let marcaA:string = String($("#marcaA").val());
           let modeloA:string = String($("#modeloA").val());
           let precioA:number = Number($("#precioA").val());
           let inputPuertas:number = Number($("#puertasA").val());
           let inputCuatro:string = String($("#cuatroA").val());
           let es4x4:boolean = false;


           let tipoA:string = String($('.selectedBox:checked').val());

            let personasLista = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");

         

                if(personasLista.length == 0)
                {
                    usuarioID = 1;
                }
                else{
                    let res;
                  

                          res = personasLista.reduce(function (p, v) {
                            return ( p < JSON.parse(v).ID ? JSON.parse(v).ID: p );
                          },0);
                   
                      console.log(res);


                    usuarioID = res+1;
                }


                if(inputCuatro == "SI")
                {
                    es4x4 = true;
                }
            
            let unVehiculo: Object;    
            if(tipoA == "AUTO")
            {
                unVehiculo = new Auto(marcaA,modeloA,precioA,usuarioID, inputPuertas);

            }
            else{
                unVehiculo = new Camioneta(marcaA,modeloA,precioA,usuarioID,es4x4);
                

            }

            console.log("Vehiculo cargado: "+ unVehiculo);
           
           
            personasLista.push(JSON.stringify(unVehiculo));       
        

           let stringpersonasLista = JSON.stringify(personasLista);
           console.log(stringpersonasLista);
          
           localStorage.setItem("Localvehiculo", stringpersonasLista);

           location.reload();
       
        });
       
        
    
    
    });//fin document.ready
    

    function mostrarPersonas(valor?:any):void {
        let personasStorage:any|null =  JSON.parse(localStorage.getItem("Localvehiculo") || "[]"); 
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas:string = "";   
    
        if(valor)
        {
        //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
           let stringFinal = personasStorage
                                    .filter(function(persona:any){
                                        let personaRet = JSON.parse(persona);
                                        // console.log(personaRet.sexo);
                                        // console.log(valor);
                                        return personaRet.tipo === valor;
                                    })
                                    .map(function(persona:any){
                                        let personaRet = JSON.parse(persona);
                                        return personaRet;
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
                                          "<td class='col1'>" +      personaActual.marca     + "</td>" +
                                          "<td class='col2'>" +      personaActual.modelo   + "</td>" +
                                          "<td class='col3'>" +      personaActual.precio  + "</td>" +
                                          "<td class='col4'>" +      personaActual.tipo  + "</td>" +
                                          "<td >" +      "<button class='btn btn-outline-danger eliminarVe'>Eliminar</button>" + "</td>" +

            

                                        
                                 "</tr>" ;
            tBodyTable.innerHTML = seccionPersonas;

    }
}

function mostrarNombApe()
{

    let personasStorage:any|null =  JSON.parse(localStorage.getItem("Localvehiculo") || "[]"); 
    var tBodyTable = $('#tBodyTable')[0];
    var seccionPersonas:string = "";   

        $(".col1").css("display","none");
        $(".col4").css("display","none");       
        $(".col5").css("display","none");       

        for (let i = 0; i < personasStorage.length; i++) {
        
            console.log(JSON.parse(personasStorage[i]));
            let personaActual = JSON.parse(personasStorage[i])
           
            seccionPersonas += "<tr> "    +
                                          "<td class='col1'>" +      personaActual.marca     + "</td>" +
                                          "<td class='col2'>" +      personaActual.modelo   + "</td>" +
                                        //   "<td class='col3'>" +      personaActual.edad  + "</td>" +
                                        //   "<td class='col4'>" +      personaActual.sexo  + "</td>" +
                                        
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
//     let personasStorage:string|null =  JSON.parse(localStorage.getItem("Localvehiculo") || "[]"); 
//     for (var i = 0; i < personasStorage.length ; i++) 
//     {
//        let empleadoActual = JSON.parse(personasStorage[i]);
//        if (empleadoActual._id == idEmpleado)
//        {retorno = i;}
//     }
//     return retorno;
// }

}

