

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

    // array with texts to type in typewriter
    var dataText = [ "Luis Ignacio.", "Full Stack.", "Back-End.", "Front-End.", "Django Expert.","PL-SQL Analylistic.","Angular Design."];
    
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

