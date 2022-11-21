# <def>Box3Bounds3</def>

[查阅官方文档](https://docs.box3.codemao.cn/box3bounds3.html){.md-button}  
<def>Box3Bounds3</def> 是用于指定世界中一个立方体空间区域的一个<class>类</class>

## 构造函数
new <def>Box3Bounds3</def>(lo: <def>Box3Vector3</def>, hi: <def>Box3Vector3</def>): <def>Box3Bounds3</def>  
新建一个区域

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| `lo` | <def>Box3Vector3</def> | 区域的低处顶点 |
| `hi` | <def>Box3Vector3</def> | 区域的高处顶点 |

!!! warning "关于`lo`与`hi`参数的说明"
    在编写代码的时候，要保证`lo`的每个值是比`hi`小的（``lo.x < hi.x && lo.y < hi.y && lo.z < hi.z``），否则会发生 ~~匪夷所思的~~ 问题  
    如果不能保证，可以使用<def>Box3Vector3</def>的[<method>min</method>](./Box3Vector3.md#_2)和[<method>max</method>](./Box3Vector3.md#_2)方法

!!! warning "警告"

    <def>Box3Bounds3</def>不能像<def>Box3Vector3</def>一样定义时必须有两个参数，不然你会收到一条：``TypeError: Cannot read property 'toString' of undefined``

## 方法

!!! note "提示"

    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<method>intersect</method> (b: <def>Box3Bounds3</def>): <def>Box3Bounds3</def>
: 计算与此包围盒相交的部分
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersect(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
    ```

<method>contains</method> (b: <def>Box3Vector3</def>): <def>boolean</def>
: 判断一个<def>Box3Vector3</def>是否在这个<def>Box3Bounds3</def>里（边界也算）
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).contains(new Box3Vector3(2, 2, 2)) //<~ true
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).contains(new Box3Vector3(-2, -2, -2)) //<~ false
    ```

<method>containsBounds</method> (b: <def>Box3Vector3</def>): <def>boolean</def>
: 检测一个<def>Box3Bounds3</def>是否完全在<def>Box3Bounds3</def>里（边界也算）
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ false
    new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5))) //<~ false
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(5, 5, 5))) // <~ true
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 0), new Box3Vector3(5, 7, 5)))
    ```

<method>intersects</method> (b: <def>Box3Bounds3</def>): <def>boolean</def>
: 判断一个<def>Box3Bounds3</def>是否与这个<def>Box3Bounds3</def>相交（挨着不算）
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ true
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(5, 5, 5), new Box3Vector3(7, 7, 7))) //<~ false
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(4.99999, 4.99999, 4.99999), new Box3Vector3(7, 7, 7))) //<~ true
    ```

<method>set</method> (lox: <def>number</def>, loy: <def>number</def>, loz: <def>number</def>, hix: <def>number</def>, hiy: <def>number</def>, hiz: <def>number</def>): <def>boolean</def>
: 设置这个<def>Box3Bounds3</def>
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(0, 0, 0)).set(1, 1, 4, 5, 1, 4) //<~ { lo:{ x:1, y:1, z:4 }, hi:{ x:5, y:1, z:4 } }
    ```

<method>copy</method> (b: <def>Box3Bounds3</def>): <def>Box3Bounds3</def>
: 把一个<def>Box3Bounds3</def>的值复制到这个<def>Box3Bounds3</def>上

<method>toString</method> (): <def>string</def>
: 将这个<def>Box3Bounds3</def>转换成字符串

<staticMethod>fromPoints</staticMethod> (...<def>Box3Vector3</def>): <def>Box3Bounds3</def>
: 根据坐标点生成一个<def>Box3Bounds3</def>，使每个点都在这个<def>Box3Bounds3</def>内  
??? example "示例"
    ```javascript
    new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersect(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
    ```