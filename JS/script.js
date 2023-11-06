const main = document.getElementById("main")

async function enviar() {

    var estado = document.getElementById("estado").value
    var cidade = document.getElementById("cidade").value
    var rua = document.getElementById("rua").value

    if (!!estado || !!cidade || !!rua) {

        var resposta = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)

        var dados = await resposta.json()

        main.style.height = "auto"

        main.innerHTML = `
    
        <div class="perguntas"> 
            
            <h2> Preencha os dados </h2>

            <div class="inputs">

                <select id="estado" placeholder="Estado (Sigla)">
                </select>
                <input id="cidade" placeholder="Cidade" maxlength="10"></input>
                <input id="rua" placeholder="Rua" maxlength="30"></input>

            </div>

            <button onclick="enviar()"> Enviar! </button>

        </div>

    `

        preencherSelect()

        dados.map(dado => {

        main.innerHTML +=
                `
        <div class="respostas" id="respostas"> 

            <h2> Informações </h2>

            <div class="cards">

                <div class="card">

                    <h3> Estado </h3>
                    <p id="uf"> ${dado.uf} </p> 

                </div>

                <div class="card">

                    <h3> Localidade </h3>
                    <p id="localidade"> ${dado.localidade} </p>

                </div>

                <div class="card">

                    <h3> Bairro </h3>
                    <p id="bairro"> ${dado.bairro} </p>

                </div>
        
                <div class="card"  style="order: 1">

                    <h3> Logradouro </h3>
                    <p id="logradouro"> ${dado.logradouro} </p>

                </div>

                <div class="card"  style="order: 0">

                    <h3> CEP </h3>
                    <p id="cep"> ${dado.cep} </p>

                </div>

                <div class="card" style="order: 2">

                    <h3> DDD </h3>
                    <p id="ddd"> ${dado.ddd} </p>

                </div>

            </div>

        </div>

        `

        })

    }

}

function preencherSelect() {

    let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
    let sigla = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    estados.map((estado, index) => {

        document.getElementById("estado").innerHTML += `<option value="${sigla[index]}">${estados[index]}</option>`

    })

}

preencherSelect()