namespace practicaSP{

    let usuarioID;

    $(document).ready(function () {
        

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


        mostrarAnimales();




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

            var checkboxON = $('input:checkbox:checked.checkItems').map(function() { return this.value; }).get();

          
            if(checkboxON.length == 0)         {  location.reload();}
            checkboxON.includes("nombreF")       == true ? $(".col1").css("display","none"):null;
            checkboxON.includes("numPatasF")       == true ? $(".col2").css("display","none"):null;
            checkboxON.includes("tipoF")       == true ? $(".col3").css("display","none"):null;
            checkboxON.includes("sonidoF")       == true ? $(".col4").css("display","none"):null;

        

            

        });



        

        $("#btnPrmedio").click(function () {

                soluciones.promedio = function(usuarios){
                var acumEdad = usuarios
                .reduce(function(actual,siguiente){
                    return actual+siguiente.edad;
                },0); //Inicializa y arranca en 0 porque es un numero lo que devuelve y no un objeto
                //En la primer iteracion, actual toma 0 como valor
            
                var cantidad = usuarios
                .reduce (function(actual,siguiente){
                    return actual + 1;
                }, 0);
                return (acumEdad / cantidad).toFixed(2);
            }
            
        });

        $("#filtrarPor").change(function(){
            let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            mostrarAnimales(valorFiltro);
            // tablaAux = undefined;
        });

        $("#tablaID tbody tr").dblclick(function (e) {
            
        
           $('#myModal').modal('show');

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
           let sondioA:string = String($("#sondioA").val());

           let radGatoA:boolean = $("#radGatoA").prop("checked");
           let radPerroA:boolean = $("#radPerroA").prop("checked");
           //    let radPajaroA:boolean = $("#radPajaroA").prop("checked");


            let animalesLista = JSON.parse(localStorage.getItem("Localanimal") || "[]");

            // let animales:Array<animal> = new Array<animal>();
            // let animales:JSON;
           

           if (radGatoA) {
            let unGato: gato = new gato(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unGato));       
           }
           else if (radPerroA) {
            let unPerro: perro = new perro(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unPerro));
           }
           else{
            let unPajaro: pajaro = new pajaro(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unPajaro));
           }
        //    animales.forEach(Programa.hablar);

           let stringAnimalesLista = JSON.stringify(animalesLista);
          
           localStorage.setItem("Localanimal", stringAnimalesLista);

           location.reload();
        //    let unJson = JSON.parse(localStorage.getItem("animales")); //me dijo el profesor
        //    alert(unJson[0]);
        //    alert(localStorage.getItem("animales"));
        })
       
        
    
    
    });//fin document.ready


    

    function mostrarAnimales(valor?):void {
        let animalesStorage:any|null =  JSON.parse(localStorage.getItem("Localanimal") || "[]"); 
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas:string = "";   
    
        // let stringFinal = animalesString
        //                         .filter(function(empleado){
        //                             let empleadoRet = JSON.parse(empleado);
        //                             return empleadoRet._tipo == valor;
        //                         })
        //                         .map(function(empleado){
        //                             let empleadoRet = JSON.parse(empleado);
        //                             return empleadoRet;
        //                         });   
        // EmpleadosString= stringFinal;
       

        if(valor)
        {
        //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
           let stringFinal = animalesStorage
                                    .filter(function(animal:any){
                                        let animalRet = JSON.parse(animal);
                                        return animalRet.tipo == valor;
                                    })
                                    .map(function(animal:any){
                                        let animalRet = JSON.parse(animal);
                                        return animalRet;
                                    });   
                        animalesStorage= stringFinal;
        }
       
        // $("#optionNull").
        if($('#filtrarPor').val() == "todos")
        {
            location.reload();
            
        }
        for (let i = 0; i < animalesStorage.length; i++) {
            
            // let animalActual = JSON.parse(animalesStorage[i]);

            let animalActual;
            if(valor){animalActual = animalesStorage[i];}
            else     {animalActual = JSON.parse(animalesStorage[i]);}

            seccionPersonas += "<tr>      <td hidden>"+ animalActual.ID   + "</td>" + 
                                          "<td class='col1'>" +      animalActual.nombre      + "</td>" +
                                          "<td class='col2'>" +      animalActual.cantPatas   + "</td>" +
                                          "<td class='col3'>" +      animalActual.tipo  + "</td>" +
                                          "<td class='col4'>" +      animalActual.ruido  + "</td>" +
                                        //   "<td>" +      personasCompleto[i].apellido + "</td>" +
                                        //   "<td>" +      personasCompleto[i].fecha    + "</td>" +
                                        //   "<td>" +      personasCompleto[i].sexo     + "</td>"+
                                        //   "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                                        //   "<input type='file' "+" hidden>"+"</td>"+
                                        // "<td>"+"<button class='btn btn-outline-warning' data-toggle='modal' data-target='#myModal' id='addPopup' hidden=>Modificar"+"<i class='fa fa-folder'></i>"+"</button>"+
                                        // "<button class='btn btn-outline-danger' data-toggle='modal' data-target='#myModal' id='addPopup'>Eliminar"+"<i class='fa fa-trash'></i></button></td>"+
                                 "</tr>" ;
            tBodyTable.innerHTML = seccionPersonas;

    }
}

function eliminarAnimal(idAnimal:number):void
{
    var indice = determinoIndice(idAnimal);
    modificarEmpleado(indice,Clases.estadoCLIEMP.BAJA);
} 

function determinoIndice (idEmpleado:number)
{
    var retorno;
    let animalesStorage:string|null =  JSON.parse(localStorage.getItem("Localanimal") || "[]"); 
    for (var i = 0; i < animalesStorage.length ; i++) 
    {
       let empleadoActual = JSON.parse(animalesStorage[i]);
       if (empleadoActual._id == idEmpleado)
       {retorno = i;}
    }
    return retorno;
}

}

