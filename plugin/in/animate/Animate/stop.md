<script setup>
import Case from '/component/Case.vue'
</script>

# 停止

## 关键方法

### stop ( )

停止动画。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

```ts
// #动画 - 通过 stop() 方法停止并完成动画
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

// 通过 stop() 方法停止并完成动画  // [!code hl:5]
setTimeout(() => {

    animate.stop()

}, 500)

```
