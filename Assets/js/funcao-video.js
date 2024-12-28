// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();
// Desabilitar o botão direito do mouse
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Função desabilitada!");
});

// Bloquear a tecla F12 e outras combinações comuns para ferramentas de desenvolvedor
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
        alert("Ação bloqueada!");
    }
});


// Função para carregar um vídeo no iframe
function changeVideo(videoSrc) {
    const iframe = document.querySelector('.player iframe');
    iframe.src = videoSrc;
}
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    // Função para remover a classe 'selected' de todos os itens da lista
    function clearSelected() {
        const videoItems = document.querySelectorAll(".video-list li");
        videoItems.forEach(item => {
            item.classList.remove("selected");
        });
    }

    // Função para mudar o vídeo no player
    function changeVideo(videoUrl) {
        const player = document.querySelector(".player iframe");
        player.src = videoUrl;

        // Marca o item selecionado como azul
        clearSelected();
        event.target.classList.add("selected");
    }

    // Adiciona o evento onclick a todos os vídeos
    const videoItems = document.querySelectorAll(".video-list li");
    videoItems.forEach(item => {
        item.addEventListener("click", function (event) {
            const videoUrl = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            changeVideo(videoUrl);
        });
    });

    // Marca o primeiro vídeo como selecionado ao carregar a página
    const firstVideo = document.querySelector(".video-list li");
    if (firstVideo) {
        firstVideo.classList.add("selected");
    }
});
