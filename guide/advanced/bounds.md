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

已提供了 [获取属性](/reference/UI/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/UI/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](/reference/UI/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](/reference/UI/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](/reference/UI/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](/reference/UI/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/UI/bounds.md#关键方法)。 -->

## 示例

### 我们通过 创建图形 的例子，来了解 包围盒与坐标系 的相互作用

按下鼠标拖动开始画矩形，抬起结束，当缩放平移视图后，仍然可以准确绘制新的矩形。

::: code-group
```ts
// #图形编辑器 [创建图形 - 进入绘制模式]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后进入绘制模式，按下鼠标拖动可创建矩形，10 秒后再回到正常模式', fill: '#999', fontSize: 16 })


app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 300))

app.editor.select(app.tree.children[2])

setTimeout(() => {

    // 2秒后进入绘制模式 // [!code hl]
    app.mode = 'draw'

    // 创建矩形（拖拽）
    let rect: Rect

    const events = [
        app.on_(DragEvent.START, () => {
            rect = new Rect({ editable: true, fill: '#32cd79' })
            app.tree.add(rect)
        }),

        app.on_(DragEvent.DRAG, (e: DragEvent) => {
            if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
        })]


    setTimeout(() => {

        app.off_(events)

        // 10 秒后回到正常模式 // [!code hl]
        app.mode = 'normal'

    }, 10000)

}, 2000)

```
```js
// #图形编辑器 [创建图形 - 进入绘制模式]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后进入绘制模式，按下鼠标拖动可创建矩形，10 秒后再回到正常模式', fill: '#999', fontSize: 16 })


app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 300))

app.editor.select(app.tree.children[2])

setTimeout(() => {

    // 2秒后进入绘制模式 // [!code hl]
    app.mode = 'draw'

    // 创建矩形（拖拽）
    let rect

    const events = [
        app.on_(DragEvent.START, () => {
            rect = new Rect({ editable: true, fill: '#32cd79' })
            app.tree.add(rect)
        }),

        app.on_(DragEvent.DRAG, (e) => {
            if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
        })]


    setTimeout(() => {

        app.off_(events)

        // 10 秒后回到正常模式 // [!code hl]
        app.mode = 'normal'

    }, 10000)

}, 2000)

```
:::

### 检测元素的包围盒是否碰撞

```ts
// #元素包围盒 [检测 rect2 是否与 rect1 碰撞]
import { Leafer, Frame, Rect, DragEvent, Bounds } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const rect1 = Rect.one({ fill: '#FEB027', draggable: true }, 100, 100)

leafer.add(Frame.one({ children: [rect1] }, 100, 100, 500, 600)) // rect1 在 frame 内

const rect2 = Rect.one({ fill: '#FFE04B', draggable: true }, 200, 50)  // rect2 在 frame 外

leafer.add(rect2)

// 检测 rect2 是否与 rect1 碰撞 （通过世界坐标中的 box 包围盒跨层级检测）
rect2.on(DragEvent.DRAG, () => {

    const rect2Bounds = new Bounds(rect2.worldBoxBounds)  // [!code hl:2]
    rect1.stroke = rect2Bounds.hit(rect1.worldBoxBounds) ? 'blue' : '' // 碰撞则显示蓝色边框

})
```

## 获取方法

### 事件中的获取方法

[DragEvent](/reference/event/ui/Drag.md#拖拽区域)

### 元素上的获取方法

| 名称                                                                                                                                                | 描述                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata)                                                                                          | 元素在 [内部坐标系](/guide/advanced/coordinate.md) 中的基础边界（[OBB](/reference/UI/bounds.md) 包围盒）                   |
| [renderBounds](/reference/UI/bounds.md#renderbounds-iboundsdata)                                                                                    | 元素在 [内部坐标系](/guide/advanced/coordinate.md) 中的渲染边界（[AABB](/reference/UI/bounds.md) 包围盒）                  |
| [worldBoxBounds](/reference/UI/bounds.md#worldboxbounds-iboundsdata)                                                                                | 元素在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中的基础边界（[AABB](/reference/UI/bounds.md) 包围盒） |
| [worldRenderBounds](/reference/UI/bounds.md#worldrenderbounds-iboundsdata)                                                                          | 元素在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中的渲染边界（[AABB](/reference/UI/bounds.md) 包围盒） |
| [getBounds()](/reference/UI/bounds.md#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                   | 获取 [AABB](/reference/UI/bounds.md) 包围盒（边界）                                                                        |
| [getLayoutBounds()](/reference/UI/bounds.md#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata) | 获取 [OBB](/reference/UI/bounds.md) 包围盒（边界），含缩放、旋转等布局属性                                                 |
| [getLayoutPoints()](/reference/UI/bounds.md#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                        | 获取 [OBB](/reference/UI/bounds.md) 包围盒（边界）的四个坐标点）                                                           |

### 数学计算

### [Bounds 类](/reference/math/Bounds.md)

## 下一步

### [局部渲染](/guide/advanced/partRender.md)
