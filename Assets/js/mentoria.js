// Verifica se o usuário está autenticado
if (localStorage.getItem('authenticated') !== 'true') {
    // Remove a autenticação inválida e redireciona
    localStorage.removeItem('authenticated');
    window.location.href = 'https://feliperodrigues.net.br';
}