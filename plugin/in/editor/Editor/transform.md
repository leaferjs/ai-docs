# 变换

## 关键方法

另外可使用 [element](/plugin/in/editor/index.md#element-ui) 元素的布局属性方法直接移动、变换编辑框。

### move ( x: `number` | [`IPointData`](/reference/interface/math/Math.md#ipointdata), y = 0): void

位移选中元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math.md#ipointdata)。

### flip( axis：`'x'` | `'y'` )

按轴方向（ [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系)） 镜像/翻转选中元素。

### scaleOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), multiplyScaleX: `number`, multiplyScaleY = scaleX)

围绕 [element](/plugin/in/editor/index.md#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）缩放选中元素 <badge>增量操作</badge>。

### rotateOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), addRotation: `number`)

围绕 [element](/plugin/in/editor/index.md#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）旋转选中元素 <badge>增量操作</badge>。

### skewOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), addSkewX: `number`, addSkewY = 0)

围绕 [element](/plugin/in/editor/index.md#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）倾斜选中元素 <badge>增量操作</badge>。

```ts
// 当前选中元素
const { element } = app.editor

// 想缩放到指定 scale， 需除以元素当前 scale，如下：
app.editor.scaleOf('center', 1.5 / element.scale)

// 想旋转到指定 rotation， 需减去元素当前 rotation，如下：
app.editor.rotateOf('center', 45 - element.rotation)

// 想倾斜到指定 skewX， 需减去元素当前 skewX，如下：
app.editor.skewOf('center', 45 - element.skewX)
```

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动旋转元素

```ts
// #图形编辑器 [手动旋转元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)

app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))


app.editor.select(rect) // 选中 rect

setTimeout(() => {

    // 手动旋转到45度 
    const rotation = 45 // [!code hl:4]

    // 围绕中心旋转到指定 rotation， 需减去元素的 rotation，如下：
    app.editor.rotateOf('center', rotation - rect.rotation)

}, 2000)

```
