# 派发事件

## 关键方法

### emit ( type: `string`, event?: [`IEvent`](/api/interfaces/IEvent.md) | `IObject`, capture?: `boolean` )

手动派发事件, event 参数可以为一个自定义的 object 数据对象, UI 事件会自动生成， 如： leaf.emit(`PointEvent.DOWN`)。

### emitEvent ( event?: [`IEvent`](/api/interfaces/IEvent.md) , capture?: `boolean` )

手动派发事件，event 参数必须为 IEvent 对象，会自动绑定 current。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 派发自定义事件

```ts
// #派发自定义事件
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on('file.save', (data) => { // [!code hl:5]
    console.log(data.text)
})

rect.emit('file.save', { text: '这是一个自定义的事件' })
```

### 模拟派发交互事件

::: code-group
```ts
// #模拟派发交互事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: 'green', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = 'blue'
}

rect.on(PointerEvent.ENTER, onEnter)

rect.emit('pointer.enter', { current: rect }) // [!code hl]

```
```js
// #模拟派发交互事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: 'green', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = 'blue'
}

rect.on(PointerEvent.ENTER, onEnter)

rect.emit('pointer.enter', { current: rect }) // [!code hl]

```
:::
