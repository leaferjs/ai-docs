# id

元素的唯一 id，可通过 [findId()](/reference/UI/findOne.md) / [findOne()](/reference/UI/findOne.md) 查找。

## 关键属性

### id: `string`

元素的唯一 id，默认为空。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 id 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

```ts
// #查找单个元素 [通过 id 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)

console.log(
    leafer.findOne('#block') // [!code hl:2] // rect1
    // = leafer.findId('block') 
)
```
