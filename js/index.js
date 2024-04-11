let images = ["../images/honkai_main_smaller.jpeg", "../images/league_main_smaller.jpeg", "../images/overwatch_main_smaller.jpeg", "../images/pokemon_main_smaller.jpeg", "../images/tft_main_smaller.jpeg", "../images/valorant_main_smaller.jpeg"]
let alt = ["Honkai: Star Rail splash art", "League of Legends splash art", "Overwatch cover splash art", "Pokemon cover splash art", "TFT cover splash art", "Valorant cover splash art"]

window.addEventListener("load", function() {
	let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = images[randomIndex]
    document.getElementById("randomImage").alt = alt[randomIndex]
});

