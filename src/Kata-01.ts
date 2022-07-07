/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const  isAnagram = (word1:string, word2:string):boolean => {
  let count: number= 0;
  let solve: boolean;
  if(word1.length === word2.length){
    const word1ToArray = word1.toLocaleLowerCase().split('').sort();
    const word2ToArray = word2.toLocaleLowerCase().split('').sort();

    for(let i=0; i<word1ToArray.length;i++){
      if(word1ToArray[i]===word2ToArray[i]){
        count+=1;
      }else{
        count=count;
      }
    }

    solve = count===word1ToArray.length? true:false;

  }else{
    solve = false;
  }

  return solve;
}
const solve =isAnagram('roma','Amor');
console.log(solve);
