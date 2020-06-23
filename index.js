function postToChild(txt, targetOrigin) {
  try {
    document
      .getElementById("childFrame")
      .contentWindow.postMessage({ command: "say", arg: txt }, targetOrigin);
  } catch (e) {
    say(`postToChild() error: ${e}`);
  }
}

function sayToChild(txt) {
  try {
    document.getElementById("childFrame").contentWindow.say(txt);
  } catch (e) {
    say(`sayToChild() error: ${e}`);
  }
}
function say(txt) {
  document
    .getElementById("result")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
