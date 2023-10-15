// script titulo typing efect
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Luis Ignacio.", "Full Stack.", "Back-End.", "Front-End.", "Django Expert.","PL-SQL Analylistic.","Angular Focus Design."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#titulo").innerHTML = text.substring(0, i+1) +'<spon aria-hidden="true"></spon>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);

    const copyEmailBtn = document.querySelector('#copy-email');

    copyEmailBtn.addEventListener('click', () => {
      const email = 'luisignaciocontacto@gmail.com';
      
      // Copiar el email al portapapeles
      navigator.clipboard.writeText(email)
        .then(() => {
          // Cambiar el texto del botón
          copyEmailBtn.innerText = 'Email copied!';
        })
        .catch(err => {
          console.error('No se pudo copiar el email: ', err);
        });
    });

    const downloadFileBtn = document.querySelector('#download-file');

    downloadFileBtn.addEventListener('click', () => {
      const fileUrl = 'img/world_icon.png';
      
      // Crear un enlace temporal para descargar el archivo
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'world_icon.png';

      // texto
      
      // Añadir el enlace al DOM y hacer clic en él
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cambiar el texto del botón
      downloadFileBtn.innerText = 'Descarga completa!';
    });
      


  });


function cargarContenido(num) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("parrafo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "social_media.html", true);
  xhttp.send();
};
cargarContenido();

$(document).ready(function() {

  $.validator.setDefaults({
    messages: {
        required: 'Este campo es obligatorio',
    },
  });
  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: "Name must be at least 3 characters long."
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      message: {
        required: "Please enter a message.",
        minlength: "Message must be at least 6 characters long."
      }
    },

    errorPlacement: function(error, element) {
      error.insertAfter(element); // Inserta el mensaje de error después del elemento
      error.addClass('div invalid-feedback fw-bolder'); // Aplica una clase al mensaje de error
      //element.after('<br>'); 
  },
    submitHandler: function(form) {
      // Aquí puedes colocar el código para enviar el formulario si es válido
      // Por ejemplo, puedes usar AJAX para enviar los datos a un servidor
      // y mostrar un mensaje de éxito después de enviar los datos.
      alert("Formulario válido. Enviando datos...");
      form.submit(); // Esto enviará el formulario si es válido
    }
  });


});

document.getElementById("download-file").addEventListener(
  "click", function() {

    const fileUrl = "./analista_programador_luis_barboza.pdf";
    // Crear un enlace oculto
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv_vitae.pdf";  // Nombre de archivo para la descarga
    link.style.display = "none";

    // Agregar el enlace al documento
    document.body.appendChild(link);

    // Simular un clic en el enlace para iniciar la descarga
    link.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
  }
)