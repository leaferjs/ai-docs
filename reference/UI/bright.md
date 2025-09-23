# bright

突出显示元素，置顶渲染，可与 [dim](/reference/UI/dim.md) 淡化元素属性结合使用，适用于产品拆解演示等场景。

另外图形编辑器配置 [bright](/plugin/in/editor/config/style.md#bright-boolean)、 [dimOthers](/plugin/in/editor/config/style.md#bright-boolean)，可突出显示选中元素，淡化其他内容。

::: tip 注意事项
需安装 [突出显示元素插件](/plugin/in/bright/index.md) 才能使用。
:::

## 关键属性

### bright: `boolean`

突出显示元素，会置顶渲染，不受 dim 影响，默认为 false。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 突出显示，置顶渲染元素

::: code-group
```ts
// #突出显示，置顶渲染元素 [leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true }, 260, 150)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    rect.bright = true // 突出显示，置顶渲染 // [!code hl]

}, 1000)
```
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
:::

### 突出显示并置顶渲染，淡化其他元素

::: code-group
```ts
// #突出显示并置顶渲染，淡化其他元素 [leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true }, 260, 150)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    rect.bright = true // 突出显示，置顶渲染 // [!code hl:4]

    leafer.dim = true // 淡化其他元素 
    // leafer.dim = 0.2 // 可指定淡化的透明度

}, 1000)
```
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
:::
