<script setup>
import Case from '/component/Case.vue'
</script>

# state

元素的状态，可预设复杂多样的元素、游戏状态，用于随时切换， 支持添加 [过渡效果](/reference/property/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 状态优先级

状态样式从低到高的覆盖顺序: state < selected < focus < hover < press < disabled

## 关键属性

### states: [`IStates`](/api/interfaces/IStates.md)

预设状态列表， 一个键值对象。

每个状态都可以设置元素的所有样式，包含动画、hover 等交互样式。

```ts
interface IStates {
  [state: string]: IUIInputData
}
```

### state: `string`

元素当前的状态， 状态名为 states 的键名， 默认为空。

### button: `boolean`

是否为按钮， 默认为 false。

按钮不能嵌套，设为按钮后，子元素将自动同步交互状态，如 state、hover、press...

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="State" index=0 editor=false></case>

### 点击切换元素状态

```ts
// #自定义状态 [切换状态] 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件
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

<case name="Transition" editor=false></case>

### 同步 hover 状态的按钮

```ts
// #过渡效果 [按钮交互]
import { Leafer, Box } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window, fill: '#333' })

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
