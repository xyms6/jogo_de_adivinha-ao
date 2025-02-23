const jogo = {
    numeroAleatorio: Math.floor(Math.random() * 100) + 1, // Gera um numero aleatorio de 1 a 100
    tentativas: 10, // Numeros maximos de tentativas
    historico: [] // Lista que guarda os palpites ja feitos
}
document.getElementById("enviar").addEventListener("click", function() {
    let palpite = parseInt(document.getElementById("palpite").value); // Pega o numero digitado

    if (isNaN(palpite) || palpite < 1 || palpite > 100) { // Verifica se é um número válido
        document.getElementById("mensagem").textContent = "Digite um número entre 1 e 100!";
        return;
    }

    jogo.historico.push(palpite); // Adiciona o palpite ao historico
    jogo.tentativas--; // Reduz o numero de tentativas

    verificarPalpite(palpite); // Chama a função que verifica se o palpite esta certo
});
function verificarPalpite(palpite) {
    let mensagem = "";

    if (palpite === jogo.numeroAleatorio) { // Se acertou
        mensagem = `Parabéns! Você acertou o número ${jogo.numeroAleatorio}!`;
        document.getElementById("enviar").disabled = true; // Desativa o botao
    } else if (palpite < jogo.numeroAleatorio) { // Se o numero é muito baixo
        mensagem = "Muito baixo! Tente um número maior.";
    } else { // Se o numero é muito alto
        mensagem = "Muito alto! Tente um número menor.";
    }

    if (jogo.tentativas === 0 && palpite !== jogo.numeroAleatorio) { // Se acabou as tentativas
        mensagem = `Você perdeu! O número era ${jogo.numeroAleatorio}.`;
        document.getElementById("enviar").disabled = true; // Desativa o botao
    }

    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("historico").textContent = jogo.historico.join(", "); // Atualiza historico
}
