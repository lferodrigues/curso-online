// Referências aos elementos
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const errorMessage = document.getElementById('error-message');

// Login
loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Após login bem-sucedido
firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        fetch('mentoria.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar a página de mentoria.');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('app-content').innerHTML = html;
            })
            .catch(error => {
                console.error('Erro ao carregar a página:', error);
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Não foi possível carregar a página de mentoria.';
            });
    })
    .catch((error) => {
        errorMessage.style.display = 'block';
        errorMessage.textContent = error.message;
    });

});

// Redirecionar para Cadastro
registerBtn.addEventListener('click', () => {
    window.location.href = 'cadastro.html';
});

// Redirecionar para Recuperar Senha
forgotPasswordLink.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Por favor, insira seu email para redefinir a senha.');
        return;
    }
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Email de redefinição de senha enviado! Verifique sua caixa de entrada.');
        })
        .catch((error) => {
            alert(error.message);
        });
});
