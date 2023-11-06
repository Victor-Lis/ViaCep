
# ViaCep API

Esse é um projeto simples usando a [ViaCep API](https://viacep.com.br/), embora sendo simples foi meu 2° ou 3° contato com requisições HTTP e também minha 2° ou 3° vez recebendo dados da Web, até então (10/12/2022, data da criação da pasta do projeto) nunca havia realizado tal feito, realizei esse projeto pois um amigo meu que estuda na Etec e faz DS(Desenvolvimento de Sistemas) assim como eu, estava com dificuldades na matéria de PW(Programação Web), então fiz esse projeto para ajudá-lo.



## Desafios

Acredito que meus principais desafios nesse projeto foram:
- Uma das minhas primeiras vezes usando display: "flex" e medidas responsivas.
- Ainda não tinha tanto conhecimento sobre trabalhar com Arrays ou Objetos então foi um desafio trabalhar com o método "map".
- Preencher a tag <select/> com os nomes dos estados como texto e value suas siglas / abreviações.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 

#### Primeiras vez usando medidas responsivas como "vh" e "%".
```css
main{
  min-height: 100vh;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

...


.inputs{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4%;
  margin: 2% 0;
  width: 90%;
}
```

#### Primeiras vezes usando "display: flex".
```css
.respostas{
  width: 96%;
  padding: 02%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #fff;
  max-width: 450px;
  border-radius: 10px;
  margin: 15px 0;
  padding: 2% 0;
  color: #fff;
}

...

.cards{
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2%;
  gap: 2%;
  align-items: center;
}
```

#### Preencher a tag <select/> ao carregar a página.
Nesse caso eu chamo uma função que preenche a tag <select/> mapeando um array e usando o método "innerHTML".
```javascript
function preencherSelect() {
  let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]
  let sigla = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  estados.map((estado, index) => {
    document.getElementById("estado").innerHTML += `<option value="${sigla[index]}">${estados[index]}</option>`
  })
}
```

# Resultado

![Form Vazio](https://github.com/Victor-Lis/ViaCep/blob/main/Screenshots/empty.png)

![Tag <select/>](https://github.com/Victor-Lis/ViaCep/blob/main/Screenshots/select.png)

![Form Preenchido](https://github.com/Victor-Lis/ViaCep/blob/main/Screenshots/preenchido.png)

![Resultado](https://github.com/Victor-Lis/ViaCep/blob/main/Screenshots/result.png)
## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)

