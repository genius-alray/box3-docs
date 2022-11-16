const defsMap = {
  Box3TickEvent: ["event", "event/Box3TickEvent"],
  Box3Entity: ["class", "entity"],
  URL: ["class", "type/URL"],
  Box3EventChannel: ["type generic", "type/Box3EventChannel"],
  Box3EventFuture: ["type generic", "type/Box3EventFuture"],
  Box3RespawnEvent: ["event", "event/Box3RespawnEvent"],
  Partial: ["type parent-interface generic", "type/Partial"],
  Box3EntityConfig: ["interface", "type/Box3EntityConfig"],
  Box3Vector3: ["class", "type/Box3Vector3"],
  null: ["property parent-interface"],
  Box3SelectorString: ["type", "type/Box3SelectorString"],
  Number: ["static"],
  Boolean: ["static"],
};
const iconTagMap = {
  method: "method parent-class",
  listener: "event parent-class",
  promiseEvent: "event parent-interface",
  event: "event",
  function: "function",
  arg: "variable parent-enum",
  property: "property parent-class",
  bool: "static",
};
function createIconElement(text, id) {
  const list = id.split(" ");
  const i = document.createElement("span");
  i.classList.add("kind-icon", ...list.filter((s) => !!s));
  i.innerText = text.trim();

  i.setAttribute("title", "右键单击可复制此处内容");
  i.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text.trim());
    alert$.next("复制成功：" + text);
  });
  return i;
}
function parse() {
  Object.keys(iconTagMap).forEach((key) => {
    document.querySelectorAll(key).forEach((el) => {
      const text = el.innerHTML;
      el.parentElement.replaceChild(
        createIconElement(text, iconTagMap[key]),
        el
      );
    });
  });
  document.querySelectorAll("def").forEach((el) => {
    const def = el.innerHTML.trim();
    let href = "";
    let iconId = "property";
    if (Object.keys(defsMap).includes(def)) {
      iconId = defsMap[def][0];
      href = "/api/" + (defsMap[def][1] || "_missing");
    } else {
      console.error("Unknown define tag", def);
      debugger;
    }
    const a = document.createElement("a");
    a.href = href;
    a.appendChild(createIconElement(def, iconId));
    el.parentElement.replaceChild(a, el);
  });
  document.querySelectorAll("icon").forEach((el) => {
    try {
      el.parentElement.replaceChild(
        createIconElement(
          el.innerHTML.split("|")[0],
          el.innerHTML.split("|")[1]
        ),
        el
      );
    } catch (e) {
      console.error("Cannot parse icon label", e, el);
      debugger;
    }
  });
}
document$.subscribe(parse);
