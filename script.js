const h1Total = document.getElementById('Total');
const pConta = document.getElementById('Conta');
const h3ResultFinal = document.getElementById('Resultado')
const Um = document.getElementById('Um');
const Dois = document.getElementById('Dois');
const Tres = document.getElementById('Tres');
const Quatro = document.getElementById('Quatro');
const Cinco = document.getElementById('Cinco');
const Seis = document.getElementById('Seis');
const Aleatorio = document.getElementById('Aleatorio');
const Reset = document.getElementById('Reset');
let total = 0;
let conta = 'Conta: ';

document.querySelector("*").onkeydown = (teclaPressionada) => {
    console.log(teclaPressionada.key);

    if(total < 47){
        switch (Number(teclaPressionada.key)) {
            case 1:
                total = total + 1;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '1 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 1 ';
                    pConta.innerText = conta;
                }
            break;

            case 2:
                total = total + 2;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '2 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 2 ';
                    pConta.innerText = conta;
                }
            break;

            case 3:
                total = total + 3;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '3 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 3 ';
                    pConta.innerText = conta;
                }
            break;

            case 4:
                total = total + 4;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '4 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 4 ';
                    pConta.innerText = conta;
                }
            break;

            case 5:
                total = total + 5;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '5 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 5 ';
                    pConta.innerText = conta;
                }
            break;

            case 6:
                total = total + 6;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '6 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 6 ';
                    pConta.innerText = conta;
                }
            break;

            default:
            break;
        }

        if(total === 47){
            h3ResultFinal.innerText = 'Fim de Jogo! Alguém Ganhou.'
        } else if(total > 47){
            h3ResultFinal.innerText = 'Passou de 47. Ninguém Ganhou.'
        }
    } else if(total === 47){
        h3ResultFinal.innerText = 'Fim de Jogo! Alguém Ganhou.'
    } else if(total > 47){
        h3ResultFinal.innerText = 'Passou de 47. Ninguém Ganhou.'
    }
};

Aleatorio.addEventListener('click', function(){
    let R = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log('Random Number: '+R);


    if(total < 47){
        switch (R) {
            case 1:
                total = total + 1;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '1 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 1 ';
                    pConta.innerText = conta;
                }
            break;

            case 2:
                total = total + 2;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '2 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 2 ';
                    pConta.innerText = conta;
                }
            break;

            case 3:
                total = total + 3;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '3 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 3 ';
                    pConta.innerText = conta;
                }
            break;

            case 4:
                total = total + 4;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '4 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 4 ';
                    pConta.innerText = conta;
                }
            break;

            case 5:
                total = total + 5;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '5 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 5 ';
                    pConta.innerText = conta;
                }
            break;

            case 6:
                total = total + 6;
                h1Total.innerText = 'Total: '+total;
                if(conta === 'Conta: '){
                    conta = conta + '6 ';
                    pConta.innerText = conta;
                } else {
                    conta = conta + '+ 6 ';
                    pConta.innerText = conta;
                }
            break;

            default:
            break;
        }
    }
    if(total === 47){
        h3ResultFinal.innerText = 'Fim de Jogo! Alguém Ganhou.'
    } else if(total > 47){
        h3ResultFinal.innerText = 'Passou de 47. Ninguém Ganhou.'
    } else if(total === 47){
        h3ResultFinal.innerText = 'Fim de Jogo! Alguém Ganhou.'
    } else if(total > 47){
        h3ResultFinal.innerText = 'Passou de 47. Ninguém Ganhou.'
    }    
})

Um.addEventListener('click', function(){
    if(total < 47){
        total = total + 1;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '1 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 1 ';
            pConta.innerText = conta;
        }
    }
})

Dois.addEventListener('click', function(){
    if(total < 47){
        total = total + 2;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '2 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 2 ';
            pConta.innerText = conta;
        }
    }
})

Tres.addEventListener('click', function(){
    if(total < 47){
        total = total + 3;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '3 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 3 ';
            pConta.innerText = conta;
        }
    }
})

Quatro.addEventListener('click', function(){
    if(total < 47){
        total = total + 4;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '4 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 4 ';
            pConta.innerText = conta;
        }
    }
})

Cinco.addEventListener('click', function(){
    if(total < 47){
        total = total + 5;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '5 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 5 ';
            pConta.innerText = conta;
        }
    }
})

Seis.addEventListener('click', function(){
    if(total < 47){
        total = total + 6;
        h1Total.innerText = 'Total: '+total;

        if(conta === 'Conta: '){
            conta = conta + '6 ';
            pConta.innerText = conta;
        } else {
            conta = conta + '+ 6 ';
            pConta.innerText = conta;
        }
    }
})

Reset.addEventListener('click', function(){
    total = 0
    h1Total.innerText = 'Total: '+total
    conta = 'Conta: '
    pConta.innerText = conta
    h3ResultFinal.innerText = 'Resultado: '
})
