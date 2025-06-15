// Função para procurar e carregar todas as notas
async function getNotes() {
    try {
        const response = await fetch("http://localhost:3000/api/notes");
        const notes = await response.json();

        const container = document.getElementById('notesContainer');
        container.innerHTML = ''; // Limpa o conteúdo antes de adicionar as notas

        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('nested-item');
            noteElement.setAttribute('data-id', note.id);

            noteElement.innerHTML = `
                <h3>${note.titulo}</h3>
                <p>${note.conteudo}</p>
                <button class="delete-btn btn btn-primary" data-id="${note.id}">Delete</button>
                <button class="edit-btn btn btn-primary" data-id="${note.id}">Editar</button>
            `;
            container.appendChild(noteElement);
        });
    } catch (error) {
        console.error('Erro ao buscar notas:', error);
    }

    // Função para excluir nota || DELETE NOTE
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const noteId = this.getAttribute('data-id');

            try {
                const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    this.closest('.nested-item').remove();
                    getNotes();
                } else {
                    console.log('Erro ao excluir nota.');
                }
            } catch (error) {
                console.error('Erro inesperado ao excluir:', error);
            }
        });
    });

    //CRIANDO A FUNÇÃO PATCH || ATUALIZANDO NOTAS

    // Seleciona todos os botões de edição
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const noteId = this.getAttribute('data-id');
            const noteElement = document.querySelector(`.nested-item[data-id="${noteId}"]`);
            if (!noteElement) return;

            noteElement.classList.toggle('edit-mode');
            const notesContainer = document.getElementById('notesContainer');

            // Criando a div do editor
            const rect = noteElement.getBoundingClientRect();
            let noteEditor = document.createElement('div');
            noteEditor.classList.add('note-editor');
            notesContainer.prepend(noteEditor);

            // Posicionando o editor exatamente onde a nota está
            noteEditor.style.position = "absolute";
            noteEditor.style.top = `${rect.top + window.scrollY}px`;
            noteEditor.style.left = `${rect.left + window.scrollX}px`;
            noteEditor.style.width = `${rect.width}px`;
            noteEditor.style.height = `${rect.height}px`;

            // Chamando a função para buscar os dados e preencher o editor
            await getData(noteId, noteEditor);

            // Adiciona a animação do editor
            setTimeout(() => {
                noteEditor.classList.add('on-change-editor');
            }, 10);

            // Criando o fundo preto (background)
            let blackBkg = document.querySelector('.black-bkg');

            if (!blackBkg) {
                blackBkg = document.createElement('div');
                blackBkg.classList.add('black-bkg');
                notesContainer.prepend(blackBkg);
                document.body.classList.add('no-scroll'); // Impede a rolagem
            }

            // Evento para fechar o editor ao clicar no fundo preto
            blackBkg.addEventListener('click', function () {
                closeEditor(noteEditor, noteElement, blackBkg);
            });
        });
    });

    
    // Função para buscar os dados e preencher o editor
    async function getData(noteId, noteEditor) {
        try {
            const response = await fetch("http://localhost:3000/api/notes");
            const notes = await response.json();

            const selectedNote = notes.find(note => note.id == noteId);
            
            
            if (!selectedNote) return;


            noteEditor.setAttribute('data-id', noteId)

            noteEditor.innerHTML = `
                <input id="new-title-note" value="${selectedNote.titulo}" />
                <textarea id="new-content-note" cols="50">${selectedNote.conteudo}</textarea>
                <button type="button" id="save-bt" class="btn btn-primary w-100" data-id="${selectedNote.id}">Salvar</button>
            `;

        } catch (error) {
            console.error('Erro ao buscar notas:', error);
        }

        
    }
      
    // Função para fechar o editor e remover o fundo preto
    function closeEditor(noteEditor, noteElement, blackBkg) {
        document.body.classList.remove('no-scroll');
        noteEditor.classList.remove('on-change-editor');
        blackBkg.classList.add('transparent');

        setTimeout(() => {
            noteEditor.remove();
            noteElement.classList.remove('edit-mode');
            blackBkg.remove();
        }, 400);
    }

}


// PATCH RODANDO
document.addEventListener('click', async function (event) {
    // Verifica se o clique foi no botão "Salvar" ou na div de fundo preto
    if (event.target.id === 'save-bt' || event.target.classList.contains('black-bkg')) {

        let noteId = null;

        // Se o clique foi no botão "Salvar", obtemos o ID da nota do botão
        if (event.target.id === 'save-bt') {
            noteId = event.target.getAttribute('data-id');
        } 
        // Se o clique foi no fundo preto, procuramos o ID da nota através do editor
        else if (event.target.classList.contains('black-bkg')) {
            const noteEditor = document.querySelector('.note-editor');
            noteId = noteEditor ? noteEditor.getAttribute('data-id') : null;
        }

        if (!noteId) {
            console.error('Erro: ID da nota não encontrado.');
            return;
        }


        const newTitle = document.getElementById('new-title-note').value;
        const newContent = document.getElementById('new-content-note').value;

        const noteData = {
            id: noteId,  // ID correto
            titulo: newTitle,
            conteudo: newContent,
            usuario_id: '1'  // Certifique-se de que o ID do usuário está correto
        };

        try {
            const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noteData)
            });

            if (response.ok) {
                console.log('Nota atualizada com sucesso!');
                getNotes();  // Atualiza a lista de notas
            } else {
                console.error('Erro ao atualizar nota');
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
        }

        
    }
});





const updateNoteForm = document.getElementById('update-note-data');
if(updateNoteForm){
    updateNoteForm.addEventListener('submit', async function (event) {
        
        
        event.preventDefault();

        console.log('submetido')
        
        const newTitle = document.getElementById('new-title-note').value;
        const newContent = document.getElementById('new-content-note').value;
    
        const noteData = {
            id: noteId,
            titulo: newTitle,
            conteudo: newContent,
            usuario_id: '1'
        };
    
        try {
            const response = await fetch('http://localhost:3000/api/notes', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noteData)
            });
    
            if (response.ok) {
                console.log('Nota cadastrada com sucesso!');
                getNotes();
            } else {
                console.error('Erro ao cadastrar nota');
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
        }
        
    });
}
 
// Função para criar nota || POST NOTE
document.getElementById('note-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    const noteData = {
        titulo: title,
        conteudo: content,
        usuario_id: '1'
    };

    try {
        const response = await fetch('http://localhost:3000/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        });

        if (response.ok) {
            console.log('Nota cadastrada com sucesso!');
            //atualizando as notas após o post
            getNotes();
            //limpando os dados após criação da nota
            const title = document.getElementById('note-title').value = "";
            const content = document.getElementById('note-content').value = "";
        } else {
            console.error('Erro ao cadastrar nota');
        }
    } catch (error) {
        console.error('Erro inesperado:', error);
    }
});

// Chama a função getNotes para carregar as notas quando a página for carregada
window.onload = getNotes;