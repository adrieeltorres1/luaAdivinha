let numeroGerado = parseInt(Math.random() * 100);
console.log(numeroGerado);
let tentativas = [];

numero.onchange = () => {
    let numeroDigitado = Number(numero.value);
    if(tentativas.length < 10){
        if(tentativas.length > 0){
            for(let i = 0; i < tentativas.length; i++){
                if(tentativas[i] == numeroDigitado){
                    alert("Este número já foi digitado");
                    numero.value = '';
                    return;
                }
            }
        }
        tentativas.push(numeroDigitado);
        if(numeroDigitado > numeroGerado){
            alert('Lua está pensando em um número menor')
        }else if(numeroDigitado < numeroGerado){
            alert('Lua está pensando em um número maior')
        }else{
            bia.src = "luaSorrindo.png";
            mensagem.innerHTML = `Parabéns o número é: ${numeroGerado}`;
            resultado.style.display = 'block';
            numero.disabled = true;
            bia.src = "LuaSorrindo.png";
            reiniciar.innerText = 'Jogar novamente';
            reiniciar.style.display = 'block';
        }
        numero.value = '';
        palpites.innerHTML = tentativas.join('-');
    } else {
        bia.src = "luaChorando.png";
        mensagem.innerHTML = `Você não acertou o número era: ${numeroGerado}`;
        resultado.style.display = 'block';
        reiniciar.style.display = 'block';
    }
}

reiniciar.onclick = () => {
    window.location.reload();
}
