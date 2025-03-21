 // Função para consumir a API e exibir as notas
 async function getNotesAll() {
    try {
        const response = await fetch("http://localhost:3000/api/notes")
        const notes = await response.json();

        const container = document.getElementById('notes-container');
        container.innerHTML = ''; // Limpa o conteúdo antes de adicionar as notas

        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <h3>${note.name_note}</h3>
                <p>${note.content_note}</p>
                <small>Data de Criação: ${new Date(note.data_creat_note).toLocaleString()}</small>
            `;
            container.appendChild(noteElement);
        });
    } catch (error) {
        console.error('Erro ao buscar notas:', error);
    }
}

// Chama a função para carregar as notas quando a página for carregada
window.onload = getNotesAll;