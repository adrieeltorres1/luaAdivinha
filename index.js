let numeroGerado = parseInt(Math.random() * 100);
let tentativas = [];

numero.onchange = () => {
    if (tentativas.length < 10) {
        if (tentativas.length > 0) {
            for(let i = 0; i < tentativas.length; i++){
                if(tentativas[i] == Number(numero.value)){
                    alert("Este número já foi digitado");
                    numero.value = '';
                    return;
                }
            }  
        }
        tentativas.push(Number(numero.value));
        numero.value = '';
        palpites.innerHTML = tentativas.join('-');
    }
}

