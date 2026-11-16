const urlBackend = "http://localhost:3000"

const inputTitulo = document.getElementById("name")
const inputArtista = document.getElementById("artist")
const inputGenero = document.getElementById("genre")
const inputAno = document.getElementById("year")
const inputDuracao = document.getElementById("duration")

const botaoCadastrar = document.getElementById("botaoCadastrar")

botaoCadastrar.addEventListener("click", cadastrarMusica)

async function cadastrarMusica() {
    if (
        inputTitulo.value === "" ||
        inputArtista.value === "" ||
        inputGenero.value === "" ||
        inputAno.value === "" ||
        inputDuracao.value === ""
    ) {
        alert("Prencha todos os campos!")
        return
    }

    const musica = {
        name: inputTitulo.value,
        artist: inputArtista.value,
        genre: inputGenero.value,
        year: inputAno.valueAsNumber,
        duration: inputDuracao.valueAsNumber
    }

    const resposta = await fetch(`${urlBackend}/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(musica)
    })
    
    const respostaTransformada = await resposta.json()

    alert(respostaTransformada.mensagem)

    window.location.href = "index.html"
}