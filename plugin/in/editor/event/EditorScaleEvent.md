# EditorScaleEvent

编辑器的调整大小（resize 元素）事件，通过 `app.editor.on()` 监听。

## 事件属性

### worldOrigin: [`IPointData`](/api/interfaces/IPointData.md)

围绕的中心点（世界坐标）。

### scaleX: `number`

X 轴的缩放值（增量）。

### scaleY: `number`

Y 轴的缩放值（增量）。

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性（增量），当选择多个元素进行缩放大小时，内部会通过 transform 操作元素进行变换。

## 事件名称

### EditorScaleEvent.BEFORE_SCALE

before 缩放大小事件（调整元素大小）。

`editor.before_scale`

### EditorScaleEvent.SCALE

缩放大小事件（调整元素大小）。

`editor.scale`

## 辅助

[editor.editBox.dragPoint](../EditBox.md#dragpoint-editpoint) 表示当前正在操作的控制点。

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorScaleEvent](/api/classes/EditorScaleEvent.md) -->

## 示例

### 缩放（resize）元素事件

```ts
// #图形编辑器 [缩放元素事件（resize）]
import { App, Rect } from 'leafer-ui'
import { EditorScaleEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

app.editor.on(EditorScaleEvent.SCALE, (e: EditorScaleEvent) => { // [!code hl:3]
    console.log(e.scaleX, e.scaleY, e.transform)
})
```
