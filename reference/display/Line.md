<script setup>
import Case from '/component/Case.vue'
</script>

# Line

绘制横线、斜线、竖线、折线、平滑曲线、趋势图。

<case name="Line" editor=false></case>

<br/>

::: tip 继承
Line &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

直线的长度。

### rotation: `number`

[旋转角度](../interface/math/Math#rotation)， 取值范围: -180 ～ 180。

```ts
// 竖线
width: 100
rotation: 90
```

### 计算属性

### toPoint: [IPointData](../interface/math/Math#ipointdata)

目标点（相对元素 **起点** 的坐标）， 自动换算出 `width` 与 `rotation`。

```ts
line.toPoint = { x: 0, y: 100 }

console.log(line.toPoint) // {x: 0, y: 100})  会根据 width 与 rotation 自动换算
```

## points 模式

可通过 points 定义折线。

### points: `number`[] | [IPointData](../interface/math/Math#ipointdata)[]

可通过坐标数组 [ x1,y1, x2,y2, ...] 绘制折线（高性能）。

或通过坐标对象数组 [ {x, y}, {x, y} ...] 绘制折线 （可读性高，性能一般）。

### curve: `boolean` | `number`

是否转换为平滑路径，默认为 false。

可设置 0 ～ 1 控制曲率，默认为 0.5。

### closed: `boolean`

是否自动闭合路径，默认为 false

## 路径模式

### [path 优先模式](/reference/property/path.md)

## 圆角属性

### cornerRadius: `number`

圆角大小，使折线拐角处变的圆滑。

<!-- ## 继承元素

### [UI](./UI.md) -->

<!--
## API

### [Line](/api/classes/Line.md) -->

## 示例

<case name="Line" index=0 editor=false></case>

### 绘制横线

```ts
// #创建 Line [绘制横线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:4]
    width: 100,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=1 editor=false></case>

### 绘制到目标点的直线

```ts
// #创建 Line [绘制到目标点的直线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    toPoint: { x: 100, y: 50 },
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=2 editor=false></case>

### 绘制斜线

```ts
// #创建 Line [绘制斜线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    width: 100,
    rotation: 45,
    strokeWidth: 5,
    stroke: '#32cd79',
    dashPattern: [10, 10] // 虚线描边属性
})

leafer.add(line)
```

<case name="Line" x = 5 index=6 editor=false></case>

### 绘制竖线

```ts
// #创建 Line [绘制竖线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    width: 100,
    rotation: 90,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=8 editor=false></case>

### 绘制折线

```ts
// #创建 Line [绘制折线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=3 editor=false></case>

### 绘制圆角折线

```ts
// #创建 Line [绘制圆角折线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
    cornerRadius: 5,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=4 editor=false></case>

### 绘制曲线

```ts
// #创建 Line [绘制曲线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    curve: true,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=7 editor=false></case>

### 绘制 0.2 曲率的曲线

```ts
// #创建 Line [绘制 0.2 曲率的曲线]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    curve: 0.2,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

<case name="Line" x = 5 index=5 editor=false></case>

### 绘制趋势图

```ts
// #创建 Line [绘制趋势图]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:6]
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],  // [x,y, x,y ...]
    curve: true,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```
