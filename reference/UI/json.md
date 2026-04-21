# JSON

导入导出 JSON 对象 / 字符串。

:::tip 注意

App 元素 暂不支持直接导入导出。

可以导出 `app.tree` 为 json， 再通过 `app.tree.set( {children: json.children })` 导入。

:::

## 导出

### toJSON ( options?: `IJSONOptions` ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

导出 JSON 对象。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

```ts
// #导出 JSON (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)

const json = leafer.toJSON() // [!code hl:3]

console.log(json) // {"tag":"Leafer","width":1273,"height":877,"pixelRatio":2,"hittable":true,"children":[{"tag":"Rect","x":100,"y":100,"width":100,"height":100,"fill":"#32cd79","draggable":true}]}
```

### toString ( options?: `IJSONOptions` ): `string`

导出 JSON 字符串。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

## 辅助属性

### skipJSON: `boolean`

子元素是否跳过JSON导出。

```ts
rect.skipJSON = true
```

### childlessJSON: `boolean`

导出 JSON 时是否阻止子元素一起导出（一般用于自定义元素）, 默认为 false。

```ts
group.childlessJSON = true
```

## 导入

### 创建方式

::: code-group
```ts
// #创建元素 [使用 JSON (Leafer)]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const json = { "tag": 'Group', "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] }// [!code hl:3]

leafer.add(json)
```
```ts
// #创建元素 [使用 JSON (App)]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const json = { "tag": 'Group', "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] }// [!code hl:3]

app.tree.add(json)
```
:::

::: code-group
```ts
// #Leafer 导入 JSON (Leafer)
import { Leafer } from 'leafer-ui'

const json = { "tag": "Leafer", "width": 1273, "height": 877, "pixelRatio": 2, "hittable": true, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

new Leafer({ view: window }, json)
```
```ts
// #Leafer 导入 JSON (App)
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const json = { "tag": "Leafer", "width": 1273, "height": 877, "pixelRatio": 2, "hittable": true, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

const app = new App({ view: window, editor: {} })
app.tree.set(json)
```
:::

### set 方式

::: code-group
```ts
// #修改数据 [使用 JSON (Leafer)]
import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)


```
```ts
// #修改数据 [使用 JSON (App)]
import { Group, App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group()

app.tree.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)


```
:::

## 归属

### [UI 元素](../display/UI.md)
