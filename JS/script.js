const main = document.getElementById("main")

async function enviar(){

    var estado = document.getElementById("estado").value
    var cidade = document.getElementById("cidade").value
    var rua = document.getElementById("rua").value

    var resposta = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)

    var dados = await resposta.json()

    document.getElementById("respostas").style.display = "flex"

    main.style.height = "auto"

    console.log(main.style.height)

    console.log(dados)

    document.getElementById("uf").innerText = dados[0].uf
    document.getElementById("localidade").innerText = dados[0].localidade
    document.getElementById("bairro").innerText = dados[0].bairro
    document.getElementById("cep").innerText = dados[0].cep
    document.getElementById("ddd").innerText = dados[0].ddd
    document.getElementById("logradouro").innerText = dados[0].logradouro

}