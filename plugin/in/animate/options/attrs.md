<script setup>
import Case from '/component/Case.vue'
</script>

# 过渡属性

## 关键属性

### attrs: `string` []

参与动画过渡的元素属性列表， 默认为所有。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 只有 x 属性参与动画过渡

::: code-group
```ts
// #动画 - 只有 x 属性参与动画过渡 [attrs（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500, y: 200 }, // style keyframe
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 只有 x 属性参与动画过渡 [attrs（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500, y: 200 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 只有 x 属性参与动画过渡 [attrs（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500, y: 200 }, // style keyframe
    {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    } // options
)
```
```ts
// #动画 - 只有 x 属性参与动画过渡 [attrs（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500, y: 200 }, // style keyframe
    {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    } // options
)
```
```ts
// #动画 - 只有 x 属性参与动画过渡 [attrs（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500, y: 200 }, // style keyframe
    {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    } // options
)
```
:::
