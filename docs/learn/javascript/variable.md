??? note "本节内容"

    熟悉变量的概念

    掌握变量的使用

!!! note "变量"
    正如其名，变量是可以变化的量。

    假设有一个盒子，盒子里面可以放各种各样的数据，比如数字、字符串……
    给这个盒子一个名字，它便是变量了。

    !!! note "变量的定义"
        我们需要定义一个变量，用于存放小明的成绩：
        ```
        let 小明的成绩;
        ```
        ??? tip "更多变量的定义方式"
            可以使用`var`关键字定义变量（不建议）
            ```
            var 小明的成绩;
            ```
        然后就可以存储小明的成绩了：
        ```
        小明的成绩 = 90;
        ```

    !!! note "变量的使用"
        定义变量之后，我们可以往里面存储值：
        ```javascript
        let markXiaoming;
        markXiaoming = 90;
        ```
        或
        ```javascript
        let markXiaoming = 90;
        ```
        ??? tip "变量名规范"
            一般来说，使用英文命名变量。
            其一可以增加代码美观，其二便于我们的输入。

            另外，变量名不能以数字开头。

            如果有多个单词，一般使用驼峰命名法。
        你可以在任意地方使用变量：
        ```javascript
        let markXiaoming = 90;
        console.log(markXiaoming);
        ```
        ```javascript
        let markXiaoming = 90, markLihua = 70;
        console.log("小明比李华高", markXiaoming-markLihua, '分');
        ```

