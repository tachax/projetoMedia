/*
Cálculo da Média de 4 Bimestres
valor mínimo p/ passar: 7
*/

//função que calcula a média das provas e mostra o resultado
function calculoMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);

    var notaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
    //to.Fixed() -> define o número de casas decimais do número (o n° fica entre parênteses)
    
    var resultado;

    //verifica se os números estão entre 0 e 10 e se o aluno foi aprovado
    if ((nota1>=0 && nota2>=0 && nota3>=0 && nota4>=0) && (nota1<11 && nota2<11 && nota3<11 && nota4<11)) {
        
        if (notaFinal >= 7) {
        resultado = 'Sua nota foi ' + notaFinal + '. Você foi aprovado';
        }
        else {
        resultado = 'Sua nota foi ' + notaFinal + '. Você não foi aprovado';
        }

        //exibe o resultado na tela
        document.getElementById('resultado').innerHTML = resultado;

    }

    else {
        document.getElementById('resultado').innerHTML = 'Essa não é uma nota válida. Coloque notas entre 0 e 10';
    }
}

//limpa os valores da tela
function limpar() {
    document.getElementById('nota1').value = 0;
    document.getElementById('nota2').value = 0;
    document.getElementById('nota3').value = 0;
    document.getElementById('nota4').value = 0;
    document.getElementById('resultado').innerHTML = '';
}