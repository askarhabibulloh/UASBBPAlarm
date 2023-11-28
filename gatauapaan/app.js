setInterval(() => {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const time = checkZero(h) + ":" + checkZero(m) + ":" + checkZero(s);
    document.getElementById("time").innerHTML = time;
}, 1000);

function checkZero(i) {
    return i < 10 ? "0" + i : i;
}

function populateMenu(id, maxValue) {
    const select = document.getElementById(id);

    for (let i = 0; i <= maxValue; i++) {
        const value = this.checkZero(i);
        this.addOption(select, value, value);
    }
}

function addOption(select, text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    select.add(option);
}

function initAlarm() {
    this.hrsMenu();
    this.minsMenu();
    this.secsMenu();
    this.soundMenu();
    this.bindEvents();
}

function buildAudio() {
    const myDiv = document.getElementById("myDiv");
    const myAudio = document.createElement("audio");
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);
    return myAudio;
}

function hrsMenu() {
    this.populateMenu("alarmHrs", 23);
}

function minsMenu() {
    this.populateMenu("alarmMins", 59);
}

function secsMenu() {
    this.populateMenu("alarmSecs", 59);
}

function soundMenu() {
    const select = document.getElementById("mySelect");
    const sounds = [
        {   name: "Birds", 
            url: "https://www.freespecialeffects.co.uk/soundfx/various/forest.wav" 
        },
        {
            name: "Morning",
            url: "https://www.freespecialeffects.co.uk/soundfx/computers/goodmorningfemale.wav"
        },
        {
            name: "Bells",
            url: "https://www.freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav"
        },
        {
            name: "Laser",
            url: "https://www.freespecialeffects.co.uk/soundfx/scifi/alien_laser_2.wav"
        },
        {
            name: "Explosion",
            url: "https://www.freespecialeffects.co.uk/soundfx/explosions/explosion_04.wav"
        },
        {
            name: "Piggy",
            url: "http://www.ringelkater.de/Sounds/2geraeusche_tiere/schwein.wav"
        },
        {
            name: "Rings",
            url: "https://www.freespecialeffects.co.uk/soundfx/telephone/phone_ring_2.wav"
        }
    ];

    for (const sound of sounds) {
        this.addOption(select, sound.name, sound.url);
    }
}

function bindEvents() {
    document.getElementById("mySetButton").addEventListener("click", () => this.setAlarm());
    document.getElementById("myClearButton").addEventListener("click", () => this.clearAlarm());
    document.getElementById("mySelect").addEventListener("change", () => this.getSrc());
}

initAlarm();

function disableInputs(disable) {
    document.getElementById('alarmHrs').disabled = disable;
    document.getElementById('alarmMins').disabled = disable;
    document.getElementById('alarmSecs').disabled = disable;
    document.getElementById('mySelect').disabled = disable;
}

