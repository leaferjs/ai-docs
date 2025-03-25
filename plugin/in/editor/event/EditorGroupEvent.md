# EditorGroupEvent

编辑器的编组事件，通过 `app.editor.on()` 监听。

## 事件属性

### editTarget: [`Group`](/reference/display/Group.md)

当前操作的目标组。

## 事件名称

### EditorGroupEvent.BEFORE_GROUP

before 编组事件。

`editor.before_group`

### EditorGroupEvent.GROUP

编组事件。

`editor.group`

### EditorGroupEvent.BEFORE_UNGROUP

before 解组事件。

`editor.before_ungroup`

### EditorGroupEvent.UNGROUP

解组事件。

`editor.ungroup`

### EditorGroupEvent.BEFORE_OPEN

before 双击打开组事件。

`editor.before_open_group`

### EditorGroupEvent.OPEN

双击打开组事件。

`editor.open_group`

### EditorGroupEvent.BEFORE_CLOSE

before 关闭已打开的组事件。

`editor.before_close_group`

### EditorGroupEvent.CLOSE

关闭已打开的组事件。

`editor.close_group`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorGroupEvent](/api/classes/EditorGroupEvent.md) -->

## 示例

### 元素编组事件

```ts
// #图形编辑器 [元素编组事件]
import { App, Rect } from 'leafer-ui'
import { EditorGroupEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

setTimeout(() => {

    // 手动选择并编组元素 
    app.editor.select(app.tree.children)
    app.editor.group()

}, 1000)

app.editor.on(EditorGroupEvent.GROUP, (e: EditorGroupEvent) => { // [!code hl:3]
    console.log(e.editTarget)
})
```
