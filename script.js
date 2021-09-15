const uri = "https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US";

const token = 'Bearer BQAEuOtaC8wIMkMTEB_aJo2LZR3XU64r52bpLZxEjDRtwTvSywxhLCgk7IkQaFTHN0gacria40xDCr30Bn6Z5mZpE_6eLvz9zLKlUc7Z5qpLkviI96_7DdhLLY-nlXec5cyHf_p8F5ANcT7gN1WrW44tRas1kfo';

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

        let nombre = document.createElement('h5')
        nombre.classList.add('card-title');
        nombre.textContent=cancion.name

        let song = document.createElement('audio')
        song.classList.add("w-100");
        song.classList.add("mt-5");
        song.setAttribute("controls","controls");
        song.src=cancion.preview_url
        
        

        tarjeta.appendChild(imagen);
        column.appendChild(tarjeta);
        row.appendChild(column);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(song);

    })
}