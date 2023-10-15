//Math.floor(var)  <--- para arredondar para baixo

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
var Força = Number(window.prompt('Força'))
document.getElementById('inputForça').innerHTML = Força;

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

//CÁLCULO PERÍCIAS
var perícia = {
    hacking: Intelecto,
    engenhariadesistemas: Intelecto,
    medicina: Sabedoria,
    persuasão: Moral,
    investigação: Math.floor((Sabedoria + Intelecto) / 2),
    acrobacia: Destreza,
    atletismo: Destreza,
    percepção: Math.floor((Sabedoria + Destreza) / 2),
    intuição: Sabedoria,
    intimidação: Moral,
    artes: Sabedoria,
    arremessar: Força,
    empurrar: Força,
    vontade: Math.floor((Sabedoria + Constituição) / 2),
    pesquisa: Intelecto,
    Pilotagem: Destreza,
    desarme: Math.floor((Força + Destreza) / 2),
    furtividade: Destreza
};

//MANDAR AS PERÍCIAS PARA A TABELA
document.getElementById('HACKING').innerHTML = perícia.hacking;
document.getElementById('ENGENHARIA').innerHTML = perícia.engenhariadesistemas;
document.getElementById('MEDICINA').innerHTML = perícia.medicina;
document.getElementById('PERSUASÃO').innerHTML = perícia.persuasão;
document.getElementById('INVESTIGAÇÃO').innerHTML = perícia.investigação;
document.getElementById('ACROBACIA').innerHTML = perícia.acrobacia;
document.getElementById('ATLETISMO').innerHTML = perícia.atletismo;
document.getElementById('PERCEPÇÃO').innerHTML = perícia.percepção;
document.getElementById('INTUIÇÃO').innerHTML = perícia.intuição;
document.getElementById('INTIMIDAÇÃO').innerHTML = perícia.intimidação;
document.getElementById('ARTES').innerHTML = perícia.artes;
document.getElementById('ARREMESSAR').innerHTML = perícia.arremessar;
document.getElementById('EMPURRAR').innerHTML = perícia.empurrar;
document.getElementById('VONTADE').innerHTML = perícia.vontade;
document.getElementById('PESQUISA').innerHTML = perícia.pesquisa;
document.getElementById('PILOTAGEM').innerHTML = perícia.Pilotagem;
document.getElementById('DESARME').innerHTML = perícia.desarme;
document.getElementById('FURTIVIDADE').innerHTML = perícia.furtividade;


/*
var hacking= Intelecto
var engenhariadesistemas = Intelecto
var medicina= Sabedoria
var persuasão= Moral
var investigação =  Sabedoria + Intelecto
var acrobacia= Destreza
var atletismo= destreza
var percepção= Sabedoria + Destreza
var intuição= Sabedoria
var intimidação= Moral
var artes= Sabedoria
var arremessar= Força
var empurrar= Força
var vontade= Sabedoria + Constituição
var pesquisa= Intelecto
var Pilotagem= Destreza
var desarme= Força + Destreza
var furtividade=  Destreza*/