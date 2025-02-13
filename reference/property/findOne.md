# findOne

查找元素功能（选择器），只获取一个元素。

想获取一个数组，请使用 [find()](./find.md)。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### findOne ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)

通过 [id](/reference/property/id)、[innerId](/reference/property/innerId)、[className](/reference/property/className)、[tag](/reference/property/tag)、函数条件查找元素，只返回一个元素。

### findId ( id: `number` | `string` ): [`UI`](/reference/display/UI.md)

查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 id 查找

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

### 通过 innerId 查找

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

### 通过 className 查找

```ts
// #查找单个元素 [通过 className 查找]
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
    leafer.findOne('.menu') // [!code hl] // rect1
) 
```

### 通过 tag 查找

```ts
// #查找单个元素 [通过 tag 查找]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.findOne('Rect')  // [!code hl] // rect1
)
```

### 通过 函数 查找

```ts
// #查找单个元素 [通过 自定义函数 查找]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', stroke: 'black', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.findOne(function (item) {  // [!code hl:3] 
        return item.stroke === 'black' ? 1 : 0 // rect1
    })
)
```
