<script setup>
import Case from '/component/Case.vue'
</script>

# Animate 类

动画类，丰富的动画功能，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画、滚动动画。

支持以 [animation](/reference/UI/animation.md)、[transition](/reference/UI/transition.md)、[animate() 方法](/reference/UI/animate.md)、[Animate 实例](/plugin/in/animate/index.md) 等方式创建动画。

另外元素的 [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)、 [ set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion) 等方法支持添加动画过渡参数，文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)、[打字机动画](/reference/display/Text.md#打字机动画)。

<case name="AnimateFrames" editor=false></case>

::: tip 继承
Animate &nbsp;>&nbsp; [Eventer](/api/classes/Eventer.md)
:::

## 安装插件

需要安装 animate 插件、[color 插件](/plugin/in/color/index.md) 才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/animate)。

::: code-group

```sh [npm]
npm install @leafer-in/animate
npm install @leafer-in/color
```

```sh [pnpm]
pnpm add @leafer-in/animate
pnpm add @leafer-in/color
```

```sh [yarn]
yarn add @leafer-in/animate
yarn add @leafer-in/color
```

```sh [bun]
bun add @leafer-in/animate
bun add @leafer-in/color
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.animate 访问插件内部功能。

::: code-group

```html [animate.min]
<script src="https://unpkg.com/@leafer-in/animate@1.6.1/dist/animate.min.js"></script>
<script src="https://unpkg.com/@leafer-in/color@1.6.1/dist/color.min.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

```html [animate]
<script src="https://unpkg.com/@leafer-in/animate@1.6.1/dist/animate.js"></script>
<script src="https://unpkg.com/@leafer-in/color@1.6.1/dist/color.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性 （只读）

### target: [`UI`](/reference/display/UI.md) ｜ `Object`

动画目标元素，支持普通对象。

## 动画选项属性

可作为初始化动画选项参数传入，当作为 Animate 实例属性访问时为只读属性。

| 名称                                               | 描述                                                                               |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [easing](/plugin/in/animate/options/easing.md)     | 缓动：动画的缓动方式，默认为 ease                                                  |
| [delay](/plugin/in/animate/options/delay.md)       | 延迟：动画延迟播放的时长                                                           |
| [duration](/plugin/in/animate/options/duration.md) | 时长：动画的总时长（不包含 delay 和循环时间）                                      |
| [speed](/plugin/in/animate/options/speed.md)       | 速度：动画的播放倍速，1 个 10 秒的动画，如果 speed 为 5，则 2 秒就能播完           |
| [reverse](/plugin/in/animate/options/reverse.md)   | 反向：是否反向动画 to -> from                                                      |
| [loop](/plugin/in/animate/options/loop.md)         | 循环：是否循环播放，可设置次数                                                     |
| [loopDelay](/plugin/in/animate/options/loop.md)    | 循环间隔：进入下一次循环播放的延迟时间                                             |
| [swing](/plugin/in/animate/options/loop.md)        | 摇摆循环：是否摇摆循环播放，可设置到达 to 的次数，from -> to，to -> from -> to ... |
| [ending](/plugin/in/animate/options/ending.md)     | 结束样式：动画结束时的样式，from 表示起点样式，to 表示终点样式                     |
| [join](/plugin/in/animate/options/join.md)         | 加入关键帧： 是否加入动画前的元素状态作为 from 关键帧                              |
| [autoplay](/plugin/in/animate/options/autoplay.md) | 自动播放： 是否自动播放，默认为 true                                               |
| [attrs](/plugin/in/animate/options/attrs.md)       | 过渡属性：参与动画过渡的元素属性列表， 默认为所有                                  |
| [event](/plugin/in/animate/options/event.md)       | 事件：监听动画事件对象                                                             |

## 更多属性

| 名称                                               | 描述                                                     |
| -------------------------------------------------- | -------------------------------------------------------- |
| 计时                                               |                                                          |
| [duration](/plugin/in/animate/Animate/time.md)     | 动画的总时长（不包含 delay 和循环时间）                  |
| [time](/plugin/in/animate/Animate/time.md)         | 已经播放的时长（相对 duration，不包含 delay 和循环时间） |
| [looped](/plugin/in/animate/Animate/time.md)       | 已经循环播放了多少次（计数）                             |
| 状态                                               |                                                          |
| [started](/plugin/in/animate/Animate/state.md)     | 动画是否开始                                             |
| [running](/plugin/in/animate/Animate/state.md)     | 动画是否正在播放                                         |
| [completed](/plugin/in/animate/Animate/state.md)   | 动画是否完成                                             |
| [destroyed](/plugin/in/animate/Animate/state.md)   | 动画是否销毁                                             |
| 样式                                               |                                                          |
| [style](/plugin/in/animate/Animate/style.md)       | 当前动画状态的样式                                       |
| [fromStyle](/plugin/in/animate/Animate/style.md)   | from 帧状态的样式                                        |
| [toStyle](/plugin/in/animate/Animate/style.md)     | to 帧状态的样式                                          |
| [endingStyle](/plugin/in/animate/Animate/style.md) | 结束状态的样式                                           |
| [frames](/plugin/in/animate/Animate/style.md)      | 实际用于内部动画的计算关键帧列表                         |
| [keyframes](/plugin/in/animate/Animate/style.md)   | 原始动画关键帧列表                                       |

## 关键方法

<!-- ### init ( target: [UI](/reference/display/UI.md), keyframe: [`IUIInputData`](/api/interfaces/IUIInputData.md) | [`IKeyframe`](/api/modules.md#ikeyframe) [], options?: options?: [`ITranstion`](/api/modules.md#itransition), isTemp?: `boolean` )

重新初始化动画。 -->

| 名称                                               | 描述                                                                 |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| [play()](/plugin/in/animate/Animate/play.md)       | 播放动画                                                             |
| [pause()](/plugin/in/animate/Animate/pause.md)     | 暂停动画                                                             |
| [stop()](/plugin/in/animate/Animate/stop.md)       | 停止动画： 强行完成动画并暂停                                        |
| [seek()](/plugin/in/animate/Animate/seek.md)       | 定位动画：定位跳转到指定时间，支持设置具体时间（以秒为单位）或百分比 |
| [kill()](/plugin/in/animate/Animate/kill.md)       | kill 动画：强行完成并销毁动画                                        |
| [destroy()](/plugin/in/animate/Animate/destroy.md) | 销毁动画：立即销毁动画，不会执行完成动画操作，仅停留在当前动画状态   |

## 事件

动画事件，通过 on() 监听。

| 名称                                                     | 描述     |
| -------------------------------------------------------- | -------- |
| [AnimateEvent](/plugin/in/animate/event/AnimateEvent.md) | 动画事件 |

<!-- ## API

### [Animate](/api/classes/Animate.md) -->

## 示例

<case name="Animate" editor=false></case>

### 摇摆循环动画

```ts
// #创建动画实例  [摇摆动画]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

