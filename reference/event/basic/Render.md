# RenderEvent

渲染事件。

想了解事件的触发顺序，请查看 [渲染生命周期](/guide/life/render.md) 图示。

::: tip 继承
RenderEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 关键属性

### renderBounds: [`IBounds`](/api/interfaces/IBounds.md)

渲染区域。

### renderOptions: [`IRenderOptions`](/api/interfaces/IRenderOptions.md)

渲染选项。

### times: `number`

渲染次数（本轮渲染中第几次渲染）。

## 事件名称

### RenderEvent.REQUEST

请求渲染。

`render.request`

### RenderEvent.START

开始本轮渲染。

`render.start`

### RenderEvent.BEFORE

单次渲染前。

`render.before`

### RenderEvent.RENDER

单次渲染，可进行多次。

`render`

### RenderEvent.AFTER

单次渲染后。

`render.after`

### RenderEvent.AGAIN

准备再次渲染。

`render.again`

### RenderEvent.END

结束本轮渲染。

`render.end`

<!-- ### RenderEvent.NEXT

本轮渲染已完成，预备下一次渲染。 -->

## 请求渲染/动画帧

类似 window.requestAnimateFrame 的跨平台方法，一般为每秒 60 帧。

```ts
// #请求渲染/动画帧
import { Platform } from 'leafer-ui'

// 1. 请求一次渲染帧，等同于 window.requestAnimateFrame
Platform.requestRender(() => {
    console.log('动画帧')
})

// 2. 循环请求渲染帧，实现连续动画
function animate() {

    // 执行动画逻辑...

    // 调用Platform.requestRender方法，实现循环
    Platform.requestRender(animate)
}

// 启动动画循环
animate()
```

<!-- ## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [RenderEvent](/api/classes/RenderEvent.md) -->

## 示例

```ts
// #监听渲染事件
import { Leafer, Rect, RenderEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(RenderEvent.BEFORE, function () { // [!code hl:3]
    // render before (Layout has ended)
})  

```
