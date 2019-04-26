

function btnResultado(num1,num2) {

    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var result;  
    var numeros = new numeros();
    var opera = document.getElementById("tipoOperador");
    var operador = opera.selectedIndex;
        
    result=operacion(num1,num2,operador);

    document.getElementById("txtNum1").value=null;
    document.getElementById("txtNum2").value=null;

    return result;
        
}

function miInfo() {

    alert("Calculadora\n"+"Alumno: Julian Graziano"+"\n"+"Division: 3 D");
    
    
}

function validaNUM(num1,num2) {
    var labelResult= document.getElementById("txtResultado");

    if (num1 == "" || num2 == "") {
        labelResult.innerHTML="Debe completar los campos.";
        document.getElementById("txtNum1").className="error";
        document.getElementById("txtNum2").className="error";
        return false;
    }
    else{
        return true;
    }
    

}

window.onload=function () {
    // JSON
    // var cuenta1 = {"numb1":2,"numb2":4,"resultado":8};
    // var cuenta2 = {"numb1":4,"numb2":10,"resultado":40};

    // var listaCuentas = [cuenta1,cuenta2];

    // alert(cuenta1.numb1);
    // alert(listaCuentas[1].resultado);

    // for (var i = 0; i < listaCuentas.length; i++) {
    //    alert(listaCuentas[i].numb1);
        
    // }

    
}


var cuenta1 = {"numb1":2,"numb2":4,"resultado":8};
var cuenta2 = {"numb1":4,"numb2":10,"resultado":40};
var listaCuentas = [cuenta1,cuenta2];

function btnHistorial() {

    var divTabla = document.getElementById("tablaHistorica");

    // hay que hacer un historial con elementos hardcodeados desde el array
    // listaCuentas.push() para agregar otro elemento
    // listaCuentas.splice(0,1) para borrar, elijo la posicion y despues cuantos elementos (en este caso borra cuenta1) 
    //hay que hacer que borre, y tambien hacer un boton agregar que haga un push al array de json con el nuevo json formado
    //usar variables globales.

    divTabla.hidden = false;
    
    var cuerpo = document.getElementById("tCuerpo");
    
   
    for (var i = 0; i < listaCuentas.length; i++) {
        cuerpo.innerHTML+="<tr><td scope='row'>"+ listaCuentas[i].numb1 + "</td>"+
                          "<td scope='row'>"+ listaCuentas[i].numb2 + "</td>"+
                          "<td scope='row'>"+ listaCuentas[i].resultado + "</td></tr>"; 
    }
    

    // EN VEZ DE LEVANTAR DESDE EL HTML, HACERLO DESDE UN localStorage O LO QUE SEA
    //AHORA EL BOTON HISTORIAL HACE TODO
    // var num1 = document.getElementById("txtNum1").value;
    // var num2 = document.getElementById("txtNum2").value;
    
    // var result = btnResultado(num1,num2);

    //     divTabla.hidden = false;

    //     var cuerpo = document.getElementById("tCuerpo");
   
    //     cuerpo.innerHTML+="<tr>"+"<td scope='row'>"+ num1 + "</td>"+
    //                     //    "<td scope='row'>"+ num2 + "</td>"+
    //                        "<td scope='row'>"+ num2 + "</td>"+
    //                        "<td scope='row'>"+ result + "</td>"
    //                        +"</tr>"; 


    

    
    
}

function btnCerrar() {
    var divTabla = document.getElementById("tablaHistorica");

    divTabla.hidden = true;
}

function operacion(num1,num2,op) {
    var flag=0;
    var result;
    var opt;
    var labelResult= document.getElementById("txtResultado");
    if (validaNUM(num1,num2)) {

        document.getElementById("txtNum1").className="exito";
        document.getElementById("txtNum2").className="exito";

        switch (op) {
            case 0:
                result=(+num1+ +num2);
                opt="+";
                break;
            case 1:
                result=num1-num2;
                opt="-";
                break;
            case 2:
                if (num2 == 0) {
                    document.getElementById("txtNum2").className="error";    
                    labelResult.innerHTML= "Error, no se puede dividir por cero. Reingrese." 
                    flag=1;     
                }
                else{
                    result=num1/num2;
                }
                opt="/";
                break;
            case 3:
                result=num1*num2;
                opt="*";
                break;    
            default:
                result=num1+num2;
                opt="+";
                break;
        }
    }
    else{
        flag=1;
    }

    if (flag==0) 
    {
    labelResult.innerHTML= "El resultado de: "+num1+opt+num2+" ---> "+ result+".";
    }
    return result;
}