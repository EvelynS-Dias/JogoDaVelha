
class Player {
    id = 0

 create_player (player) { //Aqui vai estar quando ele clicar num espaço vazio
    if(player.getAttribute = "Player-X" ) {
    }
    else {

    }
}
play () {
    espacos.forEach(espaco => { 

espaco.addeventlistener("click", () => { //quando ele vai clicar no espaço vazio dos quadrados
    if (espaco !== 0) { //Se o espaço for diferente de null, pode colocar um elemento
        
    }
})
})
}
restart(matriz) { //Aqui vai transformar todos os números dentro da matriz em zero de novo. 
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) { 
        matriz[i][j] = 0;
    }
}
}
}


//Minha ideia:  0 = espaço vazio. 1 = Espaço preenchido.Queria atribuir cada valor do matriz com um espaço vazio do html 
const espacos  = document.querySelectorAll(".espacos")

const matriz = [ 
    [0,0,0],
    [0,0,0],
    [0,0,0]
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




