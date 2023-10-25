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

//CÁLCULOS
var atributos = {
    //pv, san, ca e desloc
    PV: Constituição * 6,
    san: Math.ceil(((Sabedoria + Intelecto) *2) + 10),
    CA: Math.ceil(((Força + Destreza) / 2) + 4),
    deslocamento: Math.ceil((Destreza / 2) + 6),

    //perícias
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
document.getElementById('HACKING').innerHTML = atributos.hacking;
document.getElementById('ENGENHARIA').innerHTML = atributos.engenhariadesistemas;
document.getElementById('MEDICINA').innerHTML = atributos.medicina;
document.getElementById('PERSUASÃO').innerHTML = atributos.persuasão;
document.getElementById('INVESTIGAÇÃO').innerHTML = atributos.investigação;
document.getElementById('ACROBACIA').innerHTML = atributos.acrobacia;
document.getElementById('ATLETISMO').innerHTML = atributos.atletismo;
document.getElementById('PERCEPÇÃO').innerHTML = atributos.percepção;
document.getElementById('INTUIÇÃO').innerHTML = atributos.intuição;
document.getElementById('INTIMIDAÇÃO').innerHTML = atributos.intimidação;
document.getElementById('ARTES').innerHTML = atributos.artes;
document.getElementById('ARREMESSAR').innerHTML = atributos.arremessar;
document.getElementById('EMPURRAR').innerHTML = atributos.empurrar;
document.getElementById('VONTADE').innerHTML = atributos.vontade;
document.getElementById('PESQUISA').innerHTML = atributos.pesquisa;
document.getElementById('PILOTAGEM').innerHTML = atributos.Pilotagem;
document.getElementById('DESARME').innerHTML = atributos.desarme;
document.getElementById('FURTIVIDADE').innerHTML = atributos.furtividade;

//mandar pv, ca , san, e desloc para a tabela
document.getElementById('inputPV').innerHTML = atributos.PV;
document.getElementById('inputSanidade').innerHTML = atributos.san;
document.getElementById('inputCA').innerHTML = atributos.CA;
document.getElementById('inputDeslocamento').innerHTML = atributos.deslocamento;
