# findOne

查找元素功能（选择器），只获取一个元素。

想获取一个数组，请使用 [find()](./find.md)。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### findOne ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)

通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，只返回一个元素。

### findId ( id: `number` | `string` ): [`UI`](/reference/display/UI.md)

查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 id 查找

::: code-group
```ts
// #查找单个元素 [通过 id 查找 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

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
```ts
// #查找单个元素 [通过 id 查找 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

app.tree.add(rect1)
app.tree.add(rect2)

console.log(
    app.findOne('#block') // [!code hl:2] // rect1
    // = app.findId('block') 
)
```
:::

### 通过 innerId 查找

::: code-group
```ts
// #查找单个元素 [通过 innerId 查找 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)
console.log(
    leafer.findOne(rect2.innerId)  // [!code hl] // rect2
)
```
```ts
// #查找单个元素 [通过 innerId 查找 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

app.tree.add(rect1)
app.tree.add(rect2)
console.log(
    app.findOne(rect2.innerId)  // [!code hl] // rect2
)
```
:::

### 通过 className 查找

::: code-group
```ts
// #查找单个元素 [通过 className 查找 (Leafer)]
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
    leafer.findOne('.menu') // [!code hl] // rect1
) 
```
```ts
// #查找单个元素 [通过 className 查找 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ className: 'menu', fill: '#32cd79' })
const rect2 = new Rect({ className: 'menu', fill: '#32cd79', x: 150 })
const rect3 = new Rect({ fill: '#32cd79', x: 300 })

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)

console.log(
    app.findOne('.menu') // [!code hl] // rect1
) 
```
:::

### 通过 tag 查找

::: code-group
```ts
// #查找单个元素 [通过 tag 查找 (Leafer)]
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
    leafer.findOne('Rect')  // [!code hl] // rect1
)
```
```ts
// #查找单个元素 [通过 tag 查找 (App)]
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
    app.findOne('Rect')  // [!code hl] // rect1
)
```
:::

### 通过 函数 查找

::: code-group
```ts
// #查找单个元素 [通过 自定义函数 查找 (Leafer)]
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
    leafer.findOne(function (item) {  // [!code hl:3] 
        return item.stroke === 'black' ? 1 : 0 // rect1
    })
)
```
```ts
// #查找单个元素 [通过 自定义函数 查找 (App)]
import { App, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', stroke: 'black', x: 300 })

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(ellipse)

console.log(
    app.findOne(function (item) {  // [!code hl:3] 
        return item.stroke === 'black' ? 1 : 0 // rect1
    })
)
```
:::
