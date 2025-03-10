# innerId

运行时创建的临时 id（递增），用于快速识别元素，可通过 [findOne()](/reference/UI/findOne.md) 查找。

## 只读属性

### innerId: `number`

运行时创建的临时 id（递增），不能用于远程存储。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 innerId 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

```ts
// #查找单个元素 [通过 innerId 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)
console.log(
    leafer.findOne(rect2.innerId)  // [!code hl] // rect2
)
```
