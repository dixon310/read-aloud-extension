chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text) {
    chrome.tts.speak(request.text, {
      voiceName: 'Google UK English Female',
      rate: 1.15,
      onEvent: function(event) {
        if (event.type === 'end') {
          console.log('Finished speaking.');
        }
      }
    });
  }
});