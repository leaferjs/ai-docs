# flip

镜像/翻转元素。

## 关键方法

### flip( axis：`'x'` | `'y'`, transition?: [`ITranstion`](/reference/UI/transition.md#transition-itranstion) )

在 [世界坐标系](/guide/basic/coordinate.md#world) 中， 按轴方向 镜像/翻转元素。

[`transition`](/reference/UI/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 按X轴镜像元素
rect.flip('x')

// 动画过渡
rect.flip('x', true)

rect.flip('x', 2) // 过渡 2 秒
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 按 X 轴镜像元素

```ts
// #通过 flip() 镜像元素 [无动画过渡]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 按 X 轴镜像元素
    rect.flip('x') // [!code hl]

}, 1000)
```

### 按 X 轴镜像元素，有动画过渡

```ts
// #通过 flip() 镜像元素 [有动画过渡]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 按 X 轴镜像元素
    rect.flip('x', true) // [!code hl]

}, 1000)
```
