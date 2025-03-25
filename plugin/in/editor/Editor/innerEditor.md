# 内部编辑

## 关键方法

### openInnerEditor( target?: [`UI`](/reference/display/UI.md), select?: `boolean`)

打开元素的内部编辑器。

支持传入一个可选的 target 进行编辑，select 表示是否同时选中 target。

### closeInnerEditor()

关闭内部编辑器。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动打开内部编辑器

进入文本编辑状态。

```ts
// #图形编辑器 [打开内部编辑器]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件  
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
    app.editor.openInnerEditor(app.tree.children[0], true) // [!code hl]

}, 1000)

```
