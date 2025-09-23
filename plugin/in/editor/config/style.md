<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; 样式 &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

样式配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### spread: `number`

编辑器框向外的扩展值，可扩大编辑框与实际元素之间的间隙，默认为 0。

### stroke: `string`

设置控制点和编辑框的描边颜色，默认为 `#836DFF`。

### strokeWidth: `number`

设置控制点和编辑框的描边大小。

### pointSize: `number`

设置控制点的大小。

### pointRadius: `number`

设置控制点的圆角半径

### 精确控制样式

### point: [`IBoxInputData`](/reference/display/Box.md) ｜ [`IBoxInputData`](/reference/display/Box.md)[]

设置控制点样式，可单独设置 4 个点。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

```ts
point: { pointType: 'resize' }, // 默认 resize 按钮
```

```ts
point: [
  {
    // 支持 Box 元素的所有属性
    pointType: 'button', // 变为自定义按钮
    event: {
      tap: function () {
        alert('button')
      },
    },
    fill: {
      // 使用图片
      type: 'image',
      url: '/image/leafer.jpg',
    },
  },
  { pointType: 'rotate' }, // 变为旋转按钮
  { pointType: 'resize-rotate' }, // 变为 resize + 旋转按钮
  { pointType: 'skew' }, // 变为倾斜按钮
]
```

### middlePoint: [`IBoxInputData`](/reference/display/Box.md)｜ [`IBoxInputData`](/reference/display/Box.md)[]

设置中间控制点样式（会继承基础样式），可单独设置 4 个点，为空时不显示， 默认为空。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

### resizeLine: [`IBoxInputData`](/reference/display/Box.md)

设置编辑框四周的隐藏控制线样式，可通过设置 `height` 来控制线条的粗细，默认为 10px。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

### rect: [`IBoxInputData`](/reference/display/Box.md)

设置编辑框的样式（会继承基础样式）。

### area: [`IRectInputData`](/reference/display/Rect.md)

框选区域的样式（会继承基础样式）。

### 旋转按钮

### circle: [`IBoxInputData`](/reference/display/Box.md)

设置独立旋转控制点样式（会继承基础样式）， 为空时不显示， 默认为空。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

```ts
circle: {
  pointType: 'button',
  cursor: 'pointer',
  event: {
    tap: function () {
      alert('button')
    },
  },
}, // 变为自定义按钮
```

### circleDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

独立旋转控制点的方位， 默认为 bottom（如果 buttonsDirection 为 bottom ，则为 top）。

### circleMargin: `number`,

独立旋转控制点到编辑框的外边距， 默认采用 buttonsMargin。

### 光标移入

### hover: `boolean`

是否显示 hover 状态，默认显示。

### hoverStyle: [`IPathInputData`](/reference/display/Path.md)

hover 样式，目前只能定义笔触和填充样式（会继承基础样式）。

### selectedStyle: [`IPathInputData`](/reference/display/Path.md)

选中元素的样式（区分 hover 样式，多选元素时比较容易看出来），目前只能定义笔触和填充样式（会继承基础样式）。

### 遮罩层

### mask: `string` | `boolean`

是否添加全局半透明覆盖遮罩层，可设置颜色值，如 `rgba(0,0,0,0.8)`，默认为 false。

设为 true 或色彩值时，选中元素会突出显示，其他区域变暗，适用于裁剪、截图等场景。

### 突出显示

### bright: `boolean`

