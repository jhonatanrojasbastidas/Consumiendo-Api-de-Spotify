let uri = 'https://accounts.spotify.com/api/token';

let dato1 = 'grant_type=client_credentials';
let dato2 = 'client_id=f76da1dcf86248a3903a1b1090c94ecd';
let dato3 = 'client_secret=9e3db22ca97445438376618250568469';

let parametrosPOST = {
    method:"POST",
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
    },
    body:dato1+"&"+dato2+"&"+dato3
}

fetch(uri,parametrosPOST)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
    generarToken(respuesta)
})
.catch(function(respuesta){
    
    console.log(respuesta);
    
})

function generarToken(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token;
    console.log(token);
    buscarCanciones(token)
}

function buscarCanciones(token){
    let uri = "https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US";


let parametros = {
    
    method:"GET",
    headers: {
        Authorization: token
    }
}
fetch(uri, parametros)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
    pintarDatos(respuesta)
   
})
.catch(function(respuesta){
    
    console.log(respuesta);
    
})
}

function pintarDatos(datos){

    let fila = document.getElementById('row');
    datos.tracks.forEach(function(cancion){
        let column = document.createElement("div");
        column.classList.add('col');

        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        tarjeta.classList.add('h-100');

        let imagen = document.createElement('img');
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url

        let nombre = document.createElement('h2')
        nombre.classList.add('card-title');
        nombre.textContent=cancion.name

        let pop = document.createElement('p')
        let data = 'width: '+cancion.popularity+'%'
        console.log(data);
        pop.classList.add('card-text');
        pop.classList.add('progress-bar');
        pop.setAttribute("style",data);
        pop.textContent=cancion.popularity
        

        let song = document.createElement('audio')
        song.classList.add("w-100");
        song.classList.add("mt-5");
        song.setAttribute("controls","controls");
        song.src=cancion.preview_url

        let popularidad = document.createElement('h4')
        popularidad.classList.add('card-title');
        popularidad.insertAdjacentText("afterbegin", "Popularidad de la canción ")

        
        
        tarjeta.appendChild(imagen);
        column.appendChild(tarjeta);
        row.appendChild(column);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(popularidad);
        tarjeta.appendChild(pop);
        tarjeta.appendChild(song);
        

    })
}