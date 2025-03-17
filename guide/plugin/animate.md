<script setup>
import Case from '/component/Case.vue'
</script>

# 动画

动画功能，支持延时、摇摆循环、seek、[动画事件](/plugin/in/animate/index.md#event-ianimateevents)，可制作过渡动画、关键帧动画、路径动画。

支持以 [animation](/reference/UI/animation.md)、[transition](/reference/UI/transition.md)、[animate() 方法](/reference/UI/animate.md)、[Animate 实例](/plugin/in/animate/index.md) 等方式创建动画。

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。

:::

<case name="AnimatePage" editor=false></case>

```ts
// #动画样式 [入场和出场动画]
import { Group, Leafer, Frame } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const page1 = new Frame({
    x: 300,
    y: 100,
    width: 150,
    height: 100,
    fill: '#FEB027',
    animation: { // 入场动画  // [!code hl:8]
        keyframes: [{ opacity: 0, offsetX: -150 }, { opacity: 1, offsetX: 0 }],
        duration: 0.8
    },
    animationOut: { // 出场动画
        style: { opacity: 0, offsetX: 150 },
        duration: 0.8
    }
})

const page2 = page1.clone({ fill: '#32cd79' }) // 克隆 page 并重新设置fill

const group = new Group({ children: [page1] })

leafer.add(group)

// 切换页面, 自动执行入场、出场动画
setInterval(() => {

    if (page1.parent) {
        group.add(page2)
        page1.remove()
    } else {
        group.add(page1)
        page2.remove()
    }

}, 2000)
```

<case name="AnimateColor" editor=false></case>

```ts
// #动画样式 [颜色过渡]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    animation: { // [!code hl:6]
        style: { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)
```

<case name="AnimateFrames" editor=false></case>

```ts
// #动画样式 [关键帧动画]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 50,
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    around: 'center',
    animation: { // [!code hl:12]
        keyframes: [
            { style: { x: 150, scaleX: 2, fill: '#ffcd00' }, duration: 0.5 },  // animate keyframe
            { style: { x: 50, scaleX: 1, fill: '#ffcd00' }, duration: 0.2 },
            { style: { x: 550, cornerRadius: 0, fill: '#ffcd00' }, delay: 0.1, easing: 'bounce-out' },
            { x: 50, rotation: -720, cornerRadius: 50 } // style keyframe
        ],
        duration: 3, // 自动分配剩余的时长给未设置 duration 的关键帧： (3 - 0.5 - 0.2 - 0.1) / 2 
        loop: true,
        join: true //  加入动画前的元素状态作为 from 关键帧
    }
})

leafer.add(rect)
```

<case name="Arrow" index=24 editor=false></case>

```ts
// #动画样式 [虚线箭头动画]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Arrow({
    x: 100,
    y: 100,
    stroke: '#32cd79',
    strokeWidth: 5,
    dashPattern: [10, 10], // 绘制虚线 // [!code hl:8]
    dashOffset: 0,
    animation: { // 虚线动画
        style: { dashOffset: -20 },
        easing: 'linear',
        duration: 0.5,
        loop: true,
    }
})

leafer.add(rect)
```

## 下一步

### [交互状态](/guide/plugin/state.md)
