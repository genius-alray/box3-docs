当玩家用鼠标点击实体时触发的事件

触发方法：[Box3World.onClick]()和[Box3Entity.onClick]()

## 事件参数

<property>button</property> : <def>Box3ButtonType</def>
: 被点击的按钮，ACTION0=左键，ACTION1=右键

<property>clicker</property> : <def>Box3Entity</def>&object
: 发起点击事件的玩家

<property>clickerPosition</property> : <def>Box3Vector3</def>
: 点击鼠标的瞬间玩家所在的位置

<property>distance</property> : <def>number</def>
: 玩家到被点击实体的距离

<property>entity</property> : <def>Box3Entity</def>
: 被点击的实体

<property>raycast</property> : <def>Box3RaycastResult</def>
: 玩家 -> 被点击实体的射线检测结果

<property>tick</property> : <def>number</def>
: 鼠标点击事件发生的时间
