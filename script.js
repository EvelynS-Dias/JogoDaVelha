
class Player {
    id = 0
    constructor(symbol) {
        this.symbol = symbol;
    }

choose_player () { //Aqui vou fazer ele poder escolher se quer um X ou um O
    quadroEscolha.addeventlistener( 'click', (event) => {
        symbol =  event.target.classList.contains("X") ? "X" : "O";
    });
    return symbol;
}



 play() {
    espacos.forEach(espaco => { 

espaco.addEventListener("click", (event) => { //quando ele vai clicar no espaço vazio dos quadrados
    if (event.target.textContent === "") { //Se o espaço for diferente de null, pode colocar um
        event.target.textContent = this.symbol;
   let value = event.target.dataset.value
    
   value = value.split(",").map(Number); //Split para separar as strings, map para transformar elas em numeros.

   matriz[value[0]][value[1]] = this.symbol;

    }
})
})
if(this.verificarGanho(matriz,symbol)) {
    return
};

this.symbol = this.symbol === 'X' ? 'O' : 'X';
}


restart(matriz) { //Aqui vai transformar todos os números dentro da matriz em zero de novo. 
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) { 
        matriz[i][j] = "";
    }
}
}

//Vai verificar se houve algum ganho
verificarGanho(matriz,symbol) { //Aqui vou colocar as regras de como ganhar no jogo 
    for(i=0;i<3;i++) {  //Se os valores da linha são preenchidos
    if(matriz[i][0] === symbol && matriz[i][1] === symbol && matriz[i][2] === symbol)  {
       this.fimDeJogo(symbol)
       return;
    }
}

for(j=0;j<3;j++) {// Se os valores das colunas foram preenchidos
if(matriz[0][j] === symbol && matriz[1][j] === player && matriz[2][j] === symbol) {
    this.fimDeJogo(symbol)
    return;
}
}

if((matriz[0][0]  === symbol && matriz[1][1]  === symbol && matriz[2][2] === symbol)
 || (matriz[2][0] === symbol && matriz[1][1]  === symbol && matriz[0][2] === symbol)) {
    this.fimDeJogo(symbol);
    return;
}
}

fimDeJogo(symbol){ // Vai verificar quem ganhou 
resultado = symbol === 'X' ? "Jogador X ganhou" : "Jogador O ganhou";
console.log(resultado);
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

    espaço.dataset.value = [i,j]; //Criei um data-value = valor da matriz correspondente

    i++;

    if(i === 3) {
        i = 0;
        j++;
    }
})

const player1 = new Player("X");
player1.choose_player().then(() => { 
    player1.play();
})




