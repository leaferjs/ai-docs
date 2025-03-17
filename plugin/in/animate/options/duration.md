<script setup>
import Case from '/component/Case.vue'
</script>

# 时长

## 关键属性

### duration: `number`

动画的总时长（不包含 delay 和循环时间）。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 动画时长

::: code-group
```ts
// #动画 - 时长  [duration（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 5, // 动画时长为 5 秒 // [!code hl]
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 时长  [duration（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 5, // 动画时长为 5 秒 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 时长  [duration（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 5 // 动画时长为 5 秒 // [!code hl]
    } // options
)
```
```ts
// #动画 - 时长  [duration（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 5, // 动画时长为 5 秒 // [!code hl]
        loop: true
    } // options
)
```
```ts
// #动画 - 时长  [duration（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 5, // 动画时长为 5 秒 // [!code hl]
        loop: true
    } // options
)
```
:::
