const button = document.getElementById("submit");
const realInp = document.getElementById("real-inp");

button.addEventListener("click", () => {
  const inputText = document.getElementById("inp");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let active = tabs[0];
    chrome.tabs.sendMessage(
      active.id,
      {
        code: "clicked",
        txt: `${inputText.value}`,
      },
      (response) => {
        if (response.received) {
          clearInp();
        }
      }
    );
  });
});
realInp.addEventListener("input", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let active = tabs[0];
    chrome.tabs.sendMessage(active.id, {
      code: "clicked",
      txt: `${realInp.value}`,
    });
  });
});

function clearInp() {
  const input = document.getElementById("inp");
  input.value = "";
}
