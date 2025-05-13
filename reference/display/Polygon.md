<script setup>
import Case from '/component/Case.vue'
</script>

# Polygon 元素

绘制三角形、菱形、五边形、正多边形、自由多边形、平滑多变形、趋势图。

<case name="Polygon" editor=false></case>

<br/>

::: tip 继承
Polygon &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

正多边形的宽度。

### height: `number`

正多边形的高度。

### sides: `number`

正多边形的边数，取值范围为 >=3。

内部逻辑：在一个圆上每 (360 / sides) 度取一个点，再将点连成线，组成一个正多边形。

```ts
// 五边形
sides: 5
```

## points 模式

可通过 points 定义自由多边形。

### points: `number`[] | [IPointData](../interface/math/Math#ipointdata)[]

可通过坐标数组 [ x1,y1, x2,y2, ...] 绘制自由多边形（高性能）。

或通过坐标对象数组 [ {x, y}, {x, y} ...] 绘制自由多边形 （可读性高，性能一般）。

### curve: `boolean` | `number`

是否转换为平滑路径，默认为 false。

可设置 0 ～ 1 控制曲率，默认为 0.5。

## 路径模式

### [path 优先模式](/reference/UI/path.md)

## 圆角属性

### cornerRadius: `number`

圆角大小，使图形拐角处变的圆滑。

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Polygon](/api/classes/Polygon.md) -->

## 示例

<case name="Polygon" index=0 editor=false></case>

### 绘制三角形

::: code-group
```ts
// #创建 Polygon [绘制三角形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:6]
    width: 100,
    height: 100,
    sides: 3,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制三角形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:7]
    width: 100,
    height: 100,
    sides: 3,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=1 editor=false></case>

### 绘制五边形

::: code-group
```ts
// #创建 Polygon [绘制五边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:6]
    width: 100,
    height: 100,
    sides: 5,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制五边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:7]
    width: 100,
    height: 100,
    sides: 5,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=2 editor=false></case>

### 绘制圆角六边形

::: code-group
```ts
// #创建 Polygon [绘制圆角六边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:7]
    width: 100,
    height: 100,
    sides: 6,
    cornerRadius: 10,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制圆角六边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:8]
    width: 100,
    height: 100,
    sides: 6,
    cornerRadius: 10,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=3 editor=false></case>

### 绘制自由多边形

::: code-group
```ts
// #创建 Polygon [绘制自由多边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:4]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制自由多边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=4 editor=false></case>

### 绘制平滑多边形

::: code-group
```ts
// #创建 Polygon [绘制平滑多边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: true,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制平滑多边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: true,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=6 editor=false></case>

### 绘制 0.2 曲率的平滑多边形

::: code-group
```ts
// #创建 Polygon [绘制 0.2 曲率的平滑多边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: 0.2,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制 0.2 曲率的平滑多边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],  // [x,y, x,y ...]
    curve: 0.2,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::

<case name="Polygon" index=5 editor=false></case>

### 绘制趋势图

::: code-group
```ts
// #创建 Polygon [绘制趋势图 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:5]
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79'
})

leafer.add(polygon)
```
```ts
// #创建 Polygon [绘制趋势图 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:6]
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)
```
:::
