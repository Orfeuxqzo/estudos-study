var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var delta = b * b - 4 * a * c;

if (a == 0 || delta < 0){
    console.log("Impossivel calcular");
    process.exit();
}
var r1 = (-b + Math.sqrt(delta) )/ (2 * a);
var r2 = (-b - Math.sqrt(delta) )/ (2 * a);
console.log("R1 = " + Number(r1).toFixed(5));
console.log("R2 = " + Number(r2).toFixed(5));
