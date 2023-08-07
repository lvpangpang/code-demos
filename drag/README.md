# 拖拽

![alt 属性文本](./index.png)

必须在dragover事件中阻止默认事件才能让drop事件执行成功

在拖动dom绑定dragstart事件，通过event.dataTransfer.setData来传值
在目标dom绑定drop事件，通过event.dataTransfer.getData来获取值，目前dom必须绑定dragover并且要阻止默认事件才行