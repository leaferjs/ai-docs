# 应用配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; 视口类型 &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

初始化视口类型，应用运行中不可再更改。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下需设置在 [子层 Leafer](/reference/display/Leafer.md) 的 config 上，如 ground、tree、sky 层。
:::

## 关键属性

### type: `string`

视口类型，附带场景逻辑，默认为 block 场景类型。

目前有 block、viewport、custom、design、document， 后续会添加其他场景。

```ts
type ILeaferType =
  | 'block' // 块状融入场景
  ｜'viewport' // 基础视口场景
  | 'editor' // 图形编辑场景
  | 'design' // 设计场景
  | 'board' // 白板场景
  | 'document' // 文档场景
  | 'app' // 应用场景
  | 'website' // 网站场景
  | 'game' // 游戏场景
  | 'player' // 动画播放场景
  | 'chart' // 图表场景
  | 'custom' // 自定义
```

## block 场景类型

[Leafer](/reference/display/Leafer.md) 里面的元素可以像 HTML 的普通块状元素一样融入到浏览器页面中，响应交互事件。

移动端在元素 draggable / editable 属性为 `false`，及没有监听 DragEvent.DRAG 的空间上拖拽可直接滑动页面，了解 [touch 配置](/reference/config/app/touch.md#touchpreventdefault-boolean-auto)。

```ts
// #应用配置 - block 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'

const div = document.body.appendChild(document.createElement('div'))
const canvas = document.body.appendChild(document.createElement('canvas'))

div.style.height = '600px'
div.innerText = '请往下滑，会出现一个矩形'

const leafer = new Leafer({ view: canvas, height: 800 }) // 默认 block 类型，不要设置

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    cornerRadius: [50, 80, 0, 80],
    draggable: true
})

leafer.add(rect)
```

## viewport 视口类型

通过滚轮/触摸板滑动或捏合可缩放平移视图，会阻止默认 [右键菜单](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)。

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
// #应用配置 - viewport 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'viewport' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用配置 - viewport 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用配置 - viewport 视口类型 [实现原理]
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
// #应用配置 - custom 视口类型 [App]
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
// #应用配置 - custom 视口类型 [Leafer]
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
// #应用配置 - custom 视口类型 [实现原理]
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
// #应用配置 - design 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'design' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用配置 - design 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'design' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
```

```ts
// #应用配置 - design 视口类型 [实现原理]
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
// #应用配置 - document 视口类型 [App]
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
// #应用配置 - document 视口类型 [Leafer]
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
// #应用配置 - document 视口类型 [实现原理]
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
