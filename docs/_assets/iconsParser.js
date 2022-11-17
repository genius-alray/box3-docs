const defsMap = {
  Box3TickEvent: ["event", "event/Box3TickEvent"],
  Box3World: ["class", "world"],
  Box3Entity: ["class", "entity"],
  Box3Player: ["class", "player"],
  URL: ["class", "type/base/URL"],
  Box3EventChannel: ["type generic", "type/Box3EventChannel"],
  Box3EventFuture: ["type generic", "type/Box3EventFuture"],
  Box3RespawnEvent: ["event", "event/Box3RespawnEvent"],
  Partial: ["type parent-interface generic", "type/base/Partial"],
  Box3EntityConfig: ["interface", "type/Box3EntityConfig"],
  Box3Vector3: ["class", "type/Box3Vector3"],
  null: ["property parent-interface", "type/base/null"],
  Box3SelectorString: ["type", "type/Box3SelectorString"],
  Number: ["static", "type/base/Number"],
  number: ["static parent-enum", "type/base/Number"],
  Boolean: ["static", "type/base/Boolean"],
  boolean: ["static parent-enum", "type/base/Boolean"],
  Box3RaycastOptions: ["interface", "type/Box3RaycastOptions"],
  String: ["static", "type/base/String"],
  string: ["static parent-enum", "type/base/String"],
  Box3Bounds3: ["class", "type/Box3Bounds3"],
  Box3WorldKeyframe: ["class", "type/Box3WorldKeyframe"],
  Box3AnimationPlaybackConfig: [
    "interface",
    "type/Box3AnimationPlaybackConfig",
  ],
  Box3Animation: ["class", "type/Box3Animation"],
  Box3EntityKeyframe: ["class", "type/Box3EntityKeyframe"],
  Box3PlayerKeyframe: ["class", "type/Box3PlayerKeyframe"],
  Box3RGBColor: ["class", "type/Box3RGBColor"],
  Box3RGBAColor: ["class", "type/Box3RGBAColor"],
  Box3SoundEffect: ["interface", "type/Box3SoundEffect"],
  Box3DamageEvent: ["event", "event/Box3DamageEvent"],
  Box3DieEvent: ["event", "event/Box3DieEvent"],
  Box3PlayerEntityEvent: ["event", "event/Box3PlayerEntityEvent"],
  Box3EntityEvent: ["event", "event/Box3EntityEvent"],
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
  readonly: "property protected",
  hiddenMethod: "method private",
  object: "object",
  constructor: "constructor parent-class",
  interface: "interface",
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
      const text = el.getAttribute("label") || el.innerHTML;
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
      href =
        (location.href.includes("github.io") ? "/box3-docs/api/" : "/api/") +
        (defsMap[def][1] || "_missing");
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
        createIconElement(el.innerHTML, el.getAttribute("name") || "property"),
        el
      );
    } catch (e) {
      console.error("Cannot parse icon label", e, el);
      debugger;
    }
  });
}
document$.subscribe(parse);
