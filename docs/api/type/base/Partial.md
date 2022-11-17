一个泛型包装，可以将<interface>接口</interface>或<class>类</class>中的所有成员都改为可选的，
一般用于参数配置中（例如`#!javascript world.createEntity(config: Partial<Box3Entity>)`，
参数 <property>config</property> 并不必须具有<def>Box3Entity</def>的所有属性）
