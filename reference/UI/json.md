# JSON

导入导出 JSON 对象 / 字符串。

:::tip 注意

App 元素 暂不支持直接导入导出。

可以导出 `app.tree` 为 json， 再通过 `app.tree.set( {children: json.children })` 导入。

:::

## 导出

### toJSON ( options?: `IJSONOptions` ): [`IUIInputData`](/api/interfaces/IUIInputData.md)

导出 JSON 对象。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

```ts
// #导出 JSON
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

## 导入

### 创建方式

```ts
// #创建元素 [使用 JSON]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const json = { "tag": 'Group', "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] }// [!code hl:3]

leafer.add(json)
```

```ts
// #Leafer 导入 JSON
import { Leafer } from 'leafer-ui'

const json = { "tag": "Leafer", "width": 1273, "height": 877, "pixelRatio": 2, "hittable": true, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

new Leafer({ view: window }, json)
```

### set 方式

```ts
// #修改数据 [使用 JSON]
import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)


```

## 归属

### [UI](/reference/display/UI.md)
