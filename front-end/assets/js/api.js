const API_BASE = 'http://168.75.102.51:3000/api';

//pegar usuário



//buscar por usuários
export async function getUsers(){
    const res = await fetch(`${API_BASE}/login`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    return res.json();
}