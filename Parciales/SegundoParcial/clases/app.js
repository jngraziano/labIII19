"use strict";
/// <reference path="../clases/Vehiculo.ts" />
/// <reference path="../clases/Auto.ts" />
/// <reference path="../clases/Camioneta.ts" />
// /// <reference path="../clases/persona1.ts" />
var segundoParcial;
(function (segundoParcial) {
    $(document).ready(function () {
        var usuarioID = 0;
        $("#ListadoRefresh").click(function () {
            location.reload();
        });
        $("#addPopup").click(function () {
            $("#btnModificar").css("visibility", "hidden");
            // $("#btnEliminar").css("visibility","hidden");
            $("#btnAgregar").css("visibility", "visible");
            $("#divTipo").css("visibility", "visible");
            $('#marcaA').attr('value', "");
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
            var personasStorage = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");
            var acumulador;
            // console.log(personasStorage);
            var arr = [0];
            for (var index = 0; index < personasStorage.length; index++) {
                var personaprueba = JSON.parse(personasStorage[index]);
                // console.log(personaprueba);
                if (personaprueba.precio != 0) {
                    arr.push(personaprueba.precio);
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
            $("#promedioText").html("$" + average.toString());
        });
        $("select.selectTipoA").change(function () {
            // var targetInput = event.target;
            // var idSeleccionado = $(this).parent().siblings(":first").text();
            var selectedEstado = $(this).children("option:selected").val();
            if (selectedEstado == "AUTO") {
                //  $("#btnAgregar").css("visibility","hidden");
                // alert("auto");
                $("#inputPuertas").css("visibility", "visible");
                $("#inputCuatro").css("visibility", "hidden");
            }
            else {
                $("#inputCuatro").css("visibility", "visible");
                $("#inputPuertas").css("visibility", "hidden");
            }
            // alert("perrote");
            // let valorFiltro = $('#filtrarPor').map(function() { return this.value; }).get();
            // let valorSeleccionado = $("#filtrarPor").value;
            // tablaAux = undefined;
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
            //    $("#btnModificar").css("visibility","visible");
            //    $("#btnEliminar").css("visibility","visible");
            $("#btnAgregar").css("visibility", "hidden");
            var idSeleccionado = $(e.target).prev().text();
            var nombreSelec = $(e.target).text();
            var cantPatSelec = $(e.target).next().text();
            var tipoSelec = $(e.target).next().next().text();
            var ruidoSelec = $(e.target).next().next().next().text();
            $("#divTipo").css("visibility", "hidden");
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
            var personasLista = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");
            for (var index = 0; index < personasLista.length; index++) {
                var vehiaux = JSON.parse(personasLista[index]);
                console.log(vehiaux);
                if (vehiaux.ID == idSeleccionado) {
                    personasLista.splice(index, 1);
                }
            }
            var listaenviar = JSON.stringify(personasLista);
            console.log(listaenviar);
            localStorage.setItem("Localvehiculo", listaenviar);
            location.reload();
        });
        $("#btnAgregar").click(function () {
            var marcaA = String($("#marcaA").val());
            var modeloA = String($("#modeloA").val());
            var precioA = Number($("#precioA").val());
            var inputPuertas = Number($("#puertasA").val());
            var inputCuatro = String($("#cuatroA").val());
            var es4x4 = false;
            var tipoA = String($('.selectedBox:checked').val());
            var personasLista = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");
            if (personasLista.length == 0) {
                usuarioID = 1;
            }
            else {
                var res = void 0;
                res = personasLista.reduce(function (p, v) {
                    return (p < JSON.parse(v).ID ? JSON.parse(v).ID : p);
                }, 0);
                console.log(res);
                usuarioID = res + 1;
            }
            if (inputCuatro == "SI") {
                es4x4 = true;
            }
            var unVehiculo;
            if (tipoA == "AUTO") {
                unVehiculo = new segundoParcial.Auto(marcaA, modeloA, precioA, usuarioID, inputPuertas);
            }
            else {
                unVehiculo = new segundoParcial.Camioneta(marcaA, modeloA, precioA, usuarioID, es4x4);
            }
            console.log("Vehiculo cargado: " + unVehiculo);
            personasLista.push(JSON.stringify(unVehiculo));
            var stringpersonasLista = JSON.stringify(personasLista);
            console.log(stringpersonasLista);
            localStorage.setItem("Localvehiculo", stringpersonasLista);
            location.reload();
        });
    }); //fin document.ready
    function mostrarPersonas(valor) {
        var personasStorage = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        if (valor) {
            //MUESTRO EL LISTADO DE EmpleadoS SEGUN FILTRO
            var stringFinal = personasStorage
                .filter(function (persona) {
                var personaRet = JSON.parse(persona);
                // console.log(personaRet.sexo);
                // console.log(valor);
                return personaRet.tipo === valor;
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
                "<td class='col1'>" + personaActual.marca + "</td>" +
                "<td class='col2'>" + personaActual.modelo + "</td>" +
                "<td class='col3'>" + personaActual.precio + "</td>" +
                "<td class='col4'>" + personaActual.tipo + "</td>" +
                "<td >" + "<button class='btn btn-outline-danger eliminarVe'>Eliminar</button>" + "</td>" +
                "</tr>";
            tBodyTable.innerHTML = seccionPersonas;
        }
    }
    function mostrarNombApe() {
        var personasStorage = JSON.parse(localStorage.getItem("Localvehiculo") || "[]");
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        $(".col1").css("display", "none");
        $(".col4").css("display", "none");
        $(".col5").css("display", "none");
        for (var i = 0; i < personasStorage.length; i++) {
            console.log(JSON.parse(personasStorage[i]));
            var personaActual = JSON.parse(personasStorage[i]);
            seccionPersonas += "<tr> " +
                "<td class='col1'>" + personaActual.marca + "</td>" +
                "<td class='col2'>" + personaActual.modelo + "</td>" +
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
    //     let personasStorage:string|null =  JSON.parse(localStorage.getItem("Localvehiculo") || "[]"); 
    //     for (var i = 0; i < personasStorage.length ; i++) 
    //     {
    //        let empleadoActual = JSON.parse(personasStorage[i]);
    //        if (empleadoActual._id == idEmpleado)
    //        {retorno = i;}
    //     }
    //     return retorno;
    // }
})(segundoParcial || (segundoParcial = {}));
