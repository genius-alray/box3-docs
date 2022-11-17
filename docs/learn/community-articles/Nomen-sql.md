# 一文带你真正了解-SQL

<a href="https://github.com/helloyork"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-Nomem-47F5C0"></img></a>
<a href="https://github.com/alan-best"><img src="https://img.shields.io/badge/%E6%8E%92%E7%89%88%E4%BC%98%E5%8C%96%26%E4%BF%AE%E6%AD%A3-AlanBestHacker-blueviolet"></img></a>

## 写在前面

关于 SQL，论坛里常常有很多人会发帖询问：

> “有哪个代码师会 SQL 啊”  
> “谁帮我看看报错啊“  
> ”求大佬帮忙做一下 SQL 啊“

而往往都是招空气，而且有很多人表示对 SQL 很感兴趣，所以我就做了一篇 JS 基础教程

但是， **真正的进步需要靠自己的努力** ，本篇文章仅做总结与入门，其他内容自行学习

> 再次声明：请利用 **搜索引擎**

同时我还遇见了一个奇怪的问题：有人叫我出关于分号的教程（？

还是同一句话，利用 **搜索引擎**

> Alan 碎碎念：这个文档里已经有了：[关于分号和括号引发的问题](../js/base/01-hello-world.md#_2)

---

## 什么是 SQL

!!! note "关于 SQL"

    SQL 是一种用于编程的特定于领域的语言，设计用于管理关系数据库管理系统（RDBMS）中保存的数据，或用于关系数据流管理系统（RDSMS）中的流处理。它在处理结构化数据（即包含实体和变量之间关系的数据）时特别有用

    [来源于 Wikipedia 的内容](https://en.wikipedia.org/wiki/SQL)

SQL，全名`Structured Query Language`，中文为"结构化查询语言"  
是一种数据库管理语言，可用于处理结构化的数据(例如表格，带有键值关系的数据)  
总而言之，是用于管理和结构化数据库的一种语言， **而不是数据库本身**

其主要用于对于数据库数据的增删改查，具体到数据库编程以及维护等功能

主流数据库有很多， **本文以 SQLite 为基础进行讲解** ，但是大部分数据库都以 SQL 为查询语言

如有更多需要，请访问 [SQLite 官方网站](https://www.sqlite.org)和网络教程

??? note "SQLite 必须使用大写语句吗？"

    其实不一定，目前来说 SQLite 对于大小写不敏感，至于为什么要大写，或许是为了遵守开发规范吧
    但是在实际代码中，我们一般都大写

## 表格操作

### 创建表格 - CREATE TABLE

我们使用`CREAT TABLE`语句来创建表格

SQLite 中创建表格的语法是

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);
```

请注意，表格名称不能是 table 以及保留字等，或以 `sqlite_`开头的名称，因为以此开头的名称是 SQLite 自行内建，自行管理的表格

`datatype` 表示数据类型，例如小数、字符串、金钱、时间、整数等

在 SQL 中，数据是以行-列来储存的，这种结构化管理可以认为是表格

我们能通过使用某列来查询，或其他表达式，例如，我们命名了一个叫 `id` 的列，那么就能通过 `id` 来查询表格数据

```sql
CREATE TABLE IF NOT EXISTS Nomen (
   id INTEGER(16) NOT NULL,
   value TEXT
)
```

例如上面的代码中  
创建了一个名为 **Nomen** 的表格，拥有 `id` 和 `value` 两列  
`id` 列的规则是整数，精度 `16`，不为空  
`value` 的规则是字符串

|      | id  | value |
| ---- | --- | ----- |
| row1 |     |       |
| row2 |     |       |
| row3 |     |       |

我们就生成了如上图的一个抽象表格

我们也可以使用一个表作为模板导入

```sql
CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;
```

这样，我们就使用了 customers 的指定内容创建了一个新表格 TestTable

### 列规则/属性约束

??? note "SQLite 中常见的约束"

    `NOT NULL`：列内容不能为空

    `DEFAULT`：当为空值时，为其提供一个默认值

    `UNIQUE`：强制当前列所有项不能相同

    `PRIMARY Key`：作为唯一标识符，一个表格仅有一个，且自带 NOT NULL 和 UNIQUE 属性
    一个表格的主键，作为唯一标识符，可以由多个列组成，成为复合键

    `CHECK`：确保某列中的所有值满足一定条件

如上约束在符合逻辑条件的情况下可以叠加，例如  
一个属性可以是 `UNIQUE`（不能相同）并且 ` NOT NULL`（不为空）

举个栗子，用一个表格记录一名员工

```sql
CREATE TABLE Company(
   id INT PRIMARY KEY     NOT NULL,
   name           TEXT    NOT NULL,
   age            INT     NOT NULL,
   address        CHAR(50),
   salary         REAL    CHECK(SALARY > 0)
);
```

其包含了五个属性：  
`id`，作为主键，自带不能重复，不能为空  
`name`，字符串，不能为空  
`age`，整数，不能为空  
地址，字符串，长度为 50  
薪资，实数，精度 8 位，并且需大于 0

SQLite 无法使用代码对约束进行删除或增加

### 删除表格 - DROP TABLE

!!! danger "删除表格无法撤销"

    请注意，使用此语句删除表格后，其中信息会永久丢失，再次读取会抛出`no such table`报错

删除表格基本语法

```sql
DROP TABLE tableName;
```

## 项目操作

在任何集合的数据前，我们都能用 **增删改查** 来概括其操作

### 增加数据 - INSERT INTO

SQLite 中使用 `INSERT INTO` 语句来插入数据

```sql
INSERT INTO TABLE_NAME (column1, column2, column3,columnN)
VALUES (value1, value2, value3,valueN);
```

`column` 表示列名称，`value` 表示按照顺序插入到的列中

列不一定要全，但是具有 `NOT NULL` 约束的列必须插入非空值内容  
也可以简写，直接写

```sql
INSERT INTO TABLE_NAME VALUES (value1, value2, value3,valueN);
```

则会按照列的排序按顺序插入空值，当插入的数据小于列时，则会报错，提示拥有行 5，但插入数据是 4 之类的

我们也可以使用另一个表来插入数据

```sql
INSERT INTO first_table (column1, column2, columnN)
   SELECT column1, column2, columnN
   FROM second_table
   WHERE [condition];
```

这句话的意思是：从 `second_table` 中选取指定列中符合表达式（`condition`）的项目插入 `first_table` 中

我们会在稍后了解 `SELECT`

```sql
INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Paul', 32, 'California', 20000.00 );

```

那么我们就向表格中插入了一行数据

| ID  | NAME | AGE | ADDRESS    | SALARY  |
| --- | ---- | --- | ---------- | ------- |
| 1   | Paul | 32  | California | 20000.0 |

[来自菜鸟教程的实例](https://www.runoob.com/sqlite/sqlite-insert.html)

### 删除数据 - DELETE

`DELETE` 基本语法：

```sql
DELETE FROM table1
WHERE condition;
```

从 `table1` 中删除 **所有** 符合表达式的项目

请注意，如果表达式缺失，则会清空整个表格所有内容

> Alan: 此即为著名的删库跑路（）

| id  | name  | age |
| --- | ----- | --- |
| 1   | Paul  | 32  |
| 2   | Allen | 25  |
| 4   | Teddy | 23  |
| 5   | Paul  | 21  |

进行删除操作：

```sql
DELETE FROM company
WHERE name='Paul';
```

则表格最终为

| id  | name  | age |
| --- | ----- | --- |
| 2   | Allen | 25  |
| 4   | Teddy | 23  |

### 更新数据 - UPDATE

在 SQLite 中，更新数据基本语法是

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, columnN = valueN
WHERE [condition];
```

意思为：

在 `table_name` 表格中选取所有符合表达式的项目，并且对于其指定列内容设置

请注意，如果未指定某个列，则这个列不会被更新  
如果指定列不存在，则抛出报错

实例中，更新玩家数据

| ID  | name  | coin | address    |
| --- | ----- | ---- | ---------- |
| 1   | Paul  | 329  | California |
| 2   | Allen | 251  | Texas      |
| 3   | Teddy | 0    | Norway     |
| 4   | Mark  | 256  | Rich-Mond  |
| 5   | David | 2756 | Texas      |

```sql
UPDATE gameTable
SET coin = 123
WHERE name='Allen';
```

则更新列表中名字为 `Allen` 的项目的金币为 123

如果表达式缺失，则会修改所有内容

例如

```sql
UPDATE gameTable
SET coin = 0;
```

则最终表格为

| ID  | name  | coin | address    |
| --- | ----- | ---- | ---------- |
| 1   | Paul  | 0    | California |
| 2   | Allen | 0    | Texas      |
| 3   | Teddy | 0    | Norway     |
| 4   | Mark  | 0    | Rich-Mond  |
| 5   | David | 0    | Texas      |

### 查询数据 - SELECT

在 SQLite 中，我们使用 `SELECT` 语句来查询项目

注意， `SELECT` 语句能够被引用和嵌套，例如在创建表格时，我们能 `SELECT` 另一个表格数据来创建表格

`SELECT` 基本语法为

```sql
SELECT column1, column2, columnN FROM table_name;
--这样会选取指定列的内容--
```

```sql
SELECT * FROM table_name;
--则会选取整个表格--
```

我们能通过表达式访问指定项目，例如查询玩家 `userID`

```sql
SELECT ID FROM gameTable WHERE name='Paul';
```

!!! tip "查询创建的表格"

    补充一个小知识，大家在神岛中会遇到不知道到底创建了几个表格的问题，我们能通过访问`#!sql SELECT * FROM sqlite_master;`
    来获取所有表格的名字，索引，构建代码和数据等等信息

在岛三中的实际应用中，我们 SELECT 语句后会返回一个列表，表示查询到的所有内容，例如

| ID  | name  | coin | address    |
| --- | ----- | ---- | ---------- |
| 1   | Paul  | 0    | California |
| 2   | Allen | 4    | Texas      |
| 3   | Teddy | 2    | Norway     |
| 4   | Mark  | 3    | Rich-Mond  |
| 5   | David | 3    | Texas      |

```sql
SELECT ID FROM gameTable WHERE coin=3;
```

<div class="result">
则返回一个数组

```javascript
[
  { ID: 4, name: "Mark", coin: 3, address: "Rich-Mond" },
  { ID: 5, name: "David", coin: 3, address: "Texas" },
];
```

</div>

### 子句

#### ORDER BY

在 SQLite 中，我们使用 `ORDER BY` 来对于 `SELECT` 返回的数据进行排序

其基本语法为

```sql
SELECT column1
FROM table_name
WHERE [condition]
ORDER BY column1, column2,columnN --ASC | DESC;此处选择两者其一--
```

> - ASC 默认值，从小到大，升序排列
>
> - DESC 从大到小，降序排列

例如按照玩家金币数量进行排序

```sql
SELECT * FROM gameTable ORDER BY coin ASC;
```

请注意，`ORDER BY` 不会更改数据库内容，仅对返回结果产生影响

#### DISTINCT

DISTINCT 是用于去重的关键字，其在选择时，不会获取重复记录

```sql
SELECT DISTINCT name FROM gameTable;
--此句会选取所有玩家记录，但是不会重复
```

让我们看一看来源于菜鸟教程提供的实例

| ID  | NAME  | AGE | ADDRESS    | SALARY  |
| --- | ----- | --- | ---------- | ------- |
| 1   | Paul  | 32  | California | 20000.0 |
| 2   | Allen | 25  | Texas      | 15000.0 |
| 3   | Teddy | 23  | Norway     | 20000.0 |
| 4   | Mark  | 25  | Rich-Mond  | 65000.0 |
| 5   | David | 27  | Texas      | 85000.0 |
| 6   | Kim   | 22  | South-Hall | 45000.0 |
| 7   | James | 24  | Houston    | 10000.0 |
| 8   | Paul  | 24  | Houston    | 20000.0 |
| 9   | James | 44  | Norway     | 5000.0  |
| 10  | James | 45  | Texas      | 5000.0  |

```sql
SELECT DISTINCT name FROM COMPANY;
```

最终返回结果为

| NAME  |
| ----- |
| Paul  |
| Allen |
| Teddy |
| Mark  |
| David |
| Kim   |
| James |

[实例来源于菜鸟教程](https://www.runoob.com/sqlite/sqlite-distinct-keyword.html)

## 表达式

相信大家在看完上述所有栗子中的表达式（`condition`）不太理解，此段落将为大家简述关于表达式的语句

表达式也叫条件表达式，其与运算符共用按逻辑返回 `true` 或 `false` （真与假）两种值

运算符也分为算数运算符、逻辑运算符和比较运算符

使用 WHERE 语句可以引用表达式进行判断

例如，我们需要获取名字为保罗的信息

```sql
SELECT * FROM Company WHERE name='paul';
```

表达式较杂，请自行搜索网络教程进行学习，此处仅举例

### 文章结束

好了，SQL 的基础知识已经交给你们了

如果要学习更高阶的知识，请自行阅读网络教程

### 补充资料 - [来源于网络](https://www.runoob.com/sqlite/sqlite-operators.html)

#### 算数运算符

| 运算符  | 含义                             | 例子              |
| ------- | -------------------------------- | ----------------- |
| + 加法  | 把运算符两边的值相加             | a + b 将得到 30   |
| - 减法  | 左操作数减去右操作数             | a - b 将得到 -10  |
| \* 乘法 | 把运算符两边的值相乘             | a \* b 将得到 200 |
| / 除法  | 左操作数除以右操作数             | b / a 将得到 2    |
| % 取模  | 左操作数除以右操作数后得到的余数 | b % a 将得到 0    |

#### 比较运算符

| 运算符 | 含义                                     | 例子              |
| ------ | ---------------------------------------- | ----------------- |
| ==     | 检查两个操作数的值是否相等               | (a == b) 不为真。 |
| =      | 检查两个操作数的值是否相等               | (a = b) 不为真。  |
| !=     | 检查两个操作数的值是否不相等             | (a != b) 为真。   |
| <>     | 检查两个操作数的值是否不相等             | (a <> b) 为真。   |
| >      | 检查左操作数的值是否大于右操作数的值     | (a > b) 不为真。  |
| <      | 检查左操作数的值是否小于右操作数的值     | (a < b) 为真。    |
| >=     | 检查左操作数的值是否大于等于右操作数的值 | (a >= b) 不为真。 |
| <=     | 检查左操作数的值是否小于等于右操作数的值 | (a <= b) 为真。   |
| !<     | 检查左操作数的值是否不小于右操作数的值   | (a !< b) 为假。   |
| !>     | 检查左操作数的值是否不大于右操作数的值   | (a !> b) 为真。   |

#### 逻辑运算符

| 运算符  | 描述                                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------- |
| AND     | AND 运算符允许在一个 SQL 语句的 WHERE 子句中的多个条件的存在。                                           |
| BETWEEN | BETWEEN 运算符用于在给定最小值和最大值范围内的一系列值中搜索值。                                         |
| EXISTS  | EXISTS 运算符用于在满足一定条件的指定表中搜索行的存在。                                                  |
| IN      | IN 运算符用于把某个值与一系列指定列表的值进行比较。                                                      |
| NOT IN  | IN 运算符的对立面，用于把某个值与不在一系列指定列表的值进行比较。                                        |
| LIKE    | LIKE 运算符用于把某个值与使用通配符运算符的相似值进行比较。                                              |
| GLOB    | GLOB 运算符用于把某个值与使用通配符运算符的相似值进行比较。GLOB 与 LIKE 不同之处在于，它是大小写敏感的。 |
| NOT     | NOT 运算符是所用的逻辑运算符的对立面。比如 NOT EXISTS、NOT BETWEEN、NOT IN，等等。它是否定运算符。       |
| OR      | OR 运算符用于结合一个 SQL 语句的 WHERE 子句中的多个条件。                                                |
| IS NULL | NULL 运算符用于把某个值与 NULL 值进行比较。                                                              |
| IS      | IS 运算符与 = 相似。                                                                                     |
| IS NOT  | IS NOT 运算符与 != 相似。                                                                                |
| \|\|    | 连接两个不同的字符串，得到一个新的字符串。                                                               |
| UNIQUE  | UNIQUE 运算符搜索指定表中的每一行，确保唯一性（无重复）。                                                |
