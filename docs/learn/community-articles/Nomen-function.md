<a href="https://github.com/helloyork"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-Nomem-47F5C0"></img></a>
<a href="https://github.com/alan-best"><img src="https://img.shields.io/badge/%E6%8E%92%E7%89%88%E4%BC%98%E5%8C%96%26%E4%BF%AE%E6%AD%A3-AlanBestHacker-blueviolet"></img></a>

### 函数是什么

!!! quote

      一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。在
      JavaScript 中，函数是头等 (first-class)对象，因为它们可以像任何其他对象一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是 Function 对象

      ——来自 MDN 技术社区的注释

简单来说，函数是一个过程，或者一把工具，你可以将一些重复性的代码包装在函数里面，然后重复使用

这就像一把扳手，你能让扳手变成各种形状，来推动你代码的运行或者提供便利的帮助

这个函数的好处在于，我们能用于处理和压缩大段无意义或难以维护的代码，以及去更好地推动代码运行

可能不好理解，那么在代码中，如果我们要获得`一个数字的根号2乘以2.137然后与另一个函数对比选择最大的一个`

这一段长长的句子实现出来没啥难度，但是这个时候，我们要重复运用很多次，而且每次的根号下数字还会变动

将这一个操作包装成一个工具，我们不仅让他在代码中的体积变小了，代码更容易阅读了，而且还能改变他功能，让他随着代码需要而变化

> 悄悄告诉你，Nomen 有个朋友叫 Function（doge

### 函数基础构造

- 关键字函数
- 箭头函数
- 对象或类方法
- 异步函数
- 标签函数

**在 JavaScript 中，每个函数其实都是一个 Function 对象**

别急，Function 对象是什么？简单来说，对象好比一个人，这个人有自己的名字（ <property>属性</property> ）以及能够做的事情（ <method>方法</method> ）

那 Function 函数就是一个拥有自己<method>方法</method>与<property>属性</property>的东西了

等等，方法？是的，一个对象的方法一般都是用函数构造的(闭环了属于是)，我们用函数来包装这个对象的方法以便调用

> 调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数<property>参数</property>名叫作<arg>形参</arg>。如果实参是一个包含原始值 (数字，字符串，布尔值) 的变量，则就算函数在内部改变了对应<arg>形参</arg>的值，返回后，该实参变量的值也不会改变。如果实参是一个对象引用，则对应<arg>形参</arg>会和该实参指向同一个对象。假如函数在内部改变了对应<arg>形参</arg>的值，返回后，实参指向的对象的值也会改变
>
> ——来自 MDN 技术社区的注释

“传递给函数的值被称为函数的实参（值传递）”，这句话的意思是，在使用函数的时候，你给函数括号内传入的任何东西都是实实在在的（既有实际定义与类型）

“对应位置的函数<property>参数</property>名叫作<arg>形参</arg>”，也就是说，你函数本身定义的时候要求的<property>参数</property>都是<arg>形参</arg>-顾名思义，只有外形，也是相当于一个不明类型的<property>参数</property>

> 实参：实际存在的<property>参数</property>，有明确的类型，一般出现在函数调用的位置
>
> <arg>形参</arg>：形式上存在的<property>参数</property>，用于接收传入的<property>参数</property>，不是实际存在的，浏览器也不会为这玩意分配额外空间

#### 关键字函数

让我们看一个栗子

```javascript
/* 定义函数 myFunc */
function myFunc(theObject) {
  //实参 mycar 和形参 theObject 指向同一个对象。
  //也就是说，形参最终会接受为传入的实参，所以实际上形参不是真是存在，只是一个指向实参的标志
  theObject.brand = "Toyota"; //修改传入函数的对象的属性
}

/*
 * 定义变量 mycar;
 * 创建并初始化一个对象;
 * 将对象的引用赋值给变量 mycar
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

/* 将对象引用传给函数 */
myFunc(mycar); //这个时候，我们调用了这个函数，并且传入了这些参数给函数
//而我们传入的这个mycar是实参，最终指向mycar，而形参没有明确的指向

console.log(mycar.brand); //属性修改成功，将修改后的对象输出
```

