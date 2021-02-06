// get the <audio> element
var horn = document.getElementById("horn-sound");
// get value from volume-number 
var volNum = document.getElementById("volume-number");
// get value from volume-slider
var volSlider = document.getElementById("volume-slider");
// get honk button
var honkBtn = document.getElementById("honk-btn");
// get volume icon
var volIcon = document.getElementById("volume-image");
// get each horn type radio
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
// get horn image
var hornImg = document.getElementById("sound-image");

// SET VOLUME ACCORDING TO TEXT/SLIDER - volumes should always be the same
// set volume level according to volume indicators
volNum.addEventListener("input", setHornVolNum);
// set volume level according to slider
volSlider.addEventListener("change", setHornVolSlider);

// KEEP VOLUME VALUES IN SYNC
// update the slider volume to match when the text volume is changed
volNum.addEventListener("input", updateSliderVol);
// update the text volume to match when the slider volume is changed
volSlider.addEventListener("change", updateTextVol);

// UPDATE VOLUME ICON
volSlider.addEventListener("change", updateVolIcon);
volNum.addEventListener("input", updateVolIcon);

// UPDATE HORN SOUND/IMAGE
airHorn.addEventListener("input", airHornSelect);
carHorn.addEventListener("input", carHornSelect);
partyHorn.addEventListener("input", partyHornSelect);

// HORN BUTTON
// honk the horn when the honk button is clicked
console.log(honkBtn);
honkBtn.addEventListener("click", honkHorn);

// Edit sound level of <audio> according to indicators of volume
function setHornVolSlider() {
    // set audio sound level to specified volume (they should be the same)
    horn.volume = volSlider.value/100;
}
function setHornVolNum() {
    horn.volume = volNum.value/100;
}

// Update slider volume to match text volume
function updateSliderVol() {
    volSlider.value = volNum.value;
}
// Update text volume to match slider volume
function updateTextVol() {
    volNum.value = volSlider.value;
}

// Honk the horn if the volume is greater than 0
function honkHorn(event) {
    // prevent refresh after clicking honk button
    event.preventDefault();
    
    // disable button if volume is 0
    if (horn.volume == 0) {
        hornBtn.disabled = true;
    }
    else {
        horn.play();
    }
}

// Update the volume icon according to the sound level
function updateVolIcon() {
    if (horn.volume == 0) {
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if (horn.volume >= 0.01 && horn.volume <= 0.33) {
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if (horn.volume >= 0.34 && horn.volume <= 0.66) {
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (horn.volume >= 0.67 && horn.volume <= 1) {
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function airHornSelect() {
    // change horn sound
    horn.src = "./assets/media/audio/air-horn.mp3";
    // change horn image
    hornImg.src = "./assets/media/images/air-horn.svg";
}
function carHornSelect() {
    horn.src = "./assets/media/audio/car-horn.mp3";
    hornImg.src = "./assets/media/images/car.svg";
}
function partyHornSelect() {
    horn.src = "./assets/media/audio/party-horn.mp3";
    hornImg.src = "./assets/media/images/party-horn.svg";
}
