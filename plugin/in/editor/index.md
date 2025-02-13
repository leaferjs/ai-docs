<script setup>
import Case from '/component/Case.vue'
</script>

# 图形编辑器

用于编辑操作图形，提供了丰富的功能和 [样式配置](/plugin/in/editor/config.md)， 可移动、缩放、旋转、倾斜，支持多选、框选、打组、 双击进组，锁定、层级。支持自定义 [编辑工具](/plugin/in/editor/EditTool.md)、 [内部编辑器](/plugin/in/editor/InnerEditor.md)。

<!-- <case name="EditorConfig"></case> -->

<case name="Editor" select=0></case>

## 适用平台

web 版、小程序版。暂时与有 [自动布局](/plugin/in/flow/) 的元素不能混用。

后面计划会增加精细化的属性编辑器，如编辑圆角、形状、路径等

## 安装插件

需要安装编辑器插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/editor)。

::: code-group

```sh [npm]
npm install @leafer-in/editor
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/editor
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/editor
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/editor
bun add @leafer-in/resize
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.editor 访问插件内部功能。
::: code-group

```html [editor.min]
<script src="https://unpkg.com/@leafer-in/editor@1.4.0/dist/editor.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.4.0/dist/resize.min.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

```html [editor]
<script src="https://unpkg.com/@leafer-in/editor@1.4.0/dist/editor.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.4.0/dist/resize.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 依赖插件

### [resize 插件](/plugin/in/resize/)

## 开始体验

<case name="Editor" index=2 count=2 x=20></case>

1. 点击选中元素， 支持多选、框选。

2. 将光标移动至控制点或边上，拖动可缩放元素。

3. 将光标移动至控制点外沿，出现方向光标，拖动可旋转元素。

按住`Ctrl` / `Command` 键，将光标移动至四条边上，拖动可倾斜元素。

::: danger 注意事项

编辑器必须在 [App](/reference/display/App.md) 中使用, 通过传入 editor 配置，可实现自动创建 [app.editor](/reference/display/App.md#editor-ieditor) 实例及 [app.tree](/reference/display/App.md#tree-leafer), [app.sky](/reference/display/App.md#sky-leafer) 分层结构，并自动将 editor 添加到 sky 层中。

:::

::: code-group

```ts
// #图形编辑器 [简洁创建]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ // [!code hl:4]
    view: window,
    editor: {}  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))
```

```ts
// #图形编辑器 [实现原理]
import { App, Rect } from 'leafer-ui'
import { Editor } from '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ view: window }) // [!code hl:7]

app.tree = app.addLeafer({ type: 'design' }) // 添加 tree 层
app.sky = app.addLeafer() // 添加 sky 层

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.sky.add(app.editor = new Editor())  // 添加图形编辑器，用于选中元素进行编辑操作 [!code hl:7]
```

:::

## 下一步

### [Editor 元素](./Editor.md)
