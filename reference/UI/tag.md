# tag

元素标签名（即元素的类名），如 `Rect` 、 `Box`，可通过 [find()](./find.md) / [findOne()](./findOne.md) 查找。

未来可用于像 HTML 的标签方式创建元素。

## 只读属性

### tag: `string`

元素标签名（即元素的类名）。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 通过 tag 查找

::: tip 注意事项
需安装 [查找元素插件](../../plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](../../guide/install/game/start.md)、 [leafer-editor](../../guide/install/editor/start.md) （已集成查找元素插件）
:::

::: code-group
```ts
// #查找功能 [通过 tag 查找 (Leafer)]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.find('Rect')  // [!code hl] // [rect1, rect2]
)
```
```ts
// #查找功能 [通过 tag 查找 (App)]
import { App, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', x: 300 })

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(ellipse)

console.log(
    app.find('Rect')  // [!code hl] // [rect1, rect2]
)
```
:::
