# <def>Box3World</def>

此类无法（很难）被实例化，但在全局存在一个单例对象<object>world</object>

---

# 常用

---

# 属性

<readonly>projectName</readonly> : <def>string</def>

: 项目的名称，对应 项目-编辑资料-地图名称。无法在代码中修改。

<property>url</property> : <def> URL</def>

: 当前运行的世界的公共 URL

<property>currentTick</property> : <def>number</def>
: 当前世界的时刻

<property>lightMode</property> : `#!javascript 'natural'` | `#!javascript 'manual'`

: 世界光照模式，`#!javascript 'natural'`为自然模式，昼夜循环按照一定的规律进行。`#!javascript 'manual'`为手动模式，需要手动设置各个方向上的光。
光照模式不同，决定光照的属性也不同，你可以通过切换下面的选项卡来查看不同光照模式下的光照属性。

    === "`#!javascript 'natural'` 自然光照"

        <property>sunPhase</property> : <def>number</def>

        : 太阳运行阶段，按照`#!javascript timeOfDay = (sunPhase + sunFrequency * tick) % 1`公式计算

        <property>sunFrequency</property> : <def>number</def>

        : 太阳在天空中移动的频率。 数值越高=太阳运动越快

        <property>lunarPhase</property> : <def>number</def>

        : 月亮的相位。 必须在 0 和 1 之间

    === "`#!javascript 'manual'` 手动光照"

        <property>sunDirection</property> : <def>Box3Vector3</def>

        : 太阳的方向

        <property>sunLight</property> : <def>Box3RGBColor</def>

        : 太阳的光照度

        <property>skyLeftLight</property> : <def>Box3RGBColor</def>
        <property>skyRightLight</property> : <def>Box3RGBColor</def>
        <property>skyBottomLight</property> : <def>Box3RGBColor</def>
        <property>skyTopLight</property> : <def>Box3RGBColor</def>
        <property>skyFrontLight</property> : <def>Box3RGBColor</def>
        <property>skyBackLight</property> : <def>Box3RGBColor</def>
        : 天空光照依次在 `-x` `+x` `-y` `+y` `-z` `+z` 方向上的值

<property>fogColor</property> : <def>Box3RGBColor</def>

: 雾颜色

<property>fogStartDistance</property> : <def>number</def>

: 雾起始距离

<property>fogHeightOffset</property> : <def>number</def>

: 雾起始高度

<property>fogHeightFalloff</property> : <def>number</def>

: 雾高度衰减率

<property>fogUniformDensity</property> : <def>number</def>

: 均匀雾的数量（如果>0，就不能看到天幕）

<property>maxFog</property> : <def>number</def>

: 最大雾量

<property>snowDensity</property> : <def>number</def>

: 雪密度

<property>snowSizeLo</property> : <def>number</def>

: 雪最小尺寸

<property>snowSizeHi</property> : <def>number</def>

: 雪最大尺寸

<property>snowFallSpeed</property> : <def>number</def>

: 雪下落速度

<property>snowSpinSpeed</property> : <def>number</def>

: 雪旋转速度

<property>snowColor</property> : <def>Box3RGBAColor</def>

: 雪颜色

<property>snowTexture</property> : <def>string</def>

: 雪纹理

<property>rainDensity</property> : <def>number</def>

: 雨密度

<property>rainDirection</property> : <def>Box3Vector3</def>

: 雨方向

<property>rainSpeed</property> : <def>number</def>

: 雨速度

<property>rainSizeLo</property> : <def>number</def>

: 雨最小尺寸

<property>rainSizeHi</property> : <def>number</def>

: 雨最大尺寸

<property>rainInterference</property> : <def>number</def>

: 雨扰流幅度

<property>rainColor</property> : <def>Box3RGBAColor</def>

: 雨颜色

<property>gravity</property> : <def>number</def>

: 重力

<property>airFriction</property> : <def>number</def>

: 空气阻力

<property>breakVoxelSound</property> : <def>Box3SoundEffect</def>

: 方块破坏声音

<property>placeVoxelSound</property> : <def>Box3SoundEffect</def>

: 方块填充声音

<property>playerJoinSound</property> : <def>Box3SoundEffect</def>

: 玩家进入世界声音

<property>playerLeaveSound</property> : <def>Box3SoundEffect</def>

: 玩家离开世界声音

<property>ambientSound</property> : <def>Box3SoundEffect</def>

: 环境声音

---

# 方法

<method>entityQuota</method> () : <def>Number</def>

: 返回世界当前允许创建的实体的剩余数量

<method>createEntity</method> (config: <def> Partial</def><<def> Box3EntityConfig</def>>) : <def> Box3Entity</def> | <def>null</def>

: 创建一个新的<def>Box3Entity</def>或复制一个现有实体
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

: 移除碰撞过滤器，不再关闭两个实体组 <arg>aSelector</arg> 、 <arg>bSelector</arg> 之间的碰撞

<method>clearCollisionFilters</method> () : void

: 清除所有的碰撞过滤器

<method>collisionFilters</method> () : <def>string</def>[][]

: 返回当前所有的碰撞过滤器

    ??? example "示例"

        ```javascript
        world.collisionFilters().forEach(([ a, b ]) => console.log(a, b)) // 打印全部碰撞过滤器
        ```

