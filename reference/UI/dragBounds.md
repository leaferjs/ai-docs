# dragBounds

限制拖动范围。

## 关键属性

### dragBounds?: [`IBoundsData`](/api/interfaces/IBoundsData.md) | `'parent'`

限制元素的拖动范围，`'parent'`表示限制在父元素中拖动（仅允许 [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 父元素）。

[图形编辑器](/plugin/in/editor/index.md) 还支持 [widthRange](/reference/UI/editable.md#widthrange-irangesize) / [heightRange](/reference/UI/editable.md#heightrange-irangesize) 属性限制元素自身的宽高范围。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 限制元素在 Frame 内拖动

```ts
// #限制元素拖动范围 [在 Frame 内拖动]
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
