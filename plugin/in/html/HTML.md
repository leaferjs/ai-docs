<script setup>
import Case from '/component/Case.vue'
</script>

# HTML 元素

HTML 节点元素，支持挂载 dom / Vue / React 节点，方便使用 HTML 的表单、复杂组件。

::: tip 继承
HTML &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

## 关键属性

### id: `string`

HTML 节点的 id，挂载后可通过 document.getElementById() 方法查找到 [dom](#dom-htmldivelement)，也能通过 [findId()](../../../reference/UI/findOne.md) 方法查找到元素。

## 只读属性

### dom：`HTMLDivElement`

实际挂载的 dom 节点，覆盖在画布上，能跟随画布缩放。

## 继承元素

### HTML &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)

## 示例

### 挂载 HTML 节点

```ts
// #创建 HTML 节点 [标准创建 (App)]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { HTML } from '@leafer-in/html' // 导入 html 插件  // [!code hl] 
// import '@leafer-in/scale-fixed' // 导入固定缩放插件 (可选)

const app = new App({ view: window, editor: {}, userSelectHTML: true })

const html = new HTML({
    x: 100,
    y: 100,
    //opacity: 1, // 支持设置透明度
    //visible: 0, // 支持临时卸载隐藏dom
    //scaleFixed: true // 支持固定缩放比例，不随画布缩放，需导入 @leafer-in/scale-fixed 插件
})

app.tree.add(html)

const rect = document.createElement('div')
rect.style.width = '100px'
rect.style.height = '100px'
rect.style.backgroundColor = '#32cd79'
rect.style.textAlign = 'center'
rect.innerText = 'HTML Node'

html.dom.appendChild(rect)

// html.dom.addEventListener('wheel', (e) => {
//     e.stopPropagation() // 阻止在 HTML节点上滚动鼠标会缩放、平移画布
// })

// html.dom.addEventListener('contextmenu', (e) => {
//     e.stopPropagation() // 在 HTML节点上右键显示原生菜单
// })


```

### 更多示例正在补充...