这时候再让我们分析下一句话，**如果实参是一个包含原始值 (数字，字符串，布尔值) 的变量，则就算函数在内部改变了对应<arg>形参</arg>的值，返回后，该实参变量的值也不会改变**

或许同学们觉得很绕，但是我们分一下点，就知道它的意思是：如果传入给函数的<property>参数</property>为数字 Number,字符串 String,布尔 Boolean
，那么函数体内对于这个<property>参数</property>的任何修改都不会影响到外边的本体，而对象 Object 则会被修改

就相当于函数对于基元类型的数据只有读取权，没有修改权，但是对象是基元组合，所以能够直接修改

欸等等，Nomen，那我前几天看的某某代码里，函数能够对某某对象的金币进行改变，那金币不是一个基元吗

--但是，金币不是属于对象的一个属性吗，从始至终我们不是在修改一个对象吗

也就是说，函数对于对象的属性也有修改权

```javascript
//关键字函数使用关键字function声明
function myFunction(coin){//提供一个coin<arg>形参</arg>
   return coin+1;
   //返回coin+1的值
}

console.log(
  myFunction(15);//传入15
)//控制台得到返回为16，并打印

```

这是一个常见的基础函数

一共有 8 种 **常见** 函数

1. 关键字函数，使用 function 声明的基础函数
2. 箭头函数，使用`=>`声明的函数
3. 对象或类方法
4. 生成器函数，使用`*`声明
5. 异步函数，async 函数体
6. 异步箭头函数，使用 async 和箭头声明
7. 类 setter 和 getter，严格意义上也是函数
8. 标签函数，使用模板字符串调用

### 箭头函数

当我们对于一些短小的代码进行操作或临时处理一小段操作的时候，多些一些冗长的关键字函数在体外肯定占用内存又没啥更多的用处

这个时候，箭头函数就排上用场了

!!! quote ""

      箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

      ——来自 MDN 社区的注释

或许大家对此没什么太大的概念

```javascript
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
//让我们看看这一小段代码
//在这个代码中，我们发现了箭头函数的一个小特点，就是有一个突出的"=>"
//真是形象生动，所以才叫做箭头函数

function func(a) {}

//等价于

(a) => {};
```

这其中的(a)就是用于接收<property>参数</property>的<arg>形参</arg>，箭头指向其函数体

那么到现在为止，箭头函数已经很分明了，与普通函数结构基本相似： <property>参数</property>，箭头，函数体
!!! quote ""

      ```javascript
      (param1, param2, …, paramN) => { statements }
      (param1, param2, …, paramN) => expression
      ```
      前两者相当于：`(param1, param2, …, paramN) =>{ return expression; }`

      当只有一个<property>参数</property>时，圆括号是可选的：
      ```javascript
      (singleParam) => { statements }
      singleParam => { statements }
      //上面两种写法都是可以的
      ```

      没有<property>参数</property>的函数应该写成一对圆括号。
      ```javascript
      () => { statements }
      ```

      ——来自 MDN 社区的示例

敲黑板啦，这个结构可以简单描述为：

- 一个<property>参数</property>，不用括号
- 多个<property>参数</property>，加上括号
- 没有<property>参数</property>，保留括号
- 一条语句，不用装块
- 多条语句，要大括号
- 最后检查，有无箭头

嗯那么箭头函数就这么讲完啦

典型的栗子就是 forEach 遍历

```javascript
["ele1", "ele2"].forEach((element) => {
  console.log(element);
});
```

怎么样，你看到箭头函数了吗

### <method>方法</method>

在对象中，一个对象可以做到的事情或者功能被成为方法，方法其实是一个函数

!!! quote ""

      在物件导向程式设计中，方法（英语：Method；德语：Methode； 法语：Méthode）指的是类别（所谓的类别方法、静态方法或工厂方法）、或者是物件（所谓的实体方法）两者其中之一的一种子程式。如同程序化程式语言的程序，一个方法通常以一系列的语句所组成，并以之完成一个动作。其可以借由输入一组<property>参数</property>以制订所需的动作，且一部分的方法可能会有输出值（所谓的返回值）。方法的目的是提供一个机制，以存取（对于读和写）物件或类别的私有资料储存区

      来自维基百科 - https://zh.m.wikipedia.org/zh-hans/方法_(電腦科學)

