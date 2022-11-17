用于解析一段 URL（统一资源定位器）

## 转换

<constructor>URL</constructor> 构造器中直接传入一个字符串即可解析为<object>URL 对象</object>，例如

```javascript
const url = new URL(
  "https://alan:passwd@www.alanserver.com:123/login?id=114514&dev=1#step1"
);
```

下面的例子都使用上面的变量<object>url</object>。

<property>hash</property> : <def>string</def>
: 从`#`往后的内容（`#!javascript "step1"`）

<property>host</property> : <def>string</def>
: 主机名和端口号（`#!javascript "www.alanserver.com:123"`）

<property>hostname</property> : <def>string</def>
: 主机名（`#!javascript "www.alanserver.com"`）

<property>port</property> : ^^<def>string</def>^^
: 端口号（`#!javascript "80"`注意是字符串）

<property>href</property> : <def>string</def>
: 完整的链接（`#!javascript "https://alan:passwd@www.alanserver.com:123/login?id=114514#step1"`）

<readonly>origin</readonly> : <def>string</def>
: 来源域名（`#!javascript "https://www.alanserver.com:123"`）

<property>username</property> : <def>string</def>
: 用户名（`#!javascript "alan"`）

<property>password</property> : <def>string</def>
: 密码（`#!javascript "passwd"`）

<property>pathname</property> : <def>string</def>
: 路径（`#!javascript "login"`）

<property>protocol</property> : <def>string</def>
: 协议（`#!javascript "https"`）

<property>search</property> : <def>string</def>
: 参数部分（`#!javascript "?id=114514&dev=1"`）

<property>searchParams</property> : <def>string[][]</def>
: 解析后的参数数组（二维数组，每一组为`[key,value]`）
!!! example "获取链接中的参数"

    ```javascript
    var url = new URL('https://box3.codemao.cn/?a=1&b=2&c=3')
    for (const [key, value] of url.searchParams) {
        console.log(key, value)
    }
    ```
    <div class="result">
    ```
    a 1
    b 2
    c 3
    ```
    </div>
