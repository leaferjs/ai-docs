<script setup>
import Case from '/component/Case.vue'
</script>

# 创建元素

<case name="Rect" index=7 editor=false></case>

## 标准创建

创建一个有背景色的矩形。

```ts
// #创建元素 [标准创建]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:7]
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79' // 背景色
})

leafer.add(rect)
```

## 简洁创建

```ts
// #创建元素 [简洁创建]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })
// [!code hl:3]
// 元素.one( data, x?, y?, width?, height?)
const rect = Rect.one({ fill: '#32cd79' }, 100, 100, 100, 100)

leafer.add(rect)
```

## 使用 tag

```ts
// #创建元素 [使用 tag]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add({ // [!code hl:8]
    tag: 'Rect', // 必须要有类名tag
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79'
})
```

## 使用 JSON

了解 JSON 数据 [导入导出](/reference/UI/json.md)。

```ts
// #创建元素 [使用 JSON]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const json = { "tag": 'Group', "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] }// [!code hl:3]

leafer.add(json)
```

## 初步了解图形元素

### [Rect 元素](/reference/display/Rect.md)

绘制矩形、圆角矩形。

<case name="Rect" editor=false></case>

```ts
// #创建 Rect [绘制不同圆角的矩形 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: [0, 40, 20, 40]
})

leafer.add(rect)
```

### [Ellipse 元素](/reference/display/Ellipse.md)

绘制圆、圆环、扇形圆环、扇形、弧线、椭圆，想从中心点绘制，可以了解 [around](/reference/UI/around.md)。

<case name="Ellipse" editor=false></case>

```ts
// #创建 Ellipse [绘制扇形圆环 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:8]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "#32cd79"
})

leafer.add(ellipse)
```

### [Line 元素](/reference/display/Line.md)

绘制横线、斜线、竖线、折线、平滑曲线、趋势图。

<case name="Line" editor=false></case>

```ts
// #创建 Line [绘制横线 (Leafer)]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:4]
    width: 100,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)
```

### [Polygon 元素](/reference/display/Polygon.md)

绘制三角形、菱形、五边形、正多边形、自由多边形、平滑多变形、趋势图。

<case name="Polygon" editor=false></case>

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

### [Star 元素](/reference/display/Star.md)

绘制车标、星光、五角星、多角星形。

<case name="Star" editor=false></case>

```ts
// #创建 Star [绘制圆角星形 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:8]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#32cd79'
})

leafer.add(star)
```

### [Path 元素](/reference/display/Path.md)

