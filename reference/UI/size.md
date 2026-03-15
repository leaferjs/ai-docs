# size

元素的宽高尺寸属性。

## 关键属性

### width: `number`

元素的宽度，仅部分元素支持直接设置。

不支持直接设置的元素、Group 可通过 [resizeWidth()](/reference/UI/resize.md) 调整，通过 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 获取实际宽度 。

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

元素的高度，仅部分元素支持直接设置。

不支持直接设置的元素、Group 可通过 [resizeHeight()](/reference/UI/resize.md) 调整，通过 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 获取实际高度。

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

## 只读属性

### isAutoWidth: `boolean`

是否为自动宽度。

### isAutoHeight: `boolean`

是否为自动高度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 创建矩形，并设置宽高

::: code-group
```ts
// #创建 Rect [绘制矩形 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:5]
    width: 100,
    height: 100,
    fill: '#32cd79'
})

leafer.add(rect)
```
```ts
// #创建 Rect [绘制矩形 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({  // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#32cd79',
    editable: true
})

app.tree.add(rect)
```
:::

### 调整 Group 大小，不使用 scale 属性

::: code-group
```ts
// #调整 Group 大小，不使用 scale 属性 (Leafer)
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/resize' // 导入 resize 插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const group = new Group({
    children: [
        new Rect({
            width: 100,
            height: 100,
            fill: '#32cd79',
            draggable: true
        }),
        new Ellipse({
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            fill: "#FEB027"
        })
    ]
})

leafer.add(group)

setTimeout(() => {

    // resize group
    group.resizeWidth(200)  // [!code hl:2]
    group.resizeHeight(200)

}, 1000)


```
```ts
// #调整 Group 大小，不使用 scale 属性 (App)
import { App, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/resize' // 导入 resize 插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const group = new Group({
    children: [
        new Rect({
            width: 100,
            height: 100,
            fill: '#32cd79',
            draggable: true
        }),
        new Ellipse({
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            fill: "#FEB027"
        })
    ]
})

app.tree.add(group)

setTimeout(() => {

    // resize group
    group.resizeWidth(200)  // [!code hl:2]
    group.resizeHeight(200)

}, 1000)


```
:::
