<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; 按钮组 &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

按钮组配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### buttonsDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

按钮组的方位， 默认为 bottom。

### buttonsFixed: `boolean`

按钮组是否仍保持固定方向（不受元素旋转影响）。

### buttonsMargin: `number`,

按钮组到编辑框的外边距， 默认为 12。

## 示例

<case name="EditorConfig" index=10 x=20 height=180></case>

### 添加底部固定按钮

元素旋转、翻转后仍保持固定方位。

```ts
// #图形编辑器 [添加底部固定按钮]
import { App, Rect, Box, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

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

app.editor.target = rect
```
