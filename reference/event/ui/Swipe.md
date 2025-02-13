# SwipeEvent

滑动事件。

::: tip 继承
SwipeEvent &nbsp;>&nbsp; [DragEvent](./Drag) &nbsp;>&nbsp; [PointerEvent](./Pointer) &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### SwipeEvent.LEFT

向左滑动事件。

`swipe.left`

### SwipeEvent.RIGHT

向右滑动事件。

`swipe.right`

### SwipeEvent.UP

向上滑动事件。

`swipe.up`

### SwipeEvent.DOWN

向下滑动事件。

`swipe.down`

<!-- ## 继承事件

### [DragEvent](./Drag) -->

<!-- ## API

### [SwipeEvent](/api/classes/SwipeEvent.md) -->

## 示例

```ts
// #监听滑动事件
import { Leafer, Rect, SwipeEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 300, y: 100, width: 200, height: 300, fill: '#32cd79' })

leafer.add(rect)

rect.on(SwipeEvent.LEFT, function () { // [!code hl:9]
    rect.x -= 200
    rect.fill = 'blue'
})

rect.on(SwipeEvent.RIGHT, function () {
    rect.x += 200
    rect.fill = '#32cd79'
})
```
