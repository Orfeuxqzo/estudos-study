var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
lines.pop();
loop1:
for(let txt of lines) {
  var parenteses = txt.replace(/[^()]/g, '');
  var contador = 0;
  for(let c of parenteses){
      if(c == '('){
          contador+=1;
      } else if (c == ')'){
          contador-=1;
      }
      if(contador<0){
          console.log('incorrect');
          continue loop1;
      }
  }
  if(contador==0){
      console.log('correct');
  } else {
      console.log('incorrect');
  }
}