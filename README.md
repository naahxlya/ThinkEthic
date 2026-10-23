# ThinkEthic

Protótipo estático de questionário interativo para reflexão sobre decisões éticas.

## Tecnologias
- HTML
- CSS
- JavaScript puro

## Como funciona
- 12 dilemas, exibidos um por vez.
- Uma resposta por pergunta, com feedback reflexivo.
- Barra de progresso e contador de perguntas restantes.
- Resultado com índice geral e gráfico de barras por dimensão.
- As respostas são processadas no navegador e não são enviadas a um servidor.

## Nota sobre a pontuação
Os critérios e pesos são experimentais e foram definidos para demonstrar o funcionamento do protótipo. O índice não mede a moralidade de uma pessoa, não é uma avaliação psicológica validada e não deve ser usado isoladamente em decisões de contratação, promoção ou penalização.

## Ordem aleatória
A cada carregamento, o navegador embaralha a ordem das perguntas e das alternativas com o algoritmo Fisher–Yates. Quando disponível, usa `crypto.getRandomValues` com rejeição para reduzir viés no sorteio. As pontuações e os feedbacks acompanham cada alternativa, então a ordem visual não altera a avaliação. Como o site é estático e não tem identificação de usuários, o sorteio acontece por carregamento/sessão, não por uma identidade persistente.