<script setup>
import Case from '/component/Case.vue'
</script>

# 速度

## 关键属性

### speed: `number`

动画的播放倍速，默认为 1。

1 个 10 秒的动画，如果 speed 为 5，则 2 秒就能播完。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 以 5 倍速播放动画

::: code-group
```ts
// #动画 - 以5倍速播放动画 [speed（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 以5倍速播放动画 [speed（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 以5倍速播放动画 [speed（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 以5倍速播放动画 [speed（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 以5倍速播放动画 [speed（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    } // options
)
```
:::
