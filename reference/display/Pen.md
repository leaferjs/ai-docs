<script setup>
import Case from '/component/Case.vue'
</script>

# Pen

像绘画一样，快速画出不同样式的路径组合，支持 Canvas 2D 绘制路径的 [API 方法](/reference/display/Pen.md#绘制路径)。

<case name="Pen" editor=false></case>

<br/>

::: tip 继承
Pen &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### pathElement：[`Path`](./Path.md)

当前子路径元素，setStyle() 自动创建。

## 关键方法

### setStyle ( data: `IPathInputData`)

设置画笔的样式，实际上是创建了一条 [子路径](./Path.md) 待用。

先为画笔设置样式，再绘制路径，支持 [Path](./Path.md) 和 [UI](./UI.md) 的所有属性样式。

### add ( ui: [`UI`](./UI.md))

添加图形元素。

### clear ( )

清空所有绘制的内容（移除 + 销毁）。

<!--@include: ../path/PathDrawer.md-->

<!-- ## 继承元素

### [Group](./Group.md) -->

<!--
## API

### [Pen](/api/classes/Pen.md) -->

## 示例

<case name="Pen" index=0 editor=false></case>

### 画出不同颜色的形状

```ts
// #创建 Pen [画出不同颜色的形状]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ x: 50, y: 50, fill: '#FEB027' })
pen.arc(0, 0, 20)

leafer.add(pen)
```

<case name="Pen" index=2 editor=false></case>

### 画曲线

```ts
// #创建 Pen [画曲线]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } })
pen.roundRect(0, 0, 100, 100, 30)

pen.setStyle({ y: -5, fill: 'white' })
pen.moveTo(40, 30).bezierCurveTo(70, 30, 90, 60, 63, 80).quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(pen)
```

<case name="Pen" index=3 editor=false></case>

### 结合图形组件

```ts
// #创建 Pen [结合图形组件]
import { Leafer, Pen, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:8]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#79CB4D' }, { offset: 1, color: '#FEB027' }] } })
pen.roundRect(0, 0, 100, 100, 30)

pen.add(new Ellipse({ x: 20, y: 20, width: 60, height: 60, innerRadius: 0.5, startAngle: -60, endAngle: 180, fill: 'white' }))

leafer.add(pen)
```

<case name="Pen" index=4 editor=false></case>

### 结合图片

```ts
// #创建 Pen [结合图片]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#4DCB71' }, { offset: 1, color: '#79CB4D' }] }, windingRule: 'evenodd' })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ fill: { type: 'image', url: '/image/leafer.jpg' } })
pen.arc(50, 50, 20)

leafer.add(pen)
```

<case name="Pen" index=5 editor=false></case>

### 结合文字

```ts
// #创建 Pen [结合文字]
import { Leafer, Pen, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:11]

pen.setStyle({ stroke: '#4DCB71', strokeWidth: 4, strokeAlign: 'inside' })
pen.roundRect(0, 20, 100, 60, 30)

pen.add(new Text({ x: 60, y: 42, fill: '#4DCB71', fontSize: 16, text: 'ON' }))

pen.setStyle({ fill: '#4DCB71' })
pen.arc(30, 50, 23)

leafer.add(pen)
```
