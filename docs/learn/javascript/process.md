??? note "本节内容"
    1. 熟悉流程控制语句的使用
    2. 编写一个简单的成绩查询系统
   
!!! question "前情提要"
    老师听说了小明学习了编程，想让他帮自己编写一个成绩查询系统并实现以下功能：

    1. 通过名字查询成绩
    2. 统计不及格人数
    3. 统计及格率

    老师为小明提供了全班同学的成绩信息，由字典的形式储存。

    !!! note ""
        ```javascript linenums="1"
        let students = {
            "Xiao ming": 90,
            "Li hua": 80,
            "Song jiang": 70,
            "Logic": 100,
            "Yun tianming": 80,
            "Cheng xin": 30,
            "Li bai": 100,
            "Yule": 40,
            "Ding yi": 100,
            "Hua hua": 60,
        }
        ```
    
    老师要求小明编写四个函数：

    !!! note ""
        `getMarkByName(name): number` 通过名字获取成绩，返回一个整数。

        `getFaild(): string[]` 统计不及格人数，返回所有不合格的人组成的列表。

        `getPasses(): number` 获取及格率，返回一个小数。

    小明很苦恼，因为他才刚刚学完令人头晕的`数据,计算和变量`。你能帮助他吗？

!!! tip ""
    为了便于理解，这篇文档中的代码会同时提供`javascript`和`python`的对照版。

    python并不能在box3中运行。

## if语句

小明很快写好了第一个函数：

=== "Javascript"
    ```javascript linenums="1"
    function getMarkByName(name){
        return students[name];
    }
    ```
=== "Python"
    ```python linenums="1"
    def getMarkByName(name: str) -> int:
        return students[name];
    ```
但老师邪魅一笑，访问了一个不存在的人的成绩：
```javascript linenums="1"
getMarkByName("Marx");
```
小明惊讶地发现，程序没有输出[^1]。

怎么办呢？

这时候，就需要条件判断语句登场了：
=== "Javascript"
    ```javascript linenums="1"
    function getMarkByName(name){
        if(students[name] != undefined){
            return students[name];
        }else{
            return -1;
        }
    }
    ```
=== "Python"
    ```python linenums="1"
    def getMarkByName(name: str) -> int:
        if name in students:
            return students[name]
        else:
            return -1
    ```
!!! note "if()"
    if()会判断括号里的条件是否成立（成立为`true`，否则为`false`）

    如果成立，会执行大括号里的语句

    如果不成立，会执行else{}里的语句。

    !!! example "例子"
        === "Javascript"
            ```javascript linenums="1"
            if(true){
                console.log('成功');
            }else{
                console.log('失败');
            }
            ```
        === "Python"
            ```python linenums="1"
            if True:
                print('成功')
            else
                print('失败')
            ```
        上面的代码会输出`成功`.
        === "Javascript"
            ```javascript linenums="1"
            if(1+1==2){
                console.log('正确');
            }
            console.log('结束');
            ```
        === "Python"
            ```python linenums="1"
            if 1+1==2:
                print('正确')
            print('结束')
            ```
        上面的代码会输出`正确`和`结束`.
!!! success "好耶"
    我们完成了任务的三分之一！

## for语句
小明很困惑，怎么才能得到所有不及格的人数呢？

小明请教了编程高手shyfcka，得到了好多份代码：
=== "Javascript1"
    ```javascript linenums="1" title="解决方案1"
    function getFaild(){
        let studentsList = Object.keys(students);
        let faild = [];
        for(let i=0; i<studentsList.length; i++){
            if(students[studentsList[i]] < 60){
                faild.push(studentsList[i]);
            }
        }
        return faild;
    }
    ```
=== "Python1"
    ```python linenums="1" title="解决方案1"
    def getFaild() -> list[str]:
        studentsList = list(students.keys());
        faild = [];
        for i in range(len(studentsList)):
            if students[studentsList[i]] < 60:
                faild.append(studentsList[i])
        return faild
    ```

=== "Javascript2"
    ```javascript linenums="1" title="解决方案2"
    function getFaild(){
        let faild = [];
        for(item in students){
            if(students[item] < 60){
                faild.push(item);
            }
        }
        return faild;
    }
    ```
=== "Python2"
    ```python linenums="1" title="解决方案2"
    def getFaild() -> list[str]:
        faild = [];
        for item in students.keys():
            if students[item] < 60:
                faild.append(item)
        return faild
    ```
!!! note "for(;;)"
    摘自 [循环与迭代 - Javascript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for_%E8%AF%AD%E5%8F%A5)

    循环提供了一种快速和简单的方式去做一些重复的事。JavaScript 入门的这个章节会介绍在 JavaScript 中存在哪些不同的迭代语句。

    你可以把循环想成一种计算机化的游戏，告诉某人在一个方向上走 X 步，然后在另一个方向上走 Y 步；例如，“向东走 5 步”可以用一个循环来这样表达：

    ```javascript
    var step;
    for (step = 0; step < 5; step++) {
        // 运行5次，step分别为0, 1, 2, 3, 4.
        console.log('Walking east one step');
    }
    ```
    循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为 0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其它的循环用起来更简单。

    一个 for 循环会一直重复执行，直到指定的循环条件为 false。JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

    ```javascript
    for ([initialExpression]; [condition]; [incrementExpression])
    ```
    当一个 for 循环执行的时候，会发生以下过程：

    1. 如果有初始化表达式 initialExpression，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。

    2. 计算 condition 表达式的值。如果 condition 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 condition 表达式整个都被省略掉了，condition 的值会被认为是 true。

    3. 循环中的 statement 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。

    4. 如果有更新表达式 incrementExpression，执行更新表达式。

    5. 回到步骤 2。

    ## for...in

    for...in 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。
    ```
    for (variable in object) {
        ...
    }
    ```

!!! tip "小任务"
    独立实现第三个函数的功能。
    !!! info "动起来"
        只是看代码而不写是永远学不会的！
    ??? abstract "参考代码"
        === "Javascript1"
            ```javascript linenums="1" title="解决方案1"
            function getPasses(){
                let count = 0;
                for(i in students){
                    if(students[i] > 60){
                        count++;
                    }
                }
                return count/Object.keys(students).length;
            }
            ```
[^1]: 应为undefined，但是在box3里不会输出。
