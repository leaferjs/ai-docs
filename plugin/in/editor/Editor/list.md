# 元素列表

## 关键属性

### list: [`UI`](/reference/display/UI.md)[]

当前选中的元素列表（只读），未选中时为空数组。

### 高性能列表

### leafList: [`LeafList`](/reference/list/LeafList.md)

当前选中的元素列表对象（只读）， 未选中时为空列表对象.

### openedGroupList: [`LeafList`](/reference/list/LeafList.md)

当前处于打开状态的组列表对象（只读）， 未选中时为空列表对象.

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 打印选中的元素列表

```ts
// #图形编辑器 [选中的元素列表]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

// 打印选中的元素列表： [Rect]
console.log(app.editor.list) // [!code hl]


```
