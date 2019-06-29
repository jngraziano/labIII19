"use strict";
/// <reference path="../clases/cliente1.ts" />
/// <reference path="../clases/persona1.ts" />
// require('../clases/cliente1');
// require('cliente1');
// import './cliente1';
// import './persona1';
var segundoParcial;
(function (segundoParcial) {
    $(document).ready(function () {
        var usuarioID = 0;
        $("#ListadoRefresh").click(function () {
            location.reload();
        });
        $("#addPopup").click(function () {
            $("#btnModificar").css("visibility", "hidden");
            $("#btnEliminar").css("visibility", "hidden");
            $("#btnAgregar").css("visibility", "visible");
            $("#divTipo").css("visibility", "visible");
            $('#nombreA').attr('value', "");
            $('#sondioA').attr('value', "");
        });
        $("#btnCerrar").click(function () {
            $("#divOculto1").css("visibility", "hidden");
        });
        $("#btnLimpia").click(function () {
            localStorage.clear();
            location.reload();
        });
        mostrarPersonas();
        $("#radGatoA").on("click", function () {
            $("#radPerroA").prop("checked", false);
            $("#radPajaroA").prop("checked", false);
        });
        $("#radPerroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
            $("#radPajaroA").prop("checked", false);
        });
        $("#radPajaroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
            $("#radPerroA").prop("checked", false);
        });
        $("#checkFORM :checkbox").on("click", function () {
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
        $("#btnNombApe").click(function () {
            mostrarNombApe();
        });
        $("#btnPromedio").click(function () {
            var personasStorage = JSON.parse(localStorage.getItem("Localpersona") || "[]");
            var acumulador;
            // console.log(personasStorage);
            var arr = [0];
            for (var index = 0; index < personasStorage.length; index++) {
                var personaprueba = JSON.parse(personasStorage[index]);
                // console.log(personaprueba);
                if (personaprueba.edad != 0) {
                    arr.push(personaprueba.edad);
                }
            }
            console.log(arr);
            // sum all the elements of the array
            var sum = arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            });
            console.log(sum);
            var divido = arr.length - 1;
            var average = sum / divido;
            average = Math.round(average * 100) / 100;
            $("#promedioText").html(average.toString());
        });
        $("select.selectEstado").change(function () {
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
            $("#btnModificar").css("visibility", "visible");
            $("#btnEliminar").css("visibility", "visible");
            $("#btnAgregar").css("visibility", "hidden");
            var idSeleccionado = $(e.target).prev().text();
            var nombreSelec = $(e.target).text();
            var cantPatSelec = $(e.target).next().text();
            var tipoSelec = $(e.target).next().next().text();
            var ruidoSelec = $(e.target).next().next().next().text();
            $("#divTipo").css("visibility", "hidden");
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
            var nombreA = String($("#nombreA").val());
            var apellidoA = String($("#apellidoA").val());
            var edadA = Number($("#edadA").val());
            var sexoA = String($('.selectedBox:checked').val());
            //    let radPajaroA:boolean = $("#radPajaroA").prop("checked");
            var personasLista = JSON.parse(localStorage.getItem("Localpersona") || "[]");
            // for (var i = 0; i < personasLista.length; i++) {
            if (personasLista.length == 0) {
                usuarioID = 1;
            }
            else {
                usuarioID = personasLista.length + 1;
            }
            var unCliente = new segundoParcial.cliente1(nombreA, apellidoA, edadA, sexoA, usuarioID);
            personasLista.push(JSON.stringify(unCliente));
            var stringpersonasLista = JSON.stringify(personasLista);
            localStorage.setItem("Localpersona", stringpersonasLista);
            location.reload();
            //    let unJson = JSON.parse(localStorage.getItem("animales")); //me dijo el profesor
            //    alert(unJson[0]);
            //    alert(localStorage.getItem("animales"));
        });
    }); //fin document.ready
    function mostrarPersonas(valor) {
        var personasStorage = JSON.parse(localStorage.getItem("Localpersona") || "[]");
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        if (valor) {
            //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
            var stringFinal = personasStorage
                .filter(function (persona) {
                var personaRet = JSON.parse(persona);
                // console.log(personaRet.sexo);
                // console.log(valor);
                return personaRet.sexo === valor;
            })
                .map(function (persona) {
                var personaRet = JSON.parse(persona);
                return personaRet;
            });
            personasStorage = stringFinal;
        }
        // $("#optionNull").
        if ($('#filtrarPor').val() == "todos") {
            location.reload();
        }
        for (var i = 0; i < personasStorage.length; i++) {
            var personaActual = void 0;
            if (valor) {
                personaActual = personasStorage[i];
            }
            else {
                personaActual = JSON.parse(personasStorage[i]);
            }
            seccionPersonas += "<tr>      <td>" + personaActual.ID + "</td>" +
                "<td class='col1'>" + personaActual.nombre + "</td>" +
                "<td class='col2'>" + personaActual.apellido + "</td>" +
                "<td class='col3'>" + personaActual.edad + "</td>" +
                "<td class='col4'>" + personaActual.sexo + "</td>" +
                "</tr>";
            tBodyTable.innerHTML = seccionPersonas;
        }
    }
    function mostrarNombApe() {
        var personasStorage = JSON.parse(localStorage.getItem("Localpersona") || "[]");
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        $(".col1").css("display", "none");
        $(".col4").css("display", "none");
        $(".col5").css("display", "none");
        for (var i = 0; i < personasStorage.length; i++) {
            // let personaActual;
            // if(valor)
            // {personaActual = personasStorage[i];}
            // else     {personaActual = JSON.parse(personasStorage[i]);}
            // let personaActual[] = ;
            console.log(JSON.parse(personasStorage[i]));
            var personaActual = JSON.parse(personasStorage[i]);
            // let prueba = personaActual.map(function(x){
            //     return x;
            // });
            // let personaActualApellido = personasStorage[i].apellido;
            // console.log( prueba);
            // <td>"+ personaActual.ID   + "</td>" + 
            seccionPersonas += "<tr> " +
                "<td class='col1'>" + personaActual.nombre + "</td>" +
                "<td class='col2'>" + personaActual.apellido + "</td>" +
                //   "<td class='col3'>" +      personaActual.edad  + "</td>" +
                //   "<td class='col4'>" +      personaActual.sexo  + "</td>" +
                "</tr>";
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
})(segundoParcial || (segundoParcial = {}));
