<script setup>
import Case from '/component/Case.vue'
</script>

# 延迟

## 关键属性

### delay: `number`

动画延迟播放的时长。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

<!-- <case name="AnimateEasing" index=0 height=80 editor=false></case> -->

### 延迟动画

::: code-group
```ts
// #动画 - 延迟执行  [delay（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 延迟执行  [delay（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 延迟执行  [delay（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 延迟执行  [delay（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 延迟执行  [delay（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::
