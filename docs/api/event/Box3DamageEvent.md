Box3 中当实体受伤时触发的事件

Damage 本意为”伤害“，在此地表示物体受到伤害触发的事件。
物体受伤在 box3 中表示为物体的 <property>hp</property> 降低被动/主动减少。

触发方法由[Box3World.onTakeDamage]()和[Box3Entity.onTakeDamage]()组成

## 事件参数

<property>tick</property> : <def>number</def>
: 事件发生的时间

<property>entity</property> : <def>Box3Entity</def>
: 受到伤害的实体

<property>damage</property> : <def>number</def>
: 受到伤害的血量值

<property>attacker</property> : <def>Box3Entity</def>|<def>null</def>
: 如果为 `null` 则说明没有攻击者实体，反之返回攻击者的 <def>Box3Entity</def> 对象

<property>damageType</property> : <def>string</def>
: 伤害的类型
