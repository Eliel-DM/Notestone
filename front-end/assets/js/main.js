
// Objeto da nota e ID do usuário
let nota = {
  titulo: 'nova nota',
  conteudo: 'teste de nova nota 1'
};
let userID = '1';

// Função para criar a nota via fetch
async function criarNota(userID, nota) {
  try {
    const resposta = await fetch(`http://168.75.102.51:3000/api/user/${userID}/note`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nota)
    });

    const textoBruto = await resposta.text(); // evita erro se vier vazio

    if (!textoBruto) {
      console.error('⚠ Resposta vazia do servidor');
      return;
    }

    const resultado = JSON.parse(textoBruto); // parse seguro
    console.log('✅ Nota criada com sucesso:', resultado);
  } catch (erro) {
    console.error('❌ Erro ao criar nota:', erro);
  }
}

// Dispara a função ao clicar no botão
document.getElementById('create-note').addEventListener('click', () => {
  criarNota(userID, nota);
}); 