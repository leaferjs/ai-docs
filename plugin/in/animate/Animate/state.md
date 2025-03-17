<script setup>
import Case from '/component/Case.vue'
</script>

# 状态

## 关键属性（只读）

### started: `boolean`

动画是否开始。

### running: `boolean`

动画是否正在播放。

### completed: `boolean`

动画是否完成。

### destroyed: `boolean`

动画是否销毁。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

```ts
// #动画 - 打印动画完成状态
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

// 打印动画完成状态  // [!code hl:5]
setTimeout(() => {

    console.log(animate.completed)

}, 2100)

```
