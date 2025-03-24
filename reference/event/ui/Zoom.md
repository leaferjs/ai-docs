# ZoomEvent

缩放事件，一般用于 [视口交互](/guide/advanced/viewport.md) 中缩放 视图 或 元素。

1. 移动端/触摸板: 双指捏合。
2. 鼠标: Ctrl / Command + 滚轮。

::: tip 继承
ZoomEvent &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

需安装 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。
:::

## 事件名称

### ZoomEvent.START

开始缩放事件

`zoom.start`

### ZoomEvent.ZOOM

缩放事件

`zoom`

### ZoomEvent.END

结束缩放事件

`zoom.end`

## 关键属性

### scale: number

此次缩放事件改变的 scale 大小

<!-- ## 继承事件

### [UIEvent](./UIEvent) -->

<!-- ## API

### [ZoomEvent](/api/classes/ZoomEvent.md) -->

## 示例

::: code-group
```ts
// #监听缩放交互事件
import { Leafer, Rect, ZoomEvent, LeafHelper } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({
    view: window,
    type: 'custom'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ZoomEvent.ZOOM, function (e: ZoomEvent) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.zoomOfWorld(leafer, center, e.scale)
})
```
```js
// #监听缩放交互事件
import { Leafer, Rect, ZoomEvent, LeafHelper } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({
    view: window,
    type: 'custom'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ZoomEvent.ZOOM, function (e) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.zoomOfWorld(leafer, center, e.scale)
})
```
:::
