function postToChild(targetFrame, txt, targetOrigin) {
  try {
    document
      .getElementById("childFrame" + targetFrame)
      .contentWindow.postMessage({ command: "say", arg: txt }, targetOrigin);
  } catch (e) {
    say(`postToChild() error: ${e}`);
  }
}

function sayToChild(targetFrame, txt) {
  try {
    document.getElementById("childFrame" + targetFrame).contentWindow.say(txt);
  } catch (e) {
    say(`sayToChild() error: ${e}`);
  }
}
function say(txt) {
  document
    .getElementById("result")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
