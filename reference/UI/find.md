# find

查找元素功能（选择器），获取一个数组。

想获取一个元素，请使用 [findOne()](./findOne.md)。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### find ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)[]

通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，返回一个数组。

### findTag( tag: `number` | `number`[] ): [`UI`](/reference/display/UI.md)[]

查找 tag，支持通过数组查找多个 tag，返回一个数组。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 id 查找

```ts
// #查找功能 [通过 id 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)

console.log(
    leafer.find('#block') // [!code hl] // [rect1]
)
```

### 通过 innerId 查找

```ts
// #查找功能 [通过 innerId 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)
console.log(
    leafer.find(rect2.innerId)  // [!code hl] // [rect2]
)
```

### 通过 className 查找

```ts
// #查找功能 [通过 className 查找]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

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

### 通过 tag 查找

```ts
// #查找功能 [通过 tag 查找]
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

### 通过 函数 查找

```ts
// #查找功能 [通过 自定义函数 查找]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', stroke: 'black', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.find(function (item) {  // [!code hl:3] 
        return item.stroke === 'black' ? 1 : 0 // [rect1, ellipse]
    })
)
```
