# dim

突出主体、淡化其他元素（半透明），适用于产品拆解演示等场景。

另外图形编辑器配置 [mask](/plugin/in/editor/config/style.md#mask-string-boolean) 半透明覆盖遮罩层可以达到类似的效果，性能更好，效果略差。

## 关键属性

### dim: `boolean` | `number`

淡化（半透明），通过叠加透明度来淡化元素，默认为 false。

设为 true 时会自动设置 0.2 的透明度，也可设置一个透明度数值。

### dimskip : `number`

跳过淡化，用于突出显示主体元素。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 突出主体、淡化其他元素

::: code-group
```ts
// #突出主体、淡化其他元素（半透明）[leafer]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#FEB027' }, 210, 100)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    leafer.dim = true // 进行淡化 // [!code hl:3]
    // leafer.dim = 0.2 // 指定透明度
    rect.dimskip = true // 跳过淡化，突出主体

}, 1000)
```
```ts
// #突出主体、淡化其他元素（半透明）[App]
import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件 //
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

const rect = Rect.one({ editable: true, fill: '#FEB027' }, 210, 100)

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

// 突出显示选中元素，淡化其他元素
app.editor.on(EditorEvent.SELECT, (e: EditorEvent) => {

    app.tree.dim = !!e.value // 选中元素后进行淡化 // [!code hl:3]

    if (e.value) e.editor.list.forEach(item => item.dimskip = true) //  跳过淡化，突出主体

    if (e.oldValue) e.oldList.forEach(item => {
        if (!e.editor.hasItem(item)) item.dimskip = false
    })

})
```
:::
