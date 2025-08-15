// app.js
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Função para carregar tarefas
function carregarTarefas() {
  try {
    const dadosBuffer = fs.readFileSync('tarefas.json');
    return JSON.parse(dadosBuffer.toString());
  } catch (e) {
    return [];
  }
}

// Função para salvar tarefas
function salvarTarefas(tarefas) {
  fs.writeFileSync('tarefas.json', JSON.stringify(tarefas));
}

// Configuração do yargs
yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Adiciona uma nova tarefa',
    builder: {
      titulo: {
        describe: 'Título da tarefa',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      const tarefas = carregarTarefas();
      tarefas.push({ titulo: argv.titulo });
      salvarTarefas(tarefas);
      console.log(`✅ Tarefa "${argv.titulo}" adicionada com sucesso!`);
    }
  })
  .command({
    command: 'list',
    describe: 'Lista todas as tarefas',
    handler() {
      const tarefas = carregarTarefas();
      console.log('Lista de tarefas:');
      tarefas.forEach((t, i) => {
        console.log(`${i + 1}. ${t.titulo}`);
      });
    }
  })
  .help()
  .argv;
