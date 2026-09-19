document.addEventListener("DOMContentLoaded", () =>{
    crearNieve();

   window.addEventListener("resize", () => {
    document.querySelectorAll(".snowflake").
    forEach(flake => flake.remove());
    crearNieve();
   });
});

function crearNieve(){
    const numberOfFlakes =
    window.innerWidth < 600 ? 30 : 55;

    for(let i = 0; i < numberOfFlakes; i++){
    const snowflake = document.createElement("img");
    snowflake.classList.add("snowflake");

    // Alternar entre 0.png y 1.png
    const imagenes = ["0.png", "1.png"];
    const indice = Math.floor(Math.random() * imagenes.length);
    snowflake.src = imagenes[indice];


    //tamaño
    const size = Math.random() * 20 + 10;
    snowflake.style.width = size + "px";
    snowflake.style.height = "auto";

    //posicion horizontal
    snowflake.style.left =
Math.random() * window.innerWidth + "px";
    
   //posicion inicial
   snowflake.style.position = "absolute";
   snowflake.style.top = "-50px";

   //velocidad
   const duration = Math.random() * 3 + 3;

   snowflake.style.animationDuration = duration + "s";

   //delay
   const delay = Math.random() * 5;
   snowflake.style.animationDelay = delay + "s";

   document.body.appendChild(snowflake);
    }
}
