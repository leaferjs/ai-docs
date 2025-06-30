# EditorMoveEvent

编辑器的移动事件，通过 `app.editor.on()` 监听。

编辑器可通过配置 [beforeMove](/plugin/in/editor/config/event.md#beforemove-ieditorbeforemove) 钩子改变移动数据。

## 事件属性

### moveX: `number`

X 轴移动距离（世界坐标）

### moveY: `number`

Y 轴移动距离（世界坐标）

## 事件名称

### EditorMoveEvent.BEFORE_MOVE

before 移动元素事件。

`editor.before_move`

### EditorMoveEvent.MOVE

移动元素事件。

`editor.move`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorMoveEvent](/api/classes/EditorMoveEvent.md) -->

## 示例

### 移动元素事件

```ts
// #图形编辑器 [移动元素事件]
import { App, Rect } from 'leafer-ui'
import { EditorMoveEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

app.editor.on(EditorMoveEvent.MOVE, (e: EditorMoveEvent) => { // [!code hl:3]
    console.log(e.moveX, e.moveY)
})
```
