console.log("this is content script for paragraph.js file");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.code === "clicked") {
    const paras = document.getElementsByTagName("p");
    for (els of paras) {
      els.innerHTML = message.txt;
    }
    sendResponse({ received: true });
  }
});
