// convertendo título da nota para html/texto
function convertToLi(note){
  return `
    <li class="list-item" data-id="${note.id}">
      ${note.titulo}
      <img class="delete-btn" data-id="${note.id}" src="https://img.icons8.com/?size=100&id=68064&format=png&color=FF465D" alt="">
    </li>  
  `
}

const notesList = document.getElementById('notes-list');

// GET NOTE BY USER............................................................................
function atualizandoLista(){
  apiMethods.getNotesbyUser().then((noteList) =>{
    notesList.innerHTML = '';

    for (let i = 0; i < noteList.length; i++) {
      const nota = noteList[i]; 
      notesList.innerHTML += convertToLi(nota)       
    }
    
    // adicionando conteúdo na note-container e gerenciando seleção e background
    document.querySelectorAll('.list-item').forEach((item) =>{
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const notaSelecionada = noteList.find(nota => nota.id == id);

        if(notaSelecionada){
          document.getElementById('note-title').value = notaSelecionada.titulo;
          document.getElementById('content-note').innerHTML = `${notaSelecionada.conteudo}`;

          localStorage.setItem('notaSelecionadaId', notaSelecionada.id);

          // remove seleção anterior
          document.querySelectorAll('.list-item').forEach(li => {
            li.classList.remove('selecionada');
          });

          // adiciona classe no item clicado
          item.classList.add('selecionada');
        }
      })
    })

    // Se não houver nota selecionada, seleciona a primeira da lista
    let notaIdSalva = localStorage.getItem('notaSelecionadaId');
    if (!notaIdSalva && noteList.length > 0) {
      const primeiraNota = noteList[0];
      localStorage.setItem('notaSelecionadaId', primeiraNota.id);
      notaIdSalva = primeiraNota.id;
    }

    // após montar a lista, restaura a nota salva (ou a primeira)
    if (notaIdSalva) {
      const notaSelecionada = noteList.find(n => n.id == notaIdSalva);
      if (notaSelecionada) {
        document.getElementById('note-title').value = notaSelecionada.titulo;
        document.getElementById('content-note').innerHTML = notaSelecionada.conteudo;

        // reaplica o background
        const itemSelecionado = document.querySelector(`.list-item[data-id="${notaIdSalva}"]`);
        if (itemSelecionado) {
          // limpa seleção anterior só aqui para evitar conflito
          document.querySelectorAll('.list-item').forEach(li => {
            li.classList.remove('selecionada');
          });
          itemSelecionado.classList.add('selecionada');
        }
      }
    }

    // Ativa os botões de deletar
    document.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation(); // evita que clique no botão também selecione a nota
        const id = btn.dataset.id;
        if (confirm('Tem certeza que deseja excluir esta nota?')) {
          deletarNota(id);
        }
      });
    });

  })
}
document.addEventListener('DOMContentLoaded', () => {
  atualizandoLista();
});


// POST DAS NOTAS .....................................................................................
function criarNota() {
  const tituloNote = 'Nota sem nome';
  const conteudoNote = '';
  const userid = '1';

  return fetch(`${API_BASE}/note`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: tituloNote,
      conteudo: conteudoNote,
      usuario_id: userid
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Erro ao criar nota');
    }

    const contentLength = res.headers.get('Content-Length');
    if (res.status === 204 || contentLength === '0' || !contentLength) {
      console.log('Nota criada com sucesso (sem corpo na resposta)');
      return;
    }

    return res.json(); // Só tenta isso se tiver corpo
    
  })
  .then(data => {
    if (data) {
      console.log('Nota criada com sucesso:', data);
      // já seleciona a nova nota
      localStorage.setItem('notaSelecionadaId', data.id);
    }
    return data;
  })
  .catch(erro => {
    console.error('Erro ao criar nota:', erro);
  })
  .finally(() => {
    console.log('Requisição finalizada');
  });
}

const createNoteBtn = document.getElementById('create-note');

createNoteBtn.addEventListener('click', () =>{
  console.log('clicado');
  criarNota().then(() => atualizandoLista());
})


// PATCH DA NOTA......................................................................................
// debounce
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// salvando dados da nota (sem atualizar lista para não perder seleção)
function salvarNota(id, titulo, conteudo) {
  fetch(`${API_BASE}/note/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      conteudo: conteudo
    })
  })
  .then(res => {
    if (!res.ok) throw new Error('Erro ao salvar nota');
    console.log('Nota salva automaticamente');
    // NÃO chamo atualizandoLista aqui para não perder seleção
  })
  .catch(err => {
    console.error('Erro no auto-save:', err);
  });
}

const inputTitulo = document.getElementById('note-title');
const inputConteudo = document.getElementById('content-note');

function getNotaSelecionadaId() {
  return localStorage.getItem('notaSelecionadaId');
}

// debounce de 500ms
const autoSave = debounce(() => {
  const id = getNotaSelecionadaId();
  if (!id) return;

  const titulo = inputTitulo.value;
  const conteudo = inputConteudo.innerHTML;

  salvarNota(id, titulo, conteudo);
}, 500);

inputTitulo.addEventListener('input', autoSave);
inputConteudo.addEventListener('input', autoSave);


// DELETE NOTA.......................................................................
function deletarNota(id) {
  fetch(`${API_BASE}/note/${id}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (!res.ok) throw new Error('Erro ao deletar nota');
    console.log('Nota deletada com sucesso');

    const notaSelecionadaId = localStorage.getItem('notaSelecionadaId');
    if (notaSelecionadaId === id) {
      localStorage.removeItem('notaSelecionadaId');

      // Pega a lista atualizada para decidir próxima seleção
      apiMethods.getNotesbyUser().then(noteList => {
        if (noteList.length > 0) {
          // índice da nota deletada (não existe mais na lista, então -1)
          // Para escolher a próxima nota, pega a do índice da nota deletada, ou anterior, ou primeira
          let novaNota = noteList[0]; // default primeira

          // alternativa mais robusta: pegar índice da nota deletada antes da exclusão para melhor lógica
          // mas simplificando aqui só pegamos a primeira nota disponível

          localStorage.setItem('notaSelecionadaId', novaNota.id);
          atualizandoLista();
        } else {
          // Nenhuma nota restante — cria nova e atualiza lista após criação
          criarNota().then(() => {
            atualizandoLista();
          });
        }
      });

      // limpa campos imediatamente
      document.getElementById('note-title').value = '';
      document.getElementById('content-note').innerHTML = '';
    } else {
      // Apenas atualiza a lista normalmente
      atualizandoLista();
    }
  })
  .catch(err => {
    console.error('Erro ao deletar:', err);
  });
}
