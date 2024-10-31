// Kontrollera om användaren är på en mobil enhet
if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.body.innerHTML = "<h2>Denna app är endast tillgänglig på mobil. Vänligen besök oss på din mobiltelefon!</h2>";
} else {
    // Funktion för att visa en alert när knappen "Kom igång" klickas
    document.querySelector(".start-button").addEventListener("click", function() {
        alert("Välkommen till Goalcon! Vi är redo att sätta igång med dina mål!");
    });
}
