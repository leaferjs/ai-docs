# 选择元素

## 关键方法

### select ( target：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[] )

选中元素。

### cancel ( )

取消选中元素。

### hasItem ( item: [`UI`](/reference/display/UI.md) ): `boolean`

是否已选中某个元素。

### addItem ( item: [`UI`](/reference/display/UI.md) )

新增一个元素到选中列表。

### removeItem ( item: [`UI`](/reference/display/UI.md) )

从选中列表中移出元素。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动选择元素

```ts
// #图形编辑器 [手动选择元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

setTimeout(() => {

    // 手动选择元素 
    app.editor.select(app.tree.children[1]) // [!code hl]

}, 1000)


```
