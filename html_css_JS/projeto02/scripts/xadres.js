/*
function grabing(evento){
    arrastando = true;
    let dados_peao = document.getElementById("peao1")
    mause_x = evento.mause_Y
    mause_Y = evento.mause_x
    
}

function soutou(){
    alert("soutou no ponto mause_Y")
}
*/

alert('da pra mover as peças só é meio bugado kk, arrasta a peça pro quadrado que quer e dps duplo clique. também da pra comer a peça do adiversario, move a peça pro cantinho do quadrado e nao em cima da peça que ela come')

let pecaSelecionada = null;

// Selecionar uma peça
function grabing(evento) {
    pecaSelecionada = evento.target;
}

// Clicar em uma casa do tabuleiro
document.querySelectorAll(".tabuleiro div").forEach(casa => {

    casa.addEventListener("click", function() {

        // Se nenhuma peça estiver selecionada, não faz nada
        if (pecaSelecionada === null) return;

        // Se já existir uma peça na casa, ela será substituída
        this.innerHTML = "";

        // Coloca a peça selecionada na nova casa
        this.appendChild(pecaSelecionada);

        // Limpa a seleção
        pecaSelecionada = null;
    });

});





