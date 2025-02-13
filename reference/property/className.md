# layer

元素的分类名称，同 HTML 的 className，可通过 [find()](/reference/property/find.md) / [findOne()](/reference/property/findOne.md) 查找。

## 关键属性

### className: `string`

分类名称，暂时只支持设置 1 个，默认为空。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 className 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

```ts
// #查找功能 [通过 className 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ className: 'menu', fill: '#32cd79' })
const rect2 = new Rect({ className: 'menu', fill: '#32cd79', x: 150 })
const rect3 = new Rect({ fill: '#32cd79', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(rect3)

console.log(
    leafer.find('.menu') // [!code hl] // [rect1, rect2]
) 
```
