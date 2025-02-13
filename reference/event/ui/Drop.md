# DropEvent

拖放事件。

::: tip 继承
DropEvent &nbsp;>&nbsp; [PointerEvent](./Pointer) &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### DropEvent.DROP

放置对象事件。

`drop`

## 关键属性

### list: [`ILeafList`](/api/interfaces/ILeafList.md)

待放置的对象列表，当前正在拖拽的对象列表，可通过 [DragEvent.setList()](./Drag.md#静态方法) 另外设置。

### data?: `IObject`

自定义数据，通过 [DragEvent.setData()](./Drag.md#静态方法) 设置。

<!-- ## 继承事件

### [PointerEvent](./Pointer) -->

<!--
## API

### [DropEvent](/api/classes/DropEvent.md) -->

## 示例

### 将元素放置到 Group 中

::: code-group
```ts
// #监听拖放事件
import { Leafer, Group, Rect, DropEvent, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 300, y: 300 })
const rect = new Rect({ fill: 'blue' })

leafer.add(new Rect({ fill: 'green', draggable: true }))
leafer.add(group)
group.add(rect)

group.on(DragEvent.ENTER, function () {  // [!code hl:16]
    DragEvent.setData({ data: 'drop data' })
    rect.set({ stroke: 'black', strokeWidth: 2 })
})

group.on(DragEvent.LEAVE, function () {
    rect.set({ stroke: '' })
})

group.on(DropEvent.DROP, function (e: DropEvent) {
    console.log(e.data)
    e.list.forEach((leaf) => {

        leaf.dropTo(group) // 放置元素到group中

    })
})
```
```js
// #监听拖放事件
import { Leafer, Group, Rect, DropEvent, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 300, y: 300 })
const rect = new Rect({ fill: 'blue' })

leafer.add(new Rect({ fill: 'green', draggable: true }))
leafer.add(group)
group.add(rect)

group.on(DragEvent.ENTER, function () {  // [!code hl:16]
    DragEvent.setData({ data: 'drop data' })
    rect.set({ stroke: 'black', strokeWidth: 2 })
})

group.on(DragEvent.LEAVE, function () {
    rect.set({ stroke: '' })
})

group.on(DropEvent.DROP, function (e) {
    console.log(e.data)
    e.list.forEach((leaf) => {

        leaf.dropTo(group) // 放置元素到group中

    })
})
```
:::