在一个对象中绑定函数，称为这个对象的方法

```javascript
const myObj = {
  coin: 10,
  addCoin: function (coins) {
    return coins + this.coin;
  },
};
```

让我们看到这个栗子，我们给这个对象 Object 写了一个函数，那么这个函数将会成为这个对象的一个方法

我们可以使用`myObj.addCoin();`来调用

也就是说，我们能够通过对象属性的访问来访问方法，然后使用括号调用方法，并且能传入<property>参数</property>

同时这个函数内有一个 this，指向了其 **父级块** ， **myObj** ，我们将会在以后讲到这一点

在此注意的是，this 是一个特殊变量，指向一个父级单位，但这是 **可变的** ！

`this` 会随着环境变化改变指向，如果使用引用变量函数，那么函数的指向会变为 `window`/`global` 或在严格模式下变成 `undefined`

请大家注意这一点，这个历史遗留问题会导致一些奇怪的逻辑问题，所以请注意使用 `this` 的时候考虑指向问题。因此，在使用[箭头函数](#_4)箭头函数时要十分慎重。

#### 方法的重写

方法的重写也相当简单，我们只需要在一定的作用域内再次定义即可

```javascript
function func1() {
  return "func1";
}
function func1() {
  return "func1 differ";
}

console.log(func1()); // "func1 differ"
```

### 异步函数

`#!javascript function getData(){ return fetch(...) }`

这个函数是用于网络传输的（栗子仅供参考）

那么我们使用这个函数获取网络上的信息并且打印到控制台上

`#!javascript console.log( getData() ) //output: undefined`

好，这时候发生啥了，返回值跑丢了

不用担心，这是网络延迟，相比平时玩游戏的同学深有体会吧（doge

但是在网络延迟面前，代码没有等待网络传输完成就立刻输出
，就会输出 `undefined（抱歉，返回值找不到了。欸，其实在路上呢）`

这曾经让很多人为此十分苦恼，甚至提出先堵塞进程，让系统卡住一段时间然后看结果（对于用户来说很煎熬），后来 JavaScript 官方推出了异步一说

!!! quote ""

      异步编程技术使你的程序可以在执行一个可能长期运行的任务的同时继续对其他事件做出反应而不必等待任务完成。与此同时，你的程序也将在任务完成后显示结果

      ——来自 MDN 社区注释

```javascript
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
```

或许你平日里见不到计算机里 01 的计算，但是实际上，浏览器确实在一行一行运行你的代码

1. 声明了一个叫做 `name` 的字符串常量
2. 声明了另一个叫做 `greeting` 的字符串常量（并使用了 name 常量的值）
3. 将 `greeting` 常量输出到 `JavaScript` 控制台中。

这样做是很有必要的，因为每一行新的代码都是建立在前面代码的基础之上的

但是在网络连接中，对于网络状态计算机是心里没点数的，因为网络链接往往不需要使用进程一句一句运行

这也是异步出现的原因

异步函数有啥不同？其实就是多了个 `async` 的声明

`#!javascript async function(){}`

那有啥特殊？能用 `waiter`

如果是以前，我们需要异步，就要用到 `promise`

```javascript
const myPromise = new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});)
```

然后写一大段神奇的链式调用

`#!javascript myPromise .then(handleResolvedA, handleRejectedA) .then(handleResolvedB, handleRejectedB) .then(handleResolvedC, handleRejectedC);`

(一连串的回调或者嵌套回调，使代码可阅读性降低，这称之为“回调地狱”)

但是现在，我们能够在异步函数内使用 waiter

`#!javascript async function(){await someFunction()}`

是的，这会让函数内部停下来等待这段语句执行完毕

不过 `async function` 有个特性，就是它不会在调用它的环境中自动堵塞，所以使用其返回值会返回一个 <object>Promise</object>

很好解决，我们使用 `then` 就可以了，详见 `Promise` 或 [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
then 是 Promise 的一个方法，其会在 Promise 接收后返回并且执行回调函数

`#!javascript someFunc().then((result)=>{})`

那么你在函数内`return`的内容会跑到 `result` 上面

如果你在异步函数内使用异步函数，就可以直接用 `waiter` 异步函数

`#!javascript await asyncFunction()`

来得到你的返回值啦

篇幅限制，以后有时间专门开坑讲异步

> Alan: 别抱太大希望

### 标签函数

标签函数算是一个冷门知识了（据我所知，很多人都是用过但是不解其意，甚至认为这是一个内嵌保留语句）

`tag Function`

我单独拎出来讲是因为这个东西貌似很费解，但是其实原理很简单

提到标签函数，我们就需要讲一下模板字符串

这个玩意啊其实就是我们平日里常见的 “\`”反引号

> 模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。它们在 ES2015 规范的先前版本中被称为“模板字符串”。
>
> 引用自 MDN 社区 - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals

```javascript

// 普通函数
greet(["I'm ", ". I'm ", " years old."], name, age)

//等价

// tag 函数
greet`I'm ${name}. I'm ${age} years old.`、

```

tag 函数从模板传递字符串文本数组以及变量值列表

让我们看一个更高级的栗子

```javascript

function cook(strs, ...substs) {
  return substs.reduce(
    (prev,cur,i) => prev+cur+strs[i+1],
    strs[0]
  );
}

function repeat(times) {
  return function (...args) {
    return cook(...args).repeat(times);
  };
}

// 运行结果

> repeat(3)`abc`
> 'abcabcabc'
> repeat(3)`abc${3+1}`
> 'abc4abc4abc4'



```

[来自知乎](https://zhuanlan.zhihu.com/p/31687266)

没错，我们正常函数返回一个标签函数，然后调用标签函数

其实很好理解，正常函数返回了一个标签函数，而我们用模板字符串调用返回给我们的标签函数

```javascript

// 实现一个 three 函数
const three = (...args1) => (...args2) => (...args3) =>
cook(args1) + cook(args2) + cook(args3);

// 我们可以这么调用

> three` hello``world``! `
> 'helloworld!'

```

这这其实是三个标签函数的嵌套，上一层函数返回下一层函数，直到底部，这和上面的函数只不过是换汤不换药

## 闭包

谈到闭包，我们就得说到一点，js 的作用域

或许很好理解，只要是在大括号里边的能访问以上所有的代码块

但是大括号外边的不能往内访问

举个栗子

```javascript
const c = 12;
{
  const b = 10;
  console.log(c); //访问外部的 c
}
console.log(b); //对于次级代码块内的内容无法访问
```

不过如果不是用 const var let 关键字就会创建全局变量，在之后的代码中都可以访问以及修改这个变量

啊但是，抛一个问题给你们:`怎么访问函数内部的变量？`

让我们稍微思考一下，内部的内部能访问内部，但是我们怎么拿到内部的内部？返回！

我们将函数内部的函数作为返回值输出，那么我们调用这个内部的内部函数就可以访问内部函数了

或许看到这里已经晕了，但是我们看一个栗子

```javascript
function f1() {
  var n = 999;
  function f2() {
    alert(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

我们首先在 f1 内部返回一个能够读取 f1 内容的函数 f2，然后调用这个 f2 来获取 f1 的内容

**这就是闭包**

> 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁
>
> 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

如果我们在函数内部做一个计数变量，然用闭包修改计数器，这个时候我们后来再次访问，我们会发现这个计数器会一直保留
而不会因为垃圾清理机制将这个变量清理掉

原因就在于 f1 是 f2 的父函数，而 f2 被赋给了一个全局变量，这导致 f2 始终在内存中，而 f2 的存在依赖于 f1，因此 f1 也始终在内存中，不会在调用结束后，被垃圾回收机制回收

不过虽然有着这一个特性，也会导致垃圾太多了，所以在某些大量调用的场景中尽量不要使用闭包

到这里，闭包已经讲完了

## 补充：Function 内嵌方法

> 文章仅供参考，最终更新日期为 4/29/2022，不代表往后 js 标准，请参阅最新的 JavaScript 官方文档

`apply()` 方法调用一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的<property>参数</property>。

`bind()` 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个<property>参数</property>，而其余<property>参数</property>将作为新函数的<property>参数</property>，供调用时使用。

`call()` 方法使用一个指定的 this 值和单独给出的一个或多个<property>参数</property>来调用一个函数。

`toString()` 方法返回一个表示当前函数源代码的字符串。
