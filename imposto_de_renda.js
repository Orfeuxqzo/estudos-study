
var salario = parseFloat(lines.shift());
var imposto = 0;

if (salario <= 2000) {
  console.log("Isento");
  process.exit();
}
salario -= 2000;

const ranges = [
  {
    range: 1000,
    taxa: 0.08
  },
  {
    range: 1500,
    taxa: 0.18
  }
];

while (salario > 0) {
  if (!ranges.length) {
    imposto += salario * 0.28;
    salario = 0;
  } else {
    const range = ranges.shift();
    imposto += Math.min(salario, range.range) * range.taxa;
    salario -= range.range;
  }
}

console.log('R$ '+Number(imposto).toFixed(2));