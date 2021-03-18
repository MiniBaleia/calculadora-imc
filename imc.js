// funções
function imc (peso,altura){
  return (peso/altura**2)
}

function pessoa (nome){
if (nome< 18.5)
return ("magreza")
else if (nome<=24.9)
return ("normal")
else if (nome<=29.9)
return ("sobrepeso")
else if (nome<=39.9)
return ("obesidade")
else
return ("obesidade grave")

}

massa=80
altura=1.70

carol=imc(massa,altura)
resultado=pessoa(carol)
console.log("seu imc é igual a",carol.toFixed(2))
console.log("voce esta na classificação",resultado)