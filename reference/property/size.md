# size

元素的宽高尺寸属性。

## 关键属性

### width: `number`

元素的宽度，仅部分元素支持直接设置。

不支持直接设置的元素、Group 可通过 [resizeWidth()](/reference/property/resize.md) 调整，通过 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 获取实际宽度 。

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

元素的高度，仅部分元素支持直接设置。

不支持直接设置的元素、Group 可通过 [resizeHeight()](/reference/property/resize.md) 调整，通过 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 获取实际高度。

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 创建矩形，并设置宽高

```ts
// #创建 Rect [绘制矩形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:5]
    width: 100,
    height: 100,
    fill: '#32cd79'
})

leafer.add(rect)
```

### 调整 Group 大小，不使用 scale 属性

```ts
// #调整 Group 大小，不使用 scale 属性
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/resize'

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
