function showMessage(type) {
    const result = document.getElementById("result");

    if (type === "text") {
        result.innerHTML = "<h2>📝 Matndan video</h2>" +
            "<p>Video uchun matn yozing:</p>" +
            "<textarea id='prompt' rows='5' placeholder='Video haqida yozing'></textarea><br><br>" +
            "<button onclick='createVideo()'>Davom etish</button>";

    } else if (type === "image") {
        result.innerHTML = "<h2>🖼️ Rasmdan video</h2>" +
            "<p>Rasm tanlang:</p>" +
            "<input type='file' accept='image/*'>" +
            "<p>Bu bo‘lim keyingi bosqichda rivojlantiriladi.</p>";

    } else if (type === "cartoon") {
        result.innerHTML = "<h2>🎨 Multfilm yaratish</h2>" +
            "<textarea id='cartoonPrompt' rows='5' placeholder='Multfilm haqida yozing'></textarea>" +
            "<p>Bu bo‘lim keyingi bosqichda rivojlantiriladi.</p>";
    }
}

function createVideo() {
    const prompt = document.getElementById("prompt").value.trim();

    if (prompt === "") {
        alert("Iltimos, matn yozing!");
        return;
    }

    const result = document.getElementById("result");
    result.innerHTML = "<h2>✅ Matn qabul qilindi!</h2>" +
        "<p id='submittedText'></p>" +
        "<p>Haqiqiy video yaratish uchun AI modelini ulash kerak.</p>" +
        "<button onclick=\"showMessage('text')\">Boshqa matn yozish</button>";

    document.getElementById("submittedText").textContent =
        "Sizning matningiz: " + prompt;
}