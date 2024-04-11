let images = ["images/honkai_main.jpeg", "images/league_main.jpeg", "images/overwatch_main.jpeg", "images/pokemon_main.jpeg", "images/tft_main.jpeg", "images/valorant_main.jpeg"]
let alt = ["Honkai: Star Rail splash art", "League of Legends splash art", "Overwatch cover splash art", "Pokemon cover splash art", "TFT cover splash art", "Valorant cover splash art"]

window.addEventListener("load", function() {
	let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = images[randomIndex]
    document.getElementById("randomImage").alt = alt[randomIndex]
});

