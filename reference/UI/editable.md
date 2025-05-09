# editable

元素编辑属性。

::: tip 注意事项
需安装 [图形编辑器插件](/plugin/in/editor/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成了图形编辑器相关插件）。
:::

## 关键属性

### editable: `boolean`

是否允许编辑，默认为 false。

包含了 draggable 功能，不用重复设置。

### locked: `boolean`

是否锁定元素，默认为 false。

锁定后不能移动、编辑，框选不了。

### widthRange: `IRangeSize`

限制元素的宽度范围（目前只有编辑器单选元素时可以控制）。

同时编辑器配置支持事件钩子 [beforeScale](/plugin/in/editor/config/event.md#beforescale-ieditorbeforescale) 限制宽度。

```ts
interface IRangeSize {
  min?: number
  max?: number
}

rect.widthRange = { min: 10, max: 200 }
```

### heightRange: `IRangeSize`

限制元素的高度范围（目前只有编辑器单选元素时可以控制）。

同时编辑器配置支持事件钩子 [beforeScale](/plugin/in/editor/config/event.md#beforescale-ieditorbeforescale) 限制高度。

```ts
interface IRangeSize {
  min?: number
  max?: number
}

rect.heightRange = { min: 10, max: 200 }
```

### lockRatio: `boolean`

是否锁定元素的宽高比例，默认为 false。

另可以通过编辑器进行 [全局设置](/plugin/in/editor/config/control.md)。

## resize

### [resize 元素 / 组元素](/reference/UI/resize.md)

## 编辑配置属性

### editConfig： [`IEditorConfig`](/plugin/in/editor/config/base.md)

元素的独立编辑配置，可通过以下方式设置：

```ts
// #图形编辑器 [editConfig]
import { Text } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效，不会导出json（推荐）
Text.setEditConfig({
    editSize: 'scale' // 使用对象
})

Text.setEditConfig(function (text: Text) {
    return {  // 使用函数返回对象，可增加业务逻辑分流
        editSize: text.get('width') ? 'size' : 'scale'
    }
})

// 2. 设置单个元素，不会导出json
const text = new Text({ text: 'hello', editable: true })
Object.defineProperty(text, 'editConfig', {
    get() { return { moveable: false } }
})

// 3. 设置单个元素，支持导出json，会增加内存开销
new Text({
    text: 'hello',
    editable: true,
    editConfig: { moveable: false }
})
```

### editOuter: `string`

元素的外形编辑工具，一般用于调整尺寸、形状， 默认为 [`'EditTool'`](/plugin/in/editor/EditTool.md)。

Line 默认为 [`'LineEditTool'`](/api/classes/LineEditTool.md)，可自定义 [编辑工具](/plugin/in/editor/editOuter/register.md)，通过以下方式设置：

```ts
// #图形编辑器 [editOuter]
import { Text } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效（推荐）
Text.setEditOuter('TextEditTool')

Text.setEditOuter(function (text: Text) {
    // 使用函数返回名称，可增加业务逻辑分流
    return text.get('width') ? 'EditTool' : 'TextEditTool'
})

// 2. 设置单个元素，不会导出json
const text = new Text({ text: 'hello', editable: true })
Object.defineProperty(text, 'editOuter', {
    get() { return 'TextEditTool' }
})

// 2. 设置单个元素，支持导出json，会增加内存开销
new Text({
    text: 'hello',
    editable: true,
    editOuter: 'TextEditTool'
})
```

### editInner: `string`

元素的内部细节编辑器，一般用于编辑路径、文本， 默认为 `'PathEditor'`。

Text 默认为: `'TextEditor'`，可自定义 [内部编辑器](/plugin/in/editor/editInner/register.md)，通过以下方式设置：

```ts
// #图形编辑器 [editInner]
import { Text } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效，不会导出json（推荐）
Text.setEditInner('TextEditor')

Text.setEditInner(function (text: Text) {
    // 使用函数返回名称，可增加业务逻辑分流
    return text.get('width') ? 'PathEditor' : 'TextEditor'
})

// 2. 设置单个元素，不会导出json
const text = new Text({ text: 'hello', editable: true })
Object.defineProperty(text, 'editInner', {
    get() { return 'TextEditor' }
})

// 3. 设置单个元素，支持导出json，会增加内存开销
new Text({
    text: 'hello',
    editable: true,
    editInner: 'TextEditor'
})
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### editable 元素才能被选中

```ts
// #图形编辑器 [editable]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect1 = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100) // [!code hl:2]
const rect2 = Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)

app.tree.add(rect1)
app.tree.add(rect2)
```
