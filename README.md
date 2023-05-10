# Projeto-T1-JavaScript-HTML-DOM
##### *Projeto feito para a aula de DAW*

## Objetivo
Foi proposto para a equipe desenvolver um componente que utiliza-se JavaScript para atender a seguinte demanda:
Desenvolver um relógio de contagem regressiva que deverá apresentar o número de dias, horas, minutos e segundos restantes ([exemplo para ser utilizado de base](https://www.timeanddate.com/countdown/chinese?p0=445)). Esse componente deverá ter um container para cada um dos dígitos (dia, hora, minuto, segundo) a serem exibidos pelo contador. <br/>
Além disso, esse countdown-timer deveria ser um componente de facil estilização e que pudesse ser reaproveitado facilmente. Dessa forma, com a tarefa dada, nos utilizamos JavaScript com Html e Css para que, manipulando o Html DOM, desenvolvermos um componente que atendesse a essa demanda.

## Equipe
A primeira etapa de um projeto, mesmo que seja *simples*, é a organização de como ele será realizado e, obviamente, aqueles que estarão envolvidos na realização do projeto são cruciais na parte da organização do projeto. Assim, a equipe que responsável por fazer isso foi:
- Thales Davi *(Back-end)*
- Caio César *(Back-end)*
- Eduardo Santos Birchal *(Front-end)*
- Arthur Henrique *(Front-end)*

## Funcionamento do Componente
É bem simples o funcionamento do componente. O countdown-timer tem alguns datasets que podem ser modificados pelo usuário que definem a data final. Esses datasets são utilizados pelo script em JavaScript para gerar um Date no backend. No backend, a data gerada é subtraida da data atual através do getTime(), o getTime retorna a data em milissegundos, assim permitindo calcular qual a diferença entre as datas através do resto da subtração de uma data pela outra. Nos utilizamos o resto da subtração para calcular qual a diferença em dias, horas, minutos e segundos das datas.<br/>
Vale ressaltar que ao chegar na data limite o countdown-timer tem seu display mudado para none, para revelar uma div que pode mostrar o que o desenvolvedor quiser. Em nossa demonstração, colocamos uma mensagem com um link embaixo.

## Importando o Componente
O procedimento para utilizar esse countdown-timer em outra aplicação web é muito simples. <br/>
- Baixar o .css e o .js que são chamados 'regressive-timer'
- Chamar esses arquivos no seu código
- Copiar o countdown-timer do *index.html*
- Definir a data limite nos datasets
- [Opcional] Copiar os links do google fonts no head do index (apenas se quiser manter a estilização na página de demonstração)

## Estilizando o Componente
Para adequar a estilização do timer a sua aplicação web recomendamos editar o arquivo .css que falamos para importar junto com o timer.
