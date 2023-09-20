const contenido = [
  { image:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810", description: "Coco es una película de animación por ordenador producida por Pixar Animation Studios y distribuida por Walt Disney Studios Motion Pictures." ,titulo: "Coco", genero: "suspenso", trailer: "https://www.youtube.com/embed/awzWdtCezDo" , tipo : 'Pelicula'},
  { image:"https://sm.ign.com/t/ign_latam/gallery/t/the-witche/the-witcher-season-3-first-look-images_qmt8.600.jpg" , description: "Basada en la serie de libros de Andrzej Sapkowski, sigue al cazador de monstruos Geralt de Rivia mientras navega por un mundo peligroso lleno de criaturas mágicas y conflictos políticos." ,titulo: "The Witcher" ,genero: "Drama, Fantasía, Acción", trailer: "https://www.youtube.com/embed/cSqi-8kAMmM" , tipo : "Serie"},
  { image:"https://imagenes.elpais.com/resizer/eg22vdl35UK0otvYfZykQgzOKYE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WMOY5X6NIBHHFBMX7XLE6UW63A.png" , description: "Mark Grayson, de 17 años, es como cualquier otro chico de su edad, excepto que su padre es el superhéroe más poderoso del planeta, Omni-Man. Mark descubre que el legado de su padre puede no ser tan heroico como parece." ,titulo: "Invencible" ,genero: "Animacion", trailer: "https://www.youtube.com/embed/ROCIksHW2oc" , tipo : "Serie"},
  { image:"https://es.web.img2.acsta.net/pictures/14/02/28/13/16/398172.jpg" , description: "Phineas y Ferb dos hermanastros que quieren disfrutar de las vacaciones de verano haciendo cosas creativas cada día." ,titulo: "Phineas Y Ferb" ,genero: "Animacion", trailer: "https://www.youtube.com/embed/S0ciFJ5ZDcE" , tipo : "Serie"},
  { image:"https://es.web.img2.acsta.net/pictures/19/01/03/09/01/2915581.jpg" , description: "Otis siempre tiene una respuesta respecto al sexo. Otis se une a su amiga Maeve para abrir una clínica de terapia sexual en la escuela." ,titulo: "Sex Education" ,genero: "Humor", trailer: "https://www.youtube.com/embed/IGqEi5FjpCI" , tipo : "Serie"},
  { image:"https://images.justwatch.com/poster/301127359/s332/temporada-9" , description: "Paco se enloquece con las jovencitas, y Fran tiene debilidad por las cuarentonas." ,titulo: "40 Y 20" ,genero: "Humor", trailer: "https://www.youtube.com/embed/0hQpIpREHI0", tipo : "Serie" },
  { image:"https://flxt.tmsimg.com/assets/p10569669_p_v10_aa.jpg" , description: "es una película mexicana-estadounidense de comedia romántica y de aventuras en 3D, inspirada en la celebración del Día de Muertos" ,titulo: "El libro de la vida", genero: "Comedia", trailer: "https://www.youtube.com/embed/JvIvF8ST8CY", tipo: "Pelicula" },
  { image:"https://m.media-amazon.com/images/M/MV5BZTEyNjBjYmYtYWYxYi00MmQyLThlYmItY2I4NzM1Mjg1MWYxXkEyXkFqcGdeQXVyMTU3ODI3MTk2._V1_.jpg" , description: "Esta serie cuenta la historia de la vida de la Reina Isabel II desde su ascenso al trono a una edad temprana. Explora los desafíos personales y políticos que enfrenta mientras lidera la monarquía británica a través de décadas de cambios significativos." ,titulo: "The Crown" ,genero: "Drama, Historia", trailer: "https://www.youtube.com/embed/JWtnJjn6ng0" , tipo : "Serie"},
  { image:"https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" , description: "Una antología de historias independientes que exploran la oscura y distópica relación entre la humanidad y la tecnología. Cada episodio presenta una realidad diferente, pero siempre con temas provocadores y una visión inquietante del futuro." ,titulo: "Black Mirror" ,genero: "Ciencia ficción, Drama, Suspenso", trailer: "https://www.youtube.com/embed/C3Hg8qgU4ss", tipo : "Serie" },
  { image:"https://m.media-amazon.com/images/M/MV5BYzM0YjcwM2QtN2FmMC00YjU2LWI3YzctNDZhOTJiN2VhYjQxXkEyXkFqcGdeQXVyMTU0NjA4Njk3._V1_.jpg" , description: "Dos soldados de élite deben escoltar a civiles a través de un infierno de tiroteos y explosiones ." ,titulo: "Project X-Traction" ,genero: "Guerra", trailer: "https://www.youtube.com/embed/SS4xaLNVqfc", tipo : 'Pelicula' },
  { image:"https://primusgaming-frontend.s3.amazonaws.com/media/img/banner-top-interna-cat-rs.jpg" , description: "Ambientada en el universo de Star Wars, la serie sigue las aventuras de un solitario cazarrecompensas mandaloriano en los confines de la galaxia, lejos de la autoridad de la Nueva República." ,titulo: "The Mandalorian" ,genero: "Ciencia ficción, Aventura, Fantasía", trailer: "https://www.youtube.com/embed/aOC8E8z_ifw" , tipo : "Serie"},
  { image:"https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" , description: "Esta versión contemporánea del famoso detective Sherlock Holmes y su compañero, el Dr. John Watson, los lleva a resolver complejos crímenes en el Londres moderno mientras demuestran su brillantez y habilidades deductivas." ,titulo: "Sherlock" ,genero: "Drama, Misterio, Crimen", trailer: "https://www.youtube.com/embed/g9C3bCoiR7U" , tipo : "Serie"},
  { image:"https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_FMjpg_UX1000_.jpg" , description: "Cole se enamora perdidamente de la enigmática Sadie, pero descubre que es una agente secreta. Antes de que puedan decidir una segunda cita, Cole y Sadie se ven arrastrados a una aventura internacional para salvar el mundo." ,titulo: "Ghosted" ,genero: "Aventura", trailer: "https://www.youtube.com/embed/IAdCsNtEuBU" , tipo : 'Pelicula'},
  { image:"https://es.web.img3.acsta.net/pictures/22/06/16/12/54/0504030.jpg" , description: "El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió." ,titulo: "Gato con botas: el último deseo" ,genero: "Aventura", trailer: "https://www.youtube.com/embed/QaiUm8jNiCk" , tipo : 'Pelicula'},
  { image:"https://cdn.colombia.com/cine/2023/3/65-al-borde-de-la-extincion-41836.jpg" , description: "Tras sufrir un accidente y caer a un planeta desconocido, los supervivientes de la nave descubren que han llegado a la Tierra, pero hace 65 millones de años. Ahora, deben cruzar un territorio inhóspito, poblado de bestias prehistóricas, para salir." ,titulo: "Al borde de la extinción" ,genero: "Aventura", trailer: "https://www.youtube.com/embed/6NFAIZW9Rc4", tipo : 'Pelicula' },
  { image:"https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg" , description: "Un grupo de niños en la década de 1980 se enfrenta a misterios sobrenaturales cuando un niño desaparece en su pequeño pueblo. A medida que buscan respuestas, descubren un extraño mundo lleno de fuerzas oscuras y peligrosas." ,titulo: "Stranger Things" ,genero: "Ciencia ficción, Drama, Misterio, Terror", trailer: "https://www.youtube.com/embed/Wre1F5YyIlA", tipo : "Serie" },
  { image:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/poster-friends.jpg?tf=1200x" , description: "Esta icónica serie sigue las vidas y relaciones de seis amigos que viven en Nueva York. A través de sus altibajos, comparten risas, amor y momentos inolvidables mientras enfrentan los desafíos de la vida adulta." ,titulo: "Friends" ,genero: " Comedia, Romance", trailer: "https://www.youtube.com/embed/MfvvhM6IJS0" , tipo : "Serie"},
  { image:"https://pics.filmaffinity.com/After_Amor_infinito-532172428-large.jpg" , description: "Una pareja debe decidir si continuar con su relación, apasionada pero tóxica, o hacer cambios dramáticos en sus vidas." ,titulo: "After. Amor Infinito" ,genero: "Romantica", trailer: "https://www.youtube.com/embed/bVjSl_AGSPQ" , tipo : 'Pelicula'},
  { image:"https://es.web.img3.acsta.net/pictures/18/04/26/18/51/1160967.jpg" , description: "Ronit, una fotógrafa, regresa a Londres con motivo de la muerte de su padre, un rabino. Al volver se reencuentra con una amiga por la que siente atracción, pero el lesbianismo no está bien visto en la comunidad ortodoxa judía a la que pertenecen." ,titulo: "Desobediencia" ,genero: "Romantica", trailer: "https://www.youtube.com/embed/dEkPnie5hSI", tipo : 'Pelicula' },
  { image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2021/3/w1280/41qVwAz4ZCc8g7YQETQih8fpB8q.jpg" , description: "Looks That Kill es una película estadounidense escrita y dirigida por Kellen Moore. La película está protagonizada por Brandon Flynn, Julia Goldani Telles y Ki Hong Lee. La película fue lanzada digitalmente el 19 de junio de 2020." ,titulo: "Miradas Que Matan" ,genero: "Comedia", trailer: "https://www.youtube.com/embed/AfEtdcXYtec" , tipo : 'Pelicula'},
  { image:"https://4.bp.blogspot.com/-L509skKIs4I/T3vGescMjyI/AAAAAAAABlg/UgQxZPLx2d4/s1600/MMposterSNOW.jpg" , description: "Una princesa es salvada de la muerte por un grupo de ladrones diminutos y espera poder recuperar su reino en contra de una reina malvada." ,titulo: "Espejito espejito" ,genero: "Comedia", trailer: "https://www.youtube.com/embed/PCDOJgTSwDk" , tipo : 'Pelicula'},
  { image:"https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" , description: "Basada en las novelas Canción de hielo y fuego de George R.R. Martin, la serie sigue la lucha por el poder entre varias familias nobles mientras intentan reclamar el Trono de Hierro y gobernar los Siete Reinos de Westeros." ,titulo: "Game of Thrones" ,genero: " Drama, Fantasía, Aventura", trailer: "https://www.youtube.com/embed/rlR4PJn8b8I" , tipo : "Serie"},
  { image:"https://es.web.img3.acsta.net/pictures/16/10/18/16/59/275907.jpg" , description: "l gobierno contrata a la prestigiosa lingüista Louise Banks para que se comunique con unos alienígenas que han llegado a la Tierra. Conforme ella aprende su idioma, va experimentando regresiones muy intensas que desvelan la verdadera misión que les ha llevado hasta nuestro planeta." ,titulo: "La Llegada" ,genero: "Ciencia Ficcion", trailer: "https://www.youtube.com/embed/uWs5lsWXLbo" , tipo : 'Pelicula'},
  { image:"https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1" , description: "Un grupo de ladrones con nombres en clave se une para realizar el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre de España, mientras se enfrentan a situaciones tensas y emotivas." ,titulo: "Money Heist" ,genero: "Acción, Crimen, Drama", trailer: "https://www.youtube.com/embed/To_kVMMu-Ls" , tipo : "Serie"},
  { image:"https://exorcine.files.wordpress.com/2018/06/zona-mortal-1.jpg" , description: "Tras despertarse después de un accidente automovilístico y sin acordarse de quién es, un hombre se dirige a la ciudad en busca de ayuda." ,titulo: "Zona Mortal" ,genero: "Cienciaficción", trailer: "https://www.youtube.com/embed/i4cKR1ToJ-U" , tipo : 'Pelicula'},
  { image:"https://pics.filmaffinity.com/2067-585488368-large.jpg" , description: "El cambio climático ha provocado la necesidad de emplear oxígeno artificial para poder respirar. Con su mujer enferma y pocas esperanzas de sobrevivir, Ethan se ve obligado a viajar al futuro para salvar a los humanos." ,titulo: "2067" ,genero: "Ciencia Ficcion", trailer: "https://www.youtube.com/embed/Uet1cmWe6Zo", tipo : 'Pelicula' },
  { image:"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39734-458924-20221002090557.jpg" , description: "Una joven monja se encuentra en una batalla por el alma de una niña que está poseída por el mismo demonio que atormentó a su propia madre años antes." ,titulo: "La Luz Del Diablo" ,genero: "Terror", trailer: "https://www.youtube.com/embed/spTOqMl1Fmo" , tipo : "Pelicula"}, 
  { image:"https://cdn.colombia.com/cine/2022/9/sonrie-41404.jpg" , description: "Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado." ,titulo: "Sonríe" ,genero: "Terror", trailer: "https://www.youtube.com/embed/a-JrjnT_678" , tipo : 'Pelicula'}
,
    { image:"https://es.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg" , description: "Esta serie se desarrolla en una oficina de ventas de papel en Scranton, Pensilvania. A través de un formato de falso documental, seguimos la vida cotidiana de los empleados excéntricos mientras lidian con situaciones absurdas y cómicas en su entorno laboral." ,titulo: "The Office" ,genero: "Comedia, Mockumentary", trailer: "https://www.youtube.com/embed/6EfzpP2II6M" , tipo : "Serie"},
   
]
  
  
  const tipoSelect = document.getElementById('tipo');
  const generoSelect = document.getElementById('genero');
  const busquedaInput = document.getElementById('busqueda');
  const contenidoFiltradoDiv = document.getElementById('contenedorFiltrado');
  
  
  function filtrarContenido() {
    
    const tipoSeleccionado = tipoSelect.value;
    const generoSeleccionado = generoSelect.value;
    const busquedaTexto = busquedaInput.value.toLowerCase();
  
    let contenidoFiltrado = contenido;
  
    if (tipoSeleccionado !== 'Todos') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.tipo === tipoSeleccionado);
      if(tipoSeleccionado  === 'Pelicula' || tipoSeleccionado === 'Serie' ){
        contenidoFiltrado = contenidoFiltrado.filter(item => item.tipo === tipoSeleccionado);

      }
    }
  
    if (generoSeleccionado !== 'Todos') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.genero === generoSeleccionado);
        
        if  (generoSeleccionado === 'Drama' || 
        generoSeleccionado === 'Accion' || 
        generoSeleccionado === 'Comedia' ||
        generoSeleccionado === 'Terror' ||
        generoSeleccionado === 'CienciaFiccion' ||
        generoSeleccionado === 'Fantasia' ||
        generoSeleccionado === 'Romance' ||
        generoSeleccionado === 'Animacion' ||
        generoSeleccionado === 'Familia' ||
        generoSeleccionado === 'Crimen' ||
        generoSeleccionado === 'Suspenso' ||
        generoSeleccionado === 'Misterio' ||
        generoSeleccionado === 'Documental' ||
        generoSeleccionado === 'Historico' ||
        generoSeleccionado === 'Guerra' ||
        generoSeleccionado === 'Musical' ||
        generoSeleccionado === 'Western' ||
        generoSeleccionado === 'Deportes' ||
        generoSeleccionado === 'Biografico') {
            contenidoFiltrado = contenidoFiltrado.filter(item => item.genero === generoSeleccionado);
        
        }
    }
  
    if (busquedaTexto !== '') {
      contenidoFiltrado = contenidoFiltrado.filter(item => item.titulo.toLowerCase().includes(busquedaTexto));
    }
  
    mostrarContenido(contenidoFiltrado);
  }

  function mostrarContenido(contenidoAMostrar) {
    contenidoFiltradoDiv.innerHTML = '';
  
    contenidoAMostrar.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.tipo}: ${item.titulo}`;
      contenidoFiltradoDiv.appendChild(itemDiv);

    });
  }
 
  
  tipoSelect.addEventListener('change', filtrarContenido);
  generoSelect.addEventListener('change', filtrarContenido);
  busquedaInput.addEventListener('input', filtrarContenido);
  
  // Inicializar la visualización con el contenido completo
  mostrarContenido(contenido);
  
  
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitulo = document.getElementById('modalTitulo');
const modalTipoGenero = document.getElementById('modalTipoGenero');
const modalDescripcion = document.getElementById('modalDescripcion');
const modalImg = document.getElementById('modalImg')

function crearBotonMostrarInfo(info) {
  const boton = document.createElement('button');
  boton.textContent = 'Ver info';
  boton.addEventListener('click', () => {
    mostrarModal(info);
  });
  return boton;
}

function mostrarContenido(contenidoAMostrar) {
  contenidoFiltradoDiv.innerHTML = '';

  contenidoAMostrar.forEach(item => {
    const itemDiv = document.createElement('div');
    
    // Crear elementos HTML para el tipo y el título
    const tipoElement = document.createElement('p');
    tipoElement.textContent = item.tipo;
    
    const tituloElement = document.createElement('h1');
    tituloElement.textContent = item.titulo;

    const imgPelicula = document.createElement('img');
    imgPelicula.src = item.image;  

    // Agregar los elementos al div del item
    itemDiv.appendChild(tipoElement);
    itemDiv.appendChild(tituloElement);
    itemDiv.appendChild(imgPelicula);

    const botonMostrarInfo = crearBotonMostrarInfo(item);
    itemDiv.appendChild(botonMostrarInfo);
    
    contenidoFiltradoDiv.appendChild(itemDiv);
  });
}





function mostrarModal(info) {
  modalTitulo.textContent = info.titulo;
  modalTipoGenero.textContent = `${info.tipo} - ${info.genero}`;
  modalVideo.src =`${info.trailer}`;
  modalDescripcion.textContent = `${info.description}`;
  modalImg.src = `${info.image}`;
  modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

contenidoFiltradoDiv.addEventListener('click', event => {
  const clickedItem = event.target.textContent.split(': ')[1];
  const info = contenido.find(item => item.titulo === clickedItem);
  if (info) {
    mostrarModal(info);
  }
});
