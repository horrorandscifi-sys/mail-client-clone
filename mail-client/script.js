const list = document.getElementById('list');

function addEmail(sender, text) {
    const html = `
        <div class="email-item">
            <strong>${sender}:</strong> ${text}
        </div>`;
    list.innerHTML += html;
    list.scrollTop = list.scrollHeight; // Прокрутка вниз
}

// Начальное письмо
addEmail("GitHub Bot", "Привет! Я твой ИИ-собеседник. Напиши мне что-нибудь.");

async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    
    if(!message) return;

    // 1. Отображаем ваш ответ
    addEmail("Вы", message);
    input.value = ''; // Очистить поле

    // 2. Имитация "ИИ думает"
    addEmail("ИИ", "Печатает...");

    // 3. Тут будет запрос к ИИ. Пока просто имитируем ответ:
    setTimeout(() => {
        // Удаляем надпись "Печатает..." (последний элемент)
        const items = document.querySelectorAll('.email-item');
        items[items.length - 1].remove();
        
        addEmail("ИИ-собеседник", "Я получил твое сообщение: '" + message + "'. Это очень интересно!");
    }, 1500);
}
