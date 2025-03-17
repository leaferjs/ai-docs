<script setup>
import Case from '/component/Case.vue'
</script>

# 计时

## 关键属性（只读）

### duration: `number`

动画的总时长（不包含 delay 和循环时间）。

### time: `number`

已经播放的时长（相对 duration，不包含 delay 和循环时间）。

### looped: `number`

已经循环播放了多少次（计数）。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

```ts
// #动画 - 打印动画已经播放的时长
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 2
    } // options
)

// 打印动画已经播放的时长  // [!code hl:5]
setTimeout(() => {

    console.log(animate.time)

}, 500)

```
