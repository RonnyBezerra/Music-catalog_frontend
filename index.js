const urlBackend = "http://localhost:3000"

const listaMusicas = document.getElementById("listaMusicas")

async function buscarMusicas() {
    const resposta = await fetch(urlBackend)
    const musicas = await resposta.json()

    musicas.forEach((musica) => {
        listaMusicas.innerHTML += `
            <article class="musica">
                <h2>${musica.name}</h2>
                <p class="artista">${musica.artist}</p>
                <p class="detalhes">${musica.genre} | ${musica.year} | ${musica.duration} min</p>
                <div class="acoes">
                    <a class="editar" href="editar.html?id=${musica.id}">Editar</a>
                    <button class="apagar">Apagar</button>
                </div>
            </article>
        `
    })
}

buscarMusicas()