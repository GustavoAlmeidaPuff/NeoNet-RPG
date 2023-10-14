//NOME
var nome = window.prompt('Nome do personagem')//Declara a var "nome" e pede um input pra ela
document.getElementById('inputNome').innerHTML = nome;//coloca o valor da variável dentro da tabela html

//isso se repete para todos

//NIVEL
var nível = Number(window.prompt('Nível'))
document.getElementById('inputNível').innerHTML = nível;

//XP
var xp = Number(window.prompt('Xp'))
document.getElementById('inputXp').innerHTML = xp;


//ATRIBUTOS
alert('Atributos')

//FORÇA
var força = Number(window.prompt('Força'))
document.getElementById('inputForça').innerHTML = força;

//DESTREZA
var Destreza = Number(window.prompt('Destreza'))
document.getElementById('inputDestreza').innerHTML = Destreza;

//CONSTITUIÇÃO
var Constituição = Number(window.prompt('Constituição'))
document.getElementById('inputConstituição').innerHTML = Constituição;

//INTELECTO
var Intelecto = Number(window.prompt('Intelecto'))
document.getElementById('inputIntelecto').innerHTML = Intelecto;

//SABEDORIA
var Sabedoria = Number(window.prompt('Sabedoria'))
document.getElementById('inputSabedoria').innerHTML = Sabedoria;

//MOIRAL
var Moral = Number(window.prompt('Moral'))
document.getElementById('inputMoral').innerHTML = Moral;