# dragBounds

限制拖动范围。

## 关键属性

### dragBounds?: [`IBoundsData`](../../api/interfaces/IBoundsData.md) | `'parent'`

限制元素的拖动范围，`'parent'`表示限制在父元素中拖动（仅允许 [Box](../display/Box.md) / [Frame](../display/Frame.md) 父元素）。

[图形编辑器](../../plugin/in/editor/index.md) 还支持 [widthRange](./editable.md#widthrange-irangesize) / [heightRange](./editable.md#heightrange-irangesize) 属性限制元素自身的宽高范围。

### dragBoundsType?: [`IDragBoundsType`](../../api/modules.md#idragboundstype)

拖动范围是在元素的外面还是里面，默认为 `'auto'`，自动判断。

```ts
type IDragBoundsType =
  | 'auto' // 自动判断，元素比 dragBounds 小时为 outer, 大时为 inner
  | 'outer' // 拖动范围在元素的外面，此时操作元素会限制在 dragBounds 内
  | 'inner' // 拖动范围在元素的里面，此时操作元素会始终覆盖住 dragBounds
```

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 限制元素在 Frame 内拖动

::: code-group
```ts
// #限制元素拖动范围 [在 Frame 内拖动 (Leafer)]
import { Leafer, Frame, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    width: 200,
    height: 200
})

const rect = new Ellipse({
    width: 50,
    height: 50,
    fill: '#32cd79',
    dragBounds: 'parent', // 限制元素拖动范围 // [!code hl]
    draggable: true
})

leafer.add(frame)
frame.add(rect)
```
```ts
// #限制元素拖动范围 [在 Frame 内拖动 (App)]
import { App, Frame, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {}, fill: '#333' })

const frame = new Frame({
    width: 200,
    height: 200
})

const rect = new Ellipse({
    width: 50,
    height: 50,
    fill: '#32cd79',
    dragBounds: 'parent', // 限制元素拖动范围 // [!code hl]
    draggable: true
})

app.tree.add(frame)
frame.add(rect)
```
:::
