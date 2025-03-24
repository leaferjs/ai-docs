# EditorEvent

编辑器的选中/取消事件，通过 `app.editor.on()` 监听。

## 事件属性

### editor: [`Editor`](/plugin/in/editor/index.md)

编辑器对象。

### value：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

选中 / hover 元素。

### oldValue：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素。

### list： [`UI`](/reference/display/UI.md)[]

选中 / hover 元素列表，没有时为空数组。

### oldList： [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素列表，没有时为空数组。

## 事件名称

### EditorEvent.BEFORE_SELECT

before 选择元素事件 (下个版本即将支持)。

`editor.before_select`

### EditorEvent.SELECT

选择元素事件。

选择和取消都会触发， 通过 [editor.target](/plugin/in/editor/index.md#target-ui-ui) 获取选中的元素。

`editor.select`

### EditorEvent.BEFORE_HOVER

before hover 元素事件 (下个版本即将支持)。

`editor.before_hover`

### EditorEvent.HOVER

hover 元素事件。

选择和取消都会触发， 通过 [editor.hoverTarget](/plugin/in/editor/index.md#hovertarget-ui) 获取选中的元素列表。

`editor.hover`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!--
## API

### [EditorEvent](/api/classes/EditorEvent.md) -->

## 示例

### 监听选择事件

::: code-group
```ts
// #图形编辑器 [选中元素事件]
import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

app.editor.on(EditorEvent.SELECT, (e: EditorEvent) => { // [!code hl:3]
    console.log(e.editor.list)
})
```
```js
import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

app.editor.on(EditorEvent.SELECT, (e) => { // [!code hl:3]
    console.log(e.editor.list)
})
```
:::
