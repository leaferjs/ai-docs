<script setup>
import Case from '/component/Case.vue'
</script>

# 缓动方式

## 关键属性

### easing: [`IAnimateEasing`](/api/modules.md#ianimateeasing)

动画的缓动方式，默认为 ease，查看 [动画曲线示意图](https://easings.net/)。

```ts
type IAnimateEasing =
  | 'ease' // 默认值，慢速开始，中间快，缓慢结束
  | 'linear' // 线性缓动，匀速进行

  // 缓动
  | 'ease-in' // 缓慢开始，之后加快
  | 'ease-out' // 开始快，缓慢结束
  | 'ease-in-out' // 缓慢开始和结束

  // 三角函数
  | 'sine-in'
  | 'sine-out'
  | 'sine-in-out'
  // 二次方
  | 'quad-in'
  | 'quad-out'
  | 'quad-in-out'
  // 三次方
  | 'cubic-in'
  | 'cubic-out'
  | 'cubic-in-out'
  // 四次方
  | 'quart-in'
  | 'quart-out'
  | 'quart-in-out'
  // 五次方
  | 'quint-in'
  | 'quint-out'
  | 'quint-in-out'
  // 指数
  | 'expo-in'
  | 'expo-out'
  | 'expo-in-out'
  // 平方根
  | 'circ-in'
  | 'circ-out'
  | 'circ-in-out'
  // 拉力
  | 'back-in'
  | 'back-out'
  | 'back-in-out'
  // 多次回弹
  | 'elastic-in'
  | 'elastic-out'
  | 'elastic-in-out'
  // 重力反弹
  | 'bounce-in'
  | 'bounce-out'
  | 'bounce-in-out'
  | ICubicBezierEasing
  | IStepsEasing

interface ICubicBezierEasing {
  name: 'cubic-bezier' // 三次贝塞尔曲线 0,0, x1,y1, x2,y2, 1,1
  value: [number, number, number, number] // [x1, y1, x2, y2]
}

interface IStepsEasing {
  name: 'steps' // 步长动画
  // 第一个参数为步数
  // 第二个参数为取整步数的数学方法 Math.floor(t * steps) / steps， 默认为 floor
  value: number | [number, 'floor' | 'round' | 'ceil']
}
```

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

<case name="AnimateEasing" index=0 height=80 editor=false></case>

### ease

慢速开始，中间快，缓慢结束

::: code-group
```ts
// #动画 - 缓动方式  [ease（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'ease',  // ease 缓动：慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [ease（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'ease',  // ease 缓动：慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [ease（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'ease',  // ease 缓动： 慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [ease（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'ease',  // ease 缓动： 慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [ease（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'ease',  // ease 缓动： 慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=1 height=80 editor=false></case>

### linear

匀速进行

::: code-group
```ts
// #动画 - 缓动方式  [linear（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [linear（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [linear（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [linear（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [linear（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=2 height=80 editor=false></case>

### back-in

拉力进入

::: code-group
```ts
// #动画 - 缓动方式  [back-in（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2,
        loop: true
    }
}, 50, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [back-in（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2
    }
}, 50, 100, 50, 50))
```
```ts
// #动画 - 缓动方式  [back-in（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 50, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [back-in（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 50, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [back-in（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 50, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=3 height=80 editor=false></case>

### elastic-out

多次回弹结束

::: code-group
```ts
// #动画 - 缓动方式  [elastic-out（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [elastic-out（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [elastic-out（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [elastic-out（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [elastic-out（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=4 height=80 editor=false></case>

### bounce-out

重力反弹结束

::: code-group
```ts
// #动画 - 缓动方式  [bounce-out（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [bounce-out（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [bounce-out（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [bounce-out（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [bounce-out（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=5 height=80 editor=false></case>

### cubic-bezier

自定义三次贝塞尔曲线 `0,0, x1,y1, x2,y2, 1,1` 动画

::: code-group
```ts
// #动画 - 缓动方式  [cubic-bezier（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },  // 自定义缓动曲线 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [cubic-bezier（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },  // 自定义缓动曲线 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [ease（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },   // 自定义缓动曲线 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [ease（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },   // 自定义缓动曲线 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [ease（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },   // 自定义缓动曲线 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::

<case name="AnimateEasing" index=6 height=80 editor=false></case>

### steps

步长动画

::: code-group
```ts
// #动画 - 缓动方式  [steps（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: { name: 'steps', value: 6 },  // 步长动画 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [steps（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: { name: 'steps', value: 6 },  // 步长动画 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))

```
```ts
// #动画 - 缓动方式  [steps（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: { name: 'steps', value: 6 },  // 步长动画 // [!code hl]
        duration: 2
    } // options
)
```
```ts
// #动画 - 缓动方式  [steps（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: { name: 'steps', value: 6 },  // 步长动画 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
```ts
// #动画 - 缓动方式  [steps（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: { name: 'steps', value: 6 },  // 步长动画 // [!code hl]
        duration: 2,
        loop: true
    } // options
)
```
:::
