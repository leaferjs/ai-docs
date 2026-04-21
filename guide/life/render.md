# 渲染生命周期

从创建元素到完成渲染会经历数据变化、请求渲染、布局、渲染等一系列过程，从而形成一次完整的渲染生命周期。

<br/>

![生命周期](/svg/render_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [ChildEvent](../../reference/event/basic/Child.md)、 [PropertyEvent](../../reference/event/basic/Property.md)、 [WatchEvent](../../reference/event/basic/Watch.md)、 [LayoutEvent](../../reference/event/basic/Layout.md)、 [RenderEvent](../../reference/event/basic/Render.md)等事件进行通知，你也可以通过 Leafer 引擎监听这些事件实现自己的产品逻辑。

### 监听渲染事件

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

## 恭喜 🎉

你已完成快速入门知识的学习，可以开始用 LeaferJS 来探索产品开发了～

<br/>
可继续阅读

🍉 了解应用、引擎、元素、属性方法、事件、类库的使用。

🍊 了解让你事半功倍的官方、社区插件。

### 在前端环境中使用

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
