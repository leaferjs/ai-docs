# innerName

运行时创建的临时名称（innerId + tag），用于快速识别元素。

## 只读属性

### innerName: `string`

运行时创建的临时名称，用于快速识别元素。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 显示矩形元素的 innerName

::: code-group
```ts
// #显示矩形元素的 innerName (Leafer)
import { Leafer, Rect, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 30)

leafer.add(rect)

leafer.add(new Text({ text: rect.innerName, fill: '#32cd79' }))  // [!code hl] 

```
```ts
// #显示矩形元素的 innerName (App)
import { App, Rect, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 0, 30)

app.tree.add(rect)

app.tree.add(new Text({ text: rect.innerName, fill: '#32cd79' }))  // [!code hl] 

```
:::
