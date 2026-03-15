# clone

克隆元素。

## 关键属性

### clone ( data?: [`IUIInputData`](/api/interfaces/IUIInputData.md))

克隆当前元素，可以增加 data 参数覆盖旧数据。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 克隆元素，并设置位置

::: code-group
```ts
// #克隆元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 克隆元素，并设置位置
    const rect2 = rect.clone({ x: 200, y: 200 }) // [!code hl:2]
    leafer.add(rect2)

}, 1000)
```
```ts
// #克隆元素 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' })

app.tree.add(rect)

setTimeout(() => {

    // 克隆元素，并设置位置
    const rect2 = rect.clone({ x: 200, y: 200 }) // [!code hl:2]
    app.tree.add(rect2)

}, 1000)
```
:::
