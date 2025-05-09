# disabled

禁用状态， 支持添加 [过渡效果](/reference/property/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### disabled： `boolean`

是否禁用。

### disabledStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

元素 `disabled` 设为 true 时的禁用样式， `disabled` 设为 false 后自动还原。

## 归属

### [UI](/reference/display/UI.md)

## 示例

```ts
// #禁用状态 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 1)',
    cornerRadius: 30,
    disabledStyle: { // [!code hl:3] // 禁用样式
        fill: 'rgba(50,205,121, 0.5)'
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.disabled = true  // [!code hl:1] // 设置禁用状态

    setTimeout(() => { rect.disabled = false }, 2000)

}, 1000)

```
