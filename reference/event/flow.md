# 捕获/冒泡

一个交互事件触发时，目标元素的所有父节点都能接受到该事件，事件流会从根节点出发，开始进入捕获阶段，到达目标元素后完成捕获，之后从目标元素出发，开始进入冒泡阶段，到达根节点完成冒泡。

## 图示

![冒泡与捕获](/svg/bubble.svg)

## 监听捕获事件

::: code-group
```ts
// #监听捕获事件
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

rect.on(PointerEvent.ENTER, onEnter, true) // [!code hl:2]
rect.on(PointerEvent.LEAVE, onLeave, { capture: true })
```
```js
// #监听捕获事件
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

rect.on(PointerEvent.ENTER, onEnter, true) // [!code hl:2]
rect.on(PointerEvent.LEAVE, onLeave, { capture: true })
```
:::

## 移除捕获事件

::: code-group
```ts
// #移除捕获事件
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

rect.off(PointerEvent.ENTER, onEnter, true)  // [!code hl:2]
rect.off(PointerEvent.LEAVE, onLeave, { capture: true })

```
```js
// #移除捕获事件
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

rect.off(PointerEvent.ENTER, onEnter, true)  // [!code hl:2]
rect.off(PointerEvent.LEAVE, onLeave, { capture: true })

```
:::

## 事件流

```ts
// #事件流
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()
const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(group)
group.add(parent)
parent.add(rect)
// [!code hl:32]
// 捕获 ---
group.on(PointerEvent.ENTER, function () {
    console.log('[capture] Group enter')
}, { capture: true })

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter')
}, true)

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

group.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Group enter')
})

```

## 阻止事件流传递

阻止事件向父节点传递

### stop ( )

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

## 立即阻止事件流传递

阻止事件向父节点及同级传递

### stopNow ( )

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
