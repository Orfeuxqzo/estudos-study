var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
console.log(a);
var cedulas = [100,50,20,10,5,2,1];
cedulas.forEach(cedula =>{
    var quociente= Math.floor(a/cedula);
    if (quociente>0){
        a = a-cedula*quociente;
    }
    console.log(quociente+' nota(s) de R$ '+cedula+',00');
});