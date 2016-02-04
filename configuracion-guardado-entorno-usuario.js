  var fs    = require('fs');
  var nconf = require('nconf');

  // creamos en el disco una variable JL
  nconf.overrides({
    JL: 'JoseLuis'
  });


  // argumentos o parametro enviado por comando de linea
  // (--name jdamian --age 25)
  // DATO: guardara en momoria las variables name y age con sus respectivos valores
  nconf.argv() ;

  // variables de ambiente o entorno
  // (set NODE_ENV=production && set PORT=3000 )
  // las variables de entornos se agregaran a la coleccion existente que toma del sistema (TEMP, PATH, TMP, USERNAME, ...)
  // le pasamo un array con las variables de entorno que deseamos retornar (TODO: solo NODE_ENV y PORT)
  // sino se pasa el array, devolvera todas las variables de entorno
  // DATO: guarda en memoria las variables de entorno recuperadas
  nconf.env(['NODE_ENV','PORT']) ;

  // permite leer o cargar la configuración desde un archivo .json, y consultar sus propiedades (claves)
  // permite guardar las variables que son seteadas por codigo => nconf.set('object:property', 'value') ;
  nconf.file('config-jl', {file: './config.json'});

  // seteamos algunas variables. Estar variables se mantendrán en el disco, para luego poder ser guardadas en el archivo 
  // definido con el metodo nconf.file()
  nconf.set('database:host', '127.0.0.1');
  nconf.set('database:port', 5984);

  // mostramos el contenido de las variables
  console.log('name: ' + nconf.get('name')); // argumento enviado por linea de comando
  console.log('age: ' + nconf.get('age')); // argumento enviado por linea de comando
  console.log('NODE_ENV: ' + nconf.get('NODE_ENV')); // variable de entorno enviado por linea de comando
  console.log('PORT: ' + nconf.get('PORT')); // variable de entorno enviado por linea de comando
  console.log('TEMP: ' + nconf.get('TEMP')); // variable de entorno cargado del sistema (muestra undefined porque en nconf.env() no forma parte del array enviado)
  console.log('USER: ' + nconf.get('USER')); // configuración cargada del archivo config.json
  console.log('PASSWORD: ' + nconf.get('PASSWORD')); // configuración cargada del archivo config.json
  console.log('JL: ' + nconf.get('JL')); // variable creada con "overrides"
  console.log('database: ' + JSON.stringify(nconf.get('database'))); // datos seteados en tiempo de ejecución


  // guarda en el archivo(archivo indicado con el método nconf.file()), el objeto de configuración que se encuentra en el disco
  nconf.save(function (err) {
    if ( err ) {
      console.log('\nerror la informacion del disco en el archivo') ;
    }
    else{
      console.log('\ninformacion pasada del disco al archivo') ;
    }
  });