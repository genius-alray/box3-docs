function parseIcons() {
  document.querySelectorAll("icon").forEach((el) => {
    const text = el.innerText.split("|")[0];
    const list = el.innerText.split("|")[1].split(" ");
    const i = document.createElement("span");
    i.classList.add("kind-icon", ...list.filter((s) => !!s));
    i.innerText = text.trim();
    el.parentElement.replaceChild(i, el);
    i.setAttribute("title", "右键单击可复制此处内容");
    i.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(text.trim());
      alert$.next("复制成功：" + text);
    });
  });
}
function loop() {
  parseIcons();
  requestAnimationFrame(loop);
}
loop();
