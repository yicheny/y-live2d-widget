# 踩坑记录
1. `createDialogElement`引入失败
```
export {
  createDialogElement, displayDialog, hiddenDialog, alertText, showHitokotoLoop
}
```

2. 函数`aE`已声明

3. 函数`t`已声明

4. 缺少`current-device`依赖库

5. `dialog`显示异常【点击失效】
拿到src的源码，整个替换掉【替换后有几个报错，顺着解决即可】

- 例如`onload`报错，改为`window.onload`

# 参考资料
- [live2d-widght API文档](https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html)
