//ator

let yAtor = 366
let xAtor = 95
let colisao = false
let pontosJogador = 0

function mostraAtor() {  
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() { 
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW) && yAtor < 366) {
    yAtor += 3
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15)
    
    if(colisao) {
      colidiu()
      somDaColisao.play() 
      if(pontosMaiorQueZero()) {
       pontosJogador --
      }
    }
  }
}

function pontosMaiorQueZero() {
  return pontosJogador > 0
}

function colidiu() {
  yAtor = 366
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 0, 0))
  text(pontosJogador, width / 2, 27)
}

function marcaPontos() {
  if (yAtor <= 15) {
    pontosJogador++
    somDoPonto.play()
    colidiu()
  }
}

function tiraPontos() {
  verificaColisao()
}