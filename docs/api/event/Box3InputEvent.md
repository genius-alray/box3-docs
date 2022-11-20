input 本意输入，在 Box3 中为输入事件，在玩家按动或松开按钮时触发

事件发生的时刻，即为玩家按下/松开按钮的同一刻。

由方法 [Box3World.onPress](),[Box3World.onRelease](),[Box3Player.onPress](),[Box3Player.onRelease]() 触发

## 示例代码

```javascript
world.onPress(({ button, entity, position, pressed, raycast, tick }) => {
  if (button == "action0") world.say(entity.player.name + "按下了左键");
  else if (button == "action1") world.say(entity.player.name + "按下了右键");
});
```

点击左键，将鼠标指针位置的方块替换为石头。点击右键，销毁方块。

```javascript
world.onPress(({ button, raycast }) => {
  let pos = raycast.voxelIndex;
  if (button === "action0") {
    voxels.setVoxel(pos.x, pos.y, pos.z, "stone");
  } else if (button === "action1") {
    voxels.setVoxel(pos.x, pos.y, pos.z, "");
  }
});
```

## 事件参数

<property>button</property> : <def>Box3ButtonType</def>
: 玩家输入的按钮

<property>entity</property> : <def>Box3Entity</def>&object
: 指向按下/松开按钮的玩家

<property>position</property> : <def>Box3Vector3</def>
: 玩家按下/松开按钮的瞬间所在位置

<property>pressed</property> : <def>boolean</def>
: 如果为真，则事件为按下按钮，否则，为松开按钮。

<property>raycast</property> : <def>Box3RaycastResult</def>
: 按下/松开按钮的瞬间，从玩家视角投射的射线检测结果。

<property>tick</property> : <def>number</def>
: 按下/松开按钮的时间
