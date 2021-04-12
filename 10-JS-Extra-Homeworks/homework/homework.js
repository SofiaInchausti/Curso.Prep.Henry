// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var nuevoObj=[]
  for (let i in objeto) {
    nuevoObj.push([i,objeto[i]])
    
  }
  return nuevoObj
  //OTRA MENERA
  // var clavesYvalores=Object.entries(objeto)
  // return clavesYvalores
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objeto={}
  for (let index = 0; index < string.length; index++) {
    
    if (objeto[string[index]]){
    objeto[string[index]]+=1
    }else{
      objeto[string[index]]=1
    }
  }
  return objeto    
 }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula='';
  var minuscula='';
  for(let i in s){
    if(s[i].toUpperCase()===s[i]){
      mayuscula+=s[i];
    }else{
      minuscula+=s[i];
    }
  }
  return mayuscula+minuscula
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase=""
  for (let index = str.length-1; index>=0; index--) {
    frase+=str[index]
    
  }
  var arreglo=frase.split(" ")
  return arreglo.reverse().join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num=numero.toString();
  var nuevoNumero=""
  for (let index = num.length-1; index>=0; index--) {
    nuevoNumero+=num[index];
    
  }
  if (num===nuevoNumero){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var modificada=""
  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]!=="a" && cadena[index]!=="b" && cadena[index]!=="c"){
      modificada+=cadena[index]
    }
  }
  return modificada
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  for (let index = 0; index < arr.length; index++) {
    var temp=arr[index];
    var j=index-1;
    while(j>=0 && temp.length<arr[j].length){
      arr[j+1]=arr[j]
      j--

    }
    arr[j+1]=temp
  }
   return arr 
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArreglo=[];
for (let index = 0; index < arreglo1.length; index++) {
    if(arreglo2.includes(arreglo1[index])){
        nuevoArreglo.push(arreglo1[index])

    }    
  }
  return nuevoArreglo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

