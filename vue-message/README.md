# vue-message

此项目提供 2 种思路用于显示 Message 组件

1. 每次调用 this.$message 直接构造一个 vue 子类 append 到 body
2. 维护一个 message 容器，每次新增都是往这个容器加组件
