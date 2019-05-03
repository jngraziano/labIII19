

var xml = new XMLHttpRequest();

//lo asigno como variable global para poder acceder despues al contenido del json noticia con solicitud.loQueNecesite
var contenido_json = '';
//la uso para saber el id de la noticia que voy a editar
var editId = "";

var userLogIn = '';

window.onload = function () {

    //BOTON LOGIN
    var btnLogin = document.getElementById("loginB");
    btnLogin.addEventListener("click", logueo);

  
}



function logueo(){

    // xml.onreadystatechange = logPost;

    //obtenemos user y pass del popup log in y enviamos un re post
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pasw").value;

    var datosLogin = { "email": email, "password":password };

      //verifico que tenga una respuesta correcta del servidor
    //   if (xml.readyState === 4) {
        //verifico que sea 200 el status que es el correcto
            // if (xml.status === 200) {

    xml.open("POST", "http://localhost:1337/login", true);
    xml.onreadystatechange = callBackPOST;
  

    // xml.setRequestHeader('Content-Type', 'application/json');
    xml.send(JSON.stringify(datosLogin));


}

function callBackPOST() {
    var url= "../PracticaPP/index.html"

    
  

    if (xml.readyState == 4) {
        //verifico que tenga una respuesta correcta. 
        if (xml.status == 200) {
            // alert("Realizado.");
            // location.reload();
            if(JSON.parse(xml.responseText).autenticado == "si")
            {
                loading(url);

            }
            else{
                alert("error");
            }
          

        }
        
    }
}

function loading(url){

    var load = document.getElementById('load');

    // if (load.style.display == "visible"){
    //     load.style.display = "none";
    //     loginWindow.style.display = "visible";
      
    // }
    // else{
    //     load.style.display = "visible";
    //     loginWindow.style.display = "none";

    // }
    load.style.visibility = "visible";
    loginWindow.style.opacity  = "0.2";
    setTimeout(function(){window.location.replace(url);}, 2000);


}



