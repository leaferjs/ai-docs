# resize

调整元素/组元素的包围盒大小。

通过修改元素的宽高、路径、字体大小等实现 resize 包围盒宽高（不使用缩放值）。

需安装 [resize 插件](/plugin/in/resize/index.md)， [图形编辑器](/plugin/in/editor/index.md)、[自动布局](/plugin/in/flow/index.md) 会自动安装此插件。

## 关键方法

### resizeWidth ( width: `number`)

resize 元素/组元素的包围盒宽度。

若元素的 [lockRatio](/reference/UI/editable.md#lockratio-boolean) 为 true, 将同时等比例调整高度。

### resizeHeight ( height: `number`)

resize 元素/组元素的包围盒高度。

若元素的 [lockRatio](/reference/UI/editable.md#lockratio-boolean) 为 true, 将同时等比例调整宽度。

## 辅助方法

### scaleResize ( scaleX: `number`, scaleY = scaleX)

缩放操作转换为宽高值 <badge>增量操作</badge>。

[图形编辑器插件](/plugin/in/editor/index.md) 调整元素大小使用的是此方法。

## Box / Frame 元素

### resizeChildren: `boolean`

Box / Frame 的子元素是否跟随 resize， 默认为 false。

Group 会强制子元素跟随 resize，不用设置此参数。

## Text 元素

### resizeFontSize: `boolean`

自动宽高的文本是否通过修改字体大小进行 resize, 默认为 false。

## 辅助属性

### lockRatio: `boolean`

是否锁定元素的宽高比例，默认为 false。

## 其他 resize 方法

以下方法可以在最后传入一个参数 resize: `boolean` 实现缩放操作转宽高值。

### [setTransform ()](/reference/UI/transform.md#关键方法)

### [transform ()](/reference/UI/transform.md#关键方法)

### [scaleOf ()](/reference/UI/scale.md#关键方法)

### [skewOf ()](/reference/UI/skew.md#关键方法)

### [transformWorld ()](/reference/UI/transform.md#相对世界坐标系)

### [scaleOfWorld ()](/reference/UI/scale.md#关键方法)

### [skewOfWorld ()](/reference/UI/skew.md#关键方法)

### [dropTo ()](/reference/UI/dropTo.md)

将缩放转换为宽高操作。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

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

### scaleOf 增加 resize 参数

```ts
// #图形编辑器 [添加底部固定按钮]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 0, 0, 100, 100)

app.tree.add(rect)


const resize = true // [!code hl:5]

rect.scaleOf({ x: 0, y: 0 }, 2, 2, resize) // scale值将转为宽高

console.log(rect.scaleX, rect.scaleY, rect.width, rect.height)  // 1, 1, 200, 200
```
