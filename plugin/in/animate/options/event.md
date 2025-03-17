<script setup>
import Case from '/component/Case.vue'
</script>

# 事件

## 关键属性

### event: [`IAnimateEvents`](/api/interfaces/IAnimateEvent.md)

监听事件对象，同时支持 [AnimateEvent](/plugin/in/animate/event/AnimateEvent.md) 方式。

```ts
interface IAnimateEvents {
  created?: IAnimateEventFunction // 动画实例创建事件

  play?: IAnimateEventFunction // 播放动画事件
  pause?: IAnimateEventFunction // 暂停动画事件
  stop?: IAnimateEventFunction // 停止动画事件
  seek?: IAnimateEventFunction // 定位跳转动画事件

  update?: IAnimateEventFunction // 更新动画事件，每一次样式变化都会触发
  completed?: IAnimateEventFunction // 动画完成事件
}

interface IAnimateEventFunction {
  (animate?: Animate): void
}
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 监听动画事件

::: code-group
```ts
// #动画 - 监听动画事件 [event（animation）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 监听动画事件 [event（transition）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 监听动画事件 [event（set）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    } // options
)
```
```ts
// #动画 - 监听动画事件 [event（animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    } // options
)
```
```ts
// #动画 - 监听动画事件 [event（Animate）]
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
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    } // options
)
```
:::

### 通过 on() 监听动画事件

支持像元素一样 [监听、移除事件](/reference/UI/on.md)

::: code-group
```ts
// #动画 - 通过 on() 监听动画事件 [event（animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate, AnimateEvent } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = rect.animate(
    { x: 500 }, // style keyframe
    { duration: 2 } // options
)

// 监听动画事件 // [!code hl:11]
animate.on(AnimateEvent.PLAY, () => { // 动画创建
    console.log('play')
})

animate.on(AnimateEvent.UPDATE, (animate: Animate) => { // 更新中...
    console.log(animate.style.x)
})

animate.on(AnimateEvent.COMPLETED, () => { // 动画已完成
    console.log('completed')
})
```
```ts
// #动画 - 通过 on() 监听动画事件 [event（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate, AnimateEvent } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = new Animate(
    rect,
    { x: 500 }, // style keyframe
    { duration: 2 } // options
)

// 监听动画事件 // [!code hl:11]
animate.on(AnimateEvent.PLAY, () => { // 动画创建
    console.log('play')
})

animate.on(AnimateEvent.UPDATE, (animate: Animate) => { // 更新中...
    console.log(animate.style.x)
})

animate.on(AnimateEvent.COMPLETED, () => { // 动画已完成
    console.log('completed')
})
```
:::
