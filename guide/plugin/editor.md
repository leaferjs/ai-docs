<script setup>
import Case from '/component/Case.vue'
</script>

# 图形编辑器

图形编辑器是一个有意思的例子，它采用了 App 结构。可移动、缩放、旋转、倾斜，支持多选、框选、编组、锁定、层级，[可配置样式](../../plugin/in/editor/config/base.md)，支持自定义 [编辑工具](../../plugin/in/editor/EditTool.md)、 [内部编辑器](../../plugin/in/editor/InnerEditor.md)。

::: tip 注意事项
需安装 [图形编辑器插件](../../plugin/in/editor/index.md) 才能使用， 或直接安装 [leafer-editor](../install/editor/start.md)（已集成了图形编辑器相关插件）。
:::

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

```ts
// #App结构 - 图形编辑器 [editor]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:5]
    view: window,
    fill: '#333',
    editor: {},  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))
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

## 恭喜 🎉

你已完成 常用场景插件 的了解，接下来将学习几个重要的进阶知识。

## 下一步

### [创建 App](../advanced/app.md)

<br/>

### 在前端环境中使用

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
