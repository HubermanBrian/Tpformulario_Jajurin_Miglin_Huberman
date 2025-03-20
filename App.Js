let nombre
let email
let contraseña
let confirmacion

nombre = document.getElementById("Nombre")
email = document.getElementById("Email")
contraseña = document.getElementById("Contraseña")
confirmacion = document.getElementById("Confirmar")
const boton = document.getElementById("button");


function ValidarNombre()
{
    
    if(nombre.value.length<3)
    {
        console.log("Entro")
        alert("You need more than 3 characters")
        DisableButton()
    }
    else
    {
        AbleButton()
    }
}

function DisableButton()
{
    boton.disabled = true;
}

function AbleButton()
{
    boton.disabled = false;
}

function ValidarEmail()
{
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Función para validar el correo electrónico
   
     let respuesta = emailRegex.test(email);
    if(respuesta = false)
    {
        console.log("Entro")
        alert("No es de tipo email")
        DisableButton()
    }
    else
    {
        AbleButton()
    }
}

function ValidarContraseña()
{
   respuesta1= /[a-zA-Z]/.test(contraseña.value) 
    respuest2= /[0-9]/.test(contraseña.value);
    if(contraseña.value.length<8 || respuesta1 == false || respuest2 == false )
        {
            console.log("Entro")
            alert("Necesitas mas de 8 caracteres y tienen que tener letras y numeros")
            DisableButton()
        }
        else
        {
            AbleButton()
        }
}

function ConfirmarContraseña()
{
    if(contraseña.value === confirmacion.value)
    {
        AbleButton()
    }
    else
    {
        DisableButton()
        
    }
}