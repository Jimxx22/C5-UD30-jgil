function palindromo(text) {
    const pal = text.split("").reverse().join("");

    if (pal==text) {
        alert("Es un palindroma");
    }else{
        alert("No es un palindromo");
    }
}