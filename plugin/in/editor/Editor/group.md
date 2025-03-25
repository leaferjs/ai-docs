# 编组

## 关键方法

### group ( custom: [`IGroup`](/reference/display/Group.md) | [`IGroupInputData`](/api/interfaces/IGroupInputData.md)): [`IGroup`](/reference/display/Group.md)

将选中的元素进行编组，支持传入一个自定义的 Group 实例 或 json 对象。

新的 group 将增加如下属性：

```ts
group.editable = true
group.hitChildren = false
```

### ungroup ( ): [`UI`](/reference/display/UI.md)[]

将选中的元素进行解组。

注意 [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 元素不支持解组，防止产生问题，如需编组/解组，请使用 Group 元素代替

### 开关组

### openGroup ( [`IGroup`](/reference/display/Group.md) )

打开组， 模拟双击打开组的功能。

### closeGroup ( [`IGroup`](/reference/display/Group.md) )

关闭组。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动编组元素

```ts
// #图形编辑器 [手动编组元素]
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

    // 手动选择并编组元素 
    app.editor.select(app.tree.children)
    app.editor.group() // [!code hl]

}, 1000)


```
