<script setup>
import Case from '/component/Case.vue'
</script>

# 循环

## 关键属性

### loop: `boolean` | `number`

是否循环播放，可设置次数，默认为 false。

### loopDelay: `number`

进入下一次循环播放的延迟时间。

### swing?: `boolean` | `number`

是否摇摆循环播放，可设置次数（到达 to 的次数）， from -> to，to -> from -> to ... ，默认 false

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 循环

::: code-group
```ts
// #动画 - 循环执行  [loop（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        loop: true // 循环执行动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 循环执行  [loop（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        loop: true // 循环执行动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 循环执行  [loop（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: true // 循环执行动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环执行  [loop（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: true // 循环执行动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环执行  [loop（Animate）]
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
        loop: true // 循环执行动画 // [!code hl]
    } // options
)
```
:::

### 循环 2 次

::: code-group
```ts
// #动画 - 循环 2 次  [loop（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        loop: 2 // 循环 2 次动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 循环 2 次  [loop（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        loop: 2 // 循环 2 次动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 循环 2 次  [loop（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: 2 // 循环 2 次动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环 2 次  [loop（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: 2 // 循环 2 次动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环 2 次  [loop（Animate）]
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
        loop: 2 // 循环 2 次动画 // [!code hl]
    } // options
)
```
:::

### 循环间隔

::: code-group
```ts
// #动画 - 循环间隔  [loopDelay（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    }
}, 0, 100, 50, 50))
```
```ts
// #动画 - 循环间隔  [loopDelay（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 循环间隔  [loopDelay（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环间隔  [loopDelay（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 循环间隔  [loopDelay（Animate）]
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
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    } // options
)
```
:::

### 摇摆循环

::: code-group
```ts
// #动画 - 摇摆循环  [swing（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        swing: true // 摇摆循环动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 摇摆循环  [swing（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        swing: true // 摇摆循环动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 摇摆循环  [swing（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        swing: true // 摇摆循环动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 摇摆循环  [swing（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        swing: true // 摇摆循环动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 摇摆循环  [swing（Animate）]
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
        swing: true // 摇摆循环动画 // [!code hl]
    } // options
)
```
:::
