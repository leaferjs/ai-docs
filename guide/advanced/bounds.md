# 获取包围盒

当我们用鼠标绘制图形，或对元素进行对齐、矩形碰撞检测的时候，需要获取元素实际内容的位置和大小（包围盒），用来进行下一步操作。

## 包围盒模型

图中是一个元素由内到外形成的不同类型包围盒，每个包围盒都包含位置（x、y）和大小（width、height）信息，类似 CSS 的盒模型。

![盒子模型](/svg/bounds.svg)

### margin 包围盒

**外部边界:** 基准边界 + margin。

### render 包围盒

**渲染边界:** 笔触边界 + 阴影等。

### stroke 包围盒

**笔触边界:** 基准边界 + stroke，可响应交互事件的边界。

### box 包围盒

**基准边界:** 包含 padding，以此为基准向内、向外延伸边界。

### content 包围盒

**内容边界:** 填充内容的边界，不包含 padding，一般用于测量 [Text](/reference/display/Text.md) 的实际文本大小。

## OBB 和 AABB

当元素旋转后，在 [不同的坐标系下](./coordinate.md) 会形成不同的 OBB 和 AABB 包围盒。

![包围盒](/svg/obb-aabb.svg)

<!--
### 内部坐标系边界

以元素自身为起点（0，0），由元素的宽高、路径形成的内部边界。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](/reference/property/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](/reference/property/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](/reference/property/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。 -->

## 示例

### 我们通过 创建图形 的例子，来了解 包围盒与坐标系 的相互作用

按下鼠标拖动开始画矩形，抬起结束，当缩放平移视图后，仍然可以准确绘制新的矩形。

::: code-group
```ts
// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)


const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建矩形（拖拽）
    let rect: Rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: '#32cd79' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e: DragEvent) => {
        if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
    })

}, 2000)

```
```js
// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)


const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建矩形（拖拽）
    let rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: '#32cd79' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e) => {
        if (rect) rect.set(e.getPageBounds())  // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
    })

}, 2000)

```
:::

## 获取方法

### 事件中的获取方法

[DragEvent](/reference/event/ui/Drag.md#拖拽区域)

### 元素上的获取方法

| 名称                                                                                                                                                   | 描述                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata)                                                                                          | 元素在 [内部坐标系](/guide/basic/coordinate.md) 中的基础边界（[OBB](/reference/property/bounds.md) 包围盒）        |
| [renderBounds](/reference/property/bounds.md#renderbounds-iboundsdata)                                                                                    | 元素在 [内部坐标系](/guide/basic/coordinate.md) 中的渲染边界（[AABB](/reference/property/bounds.md) 包围盒）       |
| [worldBoxBounds](/reference/property/bounds.md#worldboxbounds-iboundsdata)                                                                                | 元素在 [世界坐标系](/guide/basic/coordinate.md#world) 中的基础边界（[AABB](/reference/property/bounds.md) 包围盒） |
| [worldRenderBounds](/reference/property/bounds.md#worldrenderbounds-iboundsdata)                                                                          | 元素在 [世界坐标系](/guide/basic/coordinate.md#world) 中的渲染边界（[AABB](/reference/property/bounds.md) 包围盒） |
| [getBounds()](/reference/property/bounds.md#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                   | 获取 [AABB](/reference/property/bounds.md) 包围盒（边界）                                                          |
| [getLayoutBounds()](/reference/property/bounds.md#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata) | 获取 [OBB](/reference/property/bounds.md) 包围盒（边界），含缩放、旋转等布局属性                                   |
| [getLayoutPoints()](/reference/property/bounds.md#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                        | 获取 [OBB](/reference/property/bounds.md) 包围盒（边界）的四个坐标点）                                             |

### 数学计算

### [Bounds 类](/reference/math/Bounds.md)

## 下一步

### [局部渲染](/guide/advanced/partRender.md)
