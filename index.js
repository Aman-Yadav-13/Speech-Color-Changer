const grammar = "#JSGF V1.0; grammar colors; public<color> = red | yellow | green | blue;";
const recognition = new webkitSpeechRecognition();
const speechRecognitionList = new webkitSpeechGrammarList();
const cont_right = document.getElementById("container-right");

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.land = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.getElementById('listen').addEventListener('click', () => {
    recognition.start();

    recognition.onresult = (event) => {
        const color = event.results[0][0].transcript;
        cont_right.style.backgroundColor = color;
    }
})