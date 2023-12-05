/* Java Script Utilities for Artecnología */
/* Author: Ángela López Mendoza           */
/* Copyright Aixkare 2023            */
/* AixKare 12/2023           */

var _headerId = null;

function hideMenuIfOpen() {
    var dElement = document.getElementById("buttonMenu");
    if(dElement.getAttribute("aria-expanded") === "true") {
        dElement.click();
    }
}

function isChild(selector1, selector2) {
    var child = $(selector1);

    if (child.parents(selector2).length)
        return true;
    else
        return false;
}

function handleClickOutside(event) {
    if(!(isChild(event.target, "#headerId") === true))   {
        hideMenuIfOpen();
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(form) {
    var isValid = true;
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.type === "textarea" && element.value.trim() === "") {
            alert("Campo de texto vacio: Porfavor introduzca el contenido de su consulta/duda/comentario...");
            isValid = false;
            break;
        }

        if (element.type === "email" && element.value.length === 0 ) {
            alert("Campo de correo vacio: Porfavor introduzca su correo electrónico en el campo de correo...");
            isValid = false;
            break;
        } else if(element.type === "email") {
            if(!validateEmail(element.value)) {
                alert("Campo de correo incorrecto: Porfavor introduzca correctamente su correo electrónico...");
                isValid = false;
            }
        }
    }
    return isValid;
}

function handleFormSubmit(event) {
   var form = event.target;
   var data = {
     email: form.formControlMail.value,
     comment: form.formControlTextarea.value
   };
    window.top.location.href = form.getAttribute('action')+'?email='+form.formControlMail.value+'&comment='+form.formControlTextarea.value;
 }

function addValidationInClient() { 
    var form = document.getElementById("contactForm");

    if(typeof form != 'undefined' && form != null) {
        console.log("Validation of form is gonna be loaded...");
        form.addEventListener("submit", function(event) {
            if (!validateForm(form)) {
                event.preventDefault();
            } else {
                handleFormSubmit(event);
                event.preventDefault();
            }
        });
        console.log("Validation of form loaded OK.");
    }
}


function setFlagOfBrasil() {
    $("html").attr("lang", "pt");
    $("#span-flag").text = "Portuguese";
    $("#i-flag").attr("class","flag-brasil flag m-0");
    $("#home")[0].innerText = "Página principal";
    $("#about")[0].innerText = "Sobre AixKare"
    $("#products")[0].innerText = "Produtos e serviços";
    $("#contact")[0].innerText = "Contate-nos";
}

function setFlagOfUSA() {
    $("html").attr("lang", "en");
    $("#span-flag").text = "English";
    $("#i-flag").attr("class","flag-usa flag m-0");
    $("#home")[0].innerText = "Main Page";
    $("#about")[0].innerText = "About AixKare"
    $("#products")[0].innerText = "Products and Services";
    $("#contact")[0].innerText = "Contact";
}

function setFlagOfMexico() {
    $("html").attr("lang", "es");
    $("#span-flag").text = "Spanish";
    $("#i-flag").attr("class","flag-mexico flag m-0");
    $("#home")[0].innerText = "Página principal";
    $("#about")[0].innerText = "Acerca de AixKare"
    $("#products")[0].innerText = "Produtos y Servicios";
    $("#contact")[0].innerText = "Contacto";
}

$(function() {
    _headerId = $("#headerId");
    $(document).on('click', handleClickOutside);
    addValidationInClient();
});
