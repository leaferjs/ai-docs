<script setup>
import Case from '/component/Case.vue'
</script>

# clip

裁剪掉超出宽高的内容。

[Box](../display/Box.md) 和 [Frame](../display/Frame.md) 支持通过 overflow 实现裁剪内容的效果。

[Text](../display/Text.md) 支持通过 textOverflow 实现裁剪内容的效果。

另外通过 [图案填充](/reference/UI/paint/image.md#clip-裁剪模式属性) 的 clip 模式可以快速实现裁剪图片效果。

## 关键属性

### overflow: `IOverflow`

通过将 overflow 设为 `hide` 可以实现裁剪 Box 的效果。

```ts
type IOverflow = 'show' | 'hide'
```

### textOverflow: `IOverflow` ｜ `string`

通过将 overflow 设为 `hide` 可以隐藏超出固定宽高的 Text, 或自定义省略内容。

```ts
type IOverflow = 'show' | 'hide'

// 自定义省略内容

text.textOverflow = '...'
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Box" index=1 editor=false></case>

### 裁剪掉超出宽高的内容

```ts
// #创建 Box [隐藏超出宽高的内容 (Leafer)]
import { Leafer, Box, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const box = new Box({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#FF4B4B',
    overflow: 'hide'
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

<case name="ImageFill" index=4 editor=false></case>

### 快速裁剪图片

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