突出显示，并置顶渲染选中元素，默认为 false，[查看示例](#突出显示-置顶渲染元素)。

源于元素 [bright](/reference/UI/bright.md) 属性。

### dimOthers: `boolean` | `number`

淡化其他元素，突出选中元素，通过叠加透明度来淡化元素，默认为 false，[查看示例](#突出显示并置顶渲染-淡化其他元素)。

设为 true 时会自动设置 0.2 的透明度，也可设置一个透明度数值。

源于元素 [dim](/reference/UI/dim.md) / [dimskip](/reference/UI/dim.md) 属性。

另可通过设置编辑器 [dimTarget](/plugin/in/editor/index.md#dimtarget-group-group) 属性确定淡化内容的范围（支持数组）。

## 示例

<case name="EditorConfig" index=4 x=20></case>

### 显示所有控制点

```ts
// #图形编辑器 [显示所有控制点]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:7]
    view: window,
    editor: {
        circle: {},
        middlePoint: {},
        buttonsDirection: 'top'
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```

<case name="EditorConfig" index=2 x=20></case>

### 快速修改样式

```ts
// #图形编辑器 [快速修改样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:4]
    view: window,
    editor: { stroke: '#0d99ff', pointSize: 8, pointRadius: 0 }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```

<case name="EditorConfig" index=9 x=20 height=170></case>

### 自定义样式

默认会继承基础样式， 只需覆盖新的样式。

```ts
// #图形编辑器 [自定义样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:9]
    view: window,
    editor: {
        point: { cornerRadius: 0 },
        middlePoint: {},
        circle: { width: 16, height: 16 },
        rect: { dashPattern: [3, 2] }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```

<case name="EditorConfig" index=11 x=20 height=160></case>

### 显示底部旋转控制点

默认会继承基础样式， 只需覆盖新的样式。

```ts
// #图形编辑器 [显示旋转控制点]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:4]
    view: window,
    editor: { circle: {} }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```

### 自定义控制点功能类型

::: code-group
```ts
// #图形编辑器 [自定义 point 控制点功能类型]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        pointSize: 24,
        point: [ // [!code hl:19]
            { pointType: 'resize' }, // 默认 resize 按钮
            {
                // 支持 Box 元素的所有属性
                pointType: 'button', // 变为自定义按钮
                event: {
                    tap: function () {
                        alert('button')
                    },
                },
                fill: {
                    // 使用图片
                    type: 'image',
                    url: '/image/leafer.jpg',
                },
            },
            { pointType: 'rotate' }, // 变为旋转按钮
            { pointType: 'resize-rotate' }, // 变为 resize + 旋转按钮
        ]
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
```ts
// #图形编辑器 [自定义 middlePoint 控制点功能类型]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        pointSize: 24,
        point: { width: 12, height: 12 },
        middlePoint: [ // [!code hl:19]
            { pointType: 'resize' }, // 默认 resize 按钮
            {
                // 支持 Box 元素的所有属性
                pointType: 'button', // 变为自定义按钮
                event: {
                    tap: function () {
                        alert('button')
                    },
                },
                fill: {
                    // 使用图片
                    type: 'image',
                    url: '/image/leafer.jpg',
                },
            },
            { pointType: 'rotate' }, // 变为旋转按钮
            { pointType: 'resize-rotate' }, // 变为 resize + 旋转按钮
        ]
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
```ts
// #图形编辑器 [自定义 circle 控制点功能类型]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        circle: // [!code hl:19]
        {
            // 支持 Box 元素的所有属性
            pointType: 'button', // 变为自定义按钮
            width: 24,
            height: 24,
            event: {
                tap: function () {
                    alert('button')
                },
            },
            fill: {
                // 使用图片
                type: 'image',
                url: '/image/leafer.jpg',
            },
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
:::

### 拖拽控制点修改字体大小，拖拽边框控制文本宽高

```ts
// #图形编辑器 [拖拽控制点修改字体大小，拖拽边框控制文本宽高]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/text-editor' // 导入文本编辑插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        editSize: 'size', // 默认修改元素宽高
        point: {  // [!code hl:3] 
            editConfig: { editSize: 'font-size' } // 拖拽控制点修改字体大小
        }
    }
})

const text = Text.one({
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100)

app.tree.add(text)

app.editor.select(text)
```

### 突出显示，置顶渲染元素

```ts
// #突出显示，置顶渲染元素 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        bright: true, // 突出显示、置顶渲染选中元素 // [!code hl]
    }
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 260, 150))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => { app.editor.select(app.tree.children[1]) }, 1000) // 模拟旋转元素
```

### 突出显示并置顶渲染，淡化其他元素

```ts
// #突出显示并置顶渲染，淡化其他元素 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        bright: true, // 突出显示、置顶渲染选中元素 // [!code hl:2]
        dimOthers: true, // 淡化其他元素
        //dimOthers: 0.2 // 可指定淡化的透明度
    }
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 260, 150))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => { app.editor.select(app.tree.children[1]) }, 1000) // 模拟旋转元素
```

### 突出主体，淡化其他元素

```ts
// #突出主体、淡化其他元素 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        dimOthers: true, // 淡化其他元素，突出选中元素 // [!code hl]
        //dimOthers: 0.2 // 可指定淡化的透明度
    }
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 260, 150))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => { app.editor.select(app.tree.children[1]) }, 1000) // 模拟旋转元素
```
