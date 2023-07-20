

//creo la funcion

function getCharacters(done) {
    //agrego en la constante la api
    const results = fetch('https://rickandmortyapi.com/api/character')
// agrego el then y paso cambio de Json
    results
        .then(Response => Response.json())
        .then(Date => { done(Date) })

}
//consigo las carateristicas y lo pongo en consola
getCharacters(Date => {
    console.log(Date);
    //construlyo con el foreach que recorra todos los pj
    Date.results.forEach(personaje => {
        //con la constante agrego todo en la web img , status, name,species...
        const article = document.createRange().createContextualFragment(`
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">

        </div>
        <h2>"${personaje.name}"</h2>

        <h2">${personaje.species}</"h2>

        <samp>"${personaje.status}"</samp>
        
    </article>`
        
        );
        //constante main
        const main = document.querySelector("main");
        //llamo a los hijos
        main.append(article)

    })
})