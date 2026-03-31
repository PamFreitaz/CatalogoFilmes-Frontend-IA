// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    if (newTheme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }

    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);

    // Atualiza o ícone do botão
    updateButtonIcon(newTheme);
}

// Função para atualizar o ícone do botão
function updateButtonIcon(theme) {
    const button = document.getElementById('theme-toggle');
    button.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Função para aplicar o tema salvo no localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateButtonIcon('light');
    } else {
        updateButtonIcon('dark');
    }
}

// Adiciona o event listener ao botão quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', toggleTheme);

    // Aplica o tema salvo ao carregar a página
    applySavedTheme();
});