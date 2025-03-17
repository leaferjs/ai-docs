# AnimateEvent

动画事件

## 事件名称

### AnimateEvent.CREATED

动画实例创建事件。

`created`

### AnimateEvent.PLAY

播放动画事件。

`play`

### AnimateEvent.PAUSE

暂停动画事件。

`pause`

### AnimateEvent.STOP

停止动画事件。

`stop`

### AnimateEvent.SEEK

定位跳转动画事件。

`seek`

### AnimateEvent.UPDATE

更新动画事件，每一次样式变化都会触发。

`update`

### AnimateEvent.COMPLETED

动画完成事件。

`completed`

## 示例

支持像元素一样 [监听、移除事件](/reference/UI/on.md)，同时也支持初始化时传入 [监听事件对象](/plugin/in/animate/options/event.md)。

::: code-group
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
:::
