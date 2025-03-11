# 移除事件

## 关键方法

### off ( type?: `string` | `string`[], listener?: `IEventListener`, options?:[`IEventListenerOptions`](/api/interfaces/IEventListenerOptions.md) | `boolean` )

移除事件。

支持关闭所有事件（不传 type 参数）， 关闭一类事件（不传 listener 函数）。

## 新方法

### off\_ ( id: [`IEventListenerId`](/api/interfaces/IEventListenerId.md) | [`IEventListenerId`](/api/interfaces/IEventListenerId.md)[] ):

移除事件， 与 [on\_()](./on.md#on_) 配套使用。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 移除单个事件

::: code-group
```ts
// #移除监听单个事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

function onLeave(e: PointerEvent) {
    (e.current as Rect).fill = '#32cd79'
}

rect.on(PointerEvent.ENTER, onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off(PointerEvent.LEAVE, onLeave)  // [!code hl]

```
```js
// #移除监听单个事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

rect.on(PointerEvent.ENTER, onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off(PointerEvent.LEAVE, onLeave)  // [!code hl]

```
:::

### 移除多个事件

数组形式:

::: code-group
```ts
// #移除监听多个事件 [数组形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

function onLeave(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

rect.on([PointerEvent.ENTER, PointerEvent.UP], onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off([PointerEvent.ENTER, PointerEvent.UP], onEnter)  // [!code hl]

```
```js
// #移除监听多个事件 [数组形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#42dd89'
}

rect.on([PointerEvent.ENTER, PointerEvent.UP], onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off([PointerEvent.ENTER, PointerEvent.UP], onEnter)  // [!code hl]

```
:::

字符串形式:

::: code-group
```ts
// #移除监听多个事件 [字符串形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

function onLeave(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

rect.on([PointerEvent.ENTER, PointerEvent.UP], onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off('pointer.enter pointer.up', onEnter)  // [!code hl]

```
```js
// #移除监听多个事件 [字符串形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#42dd89'
}

rect.on([PointerEvent.ENTER, PointerEvent.UP], onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off('pointer.enter pointer.up', onEnter)  // [!code hl]

```
:::
