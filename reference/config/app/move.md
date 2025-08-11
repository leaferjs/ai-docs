# 应用与引擎配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; 平移视图 &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

平移视图相关配置，引擎运行中修改 [app.config.move](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### move.disabled: `boolean`

是否禁用平移视图交互，默认为 false。

### move.scroll: `boolean` ｜ `'x'` | `'y'` | `'limit'` | `'x-limit'` | `'y-limit'`

是否对平移滚动视图增加限制，默认为 false。

设置 true，表示同一时间只能在单个方向上滚动。

设置 'x'，表示只能横向滚动。

设置 'y'，表示只能纵向滚动。

设置 'limit'，表示限制在有内容的区域内滚动，类似浏览器和文档类应用的滚动交互方式。

设置 'x-limit'，表示只能横向滚动，且限制在有内容的区域内滚动。

设置 'y-limit'，表示只能纵向滚动，且限制在有内容的区域内滚动。

### move.drag: `boolean` | `'auto'`

拖拽时是否平移视图，默认为 false。

设置 true, 元素的交互功能将停用，所有地方拖拽将平移视图，一般用于预览模式。

设置 'auto'，元素的交互功能仍保留，draggable / editable 元素仍可以单独拖拽，其他地方拖拽将平移视图。

### move.dragAnimate: `boolean`

拖拽视图结束时是否有惯性动画， 默认为 false。

### move.holdSpaceKey: `boolean`

按住空白键拖拽是否平移视图，默认为 true。

### move.holdMiddleKey: `boolean`

按住滚轮中键拖拽是否平移视图，默认为 true。

### move.holdRightKey: `boolean`

按住右键拖拽是否平移视图，默认为 false。

### move.dragEmpty: `boolean`

空白处拖拽是否平移视图，默认为 false。

### move.dragOut: `boolean` | `number`

当拖拽元素到达界面边界时，是否自动平移视图，默认为 false。

设置数字时，表示距离边界多少像素触发自动平移功能。

### move.autoDistance: `number`

设置 dragOut 每帧自动平移视图的距离，默认为 2。

## 示例

### 拖拽时直接平移视图（预览模式）

::: code-group
```ts
// #应用与引擎配置 - 拖拽时直接平移视图 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, tree: { type: 'viewport' } })

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))

app.config.move.drag = true  // [!code hl] // 预览模式，可在应用运行中实时修改。
```
```ts
// #应用与引擎配置 - 拖拽时直接平移视图 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window, type: 'viewport' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))


leafer.config.move.drag = true  // [!code hl] // 预览模式，可在应用运行中实时修改。
```
:::

### 拖拽至边界时自动平移视图

::: code-group
```ts
// #应用与引擎配置 - 拖拽至边界时自动平移视图 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: {},
    move: { dragOut: true } // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))
```
```ts
// #应用与引擎配置 - 拖拽至边界时自动平移视图 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    move: { dragOut: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))
```
:::