new Animate(  // [!code hl:7]
    rect,
    { x: 500, cornerRadius: 0 }, // style keyframe
    {
        duration: 1,
        swing: true // 摇摆循环播放
    } // options
)


```

<case name="AnimateColor" editor=false></case>

### 颜色过渡动画

```ts
// #创建动画实例 [颜色过渡]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

new Animate(  // [!code hl:7]
    rect,
    { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
    {
        duration: 1,
        swing: true // 摇摆循环播放
    } // options
)
```

<case name="AnimateFrames" editor=false></case>

### 关键帧动画

```ts
// #创建动画实例 [关键帧动画]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 50, y: 100, cornerRadius: 50, fill: '#32cd79', around: 'center' })

leafer.add(rect)

new Animate(  // [!code hl:14]
    rect,
    [
        { style: { x: 150, scaleX: 2, fill: '#ffcd00' }, duration: 0.5 },  // animate keyframe
        { style: { x: 50, scaleX: 1, fill: '#ffcd00' }, duration: 0.2 },
        { style: { x: 550, cornerRadius: 0, fill: '#ffcd00' }, delay: 0.1, easing: 'bounce-out' },
        { x: 50, rotation: -720, cornerRadius: 50 } // style keyframe
    ],
    {
        duration: 3, // 自动分配剩余的时长给未设置 duration 的关键帧： (3 - 0.5 - 0.2 - 0.1) / 2 
        loop: true,
        join: true //  加入动画前的元素状态作为 from 关键帧
    } // options
)
```

### 暂停动画

```ts
// #动画 - 通过 pause() 方法暂停动画
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

// 通过 pause() 方法暂停动画 // [!code hl:5]
setTimeout(() => {

    animate.pause()

}, 500)

```

### 定位跳转动画

```ts
// #动画 - 通过 seek() 方法定位跳转动画 [数值（秒数）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 2,
        autoplay: false // 不自动播放 // [!code hl]
    } // options
)

// 通过 seek() 方法定位跳转动画 // [!code hl:5]
setTimeout(() => {

    animate.seek(0.5)

}, 1000)

```

### 通过 on() 监听动画事件

支持像元素一样 [监听、移除事件](/reference/UI/on.md)，同时也支持初始化时传入 [监听事件对象](/plugin/in/animate/options/event.md)。

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
