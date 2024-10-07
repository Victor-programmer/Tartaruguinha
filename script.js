const audio = document.querySelector('audio');
const legenda = document.getElementById('legenda');
const botaoSim = document.getElementById('botao-sim');
const botaoEspera = document.getElementById('botao-espera');

let ultimaLegendaIndex = -1; // Controla a última legenda exibida

// Legendas e tempo (em segundos)
const legendas = [
    { tempo: 0, texto: 'Olá, meu nome é Hugo, eu tenho um aninho' },
    { tempo: 4, texto: 'E vou ser seu novo amigo, vou dormir todas as noites com você!' },
    { tempo: 10, texto: 'Estou muito feliz, Porque eu amo muito abraços quentinhos e carinho' },
    { tempo: 15, texto: 'Eu só não gosto muito de vaquinhas, E fiquei sabendo que você tem uma' },
    { tempo: 20, texto: 'mas eu me acostumo, eu tinha que falar, mais alguma coisa hum' },
    { tempo: 25, texto: 'Aé, o Victor me pediu para falar que tinha alguma coisa com a minha' },
    { tempo: 30, texto: 'barriguinha só não me lembro o que era, Acho que é que tenho muitas cócegas' },
    { tempo: 35, texto: 'não sei' },
    { tempo: 37, texto: 'Ainda não te conheço, mas já te amo muito!' }
];

// Função para atualizar a legenda conforme o tempo do áudio
audio.addEventListener('timeupdate', () => {
    const tempoAtual = audio.currentTime;

    // Itera sobre as legendas
    for (let i = 0; i < legendas.length; i++) {
        // Se o tempo atual é maior ou igual ao tempo da legenda e não é a mesma que a anterior
        if (tempoAtual >= legendas[i].tempo && i !== ultimaLegendaIndex) {
            legenda.textContent = legendas[i].texto; // Atualiza a legenda
            ultimaLegendaIndex = i; // Atualiza o índice da última legenda exibida
        }
    }
});

// Função para pausar o áudio e atualizar a legenda
function esperaUmPouco() {
    audio.pause(); // Pausa o áudio
    legenda.textContent = 'Tá bom, estou esperando'; // Atualiza a legenda
    botaoSim.textContent = 'Pode continuar'; // Atualiza o texto do botão "Sim"
}

// Adiciona evento de clique ao botão "Esperar um pouco"
botaoEspera.addEventListener('click', esperaUmPouco);

// Função para continuar o áudio a partir do ponto onde foi pausado
function continuarAudio() {
    audio.play(); // Retoma a reprodução do áudio
}

// Adiciona evento de clique ao botão "Sim"
botaoSim.addEventListener('click', continuarAudio);

// Evento para quando o áudio termina
audio.addEventListener('ended', () => {
    legenda.textContent = 'Quer que eu repita?'; // Atualiza a legenda
    botaoSim.textContent = 'Sim'; // Reseta o texto do botão "Sim"
});
