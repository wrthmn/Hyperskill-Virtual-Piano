document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" ||
        event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" ||
        event.code == "KeyJ" || event.code == "KeyW" || event.code == "KeyE" ||
        event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {
        console.log("The '" + event.key.toUpperCase() + "' key is pressed.");
        let audio = new Audio("keysounds/" + event.key.toUpperCase() + ".mp3");
        audio.play();
    }
    else {
        console.log("Some another key is pressed.")
    }
})