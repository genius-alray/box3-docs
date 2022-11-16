# <icon> Box3World|class</icon>

此类无法（很难）被实例化，但在全局存在一个单例对象<icon> world |object</icon>

---

# 属性

<property>projectName</property>

: 项目的名称，对应 项目-编辑资料-地图名称。无法在代码中修改。

<property>url</property> : <def> URL</def>

: 当前运行的世界的公共 URL

# 方法

<method>entityQuota</method> () : <def>Number</def>

: 返回世界当前允许创建的实体的剩余数量

<method>createEntity</method> (config: <def> Partial</def><<def> Box3EntityConfig</def>>) : <def> Box3Entity</def> | <def>null</def>

: 创建一个新的<icon> Box3Entity|object</icon>或复制一个现有实体
如果超过了实体配额，则返回 <def>null</def>

<method> querySelector</method> (selector: <def>Box3SelectorString</def>) : <def> Box3Entity</def> | <def>null</def>

: 通过选择器来查找一个实体，如果找不到，则会返回<def>null</def>

<method>querySelectorAll</method> (selector: <def>Box3SelectorString</def>) : <def>Box3Entity</def>[]

: 与`querySelector`类似，但是可以查找所有符合选择器的实体，返回一个<def>Box3Entity</def>组成的数组。如果没有符合条件的实体，则返回空数组。

    ??? example "示例"

        ```javascript
        world.querySelectorAll('player').
          forEach(entity => {
            world.say(entity.player.name)
          }) // 遍历世界中的所有玩家并且广播其玩家昵称
        ```

<method>testSelector</method> (selector: <def>Box3SelectorString</def>, entity: <def>Box3Entity</def>) : <def>Boolean</def>

: 测试实体是否符合选择器，如果实体能被指定的选择器选择，则返回<bool>true</bool>，否则返回<bool>false</bool>

    ??? example "示例"

        ```javascript
        world.testSelector('.groupA', a_Entity_Has_Tag_groupA)
        ```

<method>addCollisionFilter</method> (aSelector: <def>Box3SelectorString</def>, bSelector: <def>Box3SelectorString</def>) : void

: 添加碰撞过滤器，关闭两个实体组之间的碰撞

    ??? example "示例"

        ```javascript
        world.addCollisionFilter('player','player') // 关闭玩家和玩家之间的碰撞
        ```

<method>removeCollisionFilter</method> (aSelector: <def>Box3SelectorString</def>, bSelector: <def>Box3SelectorString</def>) : void

: 移除碰撞过滤器，不再关闭两个实体组 `aSelector` 、 `bSelector` 之间的碰撞

# 事件

<listener>onRespawn</listener> / <promiseEvent>nextRespawn</promiseEvent> : <def> Box3EventChannel</def> / <def>Box3EventFuture</def><<def>Box3RespawnEvent</def>>

: 玩家复活(或未来)触发

<listener>onTick</listener> / <promiseEvent>nextTick</promiseEvent> → <def> Box3EventChannel</def><<def>Box3TickEvent</def>>

: Tick 事件，详情请看<def>Box3TickEvent</def>
