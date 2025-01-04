const tg = window.Telegram.WebApp;

if (tg) {
    const userId = tg.initDataUnsafe.user.id; 
    const username = tg.initDataUnsafe.user.username;
    const firstName = tg.initDataUnsafe.user.first_name; 
    const lastName = tg.initDataUnsafe.user.last_name; 

    console.log(`User ID: ${userId}`);
    console.log(`Username: ${username}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
}

