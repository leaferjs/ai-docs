<script setup>
import Case from '/component/Case.vue'
</script>

# hover

pointer.enter 状态， 支持添加 [过渡效果](/reference/property/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### hoverStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

光标移入时的交互样式， 移出后自动还原。

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="HoverStyle" index=0 editor=false></case>

### 鼠标移入颜色加深

```ts
// #光标移入时的交互样式
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    hoverStyle: { // [!code hl:3] // hover 样式
        fill: 'rgba(50,205,121, 0.8)'
    }
})

leafer.add(rect)
```
