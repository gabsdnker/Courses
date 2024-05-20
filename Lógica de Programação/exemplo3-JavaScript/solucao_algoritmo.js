let notas = [];

function adicionarNota(){
    const input = document.getElementById('nota');
    const nota = parseFloat(input.value);
    if (!isNaN(nota)) {
        notas.push(nota);
        atualizarListaNotas();
        input.value = '';
    } else {
        alert('Por favor, insira um número válido.');
    }
}

function atualizarListaNotas(){
    const listaNotas = document.getElementById('notas');
    listaNotas.innerHTML = '';
    notas.forEach((nota, index) => {
        const li = document.createElement('li');
        li.textContent = `Nota ${index + 1}: ${nota}`;
        listaNotas.appendChild(li);
    });
}

//1. Criar uma calculadora
// 2. Permitir ler cada uma das notas(5, 6, 10)
// 3. Calcular a media das notas = 5 + 6 + 10 = 21 / 3 = 7
// 4. Se a media for > 6 = a pessoa estudante está aprovada
// 5. Se a media for < 6 = a pessoa estudante está reprovada

function calcularMedia (){
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index += 1 ) {
        somatorioNotas = somatorioNotas + notas[index]
    }

    media = somatorioNotas / notas.length;

    if (media > 6){
        document.getElementById('resultado').textContent =`Média: ${media.toFixed(2)} - Pessoa estudante APROVADA`
    }
    else {
        document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)} - Pessoa estudante REPROVADA`
    }
}