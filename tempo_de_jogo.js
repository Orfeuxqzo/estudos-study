var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var inicio = parseInt(lines.shift());
var final = parseInt(lines.shift());
var resultado = 0;
if (final <= inicio){
    resultado = final + 24 - inicio;
} else {
    resultado = inicio - final;
} 
console.log('O JOGO DUROU ' + Math.abs(resultado) + ' HORA(S)');