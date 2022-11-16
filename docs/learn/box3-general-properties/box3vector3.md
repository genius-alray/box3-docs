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

### subEq
将一个`Box3Vector3`减去另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
subEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

### mulEq
将一个`Box3Vector3`乘以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
mulEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

### divEq
将一个`Box3Vector3`除以另一个`Box3Vector3`，返回结果  
#### 参数和返回值
```typescript
divEq(v: Box3Vector3): Box3Vector3
```
!!! warning "警告"

    此方法会改变原来的`Box3Vector3`

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
### mag
求这个`Box3Vector3`的大小
#### 参数和返回值
```typescript
mag(): number
```
#### 示例
```javascript
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
### angle
求这个`Box3Vector3`的角度
#### 参数和返回值
```typescript
angle(v: Box3Vector3): number
```
#### 示例
```javascript
```
### max
对两个`Box3Vector3`的每个方向的坐标值，取每个方向的最大值  
#### 参数和返回值
```typescript
max(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
```
### min
对两个`Box3Vector3`的每个方向的坐标值，取每个方向的最小值  
#### 参数和返回值
```typescript
min(v: Box3Vector3): Box3Vector3
```
#### 示例
```javascript
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
### toString
将这个`Box3Vector3`转换成字符串
#### 参数和返回值
```typescript
toString(): string
```
#### 示例
```javascript
```
### `static` fromPolar
#### 参数和返回值
```typescript
static fromPolar(mag: number, phi: number, theta: number): Box3Vector3
```
#### 示例
```javascript
```