# 监听事件

## 关键属性

### event：[`IEventMap`](/api/interfaces/IEventMap.md)

仅支持初始化时传入监听事件（不能导出为 JSON）。

```ts
export interface IEventMap {
  [name: string]: IEventListener | [IEventListener, IEventOption]
}

// 示例
new Rect({
  fill: '#32cd79',
  event: {
    tap: function () {
      console.log('tap')
    },
    [PointerEvent.DOWN]: [
      function () {
        console.log('pointer.down')
      },
      'once', // 同 on() 的第二个参数
    ],
  },
})
```

## 关键方法

### on ( type: `string` | `string`[], listener: `IEventListener`, options?:[`IEventOption`](/api/modules.md#ieventoption) )

侦听事件, options 为 `boolean` 时表示是否为 [捕获类型](/reference/event/flow.md)。

### once ( type: `string` | `string`[], listener: `IEventListener`, capture?: `boolean` )

只侦听一次事件，capture 表示是否为 [捕获类型](/reference/event/flow.md)。

## 新方法

### on\_ ( type: `string` | `string`[], listener: `IEventListener`, bind?: `IObject`, options?: [`IEventOption`](/api/modules.md#ieventoption)): [`IEventListenerId`](/api/interfaces/IEventListenerId.md)

侦听事件，支持传入 bind 作为 listener 的 this 对象，并返回事件 id，与 [off\_()](./off.md#off) 配套使用。

```ts
// #监听事件 [简洁模式]
import { IEventListenerId } from '@leafer/interface'
import { UI, PointerEvent } from 'leafer-ui'

export class Simple extends UI {

    events: IEventListenerId[]

    listen() { // [!code hl:10]
        this.events = [
            this.on_(PointerEvent.ENTER, this.enter, this),
            this.on_(PointerEvent.LEAVE, this.leave, this)
        ]
    }

    cancel(): void {
        this.off_(this.events)
    }

    enter() { }
    leave() { }

}
```

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 监听单个事件

::: code-group
```ts
// #监听单个事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

rect.on(PointerEvent.ENTER, onEnter)  // [!code hl]

```
```js
// #监听单个事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

rect.on(PointerEvent.ENTER, onEnter)  // [!code hl]

```
:::

### 监听多个事件

数组形式:

::: code-group
```ts
// #监听多个事件 [数组形式]
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

rect.on([PointerEvent.ENTER, PointerEvent.LEAVE], // [!code hl:9]
    function (e: PointerEvent) {
        if (e.type === PointerEvent.ENTER) {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)

```
```js
// #监听多个事件 [数组形式]
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

rect.on([PointerEvent.ENTER, PointerEvent.LEAVE], // [!code hl:9]
    function (e) {
        if (e.type === PointerEvent.ENTER) {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)

```
:::

字符串形式:

::: code-group
```ts
// #监听多个事件 [字符串形式]
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

rect.on('pointer.enter pointer.leave', // [!code hl:9]
    function (e: PointerEvent) {
        if (e.type === 'pointer.enter') {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)

```
```js
// #监听多个事件 [字符串形式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

rect.on('pointer.enter pointer.leave', // [!code hl:9]
    function (e) {
        if (e.type === 'pointer.enter') {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)

```
:::

### 只监听一次事件

::: code-group
```ts
// #只监听一次事件
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

rect.once('pointer.enter', onEnter) // [!code hl:2]
rect.once('pointer.leave', onLeave)

```
```js
// #只监听一次事件
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

rect.once('pointer.enter', onEnter) // [!code hl:2]
rect.once('pointer.leave', onLeave)

```
:::
