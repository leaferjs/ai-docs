<script setup>
import Case from '/component/Case.vue'
</script>

# 定位

## 关键方法

### seek ( time: `number` | [`IPercentData`](/api/interfaces/IPercentData.md), includeDelay?: `boolean` )

定位跳转到指定时间，支持设置具体时间（以秒为单位），或百分比（相对 duration 总时长）。

设置 includeDelay 参数表示将 主 delay 时间包含在总时长中 seek。

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 使用秒数定位跳转

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

### 使用百分比定位跳转

```ts
// #动画 - 通过 seek() 方法定位跳转动画 [百分比]
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

    animate.seek({ type: 'percent', value: 0.25 }) // = 2 * 0.25

}, 1000)

```
