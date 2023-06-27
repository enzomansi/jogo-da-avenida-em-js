//carros

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 265, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.5, 1.5]
let comprimentoCarro = 60
let larguraCarro = 40

function mostraCarro() {  
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, larguraCarro)
  }
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    if(xCarros[i] < -50) {
      xCarros[i] = 600
    }
  }
}