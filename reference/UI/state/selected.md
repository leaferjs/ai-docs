<script setup>
import Case from '/component/Case.vue'
</script>

# selected

选中状态， 支持添加 [过渡效果](../transition.md)。

[Box](../../display/Box.md) / [Group ](../../display/Group.md)可通过设置 [button](./state.md#button-boolean) 属性，使子元素自动同步交互状态。

::: tip 注意事项
需安装 [交互状态插件](../../../plugin/in/state/index.md) 才能使用。
:::

## 关键属性

### selected： `boolean`

是否选中。

### selectedStyle: [`IUIInputData`](../../../api/interfaces/IUIInputData.md)

元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原。

## 归属

### [UI 元素](../../display/UI.md)

## 示例

::: code-group
```ts
// #选中状态  (Leafer)
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    selectedStyle: { // [!code hl:3] // 选中样式
        fill: 'rgba(50,205,121, 1)'
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.selected = true  // [!code hl:1] // 设置选中状态 

    setTimeout(() => { rect.selected = false }, 2000)

}, 1000)

```
```ts
// #选中状态 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    selectedStyle: { // [!code hl:3] // 选中样式
        fill: 'rgba(50,205,121, 1)'
    }
})

app.tree.add(rect)

setTimeout(() => {

    rect.selected = true  // [!code hl:1] // 设置选中状态 

    setTimeout(() => { rect.selected = false }, 2000)

}, 1000)

```
:::
