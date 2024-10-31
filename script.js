// Kontrollera om användaren är på en mobil enhet
if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.body.innerHTML = `
        <h2>Denna app är endast tillgänglig på mobil.</h2>
        <p>Scanna QR-koden nedan för att öppna Goalcon på din mobiltelefon!</p>
        <img src="goalcon-qr.png" alt="Scanna denna QR-kod för att öppna Goalcon" style="width: 200px; height: 200px; margin-top: 20px;">
    `;
} else {
    // Funktion för att visa en alert när knappen "Kom igång" klickas
    document.querySelector(".start-button").addEventListener("click", function() {
        alert("Välkommen till Goalcon! Vi är redo att sätta igång med dina mål!");
    });
}
