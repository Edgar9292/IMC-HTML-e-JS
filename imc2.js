const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    // const variavel somente de leitura

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        // let escopo de bloco, usada dentro do bloco IF

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
    
        }
        // estrutura de decisão se e senão

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        // aqui mostrará o resultado
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
        // caso não digite um campo e clique em calcular mostrará preencha todos os campos
    }

}

calcular.addEventListener('click', imc);
// botao calcular