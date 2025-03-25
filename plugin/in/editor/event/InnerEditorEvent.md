# InnerEditorEvent

编辑器的内部编辑器事件，通过 `app.editor.on()` 监听。

## 事件属性

### editTarget: [`UI`](/reference/display/UI.md)

当前编辑的目标元素。

### innerEditor: [`InnerEditor`](/plugin/in/editor/InnerEditor.md)

内部编辑器。

## 事件名称

### InnerEditorEvent.BEFORE_OPEN

before 打开内部编辑器事件

`innerEditor.before_open`

### InnerEditorEvent.OPEN

打开内部编辑器事件

`innerEditor.open`

### InnerEditorEvent.BEFORE_CLOSE

before 关闭内部编辑器事件

`innerEditor.before_close`

### InnerEditorEvent.CLOSE

关闭内部编辑器事件

`innerEditor.close`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [InnerEditorEvent](/api/classes/InnerEditorEvent.md) -->

## 示例

### 打开内部编辑器事件

```ts
// #图形编辑器 [打开内部编辑器事件]
import { App, Text } from 'leafer-ui'
import { InnerEditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件  
import '@leafer-in/viewport' // 导入视口插件（可选）
import '@leafer-in/text-editor' // 导入文本编辑插件

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Text.one({
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100))

setTimeout(() => {

    // 手动选择元文本并打开内部编辑器，进入编辑文本状态
    app.editor.openInnerEditor(app.tree.children[0], true)

}, 1000)

app.editor.on(InnerEditorEvent.OPEN, (e: InnerEditorEvent) => { // [!code hl:3]
    console.log(e.editTarget, e.innerEditor)
})
```
