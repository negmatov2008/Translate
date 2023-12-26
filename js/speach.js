function readText(text, card, v) {
  if (hisob == 1) {
    if ("speechSynthesis" in window) {
      var synthesis = window.speechSynthesis;

      // Get the first `en` language voice in the list
      var voice = synthesis.getVoices().filter(function (voice) {
        return voice.lang === "en";
      })[0];

      // Create an utterance object
      var utterance = new SpeechSynthesisUtterance(text);

      // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1.4;
      utterance.rate = 1.3;
      utterance.volume = 1;

      // Speak the utterance
      synthesis.speak(utterance);
    } else {
      console.log("Text-to-speech not supported.");
    }
  } else {
    if ("speechSynthesis" in window) {
      var synthesis = window.speechSynthesis;

      // Get the first `en` language voice in the list
      var voice = synthesis.getVoices().filter(function (voice) {
        return voice.lang === "en";
      })[0];

      // Create an utterance object
      var utterance = new SpeechSynthesisUtterance(card);

      // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1.4;
      utterance.rate = 1.3;
      utterance.volume = 1;

      // Speak the utterance
      synthesis.speak(utterance);
    } else {
      console.log("Text-to-speech not supported.");
    }
  }
  console.log(card);
}
