var cartaMercedes = {
    nome: "Mercedes-AMG F1",
   imagem: "https://www.autoracing.com.br/wp-content/uploads/2021/03/F1-mercedes-w12-2021-apresentacao.jpg",
  atributos: {
        Aerodinâmica: 9,
        Potência: 9,
        Velocidade: 10,
    }
}

var cartaFerrari = {
    nome: "Scuderia Ferrari F1",
   imagem: "https://cdn-1.motorsport.com/images/amp/YEQA8A5Y/s6/ferrari-sf21-1.jpg",
  atributos: {
        Aerodinâmica: 9,
        Potência: 8,
        Velocidade: 9,
    }
}

var cartaMcLaren = {
    nome: "McLaren F1 Team",
   imagem: "https://media.racingonline.com.br/uploads/2021/02/20210215_F1_McLaren_MCL35M_1.jpg",
  atributos: {
        Aerodinâmica: 9,
        Potência: 8,
        Velocidade: 9,
    }
}

var cartaRedBull = {
    nome: "Red Bull Racing",
   imagem: "https://conteudo.imguol.com.br/c/esporte/0d/2021/02/23/a-red-bull-de-verstappen-e-perez-foi-apresentada-nesta-terca-feira-23-1614078203659_v2_1920x1080.jpg",
  atributos: {
        Aerodinâmica: 9,
        Potência: 10,
        Velocidade: 10,
    }
}

var cartaAstonMartin = {
    nome: " Aston Martin F1 Team",
   imagem: "https://womotor.files.wordpress.com/2021/03/novos-carros-f1-2021-aston-martin-amr21.jpg?w=2000&h=1333&crop=1",
  atributos: {
        Aerodinâmica: 8,
        Potência: 8,
        Velocidade: 8,
    }
}

var cartaAlphaTauri = {
    nome: "Scuderia AlphaTauri ",
   imagem: "https://images.hgmsites.net/hug/2021-alphatauri-at02-formula-one-race-car_100782037_h.jpg",
  atributos: {
        Aerodinâmica: 7,
        Potência: 8,
        Velocidade: 7,
    }
}

var cartaAlfaRomeo = {
    nome: "Alfa Romeo Racing ",
   imagem: "https://topgear.nl/thumbs/hd/2021/02/alfa-romeo-c41-f1-auto-2021-3-e1613992983319.jpg",
  atributos: {
       Aerodinâmica: 7,
       Potência: 7,
       Velocidade: 7,
    }
}

var cartaAlpine = {
    nome: "Alpine F1 Team",
   imagem: "https://womotor.files.wordpress.com/2021/03/novos-carros-f1-2021-alpine-a521.jpg?w=2000&h=1500&crop=1",
  atributos: {
        Aerodinâmica: 7,
        Potência: 6,
        Velocidade: 7,
    }
}

var cartaHaas = {
    nome: "Haas F1 Team",
   imagem: "https://cdn-1.motorsport.com/images/mgl/254X99M0/s8/haas-vf-21-1.jpg",
  atributos: {
        Aerodinâmica: 6,
        Potência: 7,
        Velocidade: 6,
    }
}

var cartaWilliams = {
    nome: "Williams Racing",
   imagem: "https://cdn-1.motorsport.com/images/amp/6n9W3RXY/s6/formula-1-williams-launch-2021-3.jpg",
  atributos: {
        Aerodinâmica: 6,
        Potência: 6,
        Velocidade: 6,
    }
}




var cartaMaquina
var cartaJogador
var cartas = [cartaMercedes, cartaFerrari, cartaMcLaren, cartaRedBull, cartaAstonMartin, cartaAlphaTauri, cartaAlfaRomeo, cartaAlpine, cartaHaas, cartaWilliams]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://i.pinimg.com/originals/4e/49/06/4e490632804acd7d22a85d0bcf3e319e.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
  if (cartas.length == 0){
    alert("Fim de jogo")
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Venceu o Jogo</p>'
    } else if (pontosMaquina > pontosJogador){
      htmlResultado = '<p class="resultado-final">Perdeu o Jogo</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou o Jogo</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://i.pinimg.com/originals/4e/49/06/4e490632804acd7d22a85d0bcf3e319e.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}