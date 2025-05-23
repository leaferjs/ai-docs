<script setup>
import Case from '/component/Case.vue'
</script>

# ImagePaint 对象

图案填充对象, 可设置给 [fill](/reference/property/fill.md) 或 [stroke](/reference/property/stroke.md) 属性，支持使用 svg 格式的图片。

<case name="ImageFill" editor=false></case>

> 平铺模式下超过 4096 x 2160 的 4k 图片会被优化显示。

## 关键属性

### type: `string`

填充类型为 `image`。

### url: `string`

图片 url 地址。

### mode?: `ImagePaintMode`

图案填充模式, 默认为 cover。

```ts
type ImagePaintMode =
  | 'normal' // 正常
  | 'cover' // 覆盖（相当于background-size: cover）
  | 'fit' // 适应 (相当于background-size: contain)
  | 'stretch' // 拉伸，会改变图片比例
  | 'clip' // 裁剪
  | 'repeat' // 平铺 (相当于background-repeat: repeat)
```

### format?: `'svg'  | 'jpg' | 'png' | 'webp'`

补充图片格式，目前主要用于通过 url 无法识别的 [svg](../../display/SVG.md) 图片。

### sync?: `boolean`

是否同步更新图片的层级缓存， 默认为 false（可获得性能优化）。

开启同步后，缩放图片的过程中不会产生模糊效果，但会增加性能的开销，请合理使用。

## 基础属性

### blendMode?: [`BlendMode`](/reference/property/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对[颜色对象](/reference/interface/ui/Color.md#rgb)和图片有效。

### align: `IAlign`

背景图片对齐，类似 CSS 的 background-position 属性。

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
```

## cover 覆盖模式属性

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

## fit 适应模式属性

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

### padding?: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber)

内边距，默认为 0。

### repeat?: `boolean`

是否重复背景。

## clip 裁剪模式属性

### offset?: [`IPointData`](/reference/interface/math/Math.md#ipointdata)

偏移位置。

### size?: `number` ｜ [`ISizeData`](/api/interfaces/ISizeData.md)

图片尺寸（拉伸）， 自动换算出 scale。

### scale?: `number` ｜ [`IPointData`](/reference/interface/math/Math.md#ipointdata)

缩放大小， 优先使用 size 换算出的 scale。

### rotation?: `number`

旋转角度。

## repeat 平铺模式属性

### offset?: [`IPointData`](/reference/interface/math/Math.md#ipointdata)

偏移位置。

### size?: `number` ｜ [`ISizeData`](/api/interfaces/ISizeData.md)

图片尺寸（拉伸）， 自动换算出 scale。

### scale?: `number`

平铺图片的缩放比例，优先使用 size 换算出的 scale。

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

### repeat?: [`IRepeat`](/api/modules.md#irepeat)

重复背景的方式，可设置重复 x 或 y 轴， 默认同时重复两个轴。

```ts
type IRepeat = boolean | 'x' | 'y'
```

## 图片缓存

图片缓存的全局配置，可根据需要动态调整。

```ts
import { Platform } from 'leafer-ui'

// 最大缓存等级，默认2k: 2560 * 1600 像素
Platform.image.maxCacheSize = 2560 * 1600

// 最大重复pattern缓存等级, 默认4k: 4096 * 2160 像素
Platform.image.maxPatternSize = 4096 * 2160

// 图片后缀，区分dom中image标签的缓存，否则可能会有浏览器缓存跨域问题，默认: leaf
Platform.image.suffix = 'leaf'  // image.jpg?leaf
```

## 图片跨域

图片跨域的全局配置，可根据需要动态调整。

设为 null 时可以渲染未经服务端允许的跨域图片， 但不支持导出画板内容（浏览器的限制）。

```ts
import { Platform } from 'leafer-ui'

// 默认配置，未经服务端允许的跨域图片不能渲染。
Platform.image.crossOrigin = 'anonymous' 
```

## 图片事件

### [ImageEvent](/reference/event/basic/Image.md)

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="ImageFill" index=0 editor=false></case>

### cover 覆盖模式

```ts
// #图案填充 [默认 cover 覆盖模式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:4]
        type: 'image',
        url: '/image/leafer.jpg',
        // mode: 'cover' // 默认模式，相当于 CSS 的 background-size: cover
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=1 editor=false></case>

### cover 覆盖模式旋转 90 度

```ts
// #图案填充 [cover 覆盖模式旋转 90 度]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        rotation: 90
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=2 editor=false></case>

### fit 适应模式

```ts
// #图案填充 [fit 适应模式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'fit' // 相当于 CSS 的 background-size: contain
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=3 editor=false></case>

### stretch 拉伸模式

```ts
// #图案填充 [stretch 拉伸模式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 120,
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch'
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=4 editor=false></case>

### clip 裁剪模式

```ts
// #图案填充 [clip 裁剪模式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:7]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'clip',
        offset: { x: -40, y: -90 },
        scale: { x: 1.1, y: 1.1 },
        rotation: 20
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=5 editor=false></case>

### repeat 平铺模式

```ts
// #图案填充 [repeat 平铺模式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat', // 相当于 CSS 的 background-repeat: repeat
        scale: 0.2
    }
})

leafer.add(rect)
```

<case name="ImageFill" index=6 editor=false></case>

### repeat 平铺模式旋转 90 度

```ts
// #图案填充 [repeat 平铺模式旋转 90 度]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:7]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        scale: 0.2,
        rotation: 90
    }
})

leafer.add(rect)
```
