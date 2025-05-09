# 缩放平移视图

通过滚轮/触摸板滑动或捏合可缩放平移视图，类似浏览器、设计软件的视口交互功能。

引擎默认为 [block 场景类型](/reference/config/app/type.md#block-场景类型)， 可通过配置 [leafer.config.type](/reference/config/app/type.md) 快速更改视口类型，自动添加相应场景的交互逻辑。

::: tip 注意事项
需安装 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。

:::

![window](/svg/window.svg)

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

## 手动缩放平移视图

通过修改 [Leafer 视口属性](/reference/display/Leafer.md#视口属性-viewport) / [App 视口属性](/reference/display/App.md#视口属性-viewport) 的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scale](/reference/UI/layout.md#scale-number-ipointdata)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 可缩放平移视图。

## viewport 视口类型

通过滚轮/触摸板滑动或捏合可缩放平移视图，会阻止默认 [原生右键菜单](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)。

### 平移视图操作

1. 移动端/触摸板: 双指滑动。
2. 鼠标: 滚轮（纵向滚动），Shift + 滚轮（横向滚动）。

更多配置请看 [app.config.move](/reference/config/app/move.md)， 提供了丰富的配置功能，涵盖各种场景。

### 缩放视图操作

1. 移动端/触摸板: 双指捏合。
2. 鼠标: Ctrl / Command + 滚轮。

更多配置请看 [app.config.zoom](/reference/config/app/zoom.md) / [app.config.wheel](/reference/config/app/wheel.md)。

::: code-group

```ts
// #应用与引擎配置 - viewport 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'viewport' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - viewport 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - viewport 视口类型 [实现原理]
import { App, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置及事件监听 = tree: { type: 'viewport' }  // [!code hl:5]
    tree: {},
    wheel: { preventDefault: true }, // 阻止浏览器默认滚动页面事件
    touch: { preventDefault: true }, // 阻止移动端默认触摸屏滑动页面事件
    pointer: { preventDefaultMenu: true } // 阻止浏览器默认菜单事件
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))

// 平移视图    // [!code hl:9]
app.tree.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    app.tree.zoomLayer.move(app.tree.getValidMove(e.moveX, e.moveY))
})

// 缩放视图
app.tree.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    app.tree.zoomLayer.scaleOfWorld(e, app.tree.getValidScale(e.scale))
})
```
:::

## custom 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，自定义缩放平移的处理逻辑。

::: code-group
```ts
// #应用与引擎配置 - custom 视口类型 [App]
import { App, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'custom' } // 给 tree 层添加自定义视口  // [!code hl]
})

// 需要自定义平移视图逻辑    // [!code hl:11]
app.tree.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    const { x, y } = app.tree.getValidMove(e.moveX, e.moveY)
    app.tree.zoomLayer.move(x, y)
})

// 需要自定义缩放视图逻辑
app.tree.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    const center = { x: e.x, y: e.y }
    app.tree.zoomLayer.scaleOfWorld(center, app.tree.getValidScale(e.scale))
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - custom 视口类型 [Leafer]
import { Leafer, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'custom' // 添加自定义视口 // [!code hl]
})

// 需要自定义平移视图逻辑    // [!code hl:11]
leafer.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    const { x, y } = leafer.getValidMove(e.moveX, e.moveY)
    leafer.zoomLayer.move(x, y)
})

// 需要自定义缩放视图逻辑
leafer.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    const center = { x: e.x, y: e.y }
    leafer.zoomLayer.scaleOfWorld(center, leafer.getValidScale(e.scale))
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - custom 视口类型 [实现原理]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置 = tree: { type: 'custom' }  // [!code hl:5]
    tree: {},
    wheel: { preventDefault: true }, // 阻止浏览器默认滚动页面事件
    touch: { preventDefault: true }, // 阻止移动端默认触摸屏滑动页面事件
    pointer: { preventDefaultMenu: true } // 阻止浏览器默认菜单事件
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```
:::

## design 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，增加了按住鼠标中键 / 空格键 + 拖拽 平移视图的功能，并限制缩放范围为 0.01 ～ 256，适合图形编辑、设计类产品。

::: code-group
```ts
// #应用与引擎配置 - design 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'design' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - design 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'design' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用与引擎配置 - design 视口类型 [实现原理]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置 = tree: { type: 'design' }, // [!code hl:10]
    tree: { type: 'viewport' }, // 添加基础视口
    zoom: {
        min: 0.01, // 视图缩放范围
        max: 256
    },
    move: {
        holdSpaceKey: true,  // 按住空白键拖拽可平移视图
        holdMiddleKey: true, // 按住滚轮中键拖拽可平移视图
    }
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```
:::

## document 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，限制了在有效内容区域内滚动，并限制缩放范围为 1 ～ ∞，适合文档类产品。

::: code-group
```ts
// #应用与引擎配置 - document 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'document' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))
```

```ts
// #应用与引擎配置 - document 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'document' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))
```

```ts
// #应用与引擎配置 - document 视口类型 [实现原理]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置 = tree: { type: 'document' } , // [!code hl:4]
    tree: { type: 'viewport' }, // 添加基础视口
    zoom: { min: 1 }, // 视图缩放范围
    move: { scroll: 'limit' } // 限制在有内容的区域内滚动
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))
```
:::

## 移动端手势控制元素

[图形编辑器](/plugin/in/editor/index.md) 可以配置 [moblie 模式](/reference/config/app/base.md#mobile-boolean) 及 [手势控制元素](/plugin/in/editor/config/enable.md)。

也可以自己监听 [视口交互事件](#视口交互事件) 实现手势控制元素（需 [阻止事件冒泡](/reference/event/basic/Event.md#stop)）。

## 更多示例

### [鼠标滚动直接缩放视图](/reference/config/app/wheel.md#鼠标滚动直接缩放视图)

### [控制缩放范围](/reference/config/app/zoom.md#控制视图缩放范围)

### [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)

## 视口交互事件

### [MoveEvent](/reference/event/ui/Move.md) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom.md) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate.md)

## 监听视口变化

引擎可以通过 [PropertyEvent](/reference/event/basic/Property.md) 事件监听 [Leafer 视口属性](/reference/display/Leafer.md#视口属性-viewport) / [App 视口属性](/reference/display/App.md#视口属性-viewport) 的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 变化来同步相关逻辑。

## 下一步

### [转换坐标](/guide/advanced/coordinate.md)
