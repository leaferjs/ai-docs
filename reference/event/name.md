# 字符串名称

推荐优先使用事件名称的常量，当然你也可以使用字符串名称代替事件常量。

## 命名规则

事件名称常量对应的字符串名称遵循如下规则:

```ts
PointerEvent.DOWN = 'pointer.down' // 事件类型.事件名称， 提高可读性

ZoomEvent.ZOOM = 'zoom'  // 事件类型与事件名称一样，可以省略
ZoomEvent.START = 'zoom.start'
ZoomEvent.END = 'zoom.end'

// 例外情况：
// 以下 PointerEvent 事件不用加 pointer 前缀
'tap'｜'double_tap'｜'long_press'｜'long_tap'
```

### 自定义名称

全局修改事件名称常量对应的字符串名称， 一般用于兼容你已有的业务代码，目前只支持修改继承了 UIEvent 的事件。

::: code-group
```ts
// #自定义事件名称
import { Leafer, Rect, PointerEvent, UIEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

Object.defineProperty(UIEvent.prototype, 'evt', {
    get() { return this.origin }
})

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
    console.log((e as any).evt)
}

function onLeave(e: PointerEvent) {
    (e.current as Rect).fill = '#32cd79'
}

PointerEvent.changeName(PointerEvent.ENTER, 'pointerenter')  // [!code hl:5]
PointerEvent.changeName(PointerEvent.LEAVE, 'pointerleave')

rect.on('pointerenter', onEnter)
rect.on('pointerleave', onLeave)

```
```js
// #自定义事件名称
import { Leafer, Rect, PointerEvent, UIEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

Object.defineProperty(UIEvent.prototype, 'evt', {
    get() { return this.origin }
})

function onEnter(e) {
    e.current.fill = '#42dd89'
    console.log(e.evt)
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

PointerEvent.changeName(PointerEvent.ENTER, 'pointerenter')  // [!code hl:5]
PointerEvent.changeName(PointerEvent.LEAVE, 'pointerleave')

rect.on('pointerenter', onEnter)
rect.on('pointerleave', onLeave)

```
:::
