const emails = [
    { from: "GitHub", subject: "Ваш код успешно загружен", date: "10:45" },
    { from: "Друг", subject: "Пойдем гулять?", date: "09:30" }
];

const list = document.getElementById('list');
emails.forEach(mail => {
    list.innerHTML += `
        <div class="email-item">
            <strong>${mail.from}</strong> — ${mail.subject} <span style="float:right">${mail.date}</span>
        </div>`;
});
