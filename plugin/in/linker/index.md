<script setup>
import Case from '/component/Case.vue'
</script>

# Linker 元素

Linker —— 高性能 Canvas 连线元素。

如需可视化创建、编辑连线，可使用 [Linker Editor 插件](../linker-editor/index.md)。

::: tip 继承
Linker &nbsp;>&nbsp; [Line](../../../reference/display/Line.md) &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

## 更新日志

开源前的最后版本为 v1.0.2，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 linker 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/linker)。

::: code-group

```sh [npm]
npm install @leafer-in/linker
```

```sh [pnpm]
pnpm add @leafer-in/linker
```

```sh [yarn]
yarn add @leafer-in/linker
```

```sh [bun]
bun add @leafer-in/linker
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.linker 访问插件内部功能。

::: code-group

```html [linker.min]
<script src="https://unpkg.com/@leafer-in/linker@2.3.1/dist/linker.min.js"></script>
<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

```html [linker]
<script src="https://unpkg.com/@leafer-in/linker@2.3.1/dist/linker.js"></script>
<script>
  const { Linker, LinkerData } = LeaferIN.linker
</script>
```

:::

## 关键属性

### startPoint: `ILinkerPointData`

连线的起点。

```ts
interface ILinkerPointData {
  id?: string | UI // 起点元素的 id，也支持元素实例（只是导出不了json）
  direction?: IDirection4 | 'center' // 连线的方向（相对元素），为 center 时表示自动方向
  point?: IAlign | IUnitPointData // 连接点（相对元素实际内容的box坐标点，支持使用对齐方向名、百分比坐标）
  offset?: IOptionPointData // 相对连接点的偏移值
}

type IDirection4 = 'top' | 'right' | 'bottom' | 'left'

type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

interface IUnitPointData extends IPointData {
  type?: 'percent' | 'px'
}

interface IPointData {
  x: number
  y: number
}

interface IOptionPointData {
  x?: number
  y?: number
}
```

### endPoint: `ILinkerPointData`

连线的终点。

## points 模式

可通过 points 添加连线的途径点。

### points: `number`[] | [IPointData](../../../reference/interface/math/Math#ipointdata)[]

可通过坐标数组 [ x1,y1, x2,y2, ...] 添加连线的途径点（高性能）。

或通过坐标对象数组 [ {x, y}, {x, y} ...] 添加连线的途径点 （可读性高，性能一般）。

### curve: `IPointsCurveData`

平滑途径点的方式。

