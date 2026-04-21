# offset

元素偏移属性，方便动画、交互状态中以相对值偏移元素。

## 关键属性

### offsetX: `number`

x 轴偏移量。

### offsetY: `number`

y 轴偏移量。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 偏移元素

::: code-group
```ts
// #偏移元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 沿 X/Y 偏移 100 像素
    rect.set({ offsetX: 100, offsetY: 100 }) // [!code hl]

}, 1000)
```
```ts
// #偏移元素 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

app.tree.add(rect)

setTimeout(() => {

    // 沿 X/Y 偏移 100 像素
    rect.set({ offsetX: 100, offsetY: 100 }) // [!code hl]

}, 1000)
```
:::
