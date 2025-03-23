// Função para procurar e carregar todas as notas
async function getNotes() {
    try {
        const response = await fetch("http://localhost:3000/api/notes")
        const notes = await response.json();

        const container = document.getElementById('notes-container');
        container.innerHTML = ''; // Limpa o conteúdo antes de adicionar as notas

        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <h3>${note.titulo}</h3>
                <p>${note.conteudo}</p>
                <button class="delete-btn btn btn-primary" data-id="${note.id}">Delete</button>
                <button class="edit-vtn btn btn-primary" data-id="${note.id}">Editar</button>
            `;
            container.appendChild(noteElement);
        });

        // Seleciona a última nota criada (último filho de #notes-container)
        const lastNote = document.querySelector('#notes-container .note:last-child');
        if (lastNote) {
            lastNote.style.marginBottom = '0'; // Adiciona o estilo à última nota
        }

    } catch (error) {
        console.error('Erro ao buscar notas:', error);
    }

    //Função para excluir nota
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', async function(){
        const noteId = this.getAttribute('data-id'); //pegando atributo e id do botão
        console.log(noteId)

        try{
            const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: 'DELETE',
            });

            if(response.ok){
                const noteElement = this.closest('.note');
                noteElement.remove()

                getNotes();
            }else{
                console.log('response erro');
            }
        }catch{
            console.error('erro inesperado');
        }
        });
    });
}

// Função para criar nota || POST Function
document.getElementById('note-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value; 
    
    const noteData = {
        titulo: title,
        conteudo: content,
        usuario_id: '1'
    };

    try{
        const response = await fetch('http://localhost:3000/api/notes', {
            method: 'POST',
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

// Chama a função getNotes para carregar as notas quando a página for carregada
window.onload = getNotes;
