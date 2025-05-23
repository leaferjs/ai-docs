# Leafer

创建 Leafer 引擎，了解初始化 [引擎配置](/reference/config/app/base.md)、[视口交互](/guide/advanced/viewport.md)。

<br/>

![leafer](/svg/leafer.svg)

<br/>

::: tip 继承
Leafer &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### app: `App ｜ Leafer`

App 实例, 如果不存在则是自身。

### isApp: `boolean`

是否为 App 实例， 默认为 false。

### width: `number`

获取/修改画布宽度。

### height: `number`

获取/修改画布高度。

### pixelRatio: `number`

获取/修改画布像素比， 默认使用当前设备像素比（普通屏为 1，高清屏为 2，超高清屏为 3）。

### fill: `string`

获取/修改画布背景颜色。

### hittable: `boolean`

获取/修改是否响应交互事件，默认为 true。

### hitChildren: `boolean`

子元素是否响应交互事件，默认为 true。

### config: [`ILeaferConfig`](/reference/config/app/base.md)

引擎的配置对象，部分配置运行中可以修改，立即生效。

### canvas: [`ILeaferCanvas`](/api/interfaces/ILeaferCanvas.md)

可以适配不同平台的画布封装对象。

获取真实的画布对象:

```ts
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const canvas = leafer.canvas.view
const context = leafer.canvas.context

console.log('canvas', canvas) // HTMLCanvasElement
console.log('2d context', context) // CanvasRenderingContext2D
```

可结合 [RenderEvent.END](/reference/event/basic/Render.md) 事件 drawImage() 到另一张小 canvas 上，实现高性能的鸟瞰图。

## 视口属性（viewport）

### zoomLayer：[`Group`](./Group.md)

缩放平移视图层， 默认为 Leafer 自身，可 [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)。