绘制路径，可以画出任意形状的图形，支持 [SVG 绘图字符串](/reference/interface/ui/PathData.md#ipathstring) 、 [绘图数字数组](/reference/interface/ui/PathData.md#ipathcommanddata)、[绘图对象数组](/reference/interface/ui/PathData.md#ipathcommandobject)。

可通过 [pen 画笔](/reference/display/Path.md#pen-pathcreator) 快速绘制路径。

<case name="Path" editor=false></case>

```ts
// #创建 Path [标准创建 (Leafer)]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({ // [!code hl:5]
    scale: 0.1,
    path: 'M945.344 586.304c-13.056-93.44-132.48-98.048-132.48-98.048 0-29.888-39.808-47.424-39.808-47.424L201.664 440.832c-36.736 0-42.112 51.264-42.112 51.264 7.68 288 181.44 382.976 181.44 382.976l299.456 0c42.88-31.36 101.888-122.56 101.888-122.56 9.216 3.072 72.768-0.832 97.984-6.144C865.6 740.992 958.336 679.68 945.344 586.304zM365.568 825.28c-145.472-105.664-130.944-328.576-130.944-328.576l80.448 0c-44.416 126.4 43.648 285.696 55.872 307.904C383.232 826.816 365.568 825.28 365.568 825.28zM833.472 694.272c-37.568 22.272-65.152 7.68-65.152 7.68 39.04-54.4 42.112-159.296 42.112-159.296 6.848 2.304 12.288-26.048 61.312 23.744C920.768 616.128 871.04 672.064 833.472 694.272z M351.68 129.856c0 0-119.424 72.832-44.416 140.928 75.008 68.16 68.16 93.44 24.512 153.216 0 0 81.92-41.344 71.168-104.192s-89.6-94.208-72.768-137.792C347.136 138.304 351.68 129.856 351.68 129.856z M615.232 91.648c0 0-119.488 72.832-44.352 140.928 74.944 68.16 68.032 93.44 24.448 153.216 0 0 81.984-41.344 71.232-104.192-10.688-62.784-89.6-94.208-72.832-137.792C610.624 100.032 615.232 91.648 615.232 91.648z M491.136 64c0 0-74.304 6.144-88.128 78.144C389.248 214.144 435.968 240.96 471.936 276.992 507.904 312.96 492.608 380.352 452.032 427.904c0 0 72.768-25.344 89.6-94.976 16.832-69.76-17.344-94.272-52.8-134.784C453.312 157.504 456.64 83.968 491.136 64z',
    fill: '#32cd79'
})

leafer.add(path)
```

### [Pen 元素](/reference/display/Pen.md)

像绘画一样，快速画出不同样式的路径组合，支持 Canvas 2D 绘制路径的 [API 方法](/reference/display/Pen.md#绘制路径)。

<case name="Pen" editor=false></case>

```ts
// #创建 Pen [画出不同颜色的形状 (Leafer)]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ x: 50, y: 50, fill: '#FEB027' })
pen.arc(0, 0, 20)

leafer.add(pen)
```

### [Image 元素](/reference/display/Image.md)

图片对象，支持使用 svg 格式的图片，另外所有图形都支持通过 [图案填充](/reference/UI/paint/image.md) 来显示图片。

<case name="ImageFill" editor=false></case>

```ts
// #创建Image [使用默认宽高 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    draggable: true
})

leafer.add(image)
```

### [SVG 元素](/reference/display/SVG.md)

[Image 元素](/reference/display/Image.md) 和 [图案填充](/reference/UI/paint/image.md) 都支持直接加载 svg 格式的图片。

svg 图片采用了特殊的渲染逻辑，可以实现高清晰缩放.

```ts
// #Image 加载 SVG [使用svg字符串]
import { Leafer, Image, Platform } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const svg = `
<svg width="48" height="24" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M7.5 8.0H8.5V5.9L6.8 7.2L7.5 8.0ZM3 11.4L2.3 10.6L1.3 11.4L2.3 12.2L3 11.4ZM7.5 10.4H6.5V11.4H7.5V10.4ZM16.5 10.4V11.4H17.5V10.4H16.5ZM16.5 8.0L17.1 7.2L15.5 5.9V8.0H16.5ZM21 11.4L21.6 12.2L22.6 11.4L21.6 10.6L21 11.4ZM16.5 14.9H15.5V16.9L17.1 15.7L16.5 14.9ZM16.5 12.4H17.5V11.4H16.5V12.4ZM7.5 12.4V11.4H6.5V12.4H7.5ZM7.5 14.9L6.8 15.7L8.5 16.9V14.9H7.5ZM6.8 7.2L2.3 10.6L3.6 12.2L8.1 8.7L6.8 7.2ZM8.5 10.4V8.0H6.5V10.4H8.5ZM16.5 9.4H7.5V11.4H16.5V9.4ZM17.5 10.4V8.0H15.5V10.4H17.5ZM15.8 8.7L20.3 12.2L21.6 10.6L17.1 7.2L15.8 8.7ZM20.3 10.6L15.8 14.1L17.1 15.7L21.6 12.2L20.3 10.6ZM17.5 14.9V12.4H15.5V14.9H17.5ZM7.5 13.4H16.5V11.4H7.5V13.4ZM8.5 14.9V12.4H6.5V14.9H8.5ZM2.3 12.2L6.8 15.7L8.1 14.1L3.6 10.6L2.3 12.2Z" fill="white"/>
<path fill-rule="evenodd" d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z" fill="black"/>
</g>
</svg>`

const image = new Image({  // [!code hl:3]
    url: Platform.toURL(svg, 'svg'),
    draggable: true
})

leafer.add(image)


```

### [Canvas 元素](/reference/display/Canvas.md)

画布对象，可以自由绘制、操作像素，或将其他图形直接绘制到 Canvas 上。

<case name="Pen" editor=false></case>

```ts
// #创建 Canvas [使用 context 绘制 (Leafer)]
import { Leafer, Canvas } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const canvas = new Canvas({ width: 800, height: 600 }) // [!code hl:15]
const { context } = canvas

context.fillStyle = '#FF4B4B'
context.beginPath()
context.roundRect(0, 0, 100, 100, 30)
context.arc(50, 50, 25, 0, Math.PI * 2)
context.fill('evenodd')

context.fillStyle = '#FEB027'
context.beginPath()
context.arc(50, 50, 20, 0, Math.PI * 2)
context.fill()

canvas.paint() // 更新渲染

leafer.add(canvas)

```

### [Text 元素](/reference/display/Text.md)

绘制文本。与 HTML5 文本显示效果基本一致，支持多行文本。

<case name="Text" editor=false></case>

```ts
// #创建 Text [标准创建 (Leafer)]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: '#32cd79',
    text: 'Welcome to LeaferJS',
})

leafer.add(text)
```

### [UI 元素](/reference/display/UI.md)

基础元素（所有元素的基类）。

### [Custom 元素](/reference/display/custom/base/register.md)

根据需要自定义元素。

## 了解组元素

### [Group 元素](/reference/display/Group.md)

用于组合多个子元素，自身没有填充/描边等外观样式，可设置 x、y、scale、rotation 等属性，子元素相对其进行定位，支持不断嵌套。

```ts
// #创建 Group [通过 add 方法添加 (Leafer)]
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

const ellipse = new Ellipse({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#FEB027"
})

const group = new Group({ // [!code hl:4]
    x: 100,
    y: 100
})

group.add([rect, ellipse])

leafer.add(group)
```

### [Box 元素](/reference/display/Box.md)

支持 [Group](/reference/display/Group.md) 的功能和 [Rect](/reference/display/Rect.md) 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套 。

<case name="Box" editor=false></case>

```ts
// #创建 Box [标准创建 (Leafer)]
import { Leafer, Box, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const box = new Box({ // [!code hl:4]
    width: 100,
    height: 100,
    fill: '#FF4B4B'
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```

### [Frame 元素](/reference/display/Frame.md)

继承自 [Box](/reference/display/Box.md)，默认白色背景、会裁剪掉超出宽高的内容，类似于 HTML5 中的页面，一般用于设计软件中创建画板。

<case name="Frame" editor=false></case>

```ts
// #创建 Frame [标准创建 (Leafer)]
import { Leafer, Frame, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({ // [!code hl:4]
    width: 100,
    height: 100
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#32cd79',
    draggable: true
})

leafer.add(frame)
frame.add(circle)
```

## 下一步

### [设置样式](/guide/basic/style.md)
