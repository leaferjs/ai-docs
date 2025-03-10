# ChildEvent

Child 事件。

添加 / 移除事件的派发顺序为：子元素、父元素、Leafer 实例，[渲染生命周期](/guide/life/render.md) 中会监听。

[`leafer.ready`](./Leafer.md) 事件之后才会派发添加 / 移除事件，想在 ready 前 [执行相关事件](/reference/UI/parent.md#waitparent-item-function-bind-object)？

::: tip 继承
ChildEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### ChildEvent.ADD

添加元素。

`child.add`

### ChildEvent.REMOVE

删除元素。

`child.remove`

### 仅派发给元素自身的事件

### ChildEvent.CREATED

创建元素。

`created`

### ChildEvent.MOUNTED

挂载元素到 Leafer 上。

`mounted`

### ChildEvent.UNMOUNTED

从 Leafer 上卸载元素。

`unmounted`

### ChildEvent.DESTROY

销毁元素。

`destroy`

## 关键属性

### child: [`ILeaf`](/api/interfaces/ILeaf.md)

子元素。

### parent: [`ILeaf`](/api/interfaces/ILeaf.md)

父元素。

<!--
## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [ChildEvent](/api/classes/ChildEvent.md) -->

## 示例

::: code-group
```ts
// #监听 Child 事件
import { Leafer, Group, Rect, ChildEvent, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

function onReady() {

    const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

    leafer.on(ChildEvent.ADD, function (e: ChildEvent) { // [!code hl:13]
        console.log('leafer', e.parent, e.child)
    })

    group.on(ChildEvent.ADD, function (e: ChildEvent) {
        console.log('parent', e.parent, e.child)
    })

    rect.on(ChildEvent.ADD, function (e: ChildEvent) {
        console.log('child', e.parent, e.child)
    })

    group.add(rect)
}

leafer.on(LeaferEvent.READY, onReady)


```
```js
// #监听 Child 事件
import { Leafer, Group, Rect, ChildEvent, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

function onReady() {

    const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

    leafer.on(ChildEvent.ADD, function (e) { // [!code hl:13]
        console.log('leafer', e.parent, e.child)
    })

    group.on(ChildEvent.ADD, function (e) {
        console.log('parent', e.parent, e.child)
    })

    rect.on(ChildEvent.ADD, function (e) {
        console.log('child', e.parent, e.child)
    })

    group.add(rect)
}

leafer.on(LeaferEvent.READY, onReady)


```
:::
