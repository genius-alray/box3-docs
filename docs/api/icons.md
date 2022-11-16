# 图标参考

!!! tip "快速复制代码元素"

    一般带有图标的内容都是代码中的某些特定元素，如果要复制其内容，只需右键单击（或者触屏长按）即可。

API 文档中会出现一些表示类型的图标，下面是常用图标的含义

<icon>对象|object</icon>

<icon>类|class</icon>

<icon>变量/属性|variable</icon>

<icon>接口|interface</icon>

<icon>枚举|enum</icon>

<icon>枚举成员|enum-member</icon>

<icon>获取器(getter)/只读|getter</icon>

<icon>设置器(setter)|setter</icon>

<icon>访问器(getter + setter = accessor)|accessor</icon>

<icon>模块/命名空间|module</icon>

<icon>构造器|constructor</icon>

<icon>索引|index</icon>

<icon> 类型 |type</icon>

<icon> 事件 |event</icon>

<icon> 静态 |static</icon>

<icon> 静态方法/函数 |static function</icon>

<icon> 签名 |signature</icon>

某些图标因为所处上下文不同，其形式会发生改变，例如
<icon> 普通 |variable</icon>、
<icon> 受保护的 |variable protected</icon>、
<icon> 私有 |variable private</icon>、
<icon> 继承的 |property parent-class inherited</icon>
<icon> 带泛型的 |class generic</icon>
。
同时，根据其父级的类型，颜色也会发生改变，比如
<icon> 普通 |property</icon>
<icon> 类 |property parent-class</icon>
<icon> 枚举 |property parent-enum</icon>
<icon> 接口 |property parent-interface</icon>

<icon> 标识 |variable private</icon>: 未知或隐藏 API，尚未被官方公布，具体含义与本文档可能存在偏差

<icon> 标识 |variable protected</icon>: 标识受保护或只读的字段

## 图标库

点击图标可复制其 ID, 右键点击(或触屏长按)可复制 HTML

<div id="icon-container"></div>
<style>
  #icon-container {
    user-select: none;
    border: 3px solid #2094f3;
    box-shadow: 0 0 5px #2094f3;
    border-radius: 5px;
    padding: 8px;
  }
  .icon-item {
    padding: 0 8px;
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
