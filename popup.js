document.getElementById('readButton').addEventListener('click', async function() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: getSelectedText
  }, (results) => {
    if (results && results[0] && results[0].result) {
      const selectedText = results[0].result;
      chrome.runtime.sendMessage({ text: selectedText });
    }
  });
});

function getSelectedText() {
  return window.getSelection().toString();
}
