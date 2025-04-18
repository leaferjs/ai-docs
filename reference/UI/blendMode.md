<script setup>
import Case from '/component/Case.vue'
</script>

# blendMode

混合模式， 了解 [混合原理](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) 与 [混合效果](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)。

<case name="BlendMode" index=1 count=6 editor=false></case>

## 关键属性

### blendMode: `BlendMode`

元素的混合模式， 默认为 `pass-through` 穿透模式。

```ts
type BlendMode =
  | 'pass-through' // 穿透，默认值，性能最好
  | 'normal' // 正常，会单独绘制在一个层上，大量使用会有性能问题，一般用于隔离Group内的混合样式，防止影响Group外的元素
  | 'multiply' // 正片叠底---
  | 'darken' // 变暗
  | 'color-burn' // 颜色加深
  | 'lighten' // 变亮---
  | 'color-dodge' // 颜色减淡
  | 'screen' // 滤色
  | 'overlay' // 叠加---
  | 'hard-light' // 强光
  | 'soft-light' // 柔光
  | 'difference' // 差集---
  | 'exclusion' // 排除
  | 'hue' // 色相 ---
  | 'saturation' // 饱和度
  | 'color' // 颜色
  | 'luminosity' // 明度
  // other
  | 'source-over' // 在现有画布上绘制新图形。
  | 'source-in' // 仅在新形状和目标画布重叠的地方绘制新形状。其他的都是透明的。
  | 'source-out' // 在不与现有画布内容重叠的地方绘制新图形。
  | 'source-atop' // 只在与现有画布内容重叠的地方绘制新图形。
  | 'destination-over' // 在现有画布内容的后面绘制新的图形。
  | 'destination-in' // 仅保留现有画布内容和新形状重叠的部分。其他的都是透明的。
  | 'destination-out' // 仅保留现有画布内容和新形状不重叠的部分。
  | 'destination-atop' // 仅保留现有画布内容和新形状重叠的部分。新形状是在现有画布内容的后面绘制的。
  | 'xor' // 形状在重叠处变为透明，并在其他地方正常绘制。
  | 'copy' // 只显示新图形。
```

## 穿透模式

元素的子混合模式（如填充、描边、特效的混合模式）可以单独与下方内容混合。

否则子混合模式只对当前元素层起作用，之后元素作为整体与下方内容混合。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="BlendMode" index=2 editor=false></case>

### multiply

正片叠底，将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。

```ts
// #混合模式 [multiply 正片叠底]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'multiply'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=3 editor=false></case>

### darken

变暗，保留两个图层中最暗的像素。

```ts
// #混合模式 [darken 变暗]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'darken'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=4 editor=false></case>

### color-burn

颜色加深，将反置的底层除以顶层，然后将结果反过来。

```ts
// #混合模式 [color-burn 颜色加深]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'color-burn'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=5 editor=false></case>

### lighten

变亮，两个重叠图形的颜色是通过颜色值相加来确定的。

```ts
// #混合模式 [lighten 变亮]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'lighten'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=6 editor=false></case>

### color-dodge

颜色减淡，将底层除以顶层的反置。

```ts
// #混合模式 [color-dodge 颜色减淡]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'color-dodge'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=7 editor=false></case>

### screen

滤色，像素被倒转、相乘、再倒转，结果是一幅更明亮的图片（与 multiply 相反）。

```ts
// #混合模式 [screen 只显示新图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'screen'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=8 editor=false></case>

### overlay

叠加，multiply 和 screen 的结合。原本暗的地方更暗，原本亮的地方更亮。

```ts
// #混合模式 [overlay 叠加]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'overlay'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=9 editor=false></case>

### hard-light

强光，类似于 overlay，multiply 和 screen 的结合——但上下图层互换了。

```ts
// #混合模式 [hard-light 强光]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'hard-light'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=10 editor=false></case>

### soft-light

柔光，柔和版本的 hard-light。纯黑或纯白不会导致纯黑或纯白。

```ts
// #混合模式 [soft-light 柔光]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'soft-light'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=11 editor=false></case>

### difference

差集，从顶层减去底层（或反之亦然），始终得到正值。

```ts
// #混合模式 [difference 差集]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'difference'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=12 editor=false></case>

### exclusion

排除，与 difference 类似，但对比度较低。

```ts
// #混合模式 [exclusion 排除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'exclusion'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=13 editor=false></case>

### hue

色相，保留底层的亮度（luma）和色度（chroma），同时采用顶层的色调（hue）。

```ts
// #混合模式 [hue 色相]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'hue'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=14 editor=false></case>

### saturation

饱和度，保留底层的亮度和色调，同时采用顶层的色度。

```ts
// #混合模式 [saturation 饱和度]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'saturation'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=15 editor=false></case>

### color

颜色，保留了底层的亮度，同时采用了顶层的色调和色度。

```ts
// #混合模式 [color 颜色]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'color'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=16 editor=false></case>

### luminosity

明度，保持底层的色调和色度，同时采用顶层的亮度。

```ts
// #混合模式 [luminosity 明度]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'luminosity'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=17 editor=false></case>

### source-over

在现有画布上绘制新图形。

```ts
// #混合模式 [source-over 在现有画布上绘制新图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-over'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=18 editor=false></case>

### source-in

仅在新形状和目标画布重叠的地方绘制新形状。其他的都是透明的。

```ts
// #混合模式 [source-in 仅在新形状和目标画布重叠的地方绘制新形状，其他的都是透明的]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-in'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=19 editor=false></case>

### source-out

在不与现有画布内容重叠的地方绘制新图形。

```ts
// #混合模式 [source-out 在不与现有画布内容重叠的地方绘制新图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-out'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=20 editor=false></case>

### source-atop

只在与现有画布内容重叠的地方绘制新图形。

```ts
// #混合模式 [source-atop 只在与现有画布内容重叠的地方绘制新图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-atop'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=21 editor=false></case>

### destination-over

在现有画布内容的后面绘制新的图形。

```ts
// #混合模式 [destination-over 在现有画布内容的后面绘制新的图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'destination-over'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=22 editor=false></case>

### destination-in

仅保留现有画布内容和新形状重叠的部分。其他的都是透明的。

```ts
// #混合模式 [destination-in 仅保留现有画布内容和新形状重叠的部分,其他的都是透明的]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'destination-in'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=23 editor=false></case>

### destination-out

仅保留现有画布内容和新形状不重叠的部分。

```ts
// #混合模式 [destination-out 仅保留现有画布内容和新形状不重叠的部分]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'destination-out'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=24 editor=false></case>

### destination-atop

仅保留现有画布内容和新形状重叠的部分。新形状是在现有画布内容的后面绘制的。

```ts
// #混合模式 [destination-atop 仅保留现有画布内容和新形状重叠的部分，新形状是在现有画布内容的后面绘制的]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'destination-atop'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=25 editor=false></case>

### xor

形状在重叠处变为透明，并在其他地方正常绘制。

```ts
// #混合模式 [xor 形状在重叠处变为透明，并在其他地方正常绘制]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'xor'  // [!code hl]

}, 1000)
```

<case name="BlendMode" index=26 editor=false></case>

### copy

只显示新图形。

```ts
// #混合模式 [copy 只显示新图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'copy'  // [!code hl]

}, 1000)
```
