function mayMin(texto) {
    palabras = String(texto).trim();
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
      }
    
    if(regxs.lower.test(palabras)){
        alert("Minusculas");
    }else if(regxs.upper.test(palabras)){
        alert("Mayusculas");
    }else if(regxs.upperLower.test(palabras)){
        alert("Minusculas - Mayusculas");
    }else{
        alert("error");
    }
}