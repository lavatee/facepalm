const tg = window.Telegram.WebApp;

// Убедитесь, что веб-приложение инициализировано
if (tg) {
    // Получите информацию о пользователе
    const userId = tg.initDataUnsafe.user.id; // ID пользователя
    const username = tg.initDataUnsafe.user.username; // Username пользователя
    const firstName = tg.initDataUnsafe.user.first_name; // Имя пользователя
    const lastName = tg.initDataUnsafe.user.last_name; // Фамилия пользователя

    console.log(`User ID: ${userId}`);
    console.log(`Username: ${username}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
}

