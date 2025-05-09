# 模拟交互

可用于自动化测试、回放用户操作，以及你能想到的...

像操控交互设备一样，与引擎进行交互，自动触发其他复合事件，如 pointerDown 之后 pointerUp 触发 tap 事件， pointerDown 之后 pointerMove 触发 drag 事件。

如果只是想简单的触发一个交互事件，可以使用元素的 [emit()](/reference/UI/emit.md) 方法。

## 关键方法

所有的模拟方法在 leafer.interaction 实例上。

### pointerDown ( data: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

按下指针。

### pointerMove ( data: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

移动指针。

### pointerUp ( data?: [`IPointerEvent`](/api/interfaces/IPointerEvent.md) )

抬起指针。

### zoom ( data: [`IZoomEvent`](/api/interfaces/IZoomEvent.md) )

缩放操作。

### move ( data: [`IMoveEvent`](/api/interfaces/IMoveEvent.md) )

平移操作。

### rotate ( data: [`IRotateEvent`](/api/interfaces/IRotateEvent.md) )

旋转操作。

## 示例

### 模拟点击

依次模拟鼠标点击左键、中建、右键， 将会自动触发一次 tap 事件

```ts
// #模拟点击事件
import { Leafer, Rect, PointerButton, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(PointerEvent.DOWN, (e) => {
    console.log('down', e)
    if (e.left) rect.fill = 'blue'
})

rect.on(PointerEvent.TAP, (e) => {
    console.log('tap', e)
    if (e.left) rect.fill = '#32cd79'
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:15]

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.MIDDLE })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.RIGHT })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100 })

    setTimeout(() => {
        interaction.pointerUp({ x: 100, y: 100 })
    }, 500)

}, 1000)
```

### 模拟 drag 事件

```ts
// #模拟 drag 事件
import { Leafer, Rect, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on(DragEvent.DRAG, (e) => {
    console.log('drag', e)
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:7]

    interaction.pointerDown({ x: 100, y: 100 })
    interaction.pointerMove({ x: 500, y: 500 }) // drag
    interaction.pointerUp()

}, 1000)
```

### 模拟缩放

```ts
// #模拟缩放事件
import { Leafer, Rect, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(ZoomEvent.ZOOM, (e) => {
    console.log('zoom', e)
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.zoom({ x: 100, y: 100, scale: 0.2 })

}, 1000)
```

### 模拟平移

```ts
// #模拟平移事件
import { Leafer, Rect, MoveEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(MoveEvent.MOVE, (e) => {
    console.log('move', e)
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:5]

    interaction.move({ x: 100, y: 100, moveX: -100, moveY: -100 })

}, 1000)
```

### 模拟旋转

::: code-group
```ts
// #模拟旋转事件
import { Leafer, Rect, RotateEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(RotateEvent.ROTATE, (e: RotateEvent) => {
    rect.rotation += e.rotation
    console.log('rotate', e)
})

const { interaction } = leafer

setTimeout(() => {   // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.rotate({ x: 100, y: 100, rotation: 30 })

}, 1000)
```
```js
// #模拟旋转事件
import { Leafer, Rect, RotateEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport'  })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(RotateEvent.ROTATE, (e) => {
    rect.rotation += e.rotation
    console.log('rotate', e)
})

const { interaction } = leafer

setTimeout(() => {   // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.rotate({ x: 100, y: 100, rotation: 30 })

}, 1000)
```
:::
