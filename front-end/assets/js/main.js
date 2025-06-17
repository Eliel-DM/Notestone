//variaveis de controle
const userId = '1';
const API_BASE = `http://168.75.102.51:3000/api/user/${userId}`;

//fazendo o GET...........
//convertendo título da nota para html/texto
function convertToLi(note){
  return `
    <li class="list-item" data-id="${note.id}">${note.titulo}</li>  
  `
}

const notesList = document.getElementById('notes-list');

//verificando notas
fetch(API_BASE)
  .then((res) => res.json())  
  .then((resBody) => resBody.notas)
  .then((noteList) =>{

      for (let i = 0; i < noteList.length; i++) {
        const nota = noteList[i]; 
        notesList.innerHTML += convertToLi(nota)       
    }

    //adicionando conteúdo na note-container
    document.querySelectorAll('.list-item').forEach((item) =>{
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const notaSelecionada = noteList.find(nota => nota.id == id);

        if(notaSelecionada){
          document.getElementById('note-title').value = notaSelecionada.titulo;
          document.getElementById('content-note').innerHTML = `${notaSelecionada.conteudo}`;
        }
      })
    })
        
  })
  .catch((erro) => console.log(erro, 'erro ao se conectar'))
  .finally(() =>{
    console.log('requisição finalizada')
  })


//POST das notas...........
/*
const createBtn = document.getElementById('create-btn');
const newNote ={
  titulo: `Minha nova nota`,
  conteudo: `digite aqui a sua nova nota...`
} 
fetch(API_BASE{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify()
})*/



