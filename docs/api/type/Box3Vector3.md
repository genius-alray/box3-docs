# <def>Box3Vector3</def>

[官方文档（非常不全）](https://docs.box3.codemao.cn/box3vector3.html)  
<def>Box3Vector3</def>
: （三维向量）是Box3中一个非常常见的`类`
## 构造函数
```typescript
new Box3Vector3(x: number, y: number, z: number)
```
??? example "示例"
```javascript
new Box3Vector3(0, 0, 0)
new Box3Vector3(64, 64, 64)
new Box3Vector3(127.5, 64, 127.5)
new Box3Vector3(11, 45, 14)
new Box3Vector3(19, 19, 810)
```

## 方法

!!! note "提示"

    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

??? question "如何读\[参数和返回值\]的内容"

    在这篇文档里，所有的\[参数和返回值\]的内容全部是`typescript`代码（~~懒得做表格~~），对不认识`typescript`的人来说难以理解  
    不过，这篇文档的`typescript`代码还是非常容易理解的  
    我们以<method>set</method>函数为例：
    ```typescript
    set(x: number, y: number, z: number): <def>Box3Vector3</def>
    ```
    其中，括号前面的是函数名，括号里面的内容是参数（英文逗号分隔），括号后面的是返回类型  
    例如，“set”是函数名，“x: number”是参数，Box3Vector3是返回类型  
    在参数中，“:”前面是参数名，后面是类型  
    例如：
    ```typescript
    x: number
    ```
    其中“x”是参数，“number”是类型  
    回到开始，`set`函数的参数和返回值就是：  
    输入：

    | 参数名 | 类型 |
    | :- | :- |
    | x | <def>number</def> |
    | y | <def>number</def> |
    | z | <def>number</def> |

    输出：
    <def>Box3Vector3</def>类型

    （一个小知识：官方文档的类型也可以这么读）

<method>set</method> (x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Vector3</def>

: 设置<def>Box3Vector3</def>的值  
??? example "示例"
    ```javascript
    new Box3Vector3(0, 0, 0).set(5, 5, 0) //<~ { x: 5, y: 5, z: 0 }
    new Box3Vector3(1, 2, 3).set(4, 5, 6) //<~ { x: 4, y: 5, z: 6 }
    new Box3Vector3().set(5, 5, 5) //<~ { x: 5, y: 5, z: 5 }
    ```
<method>copy</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 把另一个<def>Box3Vector3</def>的值复制到这个<def>Box3Vector3</def>中  
??? example "示例"
    ```javascript
    new Box3Vector3(0, 0, 0).copy(new Box3Vector3(5, 0, 0)) //<~ { x: 5, y: 0, z: 0 }
    new Box3Vector3().copy(new Box3Vector3(1, 0, 0)) //<~ { x: 1, y: 0, z: 0 }
    ```
<method>add</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>加上另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法不会改变原来的<def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(1, 1, 1).add(new Box3Vector3(5, 5, 5)) //<~ { x: 6, y: 6, z: 6 }
    ```
<method>sub</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>减去另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法不会改变原来的<def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
    ```
<method>mul</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>乘以另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法不会改变原来的<def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(5, 5, 5).mul(new Box3Vector3(5, 5, 5)) //<~ { x: 25, y: 25, z: 25 }
    ```
<method>div</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>除以另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法不会改变原来的<def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(25, 25, 25).mul(new Box3Vector3(5, 5, 5)) //<~ { x: 5, y: 5, z: 5 }
    ```
!!! warning "上面四个函数的易错点"  
    上面四个函数要注意，填写的不是三个<def>number</def>类型的参数，而是一个<def>Box3Vector3</def>类型的参数  
    例如，应该这样写：
    ```javascript
    new Box3Vector3(6, 6, 6).add(new Box3Vector3(1, 1, 1))
    ```  
    而不是这样：
    ```javascript
    new Box3Vector3(6, 6, 6).add(1, 1, 1)
    ```
    下面四个函数同理

!!! info "下面四个函数与上面四个函数相似"
<method>addEq</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>加上另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法会改变原来的<def>Box3Vector3</def>

<method>subEq</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>减去另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法会改变原来的<def>Box3Vector3</def>

<method>mulEq</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>乘以另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法会改变原来的<def>Box3Vector3</def>

<method>divEq</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 将一个<def>Box3Vector3</def>除以另一个<def>Box3Vector3</def>，返回结果  
!!! warning "警告"

    此方法会改变原来的<def>Box3Vector3</def>

<method>dot</method> (v: <def>Box3Vector3</def>): <def>number</def>

: 将这个<def>Box3Vector3</def>与另一个<def>Box3Vector3</def>相乘，返回结果的三个方向的值的和
??? example "示例"
    ```javascript
    new Box3Vector3(1, 1, 1).dot(new Box3Vector3(5, 5, 5)) //<~ 15
    ```
<method>cross</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(1, 1, 1).cross(new Box3Vector3(5, 5, 5)) //<~ { x: 0, y: 0, z: 0 }
    new Box3Vector3(1, 1, 1).cross(new Box3Vector3(1, 1, 1)) //<~ { x: 0, y: 0, z: 0 }
    ```
<method>scale</method> (n: <def>number</def>): <def>Box3Vector3</def>

: 缩放一个<def>Box3Vector3</def>
!!! warning "警告"

    此方法不会改变原来的<def>Box3Vector3</def>

??? example "示例"
    ```javascript
    new Box3Vector3(1, 1, 1).scale(5) //<~ {x: 5, y: 5, z: 5 }
    ```
<method>clone</method> (): <def>Box3Vector3</def>

: 复制这个<def>Box3Vector3</def>
??? example "示例"
    ```javascript
    new Box3Vector3(5, 5, 5).clone() //<~ { x: 5, y: 5, z: 5 }
    ```
<method>lerp</method> (v: <def>Box3Vector3</def>, n: <def>number</def>): <def>Box3Vector3</def>

: 插值函数，类似于取平均值  
不同的是取平均值最后是除以2（乘0.5），这个可以自定义（乘1就是求和了）
??? example "示例"
    ```javascript
    new Box3Vector3(0, 0, 0).lerp(new Box3Vector3(1, 1, 1), 0.5) //<~ { x: 0.5, y: 0.5, z: 0.5 }
    ```
<method>mag</method> (): <def>number</def>

: 求这个<def>Box3Vector3</def>的大小
??? example "示例"
    ```javascript
    new Box3Vector3(1, 0, 0).mag() //<~ 1
    new Box3Vector3(3, 4, 5).mag() //<~ 7.0710678118654755
    new Box3Vector3(11, 45, 14).mag() //<~ 48.394214530251446
    ```
<method>sqrMag</method> (): <def>number</def>

: 似乎是求这个<def>Box3Vector3</def>大小的平方（比你用mag再用<function>pow</function>函数快）  
??? example "示例"
```javascript
new Box3Vector3(1, 0, 0).sqrMag() //<~ 1 //岛民小小的吐槽一句：这和mag的示例1结果一样，是因为1的平方还是1（）
new Box3Vector3(3, 4, 5).sqrMag() //<~ 50
new Box3Vector3(11, 45, 14).sqrMag() //<~ 2342
```
<method>towards</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 返回一个<def>Box3Vector3</def>面向另一个<def>Box3Vector3</def>的值  
??? example "示例"
```javascript
new Box3Vector3(6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
new Box3Vector3(-6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: -7, y: 5, z: 5 }
```
<method>distance</method> (v: <def>Box3Vector3</def>): <def>number</def>

: 返回一个<def>Box3Vector3</def>到另一个<def>Box3Vector3</def>的距离
??? example "示例"
```javascript
new Box3Vector3(6, 0, 0).distance(new Box3Vector3(1, 0, 0)) //<~ 5
new Box3Vector3(6, 6, 6).distance(new Box3Vector3(1, 1, 1)) //<~ 8.660254037844387
```
<method>normalize</method> (): Box3Vector3

: ???+ quote "以下内容来自网络"
      归一化函数

??? example "示例"
```javascript
new Box3Vector3(6, 0, 0).normalize() //<~ { x: 1, y: 0, z: 0 }
new Box3Vector3(11, 45, 14).normalize() //<~ { x:0.17032272243312657, y:0.6967747735900632, z:0.6967747735900632 }
```
<method>angle</method> (v: <def>Box3Vector3</def>): <def>number</def>

: 求这个<def>Box3Vector3</def>与另一个<def>Box3Vector3</def>的弧度
!!! warning "是弧度，不是角度！"
??? quote "弧度"
    根据定义，一周的弧度数为$2\pi r / r = 2\pi$， $360\deg = 2\pi \text{弧度}$ ，因此， $1$ 弧度约为 $57.3\deg$ ，即 $57\deg 17'44.806''$，$1\deg$ 为 $\pi/180$ 弧度，近似值为 $0.01745$ 弧度，周角为 $2\pi$ 弧度，平角（即 $180\deg$ 角）为 $\pi \text{ 弧度 }$ ，直角为 $\cfrac{\pi}{2}$ 弧度。
    在具体计算中，角度以弧度给出时，通常不写弧度单位，直接写值。最典型的例子是三角函数，如 $\sin 8 \pi$、$\tan (\cfrac{3\pi}{2})$。
    在初中数学中，我们学过圆弧长公式：
    弧长 $= \cfrac{n\pi r}{180}$，在这里 $n$ 就是角度数，即圆心角$n$所对应的弧长。
    但如果我们利用弧度的话，以上的式子将会变得更简单：（注意，弧度有正负之分）
    $l = |α| r$，即 $α$ 的大小与半径之积。
    同样，我们可以简化扇形面积公式：
    $S= \cfrac{|α| r^2}{2}$ （二分之一倍的 $α$ 角的大小，与半径的平方之积，从中我们可以看出，当 $|α|=2\pi$ ，即周角时，公式变成了 $S=\pi r^2$，圆面积的公式！）

    ——资料来源于[百度百科](https://baike.baidu.com/item/%E5%BC%A7%E5%BA%A6/1533188?fr=aladdin)

??? example "示例"
```javascript
new Box3Vector3(6, 0, 0).angle(new Box3Vector3(-6, 0, 0)) //<~ 3.141592653589793
new Box3Vector3(1, 1, 0).angle(new Box3Vector3(1, 0, 0)) //<~ 0.7853981633974484 //约为0.25 * Math.PI
```
<method>max</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 对两个<def>Box3Vector3</def>的每个方向的坐标值，取每个方向的最大值  
??? example "示例"
```javascript
new Box3Vector3(1, 2, 1).max(new Box3Vector3(2, 1, 2)) //<~ { x:2, y:2, z:2 }
```
<method>min</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>

: 对两个<def>Box3Vector3</def>的每个方向的坐标值，取每个方向的最小值  
??? example "示例"
```javascript
new Box3Vector3(1, 2, 1).min(new Box3Vector3(2, 1, 2)) //<~ { x:1, y:1, z:1 }
```
<method>exactEquals</method> (v: <def>Box3Vector3</def>): <def>Boolean</def>

: 判断两个<def>Box3Vector3</def>是否相等
??? example "示例"
```javascript
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(4, 5, 6)) //<~ false
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000001, 2, 3)) //<~ false
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ false
```
<method>equals</method> (v: <def>Box3Vector3</def>): <def>Boolean</def>

: 判断两个<def>Box3Vector3</def>的差值是否小于一个数（暂时固定为0.000001）
!!! warning "警告"

    此处与官方API不符，因为官方API不是最新

??? example "示例"
```javascript
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(4, 5, 6)) //<~ false
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000001, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ true
```
<method>toString</method> (): <def>String</def>

: 将这个<def>Box3Vector3</def>转换成字符串
??? example "示例"
```javascript
JSON.stringify(new Box3Vector3(114514, 1919810, 31415926535).toString()) //<~ "{ x:114514, y:1919810, z:31415926535 }" //这里加个JSON.stringify的含义是方便表示类型
```
`static`<method> fromPolar</method> (mag: <def>number</def>, phi: <def>number</def>, theta: <def>number</def>): <def>Box3Vector3</def>
: 似乎是用 ~~不同寻常~~ 的方法造一个<def>Box3Vector3</def>（？）
??? example "示例"
```javascript
Box3Vector3.fromPolar(114514, 1919810, 31415926535) //<~ { x:-89551.55210093308, y:71368.36064229338, z:729.9394121558898 } //瞎写的（）
```