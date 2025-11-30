const btn = document.getElementById('toggleDark');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark')
        ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
