# 快速转换

[世界坐标](/guide/basic/coordinate.md#world)与[本地坐标](/guide/basic/coordinate.md#local)、[内部坐标](/guide/basic/coordinate.md#inner)的快速转换， 直接修改传入的坐标，另提供了 [简易转换](./index.md) 的方法。

支持 [转换移动距离](#转换移动距离)。

## 关键方法

### worldToInner ( worldPoint:[`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner)， 直接修改 world。

### worldToLocal ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local)， 直接修改 world。

### innerToWorld ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ， 直接修改 inner。

### localToWorld ( localPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world)， 直接修改 local。

## 可选参数

所有转换方法都支持。

### 不直接修改坐标

第二个可选参数：to?: [`IPointData`](/reference/interface/math/Math.md#ipointdata) 用于存储转换后的结果

### 转换移动距离

第三个可选参数： distance?: `boolean`

### 相对元素

第四个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 转换为本地坐标

```ts
// #快速坐标转换 [世界坐标转本地坐标]
import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2, children: [rect] })

leafer.add(group)

// 世界坐标转本地坐标
const point = { x: 100, y: 100 } // [!code hl:4]
rect.worldToLocal(point)

console.log(point) // {x: 0, y: 0}
```

### 转换为本地移动距离

```ts
// #快速坐标转换 [世界坐标中的移动距离 转 本地坐标移动距离]
import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2, children: [rect] })

leafer.add(group)

// 世界坐标中的移动距离 转 本地坐标移动距离
const worldMove = { x: 10, y: 10 }  // [!code hl:5]
const localMove = { x: 0, y: 0 }
rect.worldToLocal(worldMove, localMove, true)

console.log(localMove) // {x: 5, y: 5}

```
