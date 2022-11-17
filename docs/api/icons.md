# 图标参考

!!! tip "快速复制代码元素"

    一般带有图标的内容都是代码中的某些特定元素，如果要复制其内容，只需右键单击（或者触屏长按）即可。

API 文档中会出现一些表示类型的图标，下面是常用图标的含义

<icon name="object">对象</icon>

<icon name="class">类</icon>

<icon name="variable">变量/属性</icon>

<icon name="interface">接口</icon>

<icon name="enum">枚举</icon>

<icon name="enum-member">枚举成员</icon>

<icon name="getter">获取器(getter)/只读</icon>

<icon name="setter">设置器(setter)</icon>

<icon name="accessor">访问器(getter + setter = accessor)</icon>

<icon name="module">模块/命名空间</icon>

<icon name="constructor">构造器</icon>

<icon name="index">索引</icon>

<icon name="type"> 类型 </icon>

<icon name="event"> 事件 </icon>

<icon name="static"> 静态 </icon>

<icon name="static function"> 静态方法/函数 </icon>

<icon name="signature"> 签名 </icon>

某些图标因为所处上下文不同，其形式会发生改变，例如
<icon name="variable"> 普通 </icon>、
<icon name="variable protected"> 受保护的 </icon>、
<icon name="variable private"> 私有 </icon>、
<icon name="property parent-class inherited"> 继承的 </icon>
<icon name="class generic"> 带泛型的 </icon>
。
同时，根据其父级的类型，颜色也会发生改变，比如
<icon name="property"> 普通 </icon>
<icon name="property parent-class"> 类 </icon>
<icon name="property parent-enum"> 枚举 </icon>
<icon name="property parent-interface"> 接口 </icon>

<icon name="variable private"> 标识 </icon>: 未知或隐藏 API，尚未被官方公布，具体含义与本文档可能存在偏差

<icon name="variable protected"> 标识 </icon>: 标识受保护或只读的字段

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
    border: 1px solid transparent;
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
      el.addEventListener("contextmenu",e=>alert$.next("已复制图标HTML代码")&e.preventDefault() & navigator.clipboard.writeText(`<icon name="${el.innerText}">IconLabel</icon>`))
      document.querySelector("#icon-container").appendChild(el);
    }
  }

</script>
