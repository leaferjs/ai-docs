# Event

所有事件的基类。

## 关键属性

### type: `string`

事件类型。

### current: [`ILeaf`](/api/interfaces/ILeaf.md)

侦听事件的当前对象， 当多个对象共用同一个侦听函数时可起到区分的作用。

等同于 currentTarget。

### target: [`ILeaf`](/api/interfaces/ILeaf.md)

派发事件时设定的目标对象 / 最底层的目标对象。

### bubbles: `boolean`

该事件是否冒泡。

### phase: `number`

事件流正被处理到了哪个阶段：

- 0 这个时间，没有事件正在被处理。
- 1 捕获阶段: 事件正在被目标元素的祖先对象处理， 注册事件时配置了 capture 值为 true 时，触发捕获事件。
- 2 事件对象已经抵达目标对象。
- 3 冒泡阶段: 事件对象逆向向上传播回目标元素的祖先元素，从父元素开始冒泡。

等同于 eventPhase。

### isStop: `boolean`

事件是否已经被阻止传递。

### isStopDefault: `boolean`

是否已经阻止默认事件。

### origin: `object`

原生事件对象。

## 关键方法

### stop ( )

停止事件传递，如果同一个元素有多个侦听函数，会等待执行完后再停止传递（阻止事件向父节点传递）。

同时会调用原生事件的 stopPropagation()，

::: tip 注意
click 等复合事件为内部二次合成，阻止不了原生同名事件。
:::

### stopNow ( )

立即停止事件传递。 阻止事件向父节点及同级传递。

同时会调用原生事件的 stopImmediatePropagation()。

::: tip 注意
click 等复合事件为内部二次合成，阻止不了原生同名事件。
:::

### stopDefault ( )

阻止默认事件。

同时会调用原生事件的 preventDefault()。

::: tip 注意
click 等复合事件为内部二次合成，阻止不了原生同名事件。
:::

<!--
## API

### [Event](/api/classes/Event.md) -->

## 示例

### 阻止事件流传递

::: code-group
```ts
// #阻止事件流传递
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(parent)
parent.add(rect)

// 捕获 ---
parent.on(PointerEvent.ENTER, function (e: PointerEvent) { // [!code hl:11]
    console.log('[capture] Parent enter A')
    e.stop() // 阻止事件向父节点传递 // [!code hl]
}, true)

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter B')
}, true)

// [capture] Parent enter A
// [capture] Parent enter B

rect.on(PointerEvent.ENTER, function () {
    console.log('[capture] Rect enter')
}, true)


// 冒泡 ---
rect.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Rect enter')
})

parent.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Parent enter')
})

```
```js
// #阻止事件流传递 
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(parent)
parent.add(rect)

// 捕获 ---
parent.on(PointerEvent.ENTER, function (e) { // [!code hl:11]
    console.log('[capture] Parent enter A')
    e.stop() // 阻止事件向父节点传递 // [!code hl]
}, true)

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter B')
}, true)

// [capture] Parent enter A
// [capture] Parent enter B

rect.on(PointerEvent.ENTER, function () {
    console.log('[capture] Rect enter')
}, true)


// 冒泡 ---
rect.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Rect enter')
})

parent.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Parent enter')
})

```
:::

### 立即阻止事件流传递

::: code-group
```ts
// #立即阻止事件流传递
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(parent)
parent.add(rect)

// 捕获 ---
parent.on(PointerEvent.ENTER, function (e: PointerEvent) { // [!code hl:10]
    console.log('[capture] Parent enter A')
    e.stopNow() // 阻止事件向父节点及同级传递 // [!code hl]
}, true)

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter B')
}, true)

// [capture] Parent enter A

rect.on(PointerEvent.ENTER, function () {
    console.log('[capture] Rect enter')
}, true)


// 冒泡 ---
rect.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Rect enter')
})

parent.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Parent enter')
})

```
```js
// #立即阻止事件流传递
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(parent)
parent.add(rect)

// 捕获 ---
parent.on(PointerEvent.ENTER, function (e) { // [!code hl:10]
    console.log('[capture] Parent enter A')
    e.stopNow() // 阻止事件向父节点及同级传递 // [!code hl]
}, true)

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter B')
}, true)

// [capture] Parent enter A

rect.on(PointerEvent.ENTER, function () {
    console.log('[capture] Rect enter')
}, true)


// 冒泡 ---
rect.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Rect enter')
})

parent.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Parent enter')
})

```
:::
