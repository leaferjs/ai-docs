<script setup>
import Case from '/component/Case.vue'
</script>

# AngularGradient 对象

角度渐变对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性，暂需浏览器支持`createConicGradient()`方法。

<case name="Angular"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `radial`。

### from?: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

渐变的起始控制点, 相对元素的实际内容定位， 默认为 center。

<!-- ```ts
from: {x: 0.5, y: 0.5} // 中心
``` -->

![方向图](/svg/deriction.svg)

```ts
// 方位
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

from: 'center'

// 坐标点
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

from: {
  type: 'percent',
  x: 0.5, // 50% width  百分比坐标点
  y: 0.5, // 50% height
}

from: {
  x: 50, // 50px 像素值坐标点
  y: 50, // 50px
}
```

### to?: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

渐变的末端控制点，相对元素的实际内容定位， 默认为 bottom。

<!-- ```ts
to: {x: 0.5, y: 1} // 底部居中
``` -->

### stretch?: `number`

垂直于 from -> to 拉伸，相对图形的宽度比例， 使渐变形成椭圆形， 默认为 1。

### stops: [`ColorStop`](/reference/interface/ui/Color.md#colorstop)[] ｜ [`StringColor`](/reference/interface/ui/Color.md#stringcolor)[]

渐变色标数组。

如果设置纯字符串颜色的数组，将会自动计算 offset。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对渐变色标中 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效。

## 子描边属性

### style?: `IStrokeStyle`

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](/reference/UI/stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果。

[纯色](/reference/UI/paint/solid.md#子描边属性)、 [线性渐变](/reference/UI/paint/linear.md#子描边属性)、[径向渐变](/reference/UI/paint/radial.md#子描边属性)、[角度渐变](/reference/UI/paint/angular.md#子描边属性)、[图案](/reference/UI/paint/image.md#子描边属性) 等类型均支持子描边样式。

```ts
interface IStrokeStyle {
    strokeWidth?: number // 描边的宽度
    strokeWidthFixed?: boolean // 是否固定线宽，不随画布视图放大
    strokeCap?: 'none' | 'round' | 'square' // 无 | 圆形 | 方形 (描边的端点形状)
    strokeJoin?: 'miter' ｜ 'bevel' | 'round' //  直角 ｜ 平角 ｜ 圆角 (描边的拐角处理)
    dashPattern?: number[] // 虚线描边的数值
    dashOffset?: number // 虚线描边的起点偏移值
}

// 蚂蚁线效果
rect.stroke = [
    {type: 'solid', color: 'white'}, // 第二个描边为虚线
    {type: 'solid', color: 'black', style: {  dashPattern: [3, 3] }}
]

// 模拟内中外三层描边效果
rect.stroke = [
    {type: 'solid', color: 'white'}, // 多个描边宽度
    {type: 'solid', color: 'black', style: {  strokeWidth: 5 }},
    {type: 'solid', color: 'blue', style: {  strokeWidth: 10 }}
]
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Angular" index=0 editor=false></case>

### 默认方向

从中心 -> 底部居中垂直绘制的渐变

```ts
// #角度渐变填充 [默认方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:4]
        type: 'angular', // 从中心 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

leafer.add(rect)
```

<case name="Angular" index=2 editor=false></case>

### 控制方向

从左上角 -> 中心呈 45 度绘制的渐变。

```ts
// #角度渐变填充 [控制方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'angular', // 从左上角 -> 中心呈 45 度绘制的渐变
        from: { type: 'percent', x: 0.3, y: 0.3 },
        to: 'center',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 0.5, color: '#FEB027' }, { offset: 1, color: '#FF4B4B' }]
    },
})

leafer.add(rect)
```

<case name="Angular" index=1 editor=false></case>

### 拉伸渐变

从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.1 绘制的渐变。

```ts
// #角度渐变填充 [拉伸渐变]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: "angular", // 从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.1 绘制的渐变。
        stretch: 0.1,
        to: 'bottom-right',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 0.3, color: '#FEB027' }, { offset: 0.7, color: '#79CB4D' }, { offset: 1, color: '#FF4B4B' }]
    }
})

leafer.add(rect)
```

<case name="Angular" index=6 editor=false></case>

### 设置透明度

一般用于多个填充做叠加效果。

opacity 暂时只对 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效， 或直接使用 `rgba(255,75,75,0,5)` 字符串颜色。

```ts
// #角度渐变填充 [设置不透明度]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:10]
        type: 'angular',
        opacity: 0.5,
        stops: [
            { offset: 0, color: { r: 255, g: 75, b: 75 } },
            { offset: 0.3, color: { r: 254, g: 176, b: 39 } },
            { offset: 0.7, color: { r: 121, g: 203, b: 77 } },
            { offset: 1, color: { r: 255, g: 75, b: 75 } }
        ]
    }
})

leafer.add(rect)
```
