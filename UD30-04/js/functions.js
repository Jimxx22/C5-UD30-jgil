var valores=[true, 5, false, "hola", "adios", 2];
var palabra="";
var n1,n2, res;

for (let index = 0; index < valores.length; index++) {
    if (typeof(valores[index])==="string") {
        if(palabra.length<valores[index].length){
            palabra=valores[index];
        }
    }else if(typeof(valores[index])==="boolean"){
        console.log(valores[index]);
    }else if(typeof(valores[index])==="number"){
        if (n1==null) {
            n1=valores[index];
        }else{
            n2=valores[index];
        }
    }
}
console.log("La palabra mas larga es: "+palabra);
res=n1+n2;
console.log(n1 +"+"+ n2 +"="+ res);
res=n1-n2;
console.log(n1 +"-"+ n2 +"="+ res);
res=n1*n2;
console.log(n1 +"*"+ n2 +"="+ res);
res=n1/n2;
console.log(n1 +"/"+ n2 +"="+ res);