const tg = window.Telegram.WebApp;

// Kullanıcı bilgilerini al
const user = tg.initDataUnsafe.user;
document.getElementById("welcome").innerText = `Merhaba, ${user?.first_name || "kullanıcı"}!`;

// Web App'i kapatma butonu
document.getElementById("close").addEventListener("click", () => {
    tg.close();
});
