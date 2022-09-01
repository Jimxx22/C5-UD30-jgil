    var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letraUser, numeroUser;
    var dni= window.prompt("Entra tu DNI: ");
    if (dni==null || dni=="") {
        window.alert("No has intorducido nada");
    }else{
        numeroUser=dni.slice(0,-1);
        letraUser=dni.charAt(dni.length-1);
        console.log(numeroUser);
        console.log(letraUser);
        if(numeroUser>0 && numeroUser< 99999999){
            var resto= numeroUser%23;
            if(letras[resto]==letraUser){
                window.alert("El DNI es correcto");
            }else{
                alert("El DNI es incorrecto, la letra del DNI deveria ser " +letras[resto]);
            }
        }else{
            window.alert("El numero indicado no es valido");
        } 
    }
