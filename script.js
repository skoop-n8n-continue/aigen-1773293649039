document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World app initialized');

    // For digital signage, we might want to cycle colors or add subtle animations
    const greeting = document.getElementById('greeting');

    // Simple pulsing effect
    setInterval(() => {
        greeting.style.transition = 'text-shadow 2s ease-in-out';
        greeting.style.textShadow = greeting.style.textShadow === 'none' || greeting.style.textShadow === ''
            ? '0 0 20px rgba(0, 183, 175, 0.5)'
            : 'none';
    }, 2000);
});