支持 [自定义平滑 points 类型](../../../reference/interface/ui/PathData.md#ipointscurve)。

```ts
interface IPointsCurveData {
  type: IPointsCurveType
  value: IPointsCurveValue
}

type IPointsCurveType =
  | 'C' // 使用三次贝塞尔曲线平滑 points，已扩展， 默认值
  | (string & {})

// 默认对象
linker.curve = {
  type: 'C',
  value: 0.5, // 曲率，取值范围 0-1,
}
```

## 计算属性（只读）

只有当连线元素首次布局后，以下属性才有值。

### startNode: [UI](../../../reference/display/UI.md)

连线起点的元素实例。

### endNode: [UI](../../../reference/display/UI.md)

连线终点的元素实例。

### startData: `ILinkerComputedPointData`

连线起点的计算数据。

```ts
interface ILinkerComputedPointData {
  auto: boolean // 是否自动连线方向
  direction: IAlign // 当前实际的连线方向 （相对元素）
  point: IPointData // 当前实际连接点的坐标 （相对元素实际内容的box坐标系）
}
```

### endData: `ILinkerComputedPointData`

连线终点的计算数据。

## 被连线元素上增加的属性

### startLinker?: `Linker`[]

以当前元素作为起点的所有连线实例。

### endLinker?: `Linker`[]

以当前元素作为终点的所有连线实例。

## 关键方法

### createStartPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

创建连线的起点 [startPoint](#startpoint-ilinkerpointdata)。

根据事件中的 [world 世界坐标点](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#world-%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E7%B3%BB)，自动获取在 node 目标元素上的连接点数据进行创建。

node 参数不存在时将创建纯坐标点。

```ts
interface IPointData {
  x: number
  y: number
}

interface ILinkerPointOptions {
  snapRadius?: number // 吸附到方向点上之后，如果吸附距离超过这个吸附半径（相对元素的Box坐标系），连接点对象会自动增加 offset: {x,y}
  mode?:
    | 'edge' // 自动吸附到元素包围盒边缘，默认模式
    | 'four' // 自动吸附到元素包围盒上的4个方向
    | 'auto' // 自动吸附到元素包围盒上，拖拽元素会自动更新最佳方向
    | 'free' // 可以吸附到元素内部
}
```

### createEndPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

创建连线的终点 [endPoint](#endpoint-ilinkerpointdata)。

### createLinkerPoint ( worldPoint: `IPointData`, node?: [UI](../../../reference/display/UI.md), options?: `ILinkerPointOptions` ): `ILinkerPointData`

仅生成连接点，可以自己修改数据后，再设置到连线的 [startPoint](#startpoint-ilinkerpointdata)、[endPoint](#endpoint-ilinkerpointdata) 上。

## 示例

### 创建连线元素

```ts
// #Linker [创建连线元素]
import { App, Box, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1 })] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300, 100, 100)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [new Ellipse({ x: 8, y: 20, width: 8, height: 8, around: 'center', fill: '#836DFF' })] }, 400, 200, 100, 100)


const linker1 = new Linker({  // 类似 AI 工作流连线，位于底部 // [!code hl:6]
    startPoint: { id: 'rect1', point: 'right' },
    endPoint: { id: 'rect3', direction: 'left', point: 'top-left', offset: { y: 20 } },
    stroke: [{ type: 'solid', color: '#000', style: { strokeWidth: 4 } }, { type: 'solid', color: '#836DFF' }],
    strokeWidth: 2,
})

app.tree.add(linker1)


app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)


const linker2 = new Linker({  // 带箭头的连线，位于顶部 // [!code hl:7]
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect3' },
    endArrow: 'angle',
    stroke: '#ff4c4c',
    strokeWidth: 2
})

app.tree.add(linker2)
```

### 带流动动画的连线元素

```ts
// #Linker [带流动动画的连线元素]
import { App, Box, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1 })] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300, 100, 100)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [new Ellipse({ x: 8, y: 20, width: 8, height: 8, around: 'center', fill: '#836DFF' })] }, 400, 200, 100, 100)


const linker1 = new Linker({  // 类似 AI 工作流连线，位于底部 
    startPoint: { id: 'rect1', point: 'right' },
    endPoint: { id: 'rect3', direction: 'left', point: 'top-left', offset: { y: 20 } },
    stroke: '#836DFF',
    strokeWidth: 2,
    dashPattern: [10, 10], // 绘制虚线 
    dashOffset: 0,
    animation: { // 虚线动画 // [!code hl:7]
        style: { dashOffset: -20 },
        easing: 'linear',
        duration: 0.5,
        // reverse: true, // 反向流动
        loop: true,
    }
})

app.tree.add(linker1)


app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)


const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect3' },
    endArrow: 'angle',
    stroke: '#ff4c4c',
    strokeWidth: 2
})

app.tree.add(linker2)
```

### 拖拽创建连线元素

```ts
// #Linker [拖拽创建连线元素]
import { App, Box, DragEvent, Ellipse, LeafList } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const pointA = new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1, cursor: 'cell', data: { id: 'rect1', point: 'right' } })
const pointB = new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1, cursor: 'cell', data: { id: 'rect3', point: 'right' } })
const pointC = new Ellipse({ x: 8, y: 30, width: 8, height: 8, around: 'center', fill: '#836DFF', cursor: 'cell', data: { id: 'rect4', point: 'top-left', offset: { y: 30 } } })

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [pointA] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [pointB] }, 100, 500, 100, 100)
const rect4 = Box.one({ id: 'rect4', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [pointC] }, 400, 200, 100, 100)

app.tree.add([rect1, rect2, rect3, rect4])

const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect4' },
    stroke: '#ff4c4c',
    strokeWidth: 2,
    endArrow: 'angle'
})

app.tree.add(linker2)


// 拖拽创建连线  // [!code hl:33]

listenAdd(pointA)
listenAdd(pointB)
listenAdd(pointC)

function listenAdd(point: Ellipse): void {

    let linker: Linker

    point.on(DragEvent.START, (e: DragEvent) => {
        e.stop()
        linker = new Linker({
            startPoint: { ...point.data },
            stroke: '#836DFF',
            strokeWidth: 2,
        })
        app.tree.add(linker)
    })

    point.on(DragEvent.DRAG, (e: DragEvent) => {
        // 可以增加连接判断逻辑
        const pick = app.tree.pick(e, { exclude: new LeafList([linker, point.parent]) }) // 手动pick元素
        const target = pick && pick.path.list.find(item => item.editable && item.id) // 查找可以连接的元素
        linker.endPoint = linker.createEndPoint(e, target, {
            // 吸附模式
            // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
            // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
            // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
            // mode: 'free' // 可以吸附到元素内部
        })
    })

}

```

### 连线元素固定线宽不随视图放大

```ts
// #Linker [连线元素固定线宽不随视图放大]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Rect.one({ id: 'rect1', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
const rect2 = Rect.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)

app.tree.add(rect1)
app.tree.add(rect2)

const linker = new Linker({
    startPoint: { id: 'rect1' }, // 箭头自动方向
    endPoint: { id: 'rect2' },
    endArrow: 'angle',
    stroke: '#836DFF',
    strokeWidth: 2,
    strokeScaleFixed: 'zoom-in', // 固定线宽，不随视图放大 // [!code hl]
})

app.tree.add(linker)
```

### 创建连线点，自动吸附方向、偏移距离

```ts
// #Linker [创建连线点，自动吸附方向、偏移距离]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Rect.one({ id: 'rect1', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
const rect2 = Rect.one({ id: 'rect2', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300)
const rect3 = Rect.one({ id: 'rect3', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 200)

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)

const linker = new Linker({
    startPoint: { id: 'rect1' },
    endPoint: { id: 'rect3' },
    endArrow: 'arrow',
    stroke: '#836DFF',
    strokeWidth: 2,
})

app.tree.add(linker)

setTimeout(() => {

    // 创建连线点，自动吸附方向 // [!code hl:4]
    console.log(linker.createStartPoint({ x: 400, y: 380 }, rect2, {
        snapRadius: 10 // 吸附到方向点上之后，如果吸附距离超过这个吸附半径（相对元素的Box坐标系），连接点对象会自动增加 offset: {x,y}
    }))

}, 2000)


```
