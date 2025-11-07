# 更新

## 关键方法

### update ( )

手动更新编辑器的布局、样式等。

### updateEditBox ( )

手动更新编辑框，使其贴合元素，一般用于多选元素对齐后操作。

## 编辑工具

### getEditTool ( name: `string` ): [`EditTool`](/plugin/in/editor/Editor/display.md)

获取编辑工具实例（单例），name 为内部编辑器的名称。

```ts
// 获取直线编辑工具的配置
const config = app.editor.getEditTool('LineEditTool').config
```

### updateEditTool ( )

更新编辑工具，选择元素后自动调用此方法。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 更新编辑器

使配置的中间控制点可以立即显示。

```ts
// #图形编辑器 [更新编辑器]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 更新编辑器
    app.editor.config.middlePoint = {} // 显示中间控制点
    app.editor.update() // [!code hl]

}, 1000)


```