可以手动修改它的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scale](/reference/UI/layout.md#scale-number-ipointdata)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 属性进行缩放平移视图。

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

## 状态属性

### created: `boolean`

引擎及子元素创建完成（完成首次创建）。

### ready: `boolean`

引擎是否准备就绪（完成首次布局）。

### viewReady: `boolean`

引擎视图是否准备就绪（完成首次渲染）。

```ts
import { Leafer, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.on(LeaferEvent.READY, function () {
    // 引擎准备就绪
})

leafer.on(LeaferEvent.VIEW_READY, function () {
    // 视图准备就绪
})
```

### viewCompleted： `boolean`

引擎视图加载完成（画布内的图片加载并渲染完成），会随时会变化。

### running: `boolean`

引擎是否运行中。

## FPS：`number`

实时渲染帧率，默认为 60 帧。

### layoutLocked: `boolean`

布局是否锁定， 可通过 [unlockLayout()](#locklayout) 解锁。

### cursorPoint：[`IPointData`](../interface/math/Math#ipointdata)

当前光标的位置 - [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系)。

### clientBounds：[`IBoundsData`](../interface/math/Math#iboundsdata)

当前引擎在浏览器窗口中的位置（client 坐标）及宽高。

另可使用 [getWorldPointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法转换浏览器原生事件坐标到引擎中。

## 辅助属性

### zIndex: `number`

App 结构下，可以通过设置 zIndex 控制自身在 App 中的层叠顺序, 默认为 0。

## 静态属性

### list: [`Leafer`](./Leafer.md)[]

当前创建的所有 Leafer 引擎。

## 关键方法

### resize ( size: [`IScreenSizeData`](/api/interfaces/IScreenSizeData.md))

重置画布大小。

### waitInit (item: `function`, bind?: `object` )

引擎初始化（完成 init 各种管理器）后时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitReady ( item: `function`, bind?: `object` )

引擎准备就绪（完成首次布局）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitViewReady ( item: `function`, bind?: `object` )

引擎视图准备就绪（完成首次渲染）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitViewCompleted ( item: `function`, bind?: `object` )

引擎视图加载完成（画布内的图片加载并渲染完成）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### forceRender ( bounds?: [`IBoundsData`](/api/interfaces/IBoundsData.md), sync?: `boolean` )

强制渲染（异步），默认重渲染整个画布。

支持传入一个 bounds 进行局部重渲染, 可以打开 [显示重绘区域](/reference/debug/basic.md#showrepaint-boolean) 查看重绘情况。

当 sync 参数设为 true 时，表示立即同步渲染。

### updateCursor ( cursor?: [`ICursorType`](/api/modules.md#icursortype) )

更新光标样式，默认更新当前 hover 元素的 cursor 样式 （注意按下鼠标后的光标样式会始终保持，直到抬起鼠标）。

可传入 cursor 样式直接设置，不过后续 hover 操作仍会被覆盖此样式，建议设置在元素上。

### start ( )

启动/重启引擎。

```ts
// #应用与引擎配置 - 手动启动应用 [Leafer]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    start: false // [!code hl]
})

// async create leafs ...

leafer.start() 
```

### stop ( )

停止引擎。

将停止渲染、布局，仍会收集元素变化数据待用，可通过 start() 重启。

### clear ( )

清空所有子元素（移除 + 销毁）。

### destroy ( sync?: `boolean` )

销毁引擎，默认采用异步销毁，不会立即执行。

当 sync 参数为 true 时，表示同步销毁。

## 辅助方法

### updateClientBounds ( )

强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新），如 view 使用了 transform 属性移动需要调用此方法手动更新。

### getWorldPointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ):[`IPointData`](../interface/math/Math#ipointdata)

获取 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系)（浏览器原生事件的 client 坐标 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系)），update 表示是否强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新），[通过示例学习](/guide/advanced/coordinate.md#拖拽创建图形)。

### getPagePointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ):[`IPointData`](../interface/math/Math#ipointdata)

获取 [page 坐标](/guide/advanced/coordinate.md#world-世界坐标系)（浏览器原生事件的 client 坐标 转 [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系)），update 表示是否强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新），[通过示例学习](/guide/advanced/coordinate.md#拖拽创建图形)。

可用于转换浏览器原生事件坐标（自带 clientX / clientY 坐标属性）到引擎中。

```ts
interface IClientPointData {
  clientX: number
  clientY: number
}
```

## 布局方法

### lockLayout ( )

锁定布局, 锁定前会自动 [updateLayout()](/reference/UI/layout.md#updatelayout) 一次。

锁定后，元素的数据变化会暂时收集，但不会更新布局，等待解锁后再进行更新。
::: tip
可通过 [layoutLocked](#layoutlocked-boolean) 检查是否锁定。
:::

### unlockLayout ( )

## 示例

通过锁定可以避免多次重复布局，列表越大，性能优化效果越明显。

```ts
leafer.lockLayout()

list.forEach((target) => {
  // 拦截多次布局： rotateOf会产生布局数据修改，getInnerPoint发现布局有变化，会再请求布局
  target.rotateOf(target.getInnerPoint(worldOrigin), rotation)
})

leafer.unlockLayout()
```

## 配置

### [引擎配置](/reference/config/app/base.md)

## 视图

### [缩放平移视图](/guide/advanced/viewport.md)

## 监听事件

### [LeaferEvent](/reference/event/basic/Leafer.md)

### [ChildEvent](/reference/event/basic/Child.md)

### [PropertyEvent](/reference/event/basic/Property.md)

### [WatchEvent](/reference/event/basic/Watch.md)

### [LayoutEvent](/reference/event/basic/Layout.md)

### [RenderEvent](/reference/event/basic/Render.md)

### [KeyEvent](/reference/event/ui/Key.md)

### [ResizeEvent](/reference/event/basic/Resize.md)

<!-- ## 继承元素

### [Group](./Group.md) -->

## 示例

### 创建固定宽高的 Leafer

view 参数支持 window 、div、canvas 标签对象，注意 view 为 id 字符串时不用加 # 号。

::: code-group
```ts
// #创建固定宽高的 Leafer [window]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window, // view 参数支持设置 window 对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [div]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
document.body.appendChild(div)

const leafer = new Leafer({
    view: div, // view 参数支持设置 div 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [canvas]
import { Leafer, Rect } from 'leafer-ui'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const leafer = new Leafer({
    view: canvas, // view 参数支持设置 canvas 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [id]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
div.setAttribute('id', 'leafer-view')
document.body.appendChild(div)


const leafer = new Leafer({
    view: 'leafer-view', // view 参数支持使用id字符串(不用加 # 号)
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
:::

### 创建自适应布局的 Leafer

当画布的父节点尺寸改变后会自动 resize， [了解详情](/reference/config/app/canvas.md#自适应布局)。

::: code-group
```ts
// #创建自适应布局的 Leafer [full]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 0 } 
const leafer = new Leafer({ view: window, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自适应布局的 Leafer [padding-left]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 100 }
const leafer = new Leafer({ view: window, left: 100, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自适应布局的 Leafer [padding]
import { Leafer, Rect } from 'leafer-ui'

// 四周始终保持固定的间距
const leafer = new Leafer({
    view: window,
    top: 50,
    left: 100,
    right: 100,
    bottom: 30,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
:::

### 创建自动生长的 Leafer

画布大小会生长，自动贴合实际内容，用于快速在 HTML 中嵌入 Leafer 元素，[了解详情](/reference/config/app/canvas.md#自动生长)。

注意 [App 结构](/guide/advanced/app.md) 暂不支持此功能。

::: code-group
```ts
// #创建自动生长的 Leafer [grow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:2] 
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自动生长的 Leafer [grow-width]
import { Leafer, Rect } from 'leafer-ui'

// 宽度自动生长, 高度固定不变
const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:3] 
    height: 200,  // 固定高度
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自动生长的 Leafer [grow-height]
import { Leafer, Rect } from 'leafer-ui'

// 高度自动生长, 宽度固定不变
const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:3] 
    width: 200,  // 固定宽度
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
:::

### 单独指定缩放层

默认将 leafer 自身作为平移缩放层(viewport 视口)，可单独指定一个 [Group](/reference/display/Group.md) 作为平移缩放层。

::: code-group
```ts
// #单独指定缩放层 [Leafer]
import { Leafer, Group, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window, type: 'viewport' })

const group = new Group() // [!code hl:4]
leafer.add(group)

leafer.zoomLayer = group

// fixed layer
leafer.add(new Rect({ fill: '#FF4B4B', draggable: true }))

// zoom / move layer
group.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))
```

```ts
// #单独指定缩放层 [App]
import { App, Group, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, tree: { type: 'viewport' } })

const group = new Group() // [!code hl:4]
app.tree.add(group)

app.tree.zoomLayer = group

// fixed layer
app.tree.add(new Rect({ fill: '#FF4B4B', draggable: true }))

// zoom / move layer
group.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))
```
:::

### 监听浏览器 unload 事件自动销毁

```ts
// #监听浏览器 unload 事件自动销毁
import { ImageManager, Leafer } from 'leafer-ui'

// chrome 刷新页面时不会销毁实例，需要主动销毁
window.addEventListener('unload', () => {
    const { list } = Leafer
    list.forEach(leafer => (leafer as Leafer).destroy(true))
    list.destroy()
    ImageManager.destroy()
})
```
