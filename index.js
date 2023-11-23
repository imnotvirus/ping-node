const axios = require('axios');
const readline = require('readline');
const notifier = require('node-notifier');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let endpoint = '';
let ultimoStatus = null;


/**
 * Obtém o endpoint a ser verificado e o tempo de intervalo em segundos.
 * Realiza a verificação de status em intervalos regulares.
 */
const obterEndpoint = () => {
  rl.question('Informe o endpoint a ser verificado: ', (resposta) => {
    endpoint = resposta;

    rl.question('Informe o tempo de intervalo em segundos: ', (tempoEmSegundos) => {
      const intervaloDeTempo = parseInt(tempoEmSegundos) * 1000; // converte para milissegundos
      verificarStatus();
      // Realiza a verificação de status em intervalos regulares
      setInterval(verificarStatus, intervaloDeTempo);

      rl.close();
    });
  });
};

/**
 * Verifica o status do endpoint e realiza ações com base no resultado.
 * @returns {Promise<void>} Uma Promise vazia.
 */
const verificarStatus = async () => {
  try {
    const response = await axios.get(endpoint);

    if (response.status === 200) {
      if (ultimoStatus !== 200) {
        notificar('Endpoint está online. Status: 200');
      }
      logStatus('Endpoint está online. Status: 200');
    } else {
      if (ultimoStatus !== response.status) {
        notificar(`Endpoint retornou um status diferente de 200: ${response.status}`);
      }
      logStatus(`Endpoint retornou um status diferente de 200: ${response.status}`);
    }

    ultimoStatus = response.status;
  } catch (error) {
    const mensagemErro = `Erro ao fazer a requisição: ${error.message}`;
    if (ultimoStatus !== 'erro') {
      notificar(mensagemErro);
    }
    logStatus(mensagemErro);
    ultimoStatus = 'erro';
  }
};

/**
 * Notifica uma mensagem.
 * @param {string} mensagem - A mensagem a ser notificada.
 */
const notificar = (mensagem) => {
  notifier.notify({
    title: 'Verificação de Status',
    message: mensagem,
    sound: true,
  });
};

/**
 * Registra uma mensagem de status no console, juntamente com a hora atual.
 * @param {string} mensagem - A mensagem de status a ser registrada.
 */
const logStatus = (mensagem) => {
  const horaAtual = new Date().toLocaleTimeString();
  console.log(`[${horaAtual}] ${mensagem}`);
};

obterEndpoint();
