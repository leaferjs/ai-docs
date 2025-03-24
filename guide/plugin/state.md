<script setup>
import Case from '/component/Case.vue'
</script>

# 交互状态

可以像 CSS 一样为元素增加 [hover](/reference/UI/state/hover.md) 、 [press](/reference/UI/state/press.md) 、 [focus](/reference/UI/state/focus.md) 、 [selected](/reference/UI/state/selected.md) 、 [disabled](/reference/UI/state/disabled.md) 交互状态样式。

支持添加 [过渡效果](/reference/UI/transition.md)，还可自定义复杂多样的元素、游戏状态 [state](/reference/UI/state/state.md) 用于随时切换。
::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用， [过渡效果](/reference/UI/transition.md) 需安装 [动画插件](/plugin/in/animate/index.md) 。

或直接安装 [leafer-game](/guide/install/game/start.md)（已集成交互状态、动画插件）。

:::

<case name="Transition" editor=false></case>

```ts
// #过渡效果 [按钮交互]
import { Leafer, Box } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl:2] 
import '@leafer-in/animate' // 导入动画插件  

const leafer = new Leafer({ view: window })

const box = new Box({
    x: 100,
    y: 100,
    fill: '#32cd79',
    cornerRadius: 5,
    origin: 'center', // 从中心缩放

    button: true, // 标记为按钮，子元素 Text 将自动同步交互状态 // [!code hl:10]
    hoverStyle: { // 鼠标hover状态
        fill: '#FF4B4B',
        scale: 1.5,
        cornerRadius: 20,
    },
    pressStyle: { // 鼠标按下状态
        fill: '#FEB027',
        scale: 1.1,
        transitionOut: 'bounce-out' // 退出状态时的过渡方式
    },

    children: [{
        tag: 'Text',
        text: 'Button',
        fontSize: 16,
        fontWeight: 'bold',
        padding: [10, 20],
        fill: 'rgba(0,0,0,0.5)',
        hoverStyle: { fill: 'black' } // 鼠标 hover 到 button 上的状态  // [!code hl:1]
    }]
})

leafer.add(box)
```

<case name="State" index=0 editor=false></case>

```ts
// #自定义状态 [切换状态] 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: 30,
    origin: 'center',
    states: { // 自定义状态列表 // [!code hl:5] 
        color: { fill: '#FEB027' },
        rotate: { animation: { keyframes: [{ rotation: 45 }, { rotation: 135, scale: 1.2 }], duration: 1, swing: true } }
    },
    state: 'color', // 设置状态
    transition: 1
})

leafer.add(rect)

rect.on('click', () => { // 点击切换状态  // [!code hl:2]
    rect.state = rect.state === 'color' ? 'rotate' : 'color'
})
```

## 下一步

### [运动路径](/guide/plugin/motion-path.md)
