# 图标参考

!!! tip "快速复制代码元素"

    一般带有图标的内容都是代码中的某些特定元素，如果要复制其内容，只需右键单击（或者触屏长按）即可。

API 文档中会出现一些表示类型的图标，下面是常用图标的含义

<icon>对象|object</icon>

<icon>受保护的对象|object protected</icon>

<icon>私有对象|object private</icon>

<icon>类|class</icon>

<icon>受保护的类|class protected</icon>

<icon>私有类|class private</icon>

<icon>泛型类|class generic</icon>

<icon>泛型受保护的类|class protected generic</icon>

<icon>泛型私有类|class private generic</icon>

<icon>变量|variable</icon>

<icon>属性|property parent-class</icon>（parent-class）

<icon>受保护的属性|variable protected</icon>

<icon>私有属性|variable private</icon>

<icon>接口|interface</icon>

<icon>枚举|enum</icon>

<icon>枚举成员|enum-member</icon>

<icon>获取器(getter)|getter</icon>

<icon>设置器(setter)|setter</icon>

<icon>访问器(getter + setter = accessor)|accessor</icon>

## 完整图标 ID

点击图标可复制其 ID, 右键点击(或触屏长按)可复制 HTML

<div id="icon-container"></div>
<style>
  #icon-container {
    user-select: none;
  }
  .icon-item {
    cursor: pointer;
    border: 1px solid transparent;
    transition-duration: 0.1s;
  }
  .icon-item:hover {
    background: rgba(235, 120, 72, 0.1);
  }
  .icon-item:active {
    background-color: rgba(235, 120, 72, 0.3);
    color: rgb(235, 120, 72);
    border-color: rgb(235, 120, 72);
    transition-duration: 0s;
  }
</style>
<script>
    rules = [...document.styleSheets].find((o) => o.href && o.href.includes("icons.css")).cssRules;
  for (j = 5; j < rules.length; j++) {
    if (rules[j].type === CSSRule.STYLE_RULE) {
      let match = rules[j].selectorText.match(/\.[^\.: ]+?(?=\.| |$|:)/g);
      const el = document.createElement("div");
      match.forEach((s) => el.classList.add(s.replace(".", "")));
      el.classList.add("kind-icon", "icon-item");
      el.innerText += match
        .map((s) => s.replace(".", ""))
        .filter((s) => !!s)
        .filter((s) => !s.includes("kind-icon"))
        .join(" ");
      el.addEventListener("click", (e) =>alert$.next("已复制图标ID")&navigator.clipboard.writeText(el.innerText));
      el.addEventListener("contextmenu",e=>alert$.next("已复制图标HTML代码")&e.preventDefault() & navigator.clipboard.writeText(`<icon> ... |${el.innerText}</icon>`))
      document.querySelector("#icon-container").appendChild(el);
    }
  }

</script>
