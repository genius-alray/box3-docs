# <icon> Box3World |class</icon>

Box3 世界

此类无法（很难）被实例化，但在全局存在一个单例对象<icon> world |object</icon>

# 属性

## <icon> url|getter parent-class protected</icon> : <icon> URL|class</icon>

当前运行的世界的公共URL

## <icon> onRespawn|event</icon> : <icon> Box3EventChannel|type</icon><<icon>Box3RespawnEvent|class</icon>>

onRespawn

# 方法

## <icon> entityQuota|method parent-class</icon> () : Number

返回世界当前允许创建的实体的剩余数量


# 常用

## <icon> projectName|property protected</icon>

项目的名称，对应 项目-编辑资料-地图名称。无法在代码中修改。






## <icon> onTick|event parent-class</icon>/<icon> nextTick|event</icon> → [<icon> Box3TickEvent|event</icon>](../event/Box3TickEvent)
