<script setup>
import Case from '/component/Case.vue'
</script>

# animation

动画属性，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画。

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。

::: tip 注意事项
需安装 [动画插件](/plugin/in/animate/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成动画插件）。
:::

<case name="AnimateFrames" editor=false></case>

## 关键属性

### animation： [`IAnimation`](/api/modules.md#ianimation) | [`IAnimation`](/api/modules.md#ianimation)[]

动画 / 入场动画，支持多个动画叠加。

```ts
type IAnimation = IStyleAnimation | IKeyframesAnimation

// 样式过渡动画
interface IStyleAnimation extends IAnimateOptions {
  style: IUIInputData // 元素样式
  // ...动画选项属性
}
```

深入了解 [动画选项属性](/plugin/in/animate/index.md#动画选项属性)。

```ts
// 动画选项
interface IAnimateOptions {
  easing?: IAnimateEasing // 缓动方式，默认为 ease

  delay?: number // 延迟时间，以秒为单位， 默认为 0
  duration?: number // 动画时长，以秒为单位，默认为 0.2
  ending?: IAnimateEnding // 动画结束时的状态，可设置from、to，默认auto

  reverse?: boolean // 是否反向动画 to -> from，默认为 false
  swing?: boolean | number // 是否摇摆循环播放，可设置次数（到达 to 的次数） from -> to，to -> from -> to ... ，默认 false

  loop?: boolean | number // 是否循环播放，可设置次数，默认为 false
  loopDelay?: number // 进入下一次循环播放的延迟时间，默认为0

  speed?: number // 动画播放的倍速，值越大播放越快，默认为 1 倍速

  join?: boolean //  是否加入动画前的元素状态作为 from 关键帧
  autoplay?: boolean // 是否自动播放

  attrs?: string[] // 参与动画过渡效果的元素属性列表， 默认为所有
  event?: IAnimateEvents // 监听事件
}
```

关键帧动画。

```ts
// 关键帧动画
interface IKeyframesAnimation extends IAnimateOptions {
  keyframes: IKeyframe[] // 关键帧对象列表
  // ...动画选项属性
}

// 关键帧对象
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // 元素样式

  easing?: IAnimateEasing // 单独设置关键帧缓动方式
  delay?: number // 单独设置关键帧延迟播放时长。
  duration?: number // 单独设置关键帧的固定时长，设置后将忽略 autoDuration

  swing?: number // 摇摆次数（到达 to 的次数），from -> to，to -> from -> to ... ，默认 0
  loop?: number // 循环次数，默认为 0

  // 分配剩余时间：（总时长 - 总关键帧固定时长）/ 总权重 * 当前权重
  autoDelay?: number // 自动 delay 的权重， 默认为 0
  autoDuration?: number // 自动 duration 的权重， 默认为 1
}
```

### animationOut： [`IAnimation`](/api/modules.md#ianimation) | [`IAnimation`](/api/modules.md#ianimation)[]

出场动画，支持多个动画叠加， 元素被移除 或 [visible](/reference/UI/visible.md) 为 0 时执行。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 入场和出场动画

可以用来直接开发页面过渡效果，以及元素的移入移出效果。

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

<case name="Animate" editor=false></case>

### 摇摆循环动画

```ts
// #动画样式 [摇摆动画]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    animation: { // [!code hl:6]
        style: { x: 500, cornerRadius: 0 }, // style keyframe
        // options
        duration: 1,
        swing: true
    }
})

leafer.add(rect)

```

<case name="AnimateColor" editor=false></case>

### 颜色过渡动画

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

### 关键帧动画

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

### 虚线箭头动画

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
