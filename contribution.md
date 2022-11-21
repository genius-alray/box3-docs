**_ 注意格式规范！API 参考部分请参照 api/world.md 中的格式 _**

# 要填的坑

Nomen 说的要高亮，可惜 GSAP 官网还在维护查不到文档(Nomen：这里是常用部分的内容传送到某个词条时短暂的高亮该词条的名字)

- api/type/base/String
- api/event/Box3DamageEvent
- api/event/Box3DieEvent
- api/event/Box3EntityEvent
- api/event/Box3RespawnEvent
- api/type/Box3Animation
- api/type/Box3AnimationPlaybackConfig
- api/type/Box3Bounds3
- api/type/Box3EntityKeyframe
- api/type/Box3EventChannel
- api/type/Box3EventFuture
- api/type/Box3PlayerKeyframe
- api/type/Box3RaycastOptions
- api/type/Box3RGBColor
- api/type/Box3SelectorString
- api/type/Box3RGBAColor
- api/type/Box3SoundEffect
- api/type/Box3Vector3
- api/type/Box3WorldKeyframe

# 格式指南

数学公式统一使用 $LaTex$ 书写

API 文档中对于需要进一步解释的代码元素（例如类、接口、类型）需要使用<def>名称（例如 Box3World，Number，Boolean 等）</def>，`iconParser`脚本会将其自动转换为图标+链接。
默认情况下 def 标签生成的链接显示为 def 中的内容，可通过指定 label 属性修改显示名称。

API 文档中需要强调类型的部分，或是代码中的标识符，可使用别名标签（见下文），例如<method>方法</method><property>属性<property><arg>参数</arg>

如有特殊需求，可以使用<icon name="图标ID">内容</icon>来渲染一个图标元素。
