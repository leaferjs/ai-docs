# PropertyEvent

元素属性事件，[`leafer.ready`](./Leafer.md) 事件之后才会派发此事件。

事件派发的顺序为：元素自身、Leafer 引擎，[渲染生命周期](/guide/life/render.md) 中会监听此事件。

::: tip 继承
PropertyEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### PropertyEvent.CHANGE

同时派发给元素自身、Leafer 引擎。

`property.change`

### PropertyEvent.LEAFER_CHANGE

只派发给 Leafer 引擎自身。

`property.leafer_change`

## 关键属性

### target: [`ILeaf`](/api/interfaces/ILeaf.md)

目标对象

### attrName: `string`

属性名称。

### oldValue: `IValue`

旧的值。

### newValue: `IValue`

新的值。

<!-- ## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [PropertyEvent](/api/classes/PropertyEvent.md) -->

## 示例

::: code-group
```ts
// #监听元素属性事件
import { Leafer, Rect, LeaferEvent, PropertyEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onReady() {

    leafer.on(PropertyEvent.CHANGE, function (e: PropertyEvent) { // [!code hl:9]
        console.log('leafer', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.on(PropertyEvent.CHANGE, function (e: PropertyEvent) {
        console.log('leaf', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.fill = 'blue'
}

leafer.on(LeaferEvent.READY, onReady)

```
```js
// #监听元素属性事件
import { Leafer, Rect, LeaferEvent, PropertyEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onReady() {

    leafer.on(PropertyEvent.CHANGE, function (e) { // [!code hl:9]
        console.log('leafer', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.on(PropertyEvent.CHANGE, function (e) {
        console.log('leaf', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.fill = 'blue'
}

leafer.on(LeaferEvent.READY, onReady)

```
:::
