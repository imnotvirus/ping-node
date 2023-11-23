

  <h1>Status Checker</h1>

  <p>Este é um simples verificador de status de endpoint em Node.js, utilizando as bibliotecas Axios, Readline e Node-notifier. O script permite que você insira um endpoint a ser verificado e o tempo de intervalo em segundos para monitorar automaticamente o status desse endpoint.</p>

  <h2>Como Usar</h2>

  <h3>Pré-requisitos</h3>
  <ul>
    <li>Node.js instalado</li>
  </ul>

  <h3>Instalação de Dependências</h3>
  <pre><code>npm install axios readline node-notifier</code></pre>

  <h3>Execução do Script</h3>
  <pre><code>node index.js</code></pre>

  <h3>Entrada de Dados</h3>
  <p>O script solicitará que você informe o endpoint a ser verificado e o tempo de intervalo em segundos.</p>

  <h3>Funcionalidades</h3>
  <ul>
    <li><strong>Notificações:</strong> O script utiliza a biblioteca <code>node-notifier</code> para enviar notificações sempre que houver uma alteração no status do endpoint.</li>
    <li><strong>Log no Console:</strong> Todas as mensagens de status são registradas no console, indicando a hora atual.</li>
    <li><strong>Verificação Contínua:</strong> O script continua verificando o status do endpoint em intervalos regulares até ser interrompido.</li>
  </ul>

  <h2>Contribuição</h2>
  <p>Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias. Basta abrir uma <a href="https://github.com/seu-usuario/seu-repositorio/issues">issue</a> ou enviar um pull request.</p>

  <h2>Licença</h2>
  <p>Este projeto é distribuído sob a licença <a href="LICENSE">MIT</a>. Consulte o arquivo <code>LICENSE</code> para obter detalhes.</p>

  <hr>

  <p><em>Este README foi criado automaticamente com amor pelo GPT-3.5 da OpenAI.</em></p>

