<script setup>
import Case from '/component/Case.vue'
</script>

# App

创建 App 应用（可选结构），了解初始化 [应用配置](/reference/config/app/base.md)、[视口交互](/guide/advanced/viewport.md)。

负责承载多个 [Leafer](/reference/display/Leafer.md) 引擎分层 协同工作，以提升性能，同时继承 Leafer 的部分功能和事件。

<br/>

![app](/svg/app.svg)

<br/>

::: tip 继承
App &nbsp;>&nbsp; [Leafer](./Leafer.md) &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)

<br/>

交互事件可以在多个子 Leafer 引擎间按层级穿透，看上去就像是一个交互整体。

注意: App 不接收子元素的数据变化事件，请在对应的子 Leafer 引擎上监听。

:::

## 关键属性

### isApp: `boolean`

是否为 App 实例， 默认为 true 。

### children: `Leafer`[]

子 Leafer 引擎列表。

## 统一结构

App 默认可以通过 [add()](/reference/display/App.md#add-leafer-leafer) 方法添加多个自定义引擎层。为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 引擎层进行拟物化命名，并支持通过配置快速添加。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 引擎，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (主要内容层)，位于中间的 Leafer 引擎，相当于 HTML 中的 body。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 引擎，一般用来渲染 [图形编辑器](/plugin/in/editor/index.md) 实例。

## 预留属性

### editor: [`IEditor`](/plugin/in/editor/index.md)

图形编辑器实例，需安装 [图形编辑器](/plugin/in/editor/index.md) 。

## 视口属性（viewport）

### zoomLayer：[`Group`](./Group.md)

缩放平移视图层， 默认使用 app.tree.zoomLayer 作为缩放平移层。

可以手动修改它的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scale](/reference/UI/layout.md#scale-number-ipointdata)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 属性进行缩放平移视图。

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

## 关键方法

### add ( leafer: [`Leafer`](./Leafer.md))

添加一个 Leafer 引擎。

### addLeafer ( config?:[`ILeaferConfig`](/api/interfaces/ILeaferConfig.md))

快速创建并添加一个 Leafer 引擎。

### addAt ( child: [`Leafer`](./Leafer.md), index: `number`)

添加一个 Leafer 引擎到在指定位置。

### addBefore ( child: [`Leafer`](./Leafer.md), before: [`Leafer`](./Leafer.md))

添加一个 Leafer 引擎 在指定的 leafer 前面。

### addAfter ( child: [`Leafer`](./Leafer.md), after: [`Leafer`](./Leafer.md))

添加一个 Leafer 引擎 在指定的 leafer 后面。

## 配置

### [应用配置](/reference/config/app/base.md)

## 视图

### [缩放平移视图](/guide/advanced/viewport.md)

## 示例

<case name="Editor" index=2 count=2 x=20></case>

我们以 [图形编辑器](/plugin/in/editor/index.md) 的例子来展示 App 的实际用法：

::: code-group

```ts
// #App结构 - 图形编辑器 [editor]
import { App, Frame, Rect } from 'leafer-ui'
import { Editor } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:6]
    view: window,
    fill: '#333', // 背景色
    tree: { type: 'design' }, // 添加 tree 层
    sky: {}  // 添加 sky 层
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

app.sky.add(app.editor = new Editor()) // 添加图形编辑器，用于选中元素进行编辑操作 // [!code hl]
```

```ts
// #App结构 - 图形编辑器 [简化]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:7]
    view: window,
    fill: '#333',
    editor: {},  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
    //  tree: { type: 'design' },
    //  sky: {}
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

// app.sky.add(app.editor = new Editor()) // 添加图形编辑器，用于选中元素进行编辑操作 // [!code hl]

```

```ts
// #App结构 - 图形编辑器 [实现原理]
import { App, Leafer, Frame, Rect } from 'leafer-ui'
import { Editor } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, fill: '#333' }) // [!code hl:4]

app.add(app.tree = new Leafer({ type: 'design' })) // 添加 tree 层
app.add(app.sky = new Leafer())  // 添加 sky 层

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

app.sky.add(app.editor = new Editor()) // 添加图形编辑器，用于选中元素进行编辑操作 // [!code hl]
```

:::

<!-- ## 继承元素

### [Leafer](./Leafer.md) -->

<!-- ## API

### [App](/api/classes/App.md) -->
