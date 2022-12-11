const estadoInput = document.querySelector("#input-estado")
const cidadeInput = document.querySelector("#input-cidade")
const ruaInput = document.querySelector("#input-rua")

const answerArea = document.querySelector("#answer-area")
answerArea.style.display = "none"

var fullScreenTrack = "full screen off";

const answerAreaElements = {

    estado: document.querySelector("#estado"),
    localidade: document.querySelector("#localidade"),
    bairro: document.querySelector("#bairro"),
    logradouro: document.querySelector("#logradouro"),    
    cep: document.querySelector("#cep"),
    ddd: document.querySelector("#ddd")

}

async function getData(){

    if(estadoInput.value == "" || cidadeInput.value == "" || ruaInput.value == ""){

        window.navigator.vibrate(200,10,200);

        setTimeout(() => {

            alert("Preencha todos os campos!")

        }, 300)

    }

    const response = await fetch(`https://viacep.com.br/ws/${estadoInput.value}/${cidadeInput.value}/${ruaInput.value}/json/`)

    const data = await response.json()

    console.log(data[0])

    answerAreaElements.estado.innerText = data[0].uf
    answerAreaElements.localidade.innerText = data[0].localidade
    answerAreaElements.bairro.innerText = data[0].bairro
    answerAreaElements.logradouro.innerText = data[0].logradouro
    answerAreaElements.cep.innerText = data[0].cep
    answerAreaElements.ddd.innerText = data[0].ddd

    answerArea.style.display = "inherit"

    fullScreenTrack = "full screen on"
    answerArea.requestFullscreen()

}

answerArea.addEventListener("click", () => {

    if(fullScreenTrack == "full screen off"){

        fullScreenTrack = "full screen on"
        answerArea.requestFullscreen()

    }else if(fullScreenTrack == "full screen on"){

        fullScreenTrack = "full screen off"
        document.exitFullscreen()

    }

})