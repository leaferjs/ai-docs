# WatchEvent

观察事件。

想了解事件的触发顺序，请查看 [渲染生命周期](/guide/life/render.md) 图示。

::: tip 继承
WatchEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 事件名称

### WatchEvent.REQUEST

请求观察数据。

`watch.request`

### WatchEvent.DATA

发送观察数据。

`watch.data`

## 关键属性

### data: [`IWatchEventData`](/api/interfaces/IWatchEventData.md)

观察数据。

<!-- ## 继承事件

### [Event](./Event.md) -->

<!--
## API

### [WatchEvent](/api/classes/WatchEvent.md) -->

## 示例

::: code-group
```ts
// #监听观察事件
import { Leafer, Rect, WatchEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(WatchEvent.DATA, function (e: WatchEvent) { // [!code hl:3]
    console.log(e.data) // changed list
})  

```
```js
// #监听观察事件
import { Leafer, Rect, WatchEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(WatchEvent.DATA, function (e) { // [!code hl:3]
    console.log(e.data) // changed list
})  

```
:::
