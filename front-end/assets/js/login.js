

document.getElementById('creat-user').addEventListener('click', async function(){
    const userData = {
        nome: 'luciano',
        email: 'testefront@teste.com',
        senha_hash: '1234'
    };

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log('Usuário cadastrado com sucesso!');
        } else {
            console.error('Erro ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro inesperado:', error);
    }
    
})





/*
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signupForm').addEventListener('submit', async function (event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            nome: nome,
            email: email,
            senha_hash: password
        };

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Usuário cadastrado com sucesso!');
            } else {
                console.error('Erro ao cadastrar usuário');
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
        }
    });
});
*/