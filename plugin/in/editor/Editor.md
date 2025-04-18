<script setup>
import Case from '/component/Case.vue'
</script>

# Editor

图形编辑器，可移动、缩放、旋转、倾斜，支持多选、框选、打组、锁定、层级，[可配置样式](/plugin/in/editor/config.md)。

支持自定义 [编辑工具](/plugin/in/editor/EditTool.md)、 [内部编辑器](/plugin/in/editor/InnerEditor.md)。

<case name="Editor" select=0></case>

::: tip 继承
Editor &nbsp;>&nbsp; [Group](/reference/display/Group.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 关键属性

### target：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

设置需要编辑的元素， 默认通过 [编辑选择器](./config.md#selector-boolean) 自动选取 [editable](/reference/property/editable.md) 元素（不用设置 draggable ）。

### hoverTarget：[`UI`](/reference/display/UI.md)

设置 hover 状态的元素， 默认通过 [编辑选择器](./config.md#selector-boolean) 自动选取 [editable](/reference/property/editable.md) 元素。

### visible: `boolean`

是否显示编辑器， 默认为 true。

隐藏后，交互功能也将禁用。

### hittable: `boolean`

编辑器是否响应交互事件，默认为 true。

设为 false 后，将禁用编辑器交互。

## 配置属性

### config: [`IEditorConfig`](./config.md)

[全局编辑器配置](./config.md)，实例化时传入，可实时修改(调用 updateEditTool() 方法更新)。

### mergeConfig: [`IEditorConfig`](./config.md)

实际使用的编辑器配置（只读），合并了 config 与元素的 [editConfig](/reference/property/editable.md#editconfig-ieditorconfig)。

## 只读属性

### editing: `boolean`

是否处于编辑状态，选择元素后即进入编辑状态。

### innerEditing: `boolean`

是否处于内部编辑状态，双击单个元素进入内部编辑状态（有内部编辑器的情况下）。

### groupOpening: `boolean`

是否处于打开组状态，双击组可进入打开状态，方便选择组内元素。

### list: [`UI`](/reference/display/UI.md)[]

当前选中的元素列表，未选中时为空数组。

### multiple: `boolean`

是否选中了多个元素。

### single: `boolean`

是否只选中了单个元素。

### dragging: `boolean`

是否正在拖拽编辑器，包含拖拽控制点、边。

### 高性能列表

### leafList: [`LeafList`](/reference/list/LeafList.md)

当前选中的元素列表， 未选中时为空列表对象.

### openedGroupList: [`LeafList`](/reference/list/LeafList.md)

当前处于打开状态的组列表， 未选中时为空列表对象.

## 辅助属性

### element: [`UI`](/reference/display/UI.md)

选中元素的唯一代表， 可使用 [element](#element-ui) 元素的属性方法直接移动、调整编辑框。

单选时为选中元素， 多选时为模拟元素（代替多个元素），一般用来同步布局编辑框。

### editBox: [`EditBox`](./EditBox.md)

编辑框，负责编辑框的显示与交互。

### buttons: [`Group`](/reference/display/Group.md)

按钮组，用于放置自定义按钮，整体 [around](/reference/property/around.md) 对齐， 位于编辑器底部，可以 [进行配置](./config.md#按钮组)。

### editTool: [`EditTool`](./EditTool.md)

当前使用的编辑工具。

用来编辑元素的尺寸、外形，选中元素时会自动载入，可 [自定义编辑工具](/plugin/in/editor/editOuter/register.md)。

### innerEditor: [`InnerEditor`](./InnerEditor.md)

当前使用的内部编辑器。

用来编辑文本、路径等内部细节，通过双击元素打开， 可 [自定义内部编辑器](/plugin/in/editor/editInner/register.md)

### selector: [`IEditSelect`](/api/interfaces/IEditSelect.md)

选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框。

## 关键方法

### 选中元素

### select ( target：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[] )

选中元素。

### cancel ( )

取消选中元素。

### hasItem ( item: [`UI`](/reference/display/UI.md) ): `boolean`

是否已选中某个元素。

### addItem ( item: [`UI`](/reference/display/UI.md) )

新增一个元素到选中列表。

### removeItem ( item:[`UI`](/reference/display/UI.md) )

从选中列表中移出元素。

### 打组

### group ( custom: [`IGroup`](/reference/display/Group.md) | [`IGroupInputData`](/api/interfaces/IGroupInputData.md)): [`IGroup`](/reference/display/Group.md)

将选中的元素进行打组，支持传入一个自定义的 Group 实例 或 json 对象。

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

### 内部编辑

### openInnerEditor( target?: [`UI`](/reference/display/UI.md), select?: `boolean`)

打开元素的内部编辑器。

支持传入一个可选的 target 进行编辑，select 表示是否同时选中 target。

### closeInnerEditor()

关闭内部编辑器。

### 锁定

### lock ( )

锁定选中的元素。

元素可以被单选，但是不能编辑。

### unlock ( )

解锁选中的元素。

### 层级

### toTop ( )

移动选中元素到最顶层（所属 Group 中）。

### toBottom ( )

移动选中元素到最底层（所属 Group 中）。

### 更新

### update ( )

手动更新编辑器的布局、样式等。

### updateEditBox()

手动更新编辑框，使其贴合元素，一般用于多选元素对齐后操作。

### updateEditTool()

更新编辑工具，选择元素后自动调用此方法。

## 手动操作

另外可使用 [element](#element-ui) 元素的属性方法直接移动、调整编辑框。

### flip( axis：`'x'` | `'y'` )

按轴方向（ [世界坐标系](/guide/basic/coordinate.md#world)） 镜像/翻转选中元素。

### move ( x: `number` | [`IPointData`](/reference/interface/math/Math.md#ipointdata), y = 0): void

位移选中元素 <badge>增量操作</badge>， 支持直接传入 [坐标对象](/reference/interface/math/Math.md#ipointdata)。

### scaleOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), multiplyScaleX: `number`, multiplyScaleY = scaleX)

围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）缩放选中元素 <badge>增量操作</badge>。

### rotateOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), addRotation: `number`)

围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）旋转选中元素 <badge>增量操作</badge>。

### skewOf ( origin: [`IAlign`](/reference/interface/math/Math.md#ialign) | [`IPointData`](/reference/interface/math/Math.md#ipointdata), addSkewX: `number`, addSkewY = 0)

围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）倾斜选中元素 <badge>增量操作</badge>。

```ts
// 当前选中元素
const { element } = app.editor
const box = element.boxBounds

// 想缩放到指定 scale， 需除以元素当前 scale，如下：
app.editor.scaleOf('center', 1.5 / element.scale)

// 想旋转到指定 rotation， 需减去元素当前 rotation，如下：
app.editor.rotateOf('center', 45 - element.rotation)

// 想倾斜到指定 skewX， 需减去元素当前 skewX，如下：
app.editor.skewOf('center', 45 - element.skewX)
```

## 配置

### [编辑器配置](./config.md)

## 快捷键

按住`Ctrl` / `Command` 键：

将光标移动至四条边上，拖动可倾斜元素。

将光标移动至控制点上，拖动可旋转元素。

按住 `Alt` 键 ：中心缩放 / 倾斜 （`Alt` + `Shift` 键可组合）。

按住 `Shift` 键：多选 / 固定比例缩放 / 固定方向移动 / 以对角为中心旋转。

## 调整大小

编辑器默认通过修改元素宽高、路径坐标来调整大小。

同时也支持通过修改缩放来调整大小， 了解 [editSize](./config.md#editsize-auto-size-scale)。

## 历史记录

交互操作可通过监听 editor 的 [`drag.start`](/reference/event/ui/Drag.md) 和 [`drag.end`](/reference/event/ui/Drag.md) 事件作为记录历史状态的时机。

操作图形会同时产生多个属性的变更，可以在 [app.tree](/reference/display/App.md#tree-leafer) 上监听收集元素的变化做历史记录。

### [ChildEvent](/reference/event/basic/Child.md)

### [PropertyEvent](/reference/event/basic/Property.md)

### [DragEvent](/reference/event/ui/Drag.md)

## 事件

编辑器事件，手动操作也会触发。

### [EditorEvent](./event/EditorEvent.md)

### [EditorMoveEvent](./event/EditorMoveEvent.md)

### [EditorScaleEvent](./event/EditorScaleEvent.md)

### [EditorRotateEvent](./event/EditorRotateEvent.md)

### [EditorSkewEvent](./event/EditorSkewEvent.md)

### [EditorGroupEvent](/plugin/in/editor/event/EditorGroupEvent.md)

### [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)

## 编辑工具

用来编辑元素的尺寸、外形，选中元素时会自动载入。

内置了两种编辑工具，可为不同图形元素扩展编辑工具。

### [EditTool](./EditTool.md)

### [LineEditTool](/api/classes/LineEditTool.md)

### [自定义编辑工具](/plugin/in/editor/editOuter/register.md)

## 内部编辑器

用来编辑文本、路径等内部细节，通过双击元素打开。

可扩展路径编辑器、文本编辑器。

### [InnerEditor](./InnerEditor.md)

### [自定义内部编辑器](/plugin/in/editor/editInner/register.md)

<!--
## 继承元素

### [Group](/reference/display/Group.md) -->

<!-- ## API

### [Editor](/api/classes/Editor.md) -->

## 示例

<case name="Editor" index=2 count=2 x=20></case>

### 点击选中元素

元素必需要有 [editable](/reference/property/editable.md) 属性才能被选取， 可通过 [app.editor](/reference/display/App.md#editor-ieditor) 快速访问编辑器实例。

```ts
// #图形编辑器 [editable]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ view: window, editor: {} })

const rect1 = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100) // [!code hl:2]
const rect2 = Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)

app.tree.add(rect1)
app.tree.add(rect2)
```

<case name="EditorConfig" index=11 x=20 height=160></case>

### 显示底部旋转控制点

默认会继承基础样式，可以进一步 [设置](./config.md#circle-iboxinputdata) 旋转控制点的样式。

```ts
// #图形编辑器 [显示旋转控制点]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({  // [!code hl:4]
    view: window,
    editor: { circle: {} }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect
```

<case name="EditorConfig" index=10 x=20 height=180></case>

### 添加底部固定按钮

元素旋转、翻转后仍保持固定方位，可以 [设置](./config.md#按钮组) 按钮组的方位。

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

<case name="EditorConfig" index=14 x=20></case>

### 显示中间控制点，并修改样式

默认会继承基础样式、旋转角度， 可以精确 [设置](./config.md#精确控制样式) 每个控制点的样式。

```ts
// #图形编辑器 [显示中间控制点，并修改样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({  // [!code hl:7]
    view: window,
    editor: {
        point: { cornerRadius: [0, 0, 10, 0] },
        middlePoint: { width: 12, height: 4, cornerRadius: 2 }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect
```

### 监听选择事件

::: code-group
```ts
// #图形编辑器 [选中元素事件]
import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor'
import '@leafer-in/viewport' // 导入视口插件(可选)

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
import { EditorEvent } from '@leafer-in/editor'
import '@leafer-in/viewport' // 导入视口插件(可选)

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

### 手动旋转元素

```ts
// #图形编辑器 [手动旋转元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)

app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))


app.editor.select(rect) // 选中 rect

setTimeout(() => {

    // 手动旋转到45度 // [!code hl:5]
    const rotation = 45

    // 围绕中心旋转到指定 rotation， 需减去元素的 rotation，如下：
    app.editor.rotateOf('center', rotation - rect.rotation)

}, 2000)

```

### 创建图形模式

::: code-group
```ts
// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)


const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建矩形（拖拽）
    let rect: Rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: '#32cd79' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e: DragEvent) => {
        if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
    })

}, 2000)

```
```js
// #图形编辑器 [创建图形]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)


const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.editor.select(app.tree.children[0])

setTimeout(() => {

    // 2秒后进入创建图形模式 // [!code hl:3]
    app.editor.visible = false
    app.tree.hitChildren = false

    // 创建矩形（拖拽）
    let rect

    app.on(DragEvent.START, () => {
        rect = new Rect({ editable: true, fill: '#32cd79' })
        app.tree.add(rect)
    })

    app.on(DragEvent.DRAG, (e) => {
        if (rect) rect.set(e.getPageBounds())  // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
    })

}, 2000)

```
:::
