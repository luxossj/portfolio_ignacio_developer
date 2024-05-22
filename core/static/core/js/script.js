

// header animation
const listItem = document.querySelectorAll("#landing-header li");
const menuBackDrop = document.querySelector("#menu-backdrop");

listItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const { left, top, width, height } = item.getBoundingClientRect();
    const { clientHeight, clientWidth} = item;
    console.log({ left, top, width, height });
    console.log({ clientHeight, clientWidth});

    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);

    menuBackDrop.style.opacity = "1";
    menuBackDrop.style.visibility = "visible";
  });

  item.addEventListener("mouseleave", () => {
    menuBackDrop.style.opacity = "0";
    menuBackDrop.style.visibility = "hidden";
  });
});

// download file
document.getElementById("download-file").addEventListener(
  "click", function() {

    const fileUrl = "./analista_programador_luis_barboza.pdf";
    // Crear un enlace oculto
    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = "luis_barboza_cv.pdf";  // Nombre de archivo para la descarga
    link.style.display = "none";

    // Agregar el enlace al documento
    document.body.appendChild(link);

    // Simular un clic en el enlace para iniciar la descarga
    link.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
  }
);

var dataText = [ 
  "Web Developer.",
  "Full Stack.",
  "Data Analyst.",
  "Experto en Web.",
  "Diseñador."
];

// type one text in the typewriter
// keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback) {
  // check if text isn't finished yet
  if (i < text.length) {
    // add next character to h1
    document.querySelector("#titulo").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    // wait for a while and call this function again for next character
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback === 'function') {
    // call callback after timeout
    setTimeout(fnCallback, 700);
  }
}
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
  if (typeof dataText[i] === 'undefined') {
    i = 0; // Reset to start from the first text
  }
  if (i < dataText.length) {
    // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function() {
      // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
  }
}
// start the text animation
StartTextAnimation(0);





// carrusel
$('.carrusel-brand').slick({
  autoplay: true,
  autoplaySpeed: 0, // Configura autoplaySpeed a 0 para deshabilitar la pausa entre diapositivas
  speed: 4000, // Ajusta la velocidad de transición entre diapositivas
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// autoplay: true,
//     autoplaySpeed: 0, // Desactivamos el autoplaySpeed para evitar pausas
//     speed: 500, // Velocidad de transición entre diapositivas
//     infinite: true, // Hacemos que el carrusel sea infinito
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     cssEase: 'linear', // Configuramos la transición como lineal para un desplazamiento más uniforme
//     variableWidth: true, // Permitimos que las diapositivas tengan un ancho variable para un movimiento más continuo
//     centerMode: true, // Centramos la diapositiva activa
//     arrows: false, // Desactivamos las flechas de navegación si no son necesarias
//     pauseOnHover: false, // Evitamos la pausa al pasar el mouse sobre el carrusel



$('.card-work').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {
  $("#formulario1").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      descripcion: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Ingresa tu Nombre o Compañia"
      },
      email: {
        required: "Ingresa tu Email",
        email: "Igresa un Email Valido"
      },
      descripcion: {
        required: "Escribe tu Mensaje"
      }
    },
    errorPlacement: function(error, element) {
      // Coloca el mensaje de error después del elemento de entrada
      error.insertAfter(element);
      // Aplica el estilo al mensaje de error
      error.addClass("text-left block text-red-700 font-semibold ");
    }
  });
});
