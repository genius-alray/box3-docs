Box3 中当实体死亡时触发的事件

die 本意为”死亡“，在此地表示物体死亡触发的事件。
物体死亡在 box3 中表示为物体的 <property>hp</property> 降低为 0。

触发方法由[Box3World.onDie]()和[Box3Entity.onDie]()组成

## 事件参数

<property>tick</property> : <def>number</def>
: 事件发生的时间

<property>entity</property> : <def>Box3Entity</def>
: 死亡的实体

<property>attacker</property> : <def>Box3Entity</def>|<def>null</def>
: 如果为 `null` 则说明没有击杀者实体，反之返回击杀者的 `Box3Entity` 对象

<property>damageType</property> : <def>string</def>
: 伤害的类型
