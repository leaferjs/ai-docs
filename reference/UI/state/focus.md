# focus

聚焦状态， 支持添加 [过渡效果](/reference/UI/transition.md)。

[Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/UI/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](/plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### focusStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

元素 focus() 时的聚焦样式， 失去焦点后自动还原。

## 关键方法

### focus ( value?: `boolean` )

聚焦元素操作，单个 App 只能同时有一个元素聚焦，当一个元素聚焦时，之前元素会失焦。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

```ts
// #聚焦状态 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    focusStyle: { // [!code hl:3] // 聚焦样式
        stroke: '#FEB027'
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.focus()  // [!code hl:1] // 设置聚焦状态 

    setTimeout(() => { rect.focus(false) }, 2000)

}, 1000)

```
