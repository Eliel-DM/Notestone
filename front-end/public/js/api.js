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
                <small>Data de Criação: ${new Date(note.updateAt).toLocaleString()}</small>
                <button class="delete-btn" data-id="${note.id}">telete</button>
            `;
            container.appendChild(noteElement);
        });
    } catch (error) {
        console.error('Erro ao buscar notas:', error);
    }

    //Função para excluir nota
    const deleteButtons = document.querySelectorAll('.delete-btn')
    
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

                getNotes()
            }else{
                console.log('response erro')
            }
        }catch{
            console.error('erro inesperado')
        }
        })
    })
}

// Chama a função getNotes para carregar as notas quando a página for carregada
window.onload = getNotes;


