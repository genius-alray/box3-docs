Box3 中当创建或销毁实体时触发的事件

本事件在 box3 中表示为实体被生成或销毁时触发

此事件触发方法分为三类：
1:玩家实体进入/离开地图:[Box3World.onPlayerJoin](),[Box3World.onPlayerLeave]();
2:`world`内实体被创建或销毁:[Box3World.onEntityCreate](),[Box3World.onEntityDestroy]();
3:指定`Box3Entity`被销毁:[Box3Entity.onDestroy]();

## 示例代码

```javascript
world.onPlayerJoin((entityEvent) => {
  // entityEvent.entity
  // entityEvent.tick
});
```

## 事件参数

<property>tick</property> : <def>number</def>
: 事件发生的时间

<property>entity</property> : <def>Box3Entity</def>
: 创建/销毁的实体
