<script setup>
import Case from '/component/Case.vue'
</script>

# fill

填充，类似于 HTML5 中的 background-color，或文字的 color。

<case name="Fill"  editor=false></case>

## 关键属性

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

填充背景或文字。

支持 [纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案填充](/reference/property/paint/image.md) 等类型， 支持多个填充同时叠加。

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="Fill" index=0  editor=false></case>

### 纯色填充

```ts
// #纯色填充
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: { // [!code hl:4]
        type: 'solid',
        color: '#32cd79'
    },
})

leafer.add(rect)
```

<case name="Fill" index=1 editor=false></case>

### 渐变填充

支持 [线性渐变](./paint/linear.md)、[径向渐变](./paint/radial.md)、[角度渐变](./paint/angular.md) 等类型。

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

<case name="Fill" index=5 editor=false></case>

### 图案填充

[图案填充](./paint/image.md) 支持 覆盖、适应、裁剪、平铺等模式。

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

<case name="Fill" index=4  editor=false></case>

### 多个填充叠加

填充的 opacity 暂时仅针对 [颜色对象](/reference/interface/ui/Color.md#rgb) 和图片有效。

```ts
// #多个不同类型的填充叠加 [线性渐变填充 + 图案填充]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: [ // [!code hl:11]
        {
            type: 'linear', // 线性渐变填充
            stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }]
        },
        {
            type: 'image', // 图案填充
            url: '/image/leafer.jpg',
            mode: 'cover',
            opacity: 0.2
        }]
})

leafer.add(rect)
```
