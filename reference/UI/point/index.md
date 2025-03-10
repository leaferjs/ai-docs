# 转换坐标

[世界坐标](/guide/basic/coordinate.md#world) 与 [page 坐标](/guide/basic/coordinate.md#page)、
[本地坐标](/guide/basic/coordinate.md#local)、[内部坐标](/guide/basic/coordinate.md#inner)、[box 坐标](/guide/basic/coordinate.md#box) 的互相转换。

支持 [转换移动距离](#转换移动距离)、 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)。另提供了 [快速转换](./high.md) 的高性能方法。

## 转换世界坐标

### getPagePoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 page 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [page 坐标](/guide/basic/coordinate.md#page) ）。

### getLocalPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local) ）。

### getInnerPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

### getBoxPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [box 坐标](/guide/basic/coordinate.md#box) ）。

## 转换 page 坐标

### getWorldPointByPage ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [page 坐标](/guide/basic/coordinate.md#page) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

## 转换本地坐标

### getWorldPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getInnerPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

## 转换内部坐标

### getWorldPoint ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getLocalPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [本地坐标](/guide/basic/coordinate.md#local) ）。

### getBoxPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [box 坐标](/guide/basic/coordinate.md#box) ）。

## 转换 box 坐标

### getWorldPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getInnerPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

## 可选参数说明

### 相对元素

第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

### 转换移动距离

第三个可选参数： distance?: `boolean`

### 直接修改坐标

第四个可选参数：change?: `boolean`

直接修改传入的坐标返回，可以节省创建新对象的开销。

## 相关

### 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 世界坐标转内部坐标

```ts
// #坐标转换 [世界坐标转内部坐标]
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

leafer.add(group)

// 世界坐标转内部坐标
const worldPoint = { x: 100, y: 100 } // [!code hl:4]
const innerPoint = group.getInnerPoint(worldPoint)

console.log(innerPoint) // {x: 10, y: 10}
```

### 获取 frame 坐标

使用第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

```ts
// #坐标转换 [内部坐标转世界坐标]
import { Leafer, Frame, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 50, y: 50, scale: 5, fill: '#32cd79' })
const frame = new Frame({ x: 200, y: 100, width: 600, height: 800, children: [rect] })

leafer.add(frame)

// 内部坐标转世界坐标、frame坐标
const innerPoint = { x: 10, y: 10 } // [!code hl:6]
const worldPoint = rect.getWorldPoint(innerPoint)
const framePoint = rect.getWorldPoint(innerPoint, frame)

console.log(worldPoint) // {x: 300, y: 200} 
console.log(framePoint) // {x: 100, y: 100} 在 frame 中的坐标
```

### 获取内部移动距离

使用第三个可选参数： distance?: `boolean`

可以转换移动距离、长度。

```ts
// #坐标转换 [世界坐标中的移动距离 转 内部坐标移动距离]
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

leafer.add(group)

// 世界坐标中的移动距离 转 内部坐标移动距离
const worldMovePoint = { x: 100, y: 100 } // [!code hl:4]
const innerMovePoint = group.getInnerPoint(worldMovePoint, null, true)

console.log(innerMovePoint) // {x: 20, y: 20}
```

### 拖拽创建图形

拖拽 dom 元素到画布中创建图形，需要使用浏览器原生坐标转换

::: code-group
```ts
// #拖拽创建图形 [添加到 tree]
import { App, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

// 创建可拖拽的 dom 图形（圆形、矩形）
document.body.innerHTML = `
<div id="circle" draggable="true" style="width: 50px; height: 50px; border-radius: 25px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="rect" draggable="true" style="width: 50px; height: 50px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="leafer" style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0;"></div>
`

// 创建应用
const app = new App({ view: 'leafer', fill: '#333', editor: {} })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '可拖拽上方图形到这里', fill: '#999', fontSize: 16 })


// 设置拖拽数据
document.getElementById('rect').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'rect')
})

document.getElementById('circle').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'circle')
})


// 让画布可以接收拖拽内容
document.getElementById('leafer').addEventListener('dragover', function (e) {
    e.preventDefault()
})

// 拖拽释放，创建相应图形
document.getElementById('leafer').addEventListener('drop', function (e) {
    const type = e.dataTransfer.getData("type")
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标 // [!code hl:6] 
    if (type === 'rect') {
        app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, point.x, point.y))
    } else if (type === 'circle') {
        app.tree.add(Ellipse.one({ fill: '#32cd79', editable: true }, point.x, point.y))
    }
})

```
```ts
// #拖拽创建图形 [添加到 Frame]
import { App, Frame, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

// 创建可拖拽的 dom 图形（圆形、矩形）
document.body.innerHTML = `
<div id="circle" draggable="true" style="width: 50px; height: 50px; border-radius: 25px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="rect" draggable="true" style="width: 50px; height: 50px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="leafer" style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0;"></div>
`

// 创建应用
const app = new App({ view: 'leafer', fill: '#333', editor: {} })

const frame = Frame.one({
    children: [{ tag: 'Text', x: 100, y: 100, text: '可拖拽上方图形到这里', fill: '#999', fontSize: 16 }]
}, 100, 100, 500, 500)

app.tree.add(frame)


// 设置拖拽数据
document.getElementById('rect').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'rect')
})

document.getElementById('circle').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'circle')
})


// 让画布可以接收拖拽内容
document.getElementById('leafer').addEventListener('dragover', function (e) {
    e.preventDefault()
})

// 拖拽释放，创建相应图形
document.getElementById('leafer').addEventListener('drop', function (e) {
    const type = e.dataTransfer.getData("type")
    const point = app.getWorldPointByClient(e) // 浏览器原生事件的 client 坐标 转 世界坐标 // [!code hl:7] 
    const framePoint = frame.getInnerPoint(point) // 世界坐标 再转 frame 内坐标
    if (type === 'rect') {
        frame.add(Rect.one({ fill: '#32cd79', editable: true }, framePoint.x, framePoint.y))
    } else if (type === 'circle') {
        frame.add(Ellipse.one({ fill: '#32cd79', editable: true }, framePoint.x, framePoint.y))
    }
})

```
:::
