var variablesEntorno = process.env ;

console.log(variablesEntorno['NODE_ENV']) ;

for(entorno in variablesEntorno){
  console.log(entorno + ' => ' + variablesEntorno[entorno] + '\n') ;
}
