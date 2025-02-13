# ResizeEvent

Resize 事件。

::: tip 继承
ResizeEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### ResizeEvent.RESIZE

重置尺寸大小。

`resize`

## 关键属性

### width: `number`

新的宽度。

### height: `number`

新的高度。

### pixelRatio？: `number`

新的分辨率。

### old: [`IScreenSizeData`](/api/interfaces/IScreenSizeData.md)

老的尺寸信息。

<!-- ## 继承事件

### [Event](./Event.md) -->

<!--
## API

### [ResizeEvent](/api/classes/ResizeEvent.md) -->

## 示例

::: code-group
```ts
// #监听 Resize 事件
import { Leafer, Rect, ResizeEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ResizeEvent.RESIZE, function (e: ResizeEvent) { // [!code hl:4]
    // resize
    console.log(e.width, e.height, e.old)
})  

```
```js
// #监听 Resize 事件
import { Leafer, Rect, ResizeEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ResizeEvent.RESIZE, function (e) { // [!code hl:4]
    // resize
    console.log(e.width, e.height, e.old)
})  

```
:::