<method>raycast</method> (origin: <def>Box3Vector3</def>, direction: <def>Box3Vector3</def>, options?: <def>Partial</def><<def>Box3RaycastOptions</def>>) : <def>String</def>[][]

: 射线检测，从 <arg>origin</arg> 原点位置向 <arg>direction</arg> 方向投射一条隐形的射线，返回碰到的实体或方块
: [Box3RaycastOptions](https://docs.box3.codemao.cn/box3raycastoptions.html)
: [Box3RaycastResult](https://docs.box3.codemao.cn/box3raycastresult.html)

    ??? example "示例"

        ```javascript
        /* 按下左键，在玩家位置向脚下发射一条射线，在控制台输出检测结果 */
        world.onPress(({ button, entity }) => {
            if(button === 'action0'){
               const res = world.raycast( entity.position, new Box3Vector3(0,-1,0))
               console.log(JSON.stringify(res))
            }
        })
        ```

<method>searchBox</method> (bounds: <def>Box3Bounds3</def>) : <def>Box3Entity</def>[]

: 搜索指定区域内的实体

<method>animate</method> (keyframes: <def>Partial</def><<def>Box3WorldKeyframe</def>>[], playbackInfo?: <def>Partial</def><<def>Box3AnimationPlaybackConfig</def>>) : <def>Box3Animation</def><<def>Box3WorldKeyframe</def>, <def>Box3World</def>>

: 创建一个关键帧动画 <def>Box3Animation</def>

    ??? example "示例"

        ```javascript
          const ani = world.animate([
              { rainDensity: 0.0 },
              { rainDensity: 1.0 },
          ], {
              iterations: Infinity,//无限循环
              direction: Box3AnimationDirection.REVERSE,//雨量反复变大变小
              duration: 16 * 5,//5秒1个周期(每秒16帧)
          })

          world.onPress(({ button }) => {
              if (button === Box3ButtonType.ACTION0) {//左键停雨
                  ani.cancel()
                  world.rainDensity = 0
              }
          })
        ```

<hiddenMethod>getAnimations</hiddenMethod> () : <def>Box3Animation</def><<def>Box3WorldKeyframe</def>, <def>Box3World</def>>[]

: 获取所有的动画对象

<hiddenMethod>getEntityAnimations</hiddenMethod> () : <def>Box3Animation</def><<def>Box3EntityKeyframe</def>, <def>Box3Entity</def>>[]

: 获取所有实体的动画对象

<hiddenMethod>getPlayerAnimations</hiddenMethod> () : <def>Box3Animation</def><<def>Box3PlayerKeyframe</def>, <def>Box3Player</def>>[]

: 获取所有玩家的动画对象

<method>sound</method> (spec: <interface>spec[见下文]</interface> | string) : void

: 在指定位置播放声音

    : 声音播放参数<interface>spec</interface>
        : <property>sample</property>: string
            : 声音文件路径
        : <property>position</property>?: <def>Box3Vector3 </def>
            : 声音播放的位置。可以指定在某个实体身上发出声音
        : <property>radius</property>?: number
            : 声音范围。默认为 32，即 2 格方块距离
        : <property>gain</property>?: number
            : 音量增益。正常为 1，数值越大，声音越大
        : <property>pitch</property>?: number
            : 音高增益。正常为 1，大于 1，声音播放越快

    ??? example "示例"

        ```javascript
        // 在指定的位置播放 'airhorn' 声音
        world.sound({
            sample: 'audio/airhorn.mp3',
            position: new Box3Vector3(64, 10, 64),
            radius: 64  // 只有距离位置64半径的玩家能听见。(1个方块的距离是16)
        })
        ```

---

# 事件

<listener>onRespawn</listener> / <promiseEvent>nextRespawn</promiseEvent> : <def> Box3EventChannel</def> / <def>Box3EventFuture</def><<def>Box3RespawnEvent</def>>

: 玩家复活(或未来)触发

<listener>onTick</listener> / <promiseEvent>nextTick</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3TickEvent</def>>

: Tick 事件，详情请看<def>Box3TickEvent</def>

<listener>onTakeDamage</listener> / <promiseEvent>nextTakeDamage</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3DamageEvent</def>>

: 当实体收到伤害(或未来)触发

<listener>onDie</listener> / <promiseEvent>nextDie</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3DieEvent</def>>

: 当实体死亡(或未来)触发

<listener>onPlayerJoin</listener> / <promiseEvent>nextPlayerJoin</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3PlayerEntityEvent</def>>

: 当玩家进入世界(或未来)触发

<listener>onPlayerLeave</listener> / <promiseEvent>nextPlayerLeave</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3PlayerEntityEvent</def>>

: 当玩家离开世界(或未来)触发

<listener>onEntityCreate</listener> / <promiseEvent>nextEntityCreate</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3EntityEvent</def>>

: 当实体被创建(或未来)触发

<listener>onEntityDestroy</listener> / <promiseEvent>nextEntityDestroy</promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def>Box3EntityEvent</def>>

: 当实体被销毁(或未来)触发

<!-- <listener>onChat</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onClick</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onPress</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onRelease</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onEntityContact</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onEntitySeparate</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onVoxelContact</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener>onVoxelSeparate</listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

:

<listener></listener> / <promiseEvent></promiseEvent> : <def> Box3EventChannel</def> / <def> Box3EventFuture</def><<def></def>>

: -->
