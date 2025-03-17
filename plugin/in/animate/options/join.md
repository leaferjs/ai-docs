<script setup>
import Case from '/component/Case.vue'
</script>

# 加入关键帧

## 关键属性

### join: `boolean`

是否加入动画前的元素状态作为 from 关键帧。

只有一个关键帧时，强制为 true，进行 from -> to 动画。

多个关键帧时，默认为 false，会按预设的关键帧列表进行动画。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 加入动画前的元素状态作为 from 关键帧

::: code-group
```ts
// #动画 - 加入动画前的元素状态作为 from 关键帧 [join（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        keyframes: [{ x: 500 }, { x: 200 }], // style keyframe
        duration: 2,
        join: true // 加入动画前的元素状态作为 from 关键帧 {x: 0} // [!code hl]
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 加入动画前的元素状态作为 from 关键帧 [join（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    [{ x: 500 }, { x: 200 }], // style keyframe
    {
        duration: 2,
        join: true // 加入动画前的元素状态作为 from 关键帧 {x: 0} // [!code hl]
    } // options
)
```
```ts
// #动画 - 加入动画前的元素状态作为 from 关键帧 [join（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    [{ x: 500 }, { x: 200 }], // style keyframe
    {
        duration: 2,
        join: true // 加入动画前的元素状态作为 from 关键帧 {x: 0} // [!code hl]
    } // options
)
```
:::
