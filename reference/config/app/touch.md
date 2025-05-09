# 应用与引擎配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; 触屏 &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

触摸事件相关配置, 引擎运行中修改 [app.config.touch](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### touch.preventDefault: `boolean` | `'auto'`

是否阻止移动端默认触摸屏滑动页面事件，默认为 'auto'。

设置 'auto'， draggable / editable / 监听 DragEvent.DRAG 的元素仍可单独拖拽，其他地方拖拽将会滑动页面。

设置 true， 所有地方拖拽将不会滑动页面，当为引擎添加 [缩放平移视图](/guide/advanced/viewport.md) 功能时自动使用此配置。

设置 false， 所有地方拖拽将会滑动页面。

## 示例

### 阻止移动端默认滑动页面事件

::: code-group
```ts
// #应用与引擎配置 - 阻止移动端默认滑动页面事件 [Leafer]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    touch: { preventDefault: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))
```

```ts
// #应用与引擎配置 - 阻止移动端默认滑动页面事件 [App]
import { App, Rect } from 'leafer-ui'

const app = new App({
    view: window,
    tree: { touch: { preventDefault: true } }  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100))
```
:::
