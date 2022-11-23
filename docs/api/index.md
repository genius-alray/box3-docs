# API 参考

此处是关于代码中各种内容的详细说明，需要一定的基础知识。查阅前建议先掌握 [JavaScript 基础教程](../learn/js/index.md)

!!! warning "API 参考文档并不完整"

    API文档内容极其复杂繁多，完成这些整理工作需要很长时间，因此你可能会遇到 404（找不到页面） 错误。  
    目前建议以[官方文档](https://box3.codemao.cn)为主，或者[加入我们](../about.md)！

!!! warning "关于隐藏 API"

    本文档中收集了未知或隐藏 API，尚未被官方公布，具体含义可能与本文档可能存在偏差，以<hiddenMethod> </hiddenMethod>标识

??? question "如何读`typescipt`"

    在这篇文档里，所有的参数和返回值的表达全部使用`typescript`代码（~~懒得做表格~~），对不认识`typescript`的人来说难以理解  
    不过，这篇文档的`typescript`代码还是非常容易理解的  
    我们以[<method>set</method>](#set)函数为例：  
    : set(x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Vector3</def>

    其中，括号前面的是函数名，括号里面的内容是参数（英文逗号分隔），括号后面的是返回类型  
    例如，“set”是函数名，“x: number”是参数，Box3Vector3是返回类型  
    在参数中，“:”前面是参数名，后面是类型  
    例如：  
    : x: <def>number</def>

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