let num = prompt("Entra un numero para calcular el factorial: ");
let fact=1;
for (let index = 0; index < num; index++) {
    fact+=fact*index;
}
alert("El factorial es: "+fact)