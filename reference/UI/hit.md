<script setup>
import Case from '/component/Case.vue'
</script>

# hittable

元素是否响应鼠标、触摸或其他指针设备的交互事件，类似 CSS 的 pointer-events 属性。

可在 [引擎配置](/reference/config/app/pointer.md#pointer-hitradius-number) 中设置默认光标的碰撞半径，或单独设置元素的 [hitRadius](#hitradius-number)。

## 关键属性

### hittable: `boolean`

元素是否响应交互事件，默认为 true。

<!-- 若设为 false, 自身和子元素将不再响应交互事件。 -->

可进一步细化响应细节 [hitChildren](./hitChildren.md)、[hitSelf](./hitSelf.md)、[hitFill](./hitFill.md)、[hitStroke](./hitStroke.md)，注意 [hitFill](./hitFill.md) 支持像素检测。

## 辅助属性

### hitBox: `boolean`

元素的 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 区域是否总是响应交互事件（包含透明像素），默认为 false。

一般用于带 padding 的 Text 元素，Group 不支持此属性。

### hitRadius: `number`

设置光标的碰撞半径，当光标距离元素在 hitRadius 范围内时，引擎可以优先拾取到元素。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 停用元素响应交互事件

```ts
// #停用元素交互事件
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true })

leafer.add(rect)

setTimeout(() => {

    // 停用元素交互事件，将无法拖拽元素
    rect.hittable = false // [!code hl]

}, 1000)
```
