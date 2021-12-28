async function cargar_album() {
    try {
        const url = "https://jsonplaceholder.typicode.com/photos"
        const datos = await fetch(url)
        const album = await datos.json();
    
        for(let i = 0; i < 20; i++) {
            $("#resultado").append(`
                <li>${album[i].title}</li>
            `)
        };
    } catch (error) {
        console.log("error llamando a la API")
        console.log(error.message);
    };

};


function iniciar() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            cargar_album();
            resolve("Información Enviada");
        }, 3000);
    });
}

iniciar().then(console.log);
