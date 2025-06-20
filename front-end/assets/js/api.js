
//variaveis de controle
const userId = '1';
const API_BASE = `http://168.75.102.51:3000/api/user/${userId}`;


//pegar usuário
const apiMethods = {}


apiMethods.getNotesbyUser = function() {
    return fetch(API_BASE)
    .then((res) => res.json())  
    .then((resBody) => resBody.notas)
    .catch(erro => console.error(erro))
}