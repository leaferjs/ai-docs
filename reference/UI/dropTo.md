# dropTo

放置元素到容器中。

## 关键属性

### dropTo ( parent: [`Group`](/reference/display/Group.md), index?: `number`)

将元素拖拽放置到另一个父容器中，同时保持在世界坐标中的显示位置不变， `index`表示放置的层级。

## 归属

### [UI 元素](/reference/display/UI.md)

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
