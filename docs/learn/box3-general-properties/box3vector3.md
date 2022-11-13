# Box3Vector3
!!! info "文档未完成"

    此文档未完成，欢迎补充

[官方文档（非常不全）](https://docs.box3.codemao.cn/box3vector3.html)  
`Box3Vector3`（三维向量）是Box3中一个非常常见的`类`
## 构造函数
```typescript
new Box3Vector3(x: number, y: number, z: number)
```
#### 示例
```javascript
new Box3Vector3(0, 0, 0)
new Box3Vector3(64, 64, 64)
new Box3Vector3(127.5, 64, 127.5)
new Box3Vector3(11, 45, 14)
new Box3Vector3(19, 19, 810)
```

## 方法

!!! warning "下面内容\[实现\]部分均仅供参考，不能直接放到JavaScript里使用！"

    下面所讲方法中[实现]是参考Box3源代码进行编写的伪代码，相对原版JavaScript更加简洁，但不能直接在JavaScript使用  
    下面的所有[实现]中`this`均为一个`Box3Vector3`

!!! note "提示"

    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

???+ question "如何读\[参数和返回值\]的内容"

    在这篇文档里，所有的\[参数和返回值\]的内容全部是`typescript`代码（~~懒得做表格~~），对不认识`typescript`的人来说难以理解  
    不过，这篇文档的`typescript`代码还是非常容易理解的  
    我们以`set`函数为例：
    ```typescript
    set(x: number, y: number, z: number): Box3Vector3
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
    | x | `number`类型 |
    | y | `number`类型 |
    | z | `number`类型 |

    输出：
    `Box3Vector3`类型

    （一个小知识：官方文档的类型也可以这么读）

### set
设置`Box3Vector3`的值  
#### 参数和返回值
```typescript
set(x: number, y: number, z: number): Box3Vector3
```
#### 示例
```javascript
new Box3Vector3(0, 0, 0).set(5, 5, 0) //<~ new Box3Vector3(5, 5, 0)
new Box3Vector3(1, 2, 3).set(4, 5, 6) //<~ new Box3Vector3(4, 5, 6)
new Box3Vector3().set(5, 5, 5) //<~ new Box3Vector3(5, 5, 5)
```
#### 实现
```javascript
set: x, y, z =>
    this.x = +x;
    this.y = +y;
    this.z = +z;
    return this;
```
### copy
把另一个`Box3Vector3`的值复制到这个`Box3Vector3`中  
#### 参数和返回值
```typescript
copy(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
new Box3Vector3(0, 0, 0).copy(new Box3Vector3(5, 0, 0)) //<~ new Box3Vector3(5, 0, 0)
new Box3Vector3().copy(new Box3Vector3(1, 0, 0)) //<~ new Box3Vector3(1, 0, 0)
```
#### 实现
```javascript
copy: v => 
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
```
### add
将一个`Box3Vector3`加上另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
add(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法不会改变原来的`Box3Vector3`

#### 示例
```javascript
new Box3Vector3(1, 1, 1).add(new Box3Vector3(5, 5, 5)) //<~ new Box3Vector3(6, 6, 6)
```
#### 实现
```javascript
add: v => 
    return new Box3Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
```
### sub
将一个`Box3Vector3`减去另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
sub(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法不会改变原来的`Box3Vector3`

#### 示例
```javascript
new Box3Vector3(6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ new Box3Vector3(5, 5, 5)
```
#### 实现
```javascript
sub: v =>
    return new Box3Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
```
### mul
将一个`Box3Vector3`乘以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
mul(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法不会改变原来的`Box3Vector3`

#### 示例
```javascript
new Box3Vector3(5, 5, 5).mul(new Box3Vector3(5, 5, 5)) //<~ new Box3Vector3(25, 25, 25)
```
#### 实现
```javascript
mul: v => 
    return new Box3Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
```
### div
将一个`Box3Vector3`除以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
div(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法不会改变原来的`Box3Vector3`

#### 示例
```javascript
new Box3Vector3(25, 25, 25).mul(new Box3Vector3(5, 5, 5)) //<~ new Box3Vector3(5, 5, 5)
```
#### 实现
```javascript
div: v => 
    return new Box3Vector3(v.x === 0 ? 0 : this.x / v.x, v.y === 0 ? 0 : this.y / v.y, v.z === 0 ? 0 : this.z / v.z);
```
!!! warning "上面四个函数的易错点"  
    上面四个函数要注意，填写的不是三个`number`类型的参数，而是一个`Box3Vector3`类型的参数  
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
### addEq
将一个`Box3Vector3`加上另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
addEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

#### 实现
```javascript
addEq: v =>
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
```
### subEq
将一个`Box3Vector3`减去另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
subEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

#### 实现
```javascript
subEq v =>
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
```
### mulEq
将一个`Box3Vector3`乘以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
mulEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

#### 实现
```javascript
mulEq: v =>
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
```
### divEq
将一个`Box3Vector3`除以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
divEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

#### 实现
```javascript
divEq: v =>
    this.x = v.x === 0 ? 0 : this.x / v.x;
    this.y = v.y === 0 ? 0 : this.y / v.y;
    this.z = v.z === 0 ? 0 : this.z / v.z;
    return this;
```
### dot
将这个`Box3Vector3`与另一个`Box3Vector3`相乘，返回结果的三个方向的值的和
#### 参数和返回值
```typescript
dot(v: Box3Vector3): number
```
#### 示例
```javascript
new Box3Vector3(1, 1, 1).dot(new Box3Vector3(5, 5, 5)) //<~ 15
```
#### 实现
```javascript
dot v =>
    return this.x * v.x + this.y * v.y + this.z * v.z;
```
### cross
#### 参数和返回值
```typescript
cross(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
new Box3Vector3(1, 1, 1).cross(new Box3Vector3(5, 5, 5)) //<~ new Box3Vector3(0, 0, 0)
new Box3Vector3(1, 1, 1).cross(new Box3Vector3(1, 1, 1)) //<~ new Box3Vector3(0, 0, 0)
```
#### 实现
```javascript
cross: v =>
    return new Box3Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
```
### scale
缩放一个`Box3Vector3`
#### 参数和返回值
```typescript
scale(n: number): Box3Vector3
```
!!! warning "警告"

    此方法不会改变原来的`Box3Vector3`

#### 示例
```javascript
new Box3Vector3(1, 1, 1).scale(5) //<~ new Box3Vector3(5, 5, 5)
```
#### 实现
```javascript
scale: n =>
    return new Box3Vector3(this.x * n, this.y * n, this.z * n);
```
### clone
复制这个`Box3Vector3`
#### 参数和返回值
```typescript
clone(): Box3Vector3
```
#### 示例
```javascript
new Box3Vector3(5, 5, 5).clone() //<~ new Box3Vector3(5, 5, 5)
```
#### 实现
```javascript
clone =>
    return new Box3Vector3(this.x, this.y, this.z);
```
### lerp
插值函数，类似于取平均值  
不同的是取平均值最后是除以2（乘0.5），这个可以自定义（乘1就是求和了）
#### 参数和返回值
```typescript
lerp(v: Box3Vector3, n: number): Box3Vector3
```
#### 示例
```javascript
new Box3Vector3(0, 0, 0).lerp()
```
#### 实现
```javascript
lerp: v, n =>
    return new Box3Vector3(this.x + (v.x - this.x) * n, this.y + (v.y - this.y) * n, this.z + (v.z - this.z) * n);

```
### mag
求这个`Box3Vector3`的大小
#### 参数和返回值
```typescript
mag(): number
```
#### 示例
```javascript
```
#### 实现
```javascript
mag =>
    return sqrt(this.dot(this));
```
### sqrMag
似乎是求这个`Box3Vector3`大小的平方（比你用mag再用平方函数快）  
本质上，mag是调用了这个函数然后把结果平方根
#### 参数和返回值
```typescript
sqrMag(): number
```
#### 示例
```javascript
```
#### 实现
```javascript
sqrMag =>
    return this.dot(this);
```
### towards
返回一个`Box3Vector3`面向另一个`Box3Vector3`的值  
（其实就是反着的sub）
#### 参数和返回值
```typescript
towards(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
```
#### 实现
```javascript
towards: v =>
    return v.sub(this);
```
### distance
返回一个`Box3Vector3`到另一个`Box3Vector3`的距离
（其实就是sub+mag）
#### 参数和返回值
```typescript
distance(v: Box3Vector3): number
```
#### 示例
```javascript
```
#### 实现
```javascript
distance: v =>
    return this.sub(v).mag();
```
### normalize
???+ quote "以下内容来自网络"
    归一化函数

#### 参数和返回值
```typescript
normalize(): Box3Vector3
```
#### 示例
```javascript
```
#### 实现
```javascript
normalize =>
    const x = this.x;
    const y = this.y;
    const z = this.y;
    let r = x * x + y * y + z * z;
    if (r > 0) =>
        r = 1 / sqrt(r);
    return new Box3Vector3(x * r, y * r, z * r);
```
### angle
求这个`Box3Vector3`的角度
#### 参数和返回值
```typescript
angle(v: Box3Vector3): number
```
#### 示例
```javascript
```
#### 实现
```javascript
angle: v =>
    let r = v.sqrMag() * this.sqrMag();
    if (r > 0) 
        r = 1 / sqrt(r);
    const cos = r * this.dot(v);
    if (1 < cos) =>
        return 0;
    else if (cos < -1) =>
        return PI;
    else =>
        return acos(cos);
```
### max
对两个`Box3Vector3`的每个方向的坐标值，取每个方向的最大值（看不懂请看\[实现\]）  
#### 参数和返回值
```typescript
max(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
```
#### 实现
```javascript
max: v =>
    return new Box3Vector3(max(this.x, v.x), max(this.y, v.y), max(this.z, v.z));
```
### min
对两个`Box3Vector3`的每个方向的坐标值，取每个方向的最小值（看不懂请看\[实现\]）  
#### 参数和返回值
```typescript
min(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
```
#### 实现
```javascript
min: v =>
    return new Box3Vector3(min(this.x, v.x), min(this.y, v.y), min(this.z, v.z));
```
### exactEquals
判断两个`Box3Vector3`是否相等
#### 参数和返回值
```typescript
exactEquals(v: Box3Vector3): boolean
```
#### 示例
```javascript
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(4, 5, 6)) //<~ false
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000001, 2, 3)) //<~ false
new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ false
```
#### 实现
```javascript
exactEquals: v =>
    return this.x === v.x && this.y === v.y && this.z === v.z;
```
### equals
判断两个`Box3Vector3`的差值是否小于一个数（暂时固定为0.000001）
!!! warning "警告"

    此处与官方API不符，因为官方API不是最新

#### 参数和返回值
```typescript
equals(v: Box3Vector3): boolean
```
#### 示例
```javascript
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(4, 5, 6)) //<~ false
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000001, 2, 3)) //<~ true
new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ true
```
#### 实现
!!! note "提示" inline 

    “EPSILON”的值为0.000001  
```javascript
equals: v =>
    return (abs(this.x - v.x) < EPSILON &&
            abs(this.y - v.y) < EPSILON &&
            abs(this.z - v.z) < EPSILON);
```
### toString
将这个`Box3Vector3`转换成字符串
#### 参数和返回值
```typescript
toString(): string
```
#### 示例
```javascript
```
#### 实现
```javascript
toString =>
    return `{ x:${this.x}, y:${this.y}, z:${this.z} }`;
```
### `static` fromPolar
#### 参数和返回值
```typescript
static fromPolar(mag: number, phi: number, theta: number): Box3Vector3
```
#### 示例
```javascript
```
#### 实现
```javascript
static fromPolar: mag, phi, theta =>
    return new Box3Vector3(mag * sin(theta) * sin(phi), mag * cos(theta), mag * sin(theta) * cos(phi));
```