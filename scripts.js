console.log(document.title);

//Cambiar el titulo 
document.querySelector('#gen-1').innerHTML = "Generassion 1 pokimon"

//Cambiar el color de fondo de la primera generacion
let genOne = document.querySelector('main>div:nth-child(6)').querySelectorAll('.infocard')

for(let i=0; i<genOne.length; i++){
    genOne[i].style.backgroundColor = "red";
}

//Imprime por consola la URL de la página.
console.log(document.URL);
//Imprime por consola el dominio de la página.
console.log(document.domain);
//Imprime todos los nodos de imagen.
console.log(document.querySelectorAll('img'));

//Sustituye el atributo "src" de todas las imágenes por este 
//"https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


let todasImagenes = document.querySelectorAll('img');
for (let i = 0; i < todasImagenes.length; i++) {
  todasImagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//Cambia el fondo de todos los infocard-lg-data text-muted para 
// todos los Pokimon voladores itype flying