
class Player {
    id = 0
    player = this.player;

 choose_player () { //Aqui vou fazer ele poder escolher se quer um X ou um O
    quadroEscolha.addeventlistener( 'click', (event) => {
        this.player =  event.target.classList.contains("X") ? "X" : "O";
        return player;
    });
}

play (player) {
    espacos.forEach(espaco => { 

espaco.addeventlistener("click", () => { //quando ele vai clicar no espaço vazio dos quadrados
    if (espaco !== 0) { //Se o espaço for diferente de null, pode colocar um elemento
        player =
    }
})
})
}

restart(matriz) { //Aqui vai transformar todos os números dentro da matriz em zero de novo. 
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) { 
        matriz[i][j] = "";
    }
}
}

//Vai verificar se houve algum ganho
verificarGanho(matriz,player) { //Aqui vou colocar as regras de como ganhar no jogo 
    for(i=0;i<3;i++) {  //Se os valores da linha são preenchidos
    if(matriz[i][0] === player && matriz[i][1] === player && matriz[i][2] === player)  {
        return true;
    }
}

for(j=0;j<3;j++) {// Se os valores das colunas foram preenchidos
if(matriz[0][j] === player && matriz[1][j] === player && matriz[2][j] === player) {
    return true;
}
}

if(matriz[0][0] && matriz[1][1] && matriz[2][2] === player || matriz[2][0] && matriz[1][1] && matriz[0][2]) {
    return true; //linha inclinada
}
}

fimDeJogo(player){ // Vai verificar quem ganhou 
    if(verificarGanho()) { 
resultado = player === 'X' ? "Jogador X ganhou" : "Jogador O ganhou";
}
}
}


//Minha ideia:  0 = espaço vazio. 1 = Espaço preenchido.Queria atribuir cada valor do matriz com um espaço vazio do html 
const espacos  = document.querySelectorAll(".espacos")

const matriz = [ 
    ["","",""],
    ["","",""],
    ["","",""]
] 




let i = 0, j = 0 ;
espacos.forEach(espaço => {

    espaço.dataset.value = matriz[i][j]; //Criei um data-value = valor da matriz correspondente

    i = 0;
    while(i !== 3) {
        i++
    }
    if(i === 3) {
        j++;
    }
})




