
准备好编写第一行box3代码了吗？

??? note "本节内容"
    1. 了解`事件驱动`的`box3.js`
    2. 欢迎玩家

在写代码之前，我们需要了解一些东西：

!!! note "你必须要知道"
    岛三是基于`事件驱动`的。

    什么是事件驱动？

    在box3中，程序非常忙。每时每刻都有用户进入地图，离开地图，和实体互动，聊天……

    如果我们这么写代码：

    ```javascript
    while(true){
        if(玩家进入){
            ...
        }else if(玩家离开){
            ...
        }else if(与实体互动){
            ...
        }else if(玩家按下左键){
            ...
        }else if(玩家按下右键){
            ...
        }else if(玩家聊天){
            ...
        }
        ...
    }
    ```

    那么不久，代码便会堆成一坨没有人可以理解的东西。我们通常称其为`屎山`。

    况且，如果你在box3里这么写代码，通常会收获一个`Error: Script execution timed out.`。

    那怎么办呢？`console喵`想出了一个好办法。他们通过特殊的方法封装了一系列函数，例如：

    ```javascript
    world.onPlayerJoin = function(callback){
        ...
        //当新玩家加入
        callback({entity, ...});
        ...
    }
    ```

    其中，需要传入一个函数作为参数(`callback`)，每当玩家加入时，调用函数。调用时会给callback传入一系列参数。例如：

    ```javascript
    function welcome({entity}){
        world.say(`欢迎${entity.player.name}！`);
    }   

    world.onPlayerJoin(welcome);
    ```

    其中，`world.onPlayerJoin`就是一个 **事件监听器**。

    当有某个事件发生时，调用指定的函数，这就是`事件驱动`。

## 欢迎玩家

如果说`hello world`是一门语言的精髓，那么`欢迎玩家`就是box.js的核心。

键入代码：

```javascript
world.onPlayerJoin(({entity}) => {
    world.say(`你好，${entity.player.name}`)
})
```

按下运行按钮，看看效果！

在之后的课程里，你会学到更多内容。

!!! note 
    在上面的例子中，`world.onPlayerJoin`