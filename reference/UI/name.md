# name

元素的名称，可通过 [find()](/reference/UI/find.md) / [findOne()](/reference/UI/findOne.md) 的函数条件查找。

## 关键属性

### name: `string`

元素的名称，默认为空。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 函数 查找 name

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

```ts
// #查找功能 [通过 name 查找]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ name: 'hello', fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ name: 'hello', fill: '#32cd79', stroke: 'black', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.find(function (item) {  // [!code hl:3] 
        return item.name === 'hello' ? 1 : 0 // [rect1, ellipse]
    })
)
```
