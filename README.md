# Jogo de Adivinhação de Números

Este é um simples jogo de adivinhação, onde o jogador tem que tentar adivinhar um número gerado aleatoriamente. O jogo fornece dicas e tem um número limitado de tentativas. Abaixo está a explicação do funcionamento do código:

## Primeira Parte: Criando o Objeto para Gerenciar o Jogo

1. **Gerando o Número Aleatório:**
   Usamos `Math.random()` para gerar um número decimal entre 0 e 1. Multiplicamos esse valor por 100 e usamos `Math.floor()` para obter um número inteiro entre 0 e 99, que será o número a ser adivinhado.

2. **Tentativas:**
   O número de tentativas começa com 10. O jogador tem um limite de tentativas para adivinhar o número correto.

3. **Histórico de Palpites:**
   Criamos um array `historico` para armazenar os palpites do jogador. Isso permite que o jogador veja os números que já tentou.

## Segunda Parte: Capturando o Palpite do Usuário

1. **Entrada de Dados:**
   Pegamos o valor digitado pelo usuário no campo `<input>` e convertemos para um número usando `parseInt()`.

2. **Validação do Palpite:**
   Se o valor inserido for inválido (ex: texto ou número fora do intervalo de 1 a 100), mostramos uma mensagem de erro e encerramos a função com `return` para evitar o processamento do palpite inválido.

3. **Armazenando o Palpite:**
   Se o palpite for válido, ele é adicionado ao `histórico` e as tentativas são decrementadas. Em seguida, chamamos a função `verificarPalpite()` para verificar se o palpite está correto.

## Terceira Parte: Verificando o Palpite do Usuário

1. **Acerto:**
   Se o jogador acertar o número, exibimos uma mensagem de parabéns e desativamos o botão de enviar para finalizar o jogo.

2. **Dicas:**
   Se o palpite for menor ou maior que o número correto, fornecemos uma dica para ajudar o jogador.

3. **Fim do Jogo:**
   Quando as tentativas acabarem, mostramos o número correto e encerramos o jogo, informando ao jogador que ele perdeu.

---

Esse formato pode ser utilizado para descrever o funcionamento do seu código no `README.md` do projeto. Caso precise de mais detalhes ou queira ajustar algum ponto, é só avisar!
