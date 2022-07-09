/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


//Funcion que compruebe que un numero es o no primo

const isPrime = (number:number):boolean => {
  let prime:boolean;
  let count:number = 0;
  if(number<2){
    prime= false;
  }else{

    for(let i=1;i<=number;i++){
      if(number%i === 0){
        count+=1;
      }else{
        count = count;
      }
    }
    prime = count>2 ? false : true;

  }
  return prime;

}

for (let j=1; j<=100;j++){
  let number= isPrime(j);
  if(number){
    console.log(j)
  }
}
