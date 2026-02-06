async function askAI(userMessage) {
    const response = await fetch('https://api.openai.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ВАШ_API_КЛЮЧ' // Опасно на GitHub!
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Ответь на письмо как реальный человек: ${userMessage}`}]
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
}

// Вызов функции при нажатии кнопки "Отправить"
async function handleReply() {
    const text = document.querySelector('#reply-text').value;
    const aiResponse = await askAI(text);
    
    // Добавляем ответ ИИ в список писем
    document.getElementById('list').innerHTML += `
        <div class="email-item">
            <strong>ИИ-собеседник:</strong> ${aiResponse}
        </div>`;
}
