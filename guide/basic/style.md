<script setup>
import Case from '/component/Case.vue'
</script>

# 设置样式

<case name="Rect" index=8 editor=false></case>

## 初始化样式

创建一个带虚线边框样式的矩形。

```ts
// #初始化元素样式
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:10]
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)
```

## 修改样式

```ts
// #修改样式 [标准修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 标准修改
rect.stroke = 'blue'
rect.strokeWidth = 4
// #endregion main
```

## 简洁修改

```ts
// #修改样式 [简洁修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 简洁修改
rect.set({
    stroke: 'blue',
    strokeWidth: 4,
})
// #endregion main
```

## 重置样式

```ts
// #修改样式 [重置样式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 重置样式
rect.reset()

// 重置为新样式
rect.reset({
    stroke: 'blue',
    strokeWidth: 4,
})
// #endregion main
```

## 修改对象

::: danger 注意事项
元素只能检测到 **第一层级属性** 的 setter 变化，单独修改 rect.fill.url = url 是不会渲染更新的。
:::

```ts
// #修改样式 [修改对象]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
    }
})

leafer.add(rect)

// 修改对象
setTimeout(() => {
    // 元素只能检测到 第一层级属性 的 setter 变化
    // 需要给 fill 再次赋值， 单独修改 rect.fill.url = url 不会渲染更新
    rect.fill = {
        type: 'image',
        url: '/image/arrows.png',
    }
}, 1000)
```

## 使用 JSON

了解 JSON 数据 [导入导出](/reference/UI/json.md)。

```ts
// #修改数据 [使用 JSON]
import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)


```

## 了解元素外观样式

### [fill](/reference/UI/fill.md)

填充，类似于 HTML5 中的 background-color，或文字的 color。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案填充](/reference/UI/paint/image.md) 等类型， 支持多个填充同时叠加。

<case name="Fill"  editor=false></case>

<case name="ImageFill" editor=false></case>

```ts
// #线性渐变填充 [默认方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:4]
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)
```

### [stroke](/reference/UI/stroke.md)

描边，类似于 HTML5 中的 border-color。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案](/reference/UI/paint/image.md) 等类型， 支持多个描边同时叠加。

<case name="Stroke" editor=false></case>

```ts
// #线性渐变描边 [默认方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {  // [!code hl:4]
        type: 'linear',  // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)
```

支持进一步设置描边样式。

| 名称                                                                 | 描述                             | 值                                |
| -------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| [strokeAlign](/reference/UI/stroke.md#strokealign-strokealign)       | 描边的对齐方式                   | 'inside' 、 'center' 、 'outside' |
| [strokeWidth](/reference/UI/stroke.md#strokewidth-number)            | 描边的宽度                       | `number`                          |
| [strokeWidthFixed](/reference/UI/stroke.md#strokewidthfixed-boolean) | 是否固定线宽（不受视图放大影响） | `boolean`                         |
| [strokeCap](/reference/UI/stroke.md#strokecap-strokecap)             | 描边的端点形状                   | 'none' 、 'round' 、'square'      |
| [strokeJoin](/reference/UI/stroke.md#strokejoin-strokejoin)          | 描边的拐角处理                   | 'miter' 、 'bevel' 、 'round'     |
| [dashPattern](/reference/UI/stroke.md#dashpattern-number)            | 虚线描边                         | `number`[]                        |
| [dashOffset](/reference/UI/stroke.md#dashoffset-number)              | 虚线描边的起点偏移值             | `number`                          |

```ts
// #描边样式
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Line({
    y: 100,
    stroke: '#32cd79', // [!code hl:8]
    strokeWidth: 5, // 描边的宽度
    strokeWidthFixed: true, // 是否固定线宽（不受视图放大影响）
    strokeAlign: 'center', // 描边的对齐方式 'inside'、'center' 、'outside'
    strokeCap: 'round', // 描边的端点形状 'none' 、'round' 、'square'
    strokeJoin: 'round', // 描边的拐角处理 'miter' 、'bevel' 、'round'
    dashPattern: [15, 15], // 绘制虚线
    dashOffset: 15,	// 虚线描边的起点偏移值
})

leafer.add(rect)
```

### [shadow](/reference/UI/shadow.md)

元素的外阴影，支持多个阴影叠加、boxShadow 效果。

<case name="Shadow" editor=false></case>

```ts
// #外阴影 [drop-shadow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:6]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```

### [innerShadow](/reference/UI/innerShadow.md)

元素的内阴影，支持多个内阴影叠加。

<case name="InnerShadow" editor=false></case>

```ts
// #内阴影
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: '#32cd79',
    innerShadow: { // [!code hl:6]
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```

### [mask](/reference/UI/mask.md)

遮罩功能，将 Group 内的某个元素指定为遮罩，可以实现复杂的裁剪效果， 支持 5 种遮罩类型。

<case name="Mask" editor=false></case>

```ts
// #遮罩功能 [将圆环设为遮罩]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })

const mask = new Ellipse({ // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: 'black',
    mask: true
})

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

leafer.add(group)

group.add([mask, image])   // [!code hl]
```

### [eraser](/reference/UI/eraser.md)

擦除功能，将 Group 内的某个元素指定为橡皮擦，可实现复杂的擦除效果，支持 2 种擦除类型。

<case name="Eraser" editor=false></case>

```ts
// #擦除功能 [将圆环设为橡皮擦]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, draggable: true })

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

const eraser = new Ellipse({ // [!code hl:9]
    x: 15,
    y: 15,
    width: 70,
    height: 70,
    innerRadius: 0.5,
    fill: 'black',
    eraser: true,
    draggable: true
})

leafer.add(group)

group.add([image, eraser])  // [!code hl]
```

## 元素可见性

### [visible](/reference/UI/visible.md)

元素的可见性，可用于隐藏元素。

```ts
// #隐藏元素
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 隐藏元素
    rect.visible = false
    // #endregion main

}, 1000)
```

### [opacity](/reference/UI/opacity.md)

元素的不透明度。

```ts
// #设置不透明度
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 设置不透明度
    rect.opacity = 0.5
    // #endregion main

}, 1000)
```

## 高级定位属性

### [origin](/reference/UI/origin.md)

围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。

<case name="Around"   editor=false></case>

```ts
// #原点 [围绕原点旋转 45 度]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    origin: 'center', // [!code hl:2]
    rotation: 45,
    draggable: true,
    fill: '#4DCB71'
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))
```

### [around](/reference/UI/around.md)

围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能。

与 [origin](/reference/UI/origin.md) 的区别： 多了一个步骤，会把元素内部的 around 点移动到元素的 (x,y) 坐标。

![围绕中心点绘制](/svg/around.svg?d=0131)

```ts
// #around 属性 [围绕坐标(50,50) 为中心旋转 45 度]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center', // [!code hl:2]
    rotation: 45,
    fill: '#4DCB71',
    draggable: true
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))
```

## 了解元素通用属性

<!--@include: ../../reference/api/UI/property.md-->

## 了解元素通用方法

<!--@include: ../..//reference/api/UI/method.md-->

## 下一步

### [事件处理](/guide/basic/event.md)
