# 编辑器状态

## 关键属性

### visible: `boolean`

是否显示编辑器， 默认为 true。

隐藏后，交互功能也将禁用。

### hittable: `boolean`

编辑器是否响应交互事件，默认为 true。

设为 false 后，将禁用编辑器交互。

### single: `boolean`

是否只选中了单个元素。

### multiple: `boolean`

是否选中了多个元素。

### editing: `boolean`

是否处于编辑状态，选择元素后即进入编辑状态。

### innerEditing: `boolean`

是否处于内部编辑状态，双击单个元素进入内部编辑状态（有内部编辑器的情况）。

### groupOpening: `boolean`

是否处于打开组状态，双击组可进入打开状态，方便选择组内元素。

### dragging: `boolean`

是否正在拖拽编辑器，包含拖拽控制点、边。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 创建图形模式

::: code-group
```ts
// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后，按下鼠标拖动可创建矩形', fill: '#999', fontSize: 16 })


app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 300))

app.editor.select(app.tree.children[2])

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
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后，按下鼠标拖动可创建矩形', fill: '#999', fontSize: 16 })

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
