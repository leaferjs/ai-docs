<script setup>
import Case from '/component/Case.vue'
</script>

# 反向

## 关键属性

### reverse?: `boolean`

是否反向动画 to -> from，默认为 false

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 反向动画

::: code-group
```ts
// #动画 - 反向 [reverse（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        reverse: true // 反向动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 反向 [reverse（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        reverse: true // 反向动画 // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 反向 [reverse（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        reverse: true // 反向动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 反向 [reverse（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        reverse: true // 反向动画 // [!code hl]
    } // options
)
```
```ts
// #动画 - 反向 [reverse（Animate）]
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
        reverse: true // 反向动画 // [!code hl]
    } // options
)
```
:::
