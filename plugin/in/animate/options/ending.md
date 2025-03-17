<script setup>
import Case from '/component/Case.vue'
</script>

# 结束样式

## 关键属性

### ending: [`IAnimateEnding`](/api/modules.md#ianimateending)

动画结束时的样式，默认为 'auto'。

from 表示起点样式，to 表示终点样式。

```ts
type IAnimateEnding = 'auto' | 'from' | 'to'
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 动画结束时回到起始状态

::: code-group
```ts
// #动画 - 动画结束时回到起始状态  [from（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 动画结束时回到起始状态  [from（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 动画结束时回到起始状态  [from（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    } // options
)
```
```ts
// #动画 - 动画结束时回到起始状态  [from（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    } // options
)
```
```ts
// #动画 - 动画结束时回到起始状态  [from（Animate）]
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
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    } // options
)
```
:::

### 动画结束时保持结束状态

::: code-group
```ts
// #动画 - 动画结束时保持结束状态  [to（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        ending: 'to' // 动画结束时保持结束状态 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 动画结束时保持结束状态  [to（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        ending: 'to' // 动画结束时保持结束状态 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 动画结束时保持结束状态  [to（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        ending: 'to' // 动画结束时保持结束状态 // [!code hl]
    } // options
)
```
```ts
// #动画 - 动画结束时保持结束状态  [to（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        ending: 'to' // 动画结束时保持结束状态 // [!code hl]
    } // options
)
```
```ts
// #动画 - 动画结束时保持结束状态  [to（Animate）]
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
        ending: 'to' // 动画结束时保持结束状态 // [!code hl]
    } // options
)
```
:::
