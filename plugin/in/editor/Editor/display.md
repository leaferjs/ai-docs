<script setup>
import Case from '/component/Case.vue'
</script>

# 显示元素

## 关键属性

### buttons: [`Group`](/reference/display/Group.md)

按钮组，用于放置自定义按钮，整体 [around](/reference/UI/around.md) 对齐， 位于编辑器底部，可以 [进行配置](/plugin/in/editor/config/buttons.md)。

### editBox: [`EditBox`](/plugin/in/editor/EditBox.md)

编辑框，负责编辑框的显示与交互。

### editTool: [`EditTool`](/plugin/in/editor/EditTool.md)

当前使用的编辑工具。

用来编辑元素的尺寸、外形，选中元素时会自动载入，可 [自定义编辑工具](/plugin/in/editor/editOuter/register.md)。

### innerEditor: [`InnerEditor`](/plugin/in/editor/InnerEditor.md)

当前使用的内部编辑器。

用来编辑文本、路径等内部细节，通过双击元素打开， 可 [自定义内部编辑器](/plugin/in/editor/editInner/register.md)

### selector: [`IEditSelect`](/api/interfaces/IEditSelect.md)

选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

<case name="EditorConfig" index=10 x=20 height=180></case>

### 添加底部固定按钮

元素旋转、翻转后仍保持固定方位，可以 [配置](/plugin/in/editor/config/buttons.md) 按钮组的方位。

```ts
// #图形编辑器 [添加底部固定按钮]
import { App, Rect, Box, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:4]
    view: window,
    editor: { buttonsFixed: true }
})

const rect = Rect.one({ editable: true, fill: '#32cd79' }, 100, 100)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 100, 300))

const button = Box.one({  // [!code hl:9] // 添加移除按钮
    around: 'center',
    fill: '#FEB027',
    cornerRadius: 20,
    cursor: 'pointer',
    children: [{ tag: 'Text', fill: 'white', text: '移除', padding: [7, 10] }]
})

app.editor.buttons.add(button)

button.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
    app.editor.list.forEach(rect => rect.remove())
    app.editor.target = null
})

app.editor.select(rect)
```
