"use strict";
$(document).ready(function () {
    $.get("http://localhost:3000/personas", function (data, status) {
        console.log(status);
        console.log(data);
        // let personasCompleto = JSON.parse(data);
        var personasCompleto = data;
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        for (var i = 0; i < personasCompleto.length; i++) {
            seccionPersonas += "<tr>  <td hidden>" + personasCompleto[i].id + "</td>" +
                "<td>" + personasCompleto[i].nombre + "</td>" +
                "<td>" + personasCompleto[i].apellido + "</td>" +
                "<td>" + personasCompleto[i].fecha + "</td>" +
                "<td>" + personasCompleto[i].sexo + "</td>" +
                "<td>" + "<img src='" + personasCompleto[i].foto + "'id='imgMuestro' height='80'>" +
                "<input type='file' " + " hidden>" + "</td>" +
                "</tr>";
            tBodyTable.innerHTML = seccionPersonas;
            $("img").on("click", function () {
                // var target = event.target;
                // $(target.nextSibling).toggle();
                //El this indica el evento en que estoy, next por el siguiente
                // $($(this).next()[0]).toggle();
                if ($(this).next()[0].hidden) {
                    $(this).next()[0].hidden = false;
                }
                else {
                    $(this).next()[0].hidden = true;
                }
                // $(this).next("input").toggle();
                // if(target.nextSibling.hidden == true)
                // {
                //     $(target.nextSibling).toggle();
                // }
                // else{
                //  $(target.nextSibling).toggle();
                // }    
            }); //fin img.on
            $("input").change(function () {
                var imgPost;
                var targetInput = $(this);
                var idSeleccionado = $(this).parent().siblings(":first").text();
                var fReader = new FileReader();
                $(fReader).on("load", function (e) {
                    imgPost = e.target.result;
                    // console.log(imgPost);
                    // $(this).parent().prev().attr("src", imgPost);
                    $.post("http://localhost:3000/editarFoto", {
                        id: idSeleccionado,
                        foto: imgPost
                    }, function () {
                        transicionSpinner();
                    });
                }); //fin freader on
                fReader.readAsDataURL($(targetInput).prop("files")[0]);
                $("#spinner").css("display", "block");
            }); //fin input change
        } //fin del for
        $("#navHeader").click(function () {
            $("#divTable").toggle(1000);
            if ($("#divPresentacion").css("visibility") == "hidden") {
                $("#divPresentacion").css("visibility", "visible");
            }
            else {
                $("#divPresentacion").css("visibility", "hidden");
            }
        });
        $("#tBodyTable").dblclick(function (e) {
            // muestroDivconClick();
            // $("#divTable").toggle(1000);
            // $("#divOculto1").show(1000);
            $("#divOculto1").css("visibility", "visible");
            // var target = event.target || event.srcElement;
            // $(this).next().text()[0];
            // let target = $("td").text()[0];
            // let fila = target.parent();
            var idTarget = $(e.target).closest("td").prev().text();
            var nombreTarget = $(e.target).closest("td").text();
            var apellidoTarget = $(e.target).closest("td").next().text();
            var fechaTarget = $(e.target).closest("td").next().next().text();
            var sexoTarget = $(e.target).closest("td").next().next().next().text();
            if (sexoTarget == "Male") {
                $("#radMasculinoE").prop("checked", true);
                $("#radFemeninoE").prop("checked", false);
            }
            else {
                $("#radFemeninoE").prop("checked", true);
            }
            // var celdas = fila.getElementsByTagName("td");
            // $("td")
            // document.getElementById("divOculto").style.visibility = "visible";
            // usuarioGlobal.id= celdas[0].innerHTML;    
            // document.getElementById("nombreE").value= celdas[1].innerHTML;
            // document.getElementById("apellidoE").value=celdas[2].innerHTML;
            // document.getElementById("fechaE").value=celdas[3].innerHTML;
            // if (celdas[4].innerHTML == "Male") {
            //     $("#radMasculinoE").prop("checked",true);
            //     $("#radFemeninoE").prop("checked",false);
            // }
            // else {
            //     $("#radFemeninoE").prop("checked",true);
            // }
        }); //fin td.dblclick
        $("#btnAgregar").click(function () {
            //    $("#divOculto2").show(1000);
            $("#divOculto2").css("visibility", "visible");
        });
        $("#btnAgregarConfirm").click(function () {
            agregarPersona();
        });
        // $("#btnModificar").click(function () { 
        //    modificarPersona();
        // });
        // $("#btnEliminar").click(function () { 
        //     eliminarPersona();
        // });
        // $("input").change(function () { 
        //     imgPOST();
        // });
    }); //fin .get
}); //fin document.ready
function muestroDivconClick() {
}
function agregarPersona() {
    var flag = true;
    var nombreNuevo = $("#nombreA").val().text;
    var apellidoNuevo = $("#apellidoA").val();
    var fechaNueva = $("#fechaA").val();
    var fechaHOY = new Date();
    var sexoNuevo;
    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES y no vacio
    if (nombreNuevo.length < 3 || nombreNuevo == "") {
        //    $("#nombreA").addClass("ValidaError");
        $("#nombreA").attr('class', 'ValidaBorderColorError');
        flag = false;
    }
    else {
        // $("#nombreA").addClass("ValidaCorrecto");
        $("#nombreA").attr('class', "ValidaBorderCorrecto");
    }
    if (apellidoNuevo.length < 3 || apellidoNuevo == "") {
        // $("#apellidoA").addClass("ValidaError");
        $("#apellidoA").attr('class', "ValidaBorderColorError");
        flag = false;
    }
    else {
        // $("#apellidoA").addClass("ValidaCorrecto");
        $("#apellidoA").attr('class', "ValidaBorderCorrecto");
    }
    //VALIDO FECHA
    var fechaSplit = fechaNueva.split("-");
    var fechaValidada = new Date(fechaSplit[0], fechaSplit[1] - 1, fechaSplit[2], 0, 0, 0, 0);
    var fechaPost = fechaValidada.getFullYear() + "-" + ("0" + (fechaValidada.getMonth() + 1)).slice(-2) + "-" + ("0" + (fechaValidada.getDay() + 1)).slice(-2);
    if (fechaNueva == "" || fechaValidada.getTime() > fechaHOY.getTime()) {
        // document.getElementById("PfechaA").className = "ValidaTextColorError";
        $("#PfechaA").attr('class', "ValidaBorderColorError");
        flag = false;
    }
    else {
        $("#PfechaA").attr('class', "ValidaTextColorCorrecto");
    }
    //VALIDO QUE SELECCIONEN UNO DE LOS DOS SEXOS
    var radMasculino = $("#radMasculinoA").prop("checked");
    var radFemenino = $("#radFemeninoA").prop("checked");
    // (document.getElementById("radMasculinoA").checked == false && document.getElementById("radFemeninoA").checked == false )
    if (radMasculino && radFemenino) {
        flag = false;
        $("#radMasculinoA").prop("checked", false);
        $("#radFemeninoA").prop("checked", false);
        // document.getElementById("labelSexoA").className = "ValidaTextColorError";
        $("#labelSexoA").attr('class', "ValidaTextColorError");
    }
    else if (radFemenino) {
        sexoNuevo = "Female";
    }
    else {
        sexoNuevo = "Male";
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
    if (flag == true) {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "block";
        $.post("http://localhost:3000/nueva", {
            nombre: nombreNuevo,
            apellido: apellidoNuevo,
            sexo: sexoNuevo,
            fecha: fechaPost
            // avatar: imgPost
        }, function (data, status, jqXHR) {
            transicionSpinner();
        });
    }
}
function transicionSpinner() {
    // document.getElementById("spinner").style.display = "block";
    //anda flama el tema del spiner solo que es chico y se muestra abajo nada mas 
    // $("#divTotal").css("filter", "grayscale(100%)");
    $("#spinner").css("display", "none");
    // $(".divOculto").hide();
    //No hay chance no toma el fondo 
    // $("body").addClass("claseFondo");
    // window.location.reload()
    location.reload();
}
