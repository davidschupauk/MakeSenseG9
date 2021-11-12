const URLJSON = "../data/proyectos.json";
window.onload = cargaPagina();

function cargaPagina() { 
    $.getJSON(URLJSON, function(respuesta,estado){
        if(estado==="success"){
            let proyectosTotal = respuesta;
            for(const proyecto of proyectosTotal){
                $("#listaTarjetas").append(`
            
                <button class="cardProyecto cardCat${proyecto.categoria}">
                    <a href="emprendimientoDetalle.html">
                          <img class="card-logo" src="${proyecto.logo}" alt="">
                          <strong class="card-title">${proyecto.nombre}</strong>
                          <p class="card-text">${proyecto.descripcion}</p>
                    </a>
                </button>`);
                        
            }
        }
    })
}


$(".cat1").click( () =>{
    $(".cardProyecto").remove();
    getProyectos(1);
})
$(".cat2").click( () =>{
    $(".cardProyecto").remove();
    getProyectos(2);
})
$(".cat3").click( () =>{
    $(".cardProyecto").remove();
    getProyectos(3);
})
$(".cat4").click( () =>{
    $(".cardProyecto").remove();
    getProyectos(4);
})
$(".cat5").click( () =>{
    $(".cardProyecto").remove();
    getProyectos(5);
})
$(".catAll").click( () =>{
    $(".cardProyecto").remove();
    cargaPagina();
})



function getProyectos(categoriaActual){
    $.getJSON(URLJSON, function(respuesta,estado){
        if(estado==="success"){
            let proyectosTotal = respuesta;
            for(const proyecto of proyectosTotal){
                if(categoriaActual == proyecto.categoria){
                    $("#listaTarjetas").prepend(`<button class="cardProyecto cardCat${categoriaActual}">
                                                    <a href="emprendimientoDetalle.html">
                                                        <img class="card-logo" src="${proyecto.logo}" alt="">
                                                        <strong class="card-title">${proyecto.nombre}</strong>
                                                        <p class="card-text">${proyecto.descripcion}</p>
                                                    </a>
                                                </button>`);
                }
            }
        }
    })
}
