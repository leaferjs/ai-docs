<script setup>
import Case from '/component/Case.vue'
</script>

# 样式

## 关键属性（只读）

### style: [`IUIInputData`](/api/interfaces/IUIInputData.md)

当前动画状态的样式。

### fromStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

from 帧状态的样式。

### toStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

to 帧状态的样式。

### endingStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

结束状态的样式

### frames: [`IComputedKeyframe`](/api/interfaces/IComputedKeyframe.md) []

实际用于内部动画的计算关键帧列表。

### keyframes: [`IKeyframe`](/api/modules.md#ikeyframe)[]

原始动画关键帧列表。

```ts
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

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

```ts
// #动画 - 打印动画当前状态样式
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

// 打印动画当前状态样式 // [!code hl:5]
setTimeout(() => {

    console.log(animate.style)

}, 500)

```
