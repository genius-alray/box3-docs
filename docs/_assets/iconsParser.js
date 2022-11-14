function parseIcons() {
  document.querySelectorAll("icon").forEach((el) => {
    try {
      const text = el.innerHTML.split("|")[0];
      const list = el.innerHTML.split("|")[1].split(" ");
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
    } catch (e) {
      console.error("Cannot parse icon label", e, el);
    }
  });
}
function loop() {
  parseIcons();
  requestAnimationFrame(loop);
}
loop();
