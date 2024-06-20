const listado = document.getElementById('character-list');
const next = document.getElementById('next-page');
const prev = document.getElementById('prev-page');

let pagina = 1;


function mostrar(page)
{  
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)  
    .then((Response) =>{
        if(!Response.ok)
        {
            throw new error('La solicitud no ha funcionado');
        }
        return Response.json();
    })
    .then((data) => {
        listado.innerHTML ='';
        const resultados = data.results;
        resultados.forEach((dato) =>{
            let vista= `
            <li>
                <img src="${dato.image}">
                <p> <span>Nombre:</span> ${dato.name}</p>
                <p> <span>Especie:</span> ${dato.species}</p>
            </li>    `
            listado.innerHTML += vista;
        })
    })
    .catch((error) =>{
        listado.innerText = "Se ha producido un error";
    });
}

mostrar(pagina);

function siguiente(){
    next.addEventListener(('click'), () =>{
        pagina = pagina + 1;
        mostrar(pagina)
    });
}

siguiente();

function retroceder(){
    prev.addEventListener(('click'), () =>{
        pagina = pagina - 1;
        mostrar(pagina);
   
    });
}
retroceder();